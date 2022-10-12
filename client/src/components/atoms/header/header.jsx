import React from "react";


const Header = ({ title, handleClick }) => {

    const OnClick = () => {
        handleClick();
    };

    //헤더 디자인하기 !!
    return (
        <div className="header-box">
            <button className="arrow-box" onClick={OnClick} >
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <div className="title">{title}</div>
        </div>
    )
};

export default Header;