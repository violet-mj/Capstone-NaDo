import React from 'react';

const PickingCard = ({ info, handleDesc, handleChat }) => {
  const { address, request_time, price, picker } = info;

  // 주문 상세 정보로 이동
  const GoDesc = () => {
    handleDesc();
  };

  // 채팅하기로 이동
  const GoChat = () => {
    // picker
    handleChat(picker);
  };

  return (
    <div className="card-container ordering-card">
      <div className="order-info" onClick={GoDesc}>
        <div className="info">
          <h3>{address}</h3>
          <p>
            마감 시간 : <span>~ {request_time}</span>
          </p>
          <p>
            주문 금액 : <span>{price} 원</span>
          </p>
        </div>

        <i className="fa-solid fa-chevron-right" />
      </div>

      <button type="button" onClick={GoChat}>
        피커와 채팅하기
      </button>
    </div>
  );
};
export default PickingCard;