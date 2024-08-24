import React from "react";
import Button from "./Button";
import "./FormAddFriend.css";

const FormAddFriend = ({
  setPersonName,
  setPersonImage,
  personName,
  personImage,
  handleSubmit
}) => {
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <div className="input1">
        <label htmlFor="name-input">👨Friend Name</label>
        <input
          type="text"
          id="name-input"
          value={personName}
          onChange={(e) => setPersonName( e.target.value)}
        />
      </div>
      <div className="input2">
        <label htmlFor="img-input">🚵‍♂️Image URL</label>
        <input
          type="text"
          id="img-input"
          value={personImage}
          onChange={(e) => setPersonImage(e.target.value)}
        />
      </div>

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
