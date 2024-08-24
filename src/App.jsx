import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormBillSplitting from "./components/FormBillSplitting";
import Button from "./components/Button";
import "./App.css";
import initialFriends from "../data";

const App = () => {
  const [openFormAdd, setOpenFormAdd] = useState(false);
  const [personName, setPersonName] = useState("");
  const [personImage, setPersonImage] = useState("https://i.pravatar.cc/48");
  const [newData, setNewData] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!personName || !personImage) return;
    const uuid = crypto.randomUUID();
    const newFriend = {
      id: uuid,
      name: personName,
      image: `${personImage}?u=${uuid}`,
      balance: 0,
    };
    setNewData((prev) => [...prev, newFriend]);
    setPersonName("");
    setPersonImage("https://i.pravatar.cc/48");
    setOpenFormAdd(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setOpenFormAdd(false);
  };

  const handleSplitBill = (value) => {
    setNewData(
      newData.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
    setSelectedFriend(null)
  };

  return (
    <div className="app">
      <div className="top-left">
        <FriendsList
          newData={newData}
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        <Button onClick={() => setOpenFormAdd((prev) => !prev)}>
          {openFormAdd ? "Close" : "Add Friend"}
        </Button>
        {openFormAdd && (
          <FormAddFriend
            setPersonName={setPersonName}
            setPersonImage={setPersonImage}
            personName={personName}
            personImage={personImage}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

      <div className="top-right">
        <FormBillSplitting
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      </div>
    </div>
  );
};

export default App;
