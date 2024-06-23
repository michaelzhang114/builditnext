"use client";

import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Form = ({ type, proj, setProj, handleSubmit, submitting }) => {
	// useEffect(() => {
	// 	console.log(proj);
	// }, [proj]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<span>{type} Form</span>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Project Name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						value={proj.projectName}
						onChange={(e) => {
							setProj({ ...proj, projectName: e.target.value });
						}}
					/>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Description</span>
					</div>
					<textarea
						type="text"
						placeholder="Type here"
						className="textarea textarea-accent mb-4"
						rows="8"
						cols="50"
						value={proj.description}
						onChange={(e) => {
							setProj({ ...proj, description: e.target.value });
						}}
					/>
				</label>
				<label>
					<div className="label">
						<span className="label-text">Perceived Value</span>
					</div>
					<Slider
						value={proj.scorePV}
						onChange={(e) => {
							setProj({ ...proj, scorePV: e.target.value });
						}}
					/>
				</label>
				<label>
					<div className="label">
						<span className="label-text">Scale</span>
					</div>
					<Slider
						value={proj.scoreScale}
						onChange={(e) => {
							setProj({ ...proj, scoreScale: e.target.value });
						}}
					/>
				</label>
				<label>
					<div className="label">
						<span className="label-text">Technical Skills</span>
					</div>
					<Slider
						value={proj.scoreTech}
						onChange={(e) => {
							setProj({ ...proj, scoreTech: e.target.value });
						}}
					/>
				</label>
				<label>
					<div className="label">
						<span className="label-text">Distribution</span>
					</div>
					<Slider
						value={proj.scoreDist}
						onChange={(e) => {
							setProj({ ...proj, scoreDist: e.target.value });
						}}
					/>
				</label>

				<button className="btn btn-primary" type="submit">
					Save
				</button>
			</form>
		</section>
	);
};

export default Form;
