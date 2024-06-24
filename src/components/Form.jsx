"use client";

import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Form = ({ type, proj, setProj, handleSubmit, submitting }) => {
	// useEffect(() => {
	// 	console.log(proj);
	// }, [proj]);

	return (
		<section>
			<div className="">
				<form onSubmit={handleSubmit}>
					<span>{type} Form</span>

					<label className="form-control w-full max-w-sm mx-auto mb-4">
						<div className="label">
							<span className="label-text">
								Startup Idea Name
							</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
							value={proj.projectName}
							onChange={(e) => {
								setProj({
									...proj,
									projectName: e.target.value,
								});
							}}
						/>
					</label>

					<label className="form-control w-full max-w-sm mx-auto mb-4">
						<div className="label">
							<span className="label-text">Description</span>
						</div>
						<textarea
							type="text"
							placeholder="Type here"
							className="textarea textarea-md textarea-bordered mb-4"
							rows="5"
							cols="50"
							value={proj.description}
							onChange={(e) => {
								setProj({
									...proj,
									description: e.target.value,
								});
							}}
						/>
					</label>

					<div className="wrapper max-w-sm mx-auto mb-4">
						<label>
							<div className="label block">
								<div className="badge badge-primary mx-0 mb-1">
									Perceived Value
								</div>
								<span className="label-text block pl-1">
									How much does the customer value your
									product?
								</span>
							</div>
							<div className="grid grid-cols-10 gap-4">
								<div className="col-span-9">
									<Slider
										value={proj.scorePV}
										onChange={(e) => {
											setProj({
												...proj,
												scorePV: e.target.value,
											});
										}}
										classInject={"range-primary"}
									/>
								</div>
								<span className="col-span-1">
									{proj.scorePV}
								</span>
							</div>
						</label>
					</div>
					<div className="wrapper max-w-sm mx-auto mb-4">
						<label>
							<div className="label block">
								<div className="badge badge-secondary">
									Scale
								</div>
								<span className="label-text block pl-1">
									How big is your customer base?
								</span>
							</div>
							<div className="grid grid-cols-10 gap-4">
								<div className="col-span-9">
									<Slider
										value={proj.scoreScale}
										onChange={(e) => {
											setProj({
												...proj,
												scoreScale: e.target.value,
											});
										}}
										classInject={"range-secondary"}
									/>
								</div>
								<span className="col-span-1">
									{proj.scoreScale}
								</span>
							</div>
						</label>
					</div>

					<div className="wrapper max-w-sm mx-auto mb-4">
						<label>
							<div className="label block">
								<div className="badge badge-accent">
									Technical Skills
								</div>
								<span className="label-text block pl-1">
									Do you have the skills to build your
									product?
								</span>
							</div>
							<div className="grid grid-cols-10 gap-4">
								<div className="col-span-9">
									<Slider
										value={proj.scoreTech}
										onChange={(e) => {
											setProj({
												...proj,
												scoreTech: e.target.value,
											});
										}}
										classInject={"range-accent"}
									/>
								</div>
								<span className="col-span-1">
									{proj.scoreTech}
								</span>
							</div>
						</label>
					</div>

					<div className="wrapper max-w-sm mx-auto mb-4">
						<label>
							<div className="label block">
								<div className="badge badge-warning">
									Distribution
								</div>
								<span className="label-text block pl-1">
									Can you get your product in front of
									customers?
								</span>
							</div>
							<div className="grid grid-cols-10 gap-4">
								<div className="col-span-9">
									<Slider
										value={proj.scoreDist}
										onChange={(e) => {
											setProj({
												...proj,
												scoreDist: e.target.value,
											});
										}}
										classInject={"range-warning"}
									/>
								</div>
								<span className="col-span-1">
									{proj.scoreDist}
								</span>
							</div>
						</label>
					</div>

					<div className="wrapper max-w-sm mx-auto ">
						<button
							className="btn btn-primary mt-2 mb-6"
							type="submit"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Form;
