import React,{useState}from 'react';
import {v4 as uuidv4} from 'uuid';

import Calendar from './components/Calendar';
import classes from './App.module.css';
// import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: '',
    date: '',
    time: '',
    action: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const DATES = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

  const inputHandler = (e) => {
    setIsInputValid(true);
    setInputValue({...inputValue, [e.target.name]:e.target.value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(inputValue.date ===''|| !DATES.includes(inputValue.date.toLowerCase())||inputValue.time === '' || inputValue.action === '') {
      setIsInputValid(false);
      return;
    }

    if(!isEdit && isInputValid) {
      let newId = uuidv4();
      let newInput = {...inputValue, id: newId};
    
      setInputValue(newInput);
      let newTodos = [...todos, newInput];
      
      setTodos(newTodos);
    } else if(isEdit && isInputValid) {
      let editIndex = todos.findIndex(item=>item.id === inputValue.id);
      let frontLists = todos.slice(0,editIndex);
      let endLists = todos.slice(editIndex+1);
      let newFrontTodos = [...frontLists, inputValue];
      let newTodos = [...newFrontTodos, ...endLists];
      setTodos(newTodos);

      setIsEdit(false);
    } 
    
    setInputValue({
      id: '',
      date: '',
      time: '',
      action: '',
    });
  };

  const deleteHandler = (deleteId) => {
    const newLists = todos.filter(item=>item.id!==deleteId);
    setTodos(newLists);
  };

  const editHandler = (editId) => {

    setIsEdit(true);

    const filteredTodo = (todos.filter(item=>item.id === editId))[0];
    setInputValue(filteredTodo);
  }

  return (
    <div className={classes.container}>
      <div className={classes.calendarContainer}>
        <Calendar 
          todoLists={todos} 
          deleteHandler={deleteHandler} 
          editHandler={editHandler}
        />
      </div>
      <div className={classes.formCon}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputStyle}>
            <label>Date</label>
            <input type='text' name='date' value={inputValue.date} onChange={inputHandler}/>
          </div>
          <div className={classes.inputStyle}>
            <label>Time</label>
            <input type='time' name='time' value={inputValue.time} onChange={inputHandler}/>
          </div>
          <div className={classes.inputStyle}>
            <label>Action</label>
            <input type='text' name='action' value={inputValue.action} onChange={inputHandler}/>
          </div>
          <button type='submit'>{isEdit? 'Update':'Add'}</button>
          {!isInputValid && <p>please input valid value!</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
