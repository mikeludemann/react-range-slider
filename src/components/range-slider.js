import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function RangeSlider(props) {
	const [field, setField] = useState({...props.field});

	useEffect(() => {
		setField(props.field);
	}, [props.field]);

	return (
		<>
			<input type="range" id={field.id} name={field.name} min={field.min} step={field.step} max={field.max} onChange={e => setField(e.target.value)} />
		</>
	);
}

export default RangeSlider;