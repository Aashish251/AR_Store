import Expenses from "./components/Expenses/Expenses";

import NewExpense from './components/NewExpense/NewExpense';

import React from "react";

const App =()=> {
let expenses = [
    {
        id: 'e1',
        title : 'College Fee',
        amount : 16680,
        date :new Date(2022,2,31)

    },
    {
        id: 'e2',
        title : 'Book ',
        amount : 680,
        date :new Date(2022,0,13)

    },
    {
        id: 'e3',
        title : 'food',
        amount : 1380,
        date :new Date(2022,1,21)

    },
    {
        id: 'e4',
        title : 'House Rent',
        amount : 3280,
        date :new Date(2022,1,11)

    },
]; 

    return (
        <div>
            <NewExpense />
            <Expenses item={expenses}/>
        </div> 
       
    ); 
    
     // component ko Humesh Capite likhna becouse diff bitween HTML tag and React
    //  retunr hamesa ek tag ho skat h therefor we use <div> tag to rapp this things 

}
export default App;