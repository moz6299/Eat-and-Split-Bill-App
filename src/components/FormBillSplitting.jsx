import React, { useState } from "react";
import Button from "./Button";
import "./FormBillSplitting.css";

const FormBillSplitting = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByMe, setPaidByMe] = useState("");
  const paidByFriend = bill - paidByMe;
  const [whoIsPaying, setWhoIsPaying] = useState("me");

  const handleSubmitBill = (e) => {
    e.preventDefault();
    if (!bill || !paidByMe) return;
    onSplitBill(whoIsPaying === "me" ? paidByFriend : -paidByMe);
  };

  return (
    <div className="form-bill-splitting">
      {selectedFriend && (
        <form className="form-bill-friend" onSubmit={handleSubmitBill}>
          <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
          <div className="input4">
            <label htmlFor="bill-input">💰 Bill value</label>
            <input
              type="text"
              id="bill-input"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
          <div className="input5">
            <label htmlFor="expense-input">🧍‍♀️ Your expense</label>
            <input
              type="text"
              id="expense-input"
              value={paidByMe}
              onChange={(e) =>
                setPaidByMe(
                  Number(e.target.value) > bill
                    ? paidByMe
                    : Number(e.target.value)
                )
              }
            />
          </div>
          <div className="input6">
            <label htmlFor="X-input">👫 {selectedFriend.name}'s expense</label>
            <input type="text" id="X-input" disabled value={paidByFriend} />
          </div>
          <div className="input7">
            <label>🤑 Who is paying the bill</label>
            <select
              name="paying"
              value={whoIsPaying}
              onChange={(e) => setWhoIsPaying(e.target.value)}
            >
              <option value="me">You</option>
              <option value="friend">{selectedFriend.name}</option>
            </select>
          </div>

          <Button>Split Bill</Button>
        </form>
      )}
    </div>
  );
};

export default FormBillSplitting;
