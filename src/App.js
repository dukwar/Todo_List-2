import './App.css';
import Header from "./Components/header/header";
import TodoItem from "./Components/todo__item/todo__item";
import Input from "./Components/input/input";
import Footer from "./Components/footer/footer";
import {useState} from "react";

const Items = [
    {
        id: 1,
        text: 'Learn React',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false
    },

    {
        id: 3,
        text: 'Learn Javascript',
        isCompleted: false
    },

]

function App() {

    let [textInput, setText] = useState({
        id: Date.now(),
        text: '',
        isCompleted: false
    })
    let [stateTasks, setTask] = useState(Items)

    let [activeFilter, setActiveFilter] = useState('all')


    let handleChange = ({target: {value}}) => {
        setText({
            id: Date.now(),
            text: value,
        })
    }

    let handleInput = ({key}) => {
        if (key === 'Enter') {
            const {text, id, isCompleted} = textInput
            const items = stateTasks
            const Task = [...items, {text, id, isCompleted}]
            setTask(Task)
            setText({
                id: '',
                text: '',
            })
        }
    }

    let handleDeleteTask = (id) => {
        const items = stateTasks
        setTask(
            items.filter(task => task.id !== id)
        )
    }

    let handleCompleteTask = (id, isCompleted) => {
        const tasks = [...stateTasks.map(task => {
            if (task.id === id) {
                task.isCompleted = !isCompleted
            }
            return task
        })]
        setTask(tasks)
    }

    let handleFilterTask = (id) => {
        setActiveFilter(id)
    }

    const filterTasks = () => {
        const filter = activeFilter
        switch (filter) {
            case 'all':
              return stateTasks

            case 'active':
                return stateTasks.filter(task => !task.isCompleted)


            case 'completed':
                return stateTasks.filter(task => task.isCompleted)

        }
    }

    const tasks = filterTasks()

    return (
        <div className="TodoApp">
            <div className="app__container">
                <Header/>
                <div className="todo__body">
                    <Input value={textInput} onChange={handleChange} onKeyPress={handleInput}/>
                    {tasks.map(({id, text, isCompleted}) => (
                            <TodoItem handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask} key={id}
                                      id={id} text={text} isCompleted={isCompleted}/>
                        )
                    )}
                </div>
                <div className="todo__footer">
                    <Footer handleFilterTask={handleFilterTask}/>
                </div>
            </div>
        </div>
    );
}

export default App;
