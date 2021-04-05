import './todo__item.css'







function TodoItem({id, text, handleDeleteTask, handleCompleteTask, isCompleted}) {


    return (
        <div className="item">
            <div className="item__container">
                <button onClick={() => handleCompleteTask(id, isCompleted)} className="item__add">+</button>
                <div className={isCompleted ? "item__text text__complete" : "item__text"} >{text}</div>
                <button onClick={() => handleDeleteTask(id)} className="item__delete item__add">-</button>
            </div>
        </div>
    );
}

export default TodoItem;