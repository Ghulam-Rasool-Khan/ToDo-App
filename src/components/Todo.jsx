
import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

function Todo() {

  const inputRef = useRef()
  const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])

  function add() {
    const inputText = inputRef.current.value.trim()
    if (inputText === '') {
      alert('Please enter a task...')
      return null
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      taskComplete: false
    }
    setTodoList([...todoList, newTodo])
    inputRef.current.value = ''
  }

  function deleteTask(id) {
    setTodoList((prev) => (
      prev.filter((todo) => {
        return todo.id !== id;
      })
    )) 
  }

  function toggle(id) {
    setTodoList((prev) => (
      prev.map((todo) => {
        if (todo.id === id) {
          return {...todo, taskComplete: !todo.taskComplete}
        }
        return todo
      })
    ))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="bg-white w-[89%] max-w-[450px] min-h-[550px] rounded-xl p-7">
      <div className="flex gap-2 my-7 items-center">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">
          To-Do List
        </h1>
      </div>

      {/* --------- input box ------------ */}
      <div className="h-15 rounded-full flex items-center gap-2 bg-gray-200 ">
        <input
          type="text"
          placeholder="Add your task"
          className="h-full flex-1 rounded-full pl-5 pr-2 outline-none bg-transparent capitalize"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              add()
            }
          }}
        />
        <button
          className="h-full w-32 rounded-full text-lg font-semibold bg-orange-600 text-white cursor-pointer hover:bg-orange-700 duration-300"
          onClick={add}
        >
          ADD +
        </button>
      </div>

      {/* --------- todo list ------------ */}
      <div className=" mt-7">
        {
          todoList.map((item, index) => (
            <TodoItems text={item.text} key={index} deleteTask={deleteTask} id={item.id} toggle={toggle } taskComplete={item.taskComplete} />
          ))
        }
      </div>
    </div>
  );
}
export default Todo;
