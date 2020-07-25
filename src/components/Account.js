import React from "react";
import iphonex from "../images/iphone_x_bg.png";
import black from "../images/black-logo.png";

const Account = ({ data }) => {
  return (
    <>
      <div className="box">
        <img className="iphone" src={iphonex} alt="iphone x" />
        <div className="iphoneScreen">
          <div className="countName">
            <h2>{data.name}</h2>
            <span>{data.balance} €</span>
          </div>
          <ul>
            {data.operations.map((operation, index) => {
              return (
                <li>
                  <div className="date">{operation.date}</div>
                  <div className="descriptionAmount">
                    <span>{operation.description}</span>
                    <span className="amount">{operation.amount}€</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <img src={black} className="blackLogo" alt="black logo" />
        </div>
      </div>
    </>
  );
};

export default Account;
