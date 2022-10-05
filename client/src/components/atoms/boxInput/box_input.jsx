import React from "react";

const Boxinput = ({ desc }) => {
  return (
    <div className="box-input">
      <label for={desc}>{desc}</label>
      <input type="text" name={desc} placeholder={`${desc}을 입력하세요.`} />
    </div>
  );
};

export default Boxinput;
