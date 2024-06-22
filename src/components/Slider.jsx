import React from "react";

const Slider = ({ value, onChange }) => {
	return (
		<label>
			<input
				type="range"
				min={0}
				max="100"
				value={value}
				className="range"
				step="25"
				onChange={onChange}
			/>
			<div className="w-full flex justify-between text-xs px-2">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div>
		</label>
	);
};

export default Slider;
