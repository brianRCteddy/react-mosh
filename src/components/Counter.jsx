import React, { Component } from 'react';

class Counter extends Component {
	state = {
		value: this.props.value
	};

	// constructor() {
	// 	super();
	// 	this.incrementHandler = this.incrementHandler.bind(this);
	// }

	incrementHandler = (product) => {
		this.setState({
			value: this.state.value + 1
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
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.value <= 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.state;
		return value === 0 ? 'zero' : value;
	}
}

export default Counter;
