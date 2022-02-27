import './ExpensiveItem.css';
import React , {useState} from 'react';
import ExepensesDate from './ExpenseDate';
import Card from '../UI/Card';

const  ExpensiveItem = (props) => {

//     const [newTitle , setNewTitle] = useState("please put the value");
//     const [title , setTitle] = useState(props.title);
   
//     const clickHandler = () => {
//          setTitle(newTitle);
//     }

//     const changeHandler = (event) => {
//         setNewTitle(event.target.value);
//    } 



return (
     <Card className="expense-item">
         <ExepensesDate  date={props.date}/>
         < div className="expense-item__description">
             <h2>{props.title }</h2>
            <div className="expense-item__price"> $ {props.amount}</div>
         </div>
           {/* <input type="text" value = {newTitle} onChange={changeHandler}/>
         <button  onClick={clickHandler} >change title</button>           */}
    </Card>
);
 
}
 export default ExpensiveItem;