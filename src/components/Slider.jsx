import React from "react";

const Slider = ({ value, onChange, classInject }) => {
	return (
		<label>
			<input
				type="range"
				min={0}
				max="10"
				value={value}
				className={`range ${classInject}`}
				step="1"
				onChange={onChange}
			/>
			{/* <div className="w-full flex justify-between text-xs px-2">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div> */}
		</label>
	);
};

export default Slider;
