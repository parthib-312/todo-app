import Input from "./components/Input";
import Box from "./components/Box";
import { useState } from "react";
function App() {
  const [todos,setTodo] = useState([]);

  const removeTodo = (id) =>{
    console.log(id);
const newTodos = todos.filter(
  (d,index)=>{
if(index !== id){
  return true;
}else{
  return false;
}
  }
)
setTodo(newTodos);
  }
  const addTodoHandler = (item) => {
setTodo(
  [
    ...todos,
    {
      item,
      time: new Date().toLocaleTimeString()
    }
  ]
)
  }
  
  return (
    <div className="bg-black h-screen p-3">
<div className="mx-auto rounded max-w-[750px] min-h-[550px] shadow-2xl bg-white">
  <Input handler={addTodoHandler} />
  <Box data={todos} removeHandler={removeTodo} />
</div>
      </div>
  );
}

export default App;
