import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/atoms/header/header';
import OptionCheckbox from '../../components/atoms/optionCheckbox/option_checkbox';
import OptionUnderline from '../../components/atoms/optionUnderline/option_underline';
import TextUnderline from '../../components/atoms/textUnderline/text_underline';

const Option = () => {
  const navigate = useNavigate();

  const MoveBack = () => navigate('/');
//   뒤로가기 버튼 주소 다시 잡아주어야 함

  return (
    <div className="option col-sm-4">
        <Header title="스타벅스" handleClick={MoveBack} />

        <TextUnderline 
          text="녹차 라떼"
        />

        <OptionUnderline
          text="ICE / HOT"
        />

        <OptionCheckbox
          text="ICE"
        />

        <OptionCheckbox
          text="HOT"
        />

        <OptionUnderline
            text="에스프레소 샷 추가 (최대 1개)"
        />

        <OptionCheckbox
          text="1 샷 추가 (+500원)"
        />

        <OptionCheckbox
          text="2 샷 추가 (+1000원)"
        />
    
    </div>
  );
};

export default Option;
