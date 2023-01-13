import React from 'react';
import Header from '../../../components/atoms/headers/header/header';
import PasswdEditForm from '../../../components/molecules/passwdEditForm/passwd_edit_form';
import useMove from '../../../hooks/useMove';

const ChangePassword = () => {
  const { HandleMove } = useMove();

  const MoveBack = () => HandleMove('/setting');

  return (
    <div className="col-sm-4 change-passwd">
      <Header title="비밀번호 변경" handleClick={MoveBack} />

      <PasswdEditForm MoveBack={MoveBack} />
    </div>
  );
};

export default ChangePassword;
