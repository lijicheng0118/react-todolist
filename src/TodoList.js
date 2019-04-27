import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			initValue: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.initValue],
			initValue: ''
		})
	}
	handleInputChange(e) {
		this.setState({
			initValue: e.target.value
		})
	}
	handleDelete(index) {
		const list = this.state.list
		list.splice(index, 1)
		this.setState({list})
	}
	getTodoItems() {
		return (
			this.state.list.map((item, index) => {
				return (
					<TodoItem 
					    delete={this.handleDelete} 
					    content={item} 
					    index={index} 
					    key={index}
					/>
				)
			})
		)
	}
    render() {
	  	return (
		    <Fragment>
		    	<div>
		    		<input value={this.state.initValue} onChange={this.handleInputChange} />
		    		<button onClick={this.handleBtnClick}>add</button>
		    	</div>
		    	<ul> {this.getTodoItems()} </ul>
		    </Fragment>
	  	);
    }
}

export default TodoList;
