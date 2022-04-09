import Header from './components/header/Header';
import './App.css';
import CreateTodo from './components/create-todo/Create-todo';
import Todo from './components/todo/Todo';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      isLoading:true
    }
    this.createTodo = this.createTodo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEdit = this.onEdit.bind(this)
  }




  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('todo')) || []
    this.setState({todolist:data})

    setTimeout(()=>{
      this.setState({isLoading:false})
    },2500)
  }


  componentDidUpdate(){
    localStorage.setItem("todo",JSON.stringify(this.state.todolist))
  }

  componentWillUnmount(){

  }






  createTodo(str) {
    this.setState({ todolist:[...this.state.todolist,{id:Math.random(),text:str, status:false}] })
    
  }
  
  onDelete(id){
    const newArray = this.state.todolist.filter((todo)=> todo.id !== id)
    this.setState({todolist:newArray})
  }


  changeStatus(id){
    const newArr = this.state.todolist.map((item)=>{
      if(item.id === id){
        const newObj = {...item,status:!item.status}
        return newObj
      }
      return item
    });
    this.setState({todolist:newArr})
  }
 
  onEdit(id,newText){
    const arr = this.state.todolist.map((item)=>{
      if(item.id === id){
        const obj = {...item,text:newText}
        return obj
      }
      return item
    })
    this.setState({todolist:arr})
  }

 
  

  render() {
    if(this.state.isLoading){
      return <div className='loader'>
       <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='#'/>
      </div>
    }
    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header count={this.state.todolist.length}
        
          />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo} />
            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo
                 key = {todo.id}
                 text={todo.text}
                 onEdit={this.onEdit}
                 id= {todo.id}
                 status={todo.status}
                 onDelete = {this.onDelete}
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

export default App;
