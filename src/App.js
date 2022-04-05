import Header from './components/header/Header';
import Input from './components/input/Input';
import './App.css';
import CreateTodo from './components/create-todo/Create-todo';
import Todo from './components/todo/Todo';
import React from 'react';
import { logDOM } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        {
          id: 1,
          text: "сделать домашнее задание ",
          status: false
        },
        {
          id: 2,
          text: "купить сахар ",
          status: true
        },
        {
          id: 3,
          text: "купить соль ",
          status: false
        },

      ]
    }
    this.createTodo = this.createTodo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }
  createTodo(str) {
    this.setState({ todolist:[...this.state.todolist,{id:Math.random(),text:str, status:false}] })
    
  }


  changeStatus(id){
    const newArr = this.state.todolist.map((item)=>{
      if(item.id === id){
        const newObj = {...item,status:!item.status}
        return newObj
      }
      return item
    });
    console.log(newArr);
    this.setState({todolist:newArr})
  }

  render() {
    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header count={this.state.todolist.length} />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo} />
            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo
                 key = {todo.id}
                 text={todo.text}
                 id= {todo.id}
                 status={todo.status}
                 changeStatus={this.changeStatus}
                 />)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <div className='todo-wrapper'>
//         <Header count= {5} />
//         <div className='p-3'>
//           <CreateTodo />
//           <div className='mt-2 todo-list'>

//               {

//                 ["1","h1","hello"].map((todo)=>
//                 <Todo text = {todo} />


//                 )  
//               }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
