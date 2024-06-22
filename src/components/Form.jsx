"use client";

import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Form = () => {
	const [proj, setProj] = useState({
		projectName: "",
		description: "",
		scorePV: "",
		scoreTech: "",
		scoreDist: "",
		scoreScale: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setSubmitting(true);
		console.log(proj);

		try {
			// const response = await fetch("api/prompt/new", {
			// 	method: "POST",
			// 	body: JSON.stringify({
			// 		userId: session?.user.id,
			// 	}),
			// });

			if (response.ok) {
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			// setSubmitting(false);
		}
	};

	// useEffect(() => {
	// 	console.log(proj);
	// }, [proj]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
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
				<Slider
					value={proj.scorePV}
					onChange={(e) => {
						setProj({ ...proj, scorePV: e.target.value });
					}}
				/>

				<button className="btn btn-primary" type="submit">
					Primary
				</button>
			</form>
		</section>
	);
};

export default Form;
