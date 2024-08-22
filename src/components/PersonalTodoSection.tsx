import React from "react";
import PersonalTodo from "./PersonalTodo";

const PersonalTodoSection = () => {
  const personalTodos = [
    {
      id: 1,
      title: "Complete Homework",
      description: "Finish math homework and submit before the deadline.",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      description: "Buy vegetables, fruits, and dairy products.",
    },
    {
      id: 3,
      title: "Workout",
      description:
        "Go for a 30-minute run and complete the strength training routine.",
    },
  ];
  return (
    <>
    <div className="flex flex-wrap gap-4 p-4">
      {personalTodos.map((todo) => (
        <PersonalTodo key={todo.id} todo={todo} />
      ))}
    </div>
    </>
  );
};

export default PersonalTodoSection;
