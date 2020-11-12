import React from 'react';
import TodoList from './TodoList';
import './Todo.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

library.add(faDumpster);



class Todo extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          key:'',
          date: new Date()
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
      
    }
    //function to add item to the todo list
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now(),
          date: Date.now()
        }
      })
    }
  //function to delete item from the todo list by clicking on the bin icon
    deleteItem(key){
      const filteredItems=this.state.items.filter(item=>item.key!==key);
      this.setState({
        items:filteredItems
      })
  
    }
    //function to update the already added todo list
    setUpdate(text,key){
      console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          console.log(item.key +"    "+key)
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
      
     
    }
    
   render(){
    return (
      
      <div className="Todo">
        
       <h2 style={{color:"black"}} className="sanket">TO-DO APP</h2>
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit"><b>ADD</b></button>
          </form>
           <p>{this.state.items.text}</p>
        <TodoList items={this.state.items}deleteItem={this.deleteItem} setUpdate={this.setUpdate}></TodoList>
        </header>
      </div>
    );
   }
  }
  
  
  export default Todo;





