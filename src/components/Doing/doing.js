import React from "react";
import ListItem from '../shared-components/ListItem/ListItem';
import "./doing.css";

class Doing extends React.Component {
    constructor(props) {
        super(props);
        this.taskCompleteHandler = this.props.taskCompleteHandler;
    }

    
    render () {
        return (
            <div className='doing'>
                <div className="doing-header">
                    <h3>Doing</h3>
                </div>
                <ul className="doing-list">
                    {this.props.task_list.map((item) => {
                        return <ListItem description={item.description} key={"doing_"+ item.id} id={item.id} clickHandler={this.taskCompleteHandler} onDescpChange={this.props.onDescpChange}/>
                    })}
                </ul>
                
            </div>
        );
    }
}

export default Doing;