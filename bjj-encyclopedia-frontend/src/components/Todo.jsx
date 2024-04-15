import React, { Fragment, useEffect, useState } from "react";

export function Todo() {
  const [todoItems, setTodoItems] = useState(null);
  useEffect(() => {
    //do something load
    console.log("Hey, ive loaded up");
    if (!todoItems) {
      fetch("http://localhost:8081/tasks")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  //ternary operator
  // if (something)
  //    od item 1
  // else
  //    do item 2
  //
  //condition ? do item1 : do item2
  return (
    <div>
      {todoItems
        ? todoItems.map((todoItem) => {
            return (
              <Fragment key={todoItem.id}>
                <input type="checkbox" checked={todoItem.status} />
                <span>{todoItem.title}</span>
              </Fragment>
            );
          })
        : "loading data..."}
    </div>
  );
}

export default Todo;