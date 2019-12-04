import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters';

class App extends Component {
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
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.resetHandler}
						onIncrement={this.incrementHandler}
						onDelete={this.deleteHandler}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
