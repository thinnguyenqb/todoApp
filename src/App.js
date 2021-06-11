import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from '@atlaskit/button';
import { useState } from "react";
import {v4} from "uuid";
import React, { useCallback } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); //array
  const [textInput, setTextInput] = useState(""); //array
  
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },[]);
    

  const onAddBtnClick = useCallback((e) => {
    //them text input vao danh sach todoList
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false},
      ...todoList, 
    ]);
    setTextInput("");
    }, 
  [textInput, todoList]
  );

  return (
    <div>
       <h3>Danh sách cần làm</h3>
      <Textfield 
        name='add-todo' 
        placeholder="Thêm việc cần làm ... "
        elemAfterInput={
          <Button 
            isDisabled={!textInput} 
            appearance="primary" 
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px"}}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList}/>
    </div>
  );
}
export default App;
