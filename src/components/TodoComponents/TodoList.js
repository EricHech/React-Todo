import React from "react";

import { Todo } from "./Todo";

export const TodoList = props => {
  return (
    <div>
      {props.todos.map(each => {
        return <Todo key={each.id} task={each.task} />;
      })}
    </div>
  );
};
