import React from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';



function TodoList(props) {
    const items=props.items;
    const todoList=items.map(items=>
        {
        return <div className="list" key={items.key}>
            <p style={{color:"white"}}>
            <input type="text" id={items.key} value={items.text} onChange={(e)=>{
             props.setUpdate(e.target.value,items.key)}}/>
                <span><FontAwesomeIcon className="ricons" 
                
                onClick={()=>{props.deleteItem(items.key)}}icon='dumpster'/>
                </span>
                </p>
           
        </div>
    })
    return (
    <div>
     <FlipMove duration={300} easing="ease-in-out">
    {todoList}
    </FlipMove>   
    </div>
    )
}

export default TodoList;