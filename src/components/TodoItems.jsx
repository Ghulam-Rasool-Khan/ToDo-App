
import not_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'

function TodoItems({text, deleteTask, id, toggle, taskComplete}) {
  return (
      <div className="flex items-center gap-3 my-2 shadow-xl bg-white rounded-2xl p-3">
        <div className="flex gap-4 flex-1 cursor-pointer items-center pr-5 " onClick={() => toggle(id)}>
          <img src={taskComplete ? tick : not_tick} alt="" className={`w-7 hover:scale-125 duration-500`} />
          <p className={`${taskComplete ? 'line-through decoration-red-500' : ''}`}>{text }</p>
        </div>
        <img src={delete_icon} alt="" className="w-4 cursor-pointer hover:scale-125 duration-500" onClick={() => deleteTask(id)}/>
      </div>
  );
}
export default TodoItems;
