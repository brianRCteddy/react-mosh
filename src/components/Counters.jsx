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

	deleteHandler = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				{this.state.counters.map((counter) => (
					<Counter key={counter.id} onDelete={this.deleteHandler} counter={counter} />
				))}
			</div>
		);
	}
}

export default Counters;
