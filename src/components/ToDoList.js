import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const handleAdd = () => {
    if (inputVal?.trim() !== "") {
      setTodos([...todos, inputVal]);
      setInputVal("");
    }
  };

  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo?.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-2">To do List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => handleInput(e)}
            placeholder="Add To Do's"
            className="border border-gray-300 rounded-md py-2 px-4 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleAdd()}
          >
            Add +
          </button>
        </div>
        <ul>
          {todos?.map((item, index) => (
            <li key={index} className="flex justify-center gap-12 mb-2 w-1/2">
              {item}
              <button
                className="text-red-500 font-semibold hover:text-red-600"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
