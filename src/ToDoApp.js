import React from 'react';
import ToDo from './components/ToDo/todo';
import Doing from './components/Doing/doing';
import Done from './components/Done/done';
import './ToDoApp.css';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_list: []
        };
        this.newTaskHandler = this.newTaskHandler.bind(this);
        this.taskClearHandler = this.taskClearHandler.bind(this);
        this.taskCompleteHandler = this.taskCompleteHandler.bind(this);
        this.onDescpChange = this.onDescpChange.bind(this);
    }

    newTaskHandler(descp) {
        this.setState(prevState => {
            return {
                task_list: prevState.task_list.concat({
                    id: "task" + new Date().getTime(),
                    description: descp,
                    finished: false
                })
            };
        });
    }

    taskCompleteHandler(id) {
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.finished = !item.finished;
                return item;
            })
        }));
    }

    taskClearHandler(id) {
        this.setState(prevState => ({
            task_list: prevState.task_list.filter(item => item.id !== id)
        }));
    }

    onDescpChange(id, new_descp) {
        console.log("id: " + id);
        console.log("new description: " + new_descp);
        this.setState(prevState => ({
            task_list: prevState.task_list.map(item => {
                if (item.id === id)
                    item.description = new_descp;
                return item;
            })
        }));
        console.log(this.state.task_list);
    }

    render() {
        return (
            <div className="toDoApp">
                <ToDo task_list={this.state.task_list} newTaskHandler={this.newTaskHandler} onDescpChange={this.onDescpChange}/>
                <Doing task_list={this.state.task_list} taskCompleteHandler={this.taskCompleteHandler} onDescpChange={this.onDescpChange}/>
                <Done task_list={this.state.task_list} taskClearHandler={this.taskClearHandler} onDescpChange={this.onDescpChange}/>
            </div>
        );
    }
}


export default ToDoApp;