import React from "react";
import { FaList } from "react-icons/fa";
import "../styles/todo.scss";

const Todo = () => {
  return (
    <div>
      <button className="button">
        <FaList/>  My-List
      </button>
    </div>
  );
};

export default Todo;
