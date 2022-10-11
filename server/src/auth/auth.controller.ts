import { Body, Controller, Post, UseGuards, HttpCode, Get, Request, Response} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcryptjs';
import * as express from 'express'
import { ReqWithUser } from './type/request.type';

import User from 'src/entity/user.entity';

import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CookieAuthenticationGuard } from './guard/cookieAuthentication.guard';
import { LoginWithCredentialsGuard, NaverLoginWithCredentialsGuard } from './guard/loginWithCredentials.guard';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('local/register')
  @HttpCode(201)
  async registerUser(
    @Body() user: Partial<User>
  ) {
      const isRegistered = await this.authService.isAlreadyRegistered(user.identifier)
      if(isRegistered) {
        return 'fail'
      }
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(user.password, salt)

      this.userService.insert({
        identifier: user.identifier,
        password: hashedPassword,
        nickname: user.nickname,
        email: user.email,
        provider: 'local'
      })
      return 'success'
    }

    @HttpCode(200)
    @UseGuards(LoginWithCredentialsGuard)
    @Post('local/login')
    async login(@Request() req) {
      return req.user;
    }

    @HttpCode(200)
    @UseGuards(CookieAuthenticationGuard)
    @Post('local/logout')
    async logout(
      @Request() req,
      @Response() res
      ) {
      req.logout(() => {
        res.send("success")
      })
    }

    @UseGuards(CookieAuthenticationGuard)
    @Get('local')
    loginPersist(
      @Request() req: ReqWithUser
    ) {
      return req.user
    }

    @UseGuards(AuthGuard('naver'))
    @Get('social/login')
    naverLogin() {}

    @UseGuards(NaverLoginWithCredentialsGuard)
    @Get('naver/login/callback')
    async naverLoginCallback(
      @Request() req: ReqWithUser,
      @Response() res: express.Response,
    ) {
      const {email} = req.user
      const user = await this.userService.findByEmail(email)

      if(user) {
        res.redirect("http://localhost:3002/test")
      }

      res.redirect("http://localhost:3002/")
    }
  }