import classes from './Active.module.css';
import {FaRegTrashAlt} from 'react-icons/fa';

const Active = ({dayTodos, deleteHandler, editHandler}) => {

    const onDeleteHandler = (event, id) => {
        event.stopPropagation();

        deleteHandler(id);
    };

    const onEditHandler = (id) => {
        editHandler(id);
    };

    return (
        <div className={classes.todoCon}>
            {dayTodos.map(item=><li>
                <div className={classes.todo} onClick={()=>onEditHandler(item.id)}>
                    <button onClick={(event)=>onDeleteHandler(event,item.id)}><FaRegTrashAlt /></button>
                    <div className={classes.showContent}>
                        <div>{item.time}</div>
                        <div>{item.action}</div>
                    </div>    
                </div>
            </li>)}
        </div> 
    )
}

export default Active;