import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Learn HTML", checked: true },
    { id: 2, title: "Learn CSS", checked: true },
    { id: 3, title: "Learn JS", checked: true },
    { id: 4, title: "Learn React", checked: false },
  ]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Todo List</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <input type="checkbox" checked={item.checked} />
              <label>
                {item.title}
              </label>
            </div>
            <button className="text-green-500 hover:text-red-700">
              <FaTrashAlt role="button" tabIndex={0}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
