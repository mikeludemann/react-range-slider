import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import RangeSlider from './components/range-slider';

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		setData({
			id: "my--range--slider",
			name: "range",
			min: "0",
			max: "1000",
			step: "10"
		})
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<RangeSlider field={data} />
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
