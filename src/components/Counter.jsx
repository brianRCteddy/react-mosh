import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: [ 'tag1', 'tag2', 'tag3' ]
	};

	// constructor() {
	// 	super();
	// 	this.incrementHandler = this.incrementHandler.bind(this);
	// }

	incrementHandler = (product) => {
		console.log(product);
		this.setState({
			count: this.state.count + 1
		});
	};

	// doIncrementHandler = () => {
	// 	this.incrementHandler({ id: 1 });
	// };

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => {
						this.incrementHandler({ id: 1 });
					}}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
			</div>
		);
	}
}

export default Counter;
