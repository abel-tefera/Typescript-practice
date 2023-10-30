import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  const onClick = () => {
    console.log("CLICKED");
  };
  return <ChildAsFC name={"Abel"} onClick={onClick}></ChildAsFC>;
};

export default Parent;
