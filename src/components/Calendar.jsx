import React from 'react';
import Active from './Active';
import classes from './Calendar.module.css';

const Calendar = ({todoLists, deleteHandler,editHandler}) => {
    const compareTime = (a,b)=>{
        let aTimeparts = a.time.split(':');
        let bTimeparts = b.time.split(':');
        if(parseInt(aTimeparts[0]) < parseInt(bTimeparts[0])) {
            return -1;
        } else if(parseInt(aTimeparts[0]) > parseInt(bTimeparts[0])){
            return 1;
        } else if(parseInt(aTimeparts[1]) < parseInt(bTimeparts[1])) {
            return -1;
        } else if(parseInt(aTimeparts[1]) < parseInt(bTimeparts[1])){
            return 1;
        } 
        return 0;
    };

   
    const sortSundayLists = (todoLists.filter(todo=>todo.date.toLowerCase() === 'sunday')).sort(compareTime);
    const sortMondayLists =(todoLists.filter(todo=>todo.date.toLowerCase() === 'monday')).sort(compareTime);
    const sortTuesdayLists = (todoLists.filter(todo=>todo.date.toLowerCase() === 'tuesday')).sort(compareTime);
    const sortWednesdayLists = (todoLists.filter(todo=>todo.date.toLowerCase() === 'wednesday')).sort(compareTime);
    const sortThursdayLists =(todoLists.filter(todo=>todo.date.toLowerCase() === 'thursday')).sort(compareTime);
    const sortFridayLists =(todoLists.filter(todo=>todo.date.toLowerCase() === 'friday')).sort(compareTime);
    const sortSaturdayLists =(todoLists.filter(todo=>todo.date.toLowerCase() === 'saturday')).sort(compareTime);

    return (
        <div className={classes.calendar}>
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>   
                </thead>
                <tbody>
                    <td>
                        <ul>
                            <Active dayTodos={sortSundayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>      
                        </ul>   
                    </td>
                    <td>
                        <ul>
                            <Active dayTodos={sortMondayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>      
                        </ul>   
                    </td>
                    <td>
                        <ul>
                             <Active dayTodos={sortTuesdayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>  
                        </ul>   
                    </td>
                    <td>
                        <ul>
                            <Active dayTodos={sortWednesdayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>  
                        </ul>   
                    </td>
                    <td>
                        <ul>
                            <Active dayTodos={sortThursdayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>  
                        </ul>   
                    </td>
                    <td>
                        <ul>
                            <Active dayTodos={sortFridayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>  
                        </ul>   
                    </td>
                    <td>
                        <ul>
                            <Active dayTodos={sortSaturdayLists} deleteHandler={deleteHandler} editHandler={editHandler}/>  
                        </ul>   
                    </td>
                </tbody>
            </table>
        </div>   
    )
}
export default Calendar;