import React from "react";

import { Todo } from "./Todo";

export const TodoList = props => {
  return (
    <div>
      {props.todos.map(each => {
        return <Todo id={each.id} task={each.task} />;
      })}
    </div>
  );
};
