import React from 'react';
import Active from './Active';
import classes from './Calendar.module.css';

const Calendar = ({todoLists, deleteHandler,editHandler}) => {
    const compareTime = (a,b)=>{
        let aTime = Date.parse("2014-02-30T"+ a.time + ":00");
        let bTime = Date.parse("2014-02-30T"+ b.time + ":00");
        return aTime-bTime;

    };

    const weekConstant = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    

    return (
        <div className={classes.calendar}>
            <table>
                <thead>
                    <tr>
                        { weekConstant.map(item=><th>{item}</th>) }
                    </tr>   
                </thead>
                <tbody>
                    {
                        weekConstant.map(item => {
                            let tempLists = (todoLists.filter(todo=>todo.date.toLowerCase() === item.toLowerCase())).sort(compareTime);
                            return (
                                <td>
                                    <ul>
                                        <Active dayTodos={tempLists} deleteHandler={deleteHandler} editHandler={editHandler}/>      
                                    </ul>   
                                </td>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>   
    )
}
export default Calendar;