import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Authorize = () => {
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== "1234") {
      return false;
    }
    return true;
  };
  return (
    <div className="wrapper flex py-20 flex-col justify-center">
      <div className="m-auto p-20 border rounded-lg">
        <Input
          label="Enter your password"
          name="password"
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Login </button>
      </div>
    </div>
  );
};

export default Authorize;
