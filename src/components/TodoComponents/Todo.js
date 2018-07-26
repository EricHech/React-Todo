import React from "react";

export const Todo = ({ id, task }) => {
  return <div key={id}>{task}</div>;
};
