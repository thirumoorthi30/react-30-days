import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Layout from "../Layout/Layout";

const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Learn HTML", checked: true, isEditing: false, plannedFor: "Today" },
    { id: 2, title: "Learn CSS", checked: false, isEditing: false, plannedFor: "Today" },
    { id: 3, title: "Learn JS", checked: false, isEditing: false, plannedFor: "Tomorrow" },
    { id: 4, title: "Learn React", checked: false, isEditing: false, plannedFor: "Next Week" },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [plannedFor, setPlannedFor] = useState("Today");
  const [showPopup, setShowPopup] = useState(false);

  const handleChecked = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditClick = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, isEditing: true } : item)));
  };

  const handleInEdit = (e, id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, title: e.target.value } : item)));
  };

  const handleEditSave = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, isEditing: false } : item)));
  };

  const handleAddSave = () => {
    if (!newTodo.trim()) return;
    setItems([
      ...items,
      {
        id: items.length + 1,
        title: newTodo,
        checked: false,
        isEditing: false,
        plannedFor,
      },
    ]);
    setNewTodo("");
    setPlannedFor("Today");
    setShowPopup(false);
  };

  const inProgress = items.filter((item) => !item.checked && item.plannedFor === "Today");
  const future = items.filter((item) => !item.checked && item.plannedFor !== "Today");
  const completed = items.filter((item) => item.checked);

  const renderList = (list, title) => (
    <div className="flex-1 bg-white rounded-lg shadow-md p-4 mx-2 min-h-[60vh]">
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      {list.length === 0 ? (
        <p className="text-gray-400 italic text-center">No todos here</p>
      ) : (
        list.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-3 mb-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded"
              />
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleInEdit(e, item.id)}
                  onKeyDown={(e) => e.key === "Enter" && handleEditSave(item.id)}
                  className="border-b border-gray-300 focus:outline-none text-gray-800 text-lg"
                  autoFocus
                />
              ) : (
                <span
                  className={`text-gray-800 text-lg ${
                    item.checked ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.title}
                </span>
              )}
            </div>
            <div className="flex gap-4 text-lg">
              {item.isEditing ? (
                <button
                  className="text-green-600 font-semibold hover:text-green-700"
                  onClick={() => handleEditSave(item.id)}
                >
                  Save
                </button>
              ) : (
                !item.checked && (
                  <FaEdit
                    className="text-green-500 hover:text-green-700 cursor-pointer"
                    onClick={() => handleEditClick(item.id)}
                  />
                )
              )}
              <FaTrashAlt
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-[84.50vh] flex flex-col items-center p-10 bg-gradient-to-r from-blue-100 via-green-100 to-blue-50 w-full">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Todo List</h2>

        <div className="flex justify-around w-full">
          {renderList(inProgress, "In Progress")}
          {renderList(future, "Future")}
          {renderList(completed, "Completed")}
        </div>

        <button
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 text-white text-3xl font-bold shadow-lg hover:bg-green-700 transition"
          onClick={() => setShowPopup(true)}
        >
          +
        </button>

        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
              <h3 className="text-xl font-semibold mb-4">Add New Todo</h3>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddSave()}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                placeholder="Enter todo..."
                autoFocus
              />
              <select
                value={plannedFor}
                onChange={(e) => setPlannedFor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Next Week">Next Week</option>
              </select>
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700"
                  onClick={handleAddSave}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TodoList;
