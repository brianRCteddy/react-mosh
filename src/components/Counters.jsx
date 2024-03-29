import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	render() {
		console.log('Counterssss is rendered');
		const { onReset, onDelete, onIncrement } = this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
				))}
			</div>
		);
	}
}

export default Counters;
