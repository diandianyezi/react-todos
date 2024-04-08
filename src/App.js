import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { useState } from 'react';


export default function App () {
  const [todoList, setTodoList] = useState([
      { id: 1, name: '吃饭', done: false},
      { id: 2, name: '睡觉', done: false},
    ])

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header></Header>
          <List todoList={todoList}></List>
          <Footer></Footer>
        </div> 
      </div>
    )
}


