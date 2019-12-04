import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 4 },
			{ id: 3, value: 2 },
			{ id: 4, value: 0 },
			{ id: 5, value: 69 }
		]
	};

	incrementHandler = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters: counters });

		// console.log(counter);
	};

	resetHandler = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	deleteHandler = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<button onClick={this.resetHandler} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.deleteHandler}
						onIncrement={this.incrementHandler}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
