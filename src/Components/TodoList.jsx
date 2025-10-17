import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Layout from "./Layout";

const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Learn HTML", checked: true },
    { id: 2, title: "Learn CSS", checked: true },
    { id: 3, title: "Learn JS", checked: true },
    { id: 4, title: "Learn React", checked: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChecked = (id) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newList);
  };

  const handleEditClick = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setIsEditing(true);
    setCurrentId(id);
    setNewTodo(itemToEdit.title);
  };

  const handleDelete = (id) => {
    const newRemItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => ({ ...item, id: index + 1 }));
    setItems(newRemItems);
  };

  const handleAddSave = () => {
    if (newTodo.trim() === "") return;

    if (isEditing) {
      const updatedItems = items.map((item) =>
        item.id === currentId ? { ...item, title: newTodo } : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, title: newTodo, checked: false },
      ]);
    }
    setNewTodo("");
  };

  return (
    <Layout>
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-green-100 to-blue-50 p-6">
      <div className="p-6 w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 transition-transform transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Todo List
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newTodo}
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            onClick={handleAddSave}
            className={`px-5 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleChecked(item.id)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  className={`text-gray-800 text-lg ${
                    item.checked ? " text-gray-800" : ""
                  }`}
                >
                  {item.title}
                </label>
              </div>
              <div className="flex gap-4 text-lg">
                <FaEdit
                  className="text-green-500 hover:text-green-700 cursor-pointer transition-transform hover:scale-110"
                  onClick={() => handleEditClick(item.id)}
                />
                <FaTrashAlt
                  className="text-red-500 hover:text-red-700 cursor-pointer transition-transform hover:scale-110"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
    </Layout>
  );
};

export default TodoList;
