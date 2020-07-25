import React from "react";
import Account from "./Account";
import data from "../data.json";

const Accounts = () => {
  return (
    <>
      <div className="board">
        {data.map((item, index) => {
          return (
            <>
              <Account data={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accounts;
