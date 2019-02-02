import React from "react";
import './ListItem.css';

import ContentEditable from 'react-contenteditable';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            checked: false
        };  

        this.contentEditable = React.createRef();

        this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
    }

    handleClick() {
        if (!this.props.clickHandler) 
            return;
        this.props.clickHandler(this.state.id);
        this.setState(prevState => ({ checked: !prevState.checked }));
    }

    change(event) {
        console.log("things changing");
        console.log(event.target.value);
        this.props.onDescpChange(this.props.id, event.target.value);
    }

    render() {

        let checkBox_style = "checkBox";
        if (this.state.checked)
            checkBox_style += " checkBox-checked";
        
        let textStyle = "item-text";
        if (this.state.checked)
            textStyle += " item-text-checked";

        return (
            <div className='listItem'>
                <div className="checkBox-container">
                    <div className={checkBox_style} onClick={this.handleClick}></div>
                </div>
                <div className="textArea">
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.props.description} // innerHTML of the editable div
                        disabled={this.state.checked ? true: false}       // use true to disable editing
                        onChange={this.change} // handle innerHTML change
                        tagName='p'
                        className={textStyle}
                        style={{wordBreak: "break-all"}}
                    />
                </div>
            </div>
        );
    }
}

export default ListItem;