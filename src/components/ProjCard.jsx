import React from "react";

const ProjCard = ({ proj, handleDelete }) => {
	return (
		<div className="card bg-base-100 shadow-xl w-full">
			<div className="card-body">
				<h2 className="card-title">{proj.projectName}</h2>
				<p>{proj.description}</p>
				<div className="flex flex-row">
					<label>Perceived Value: </label>
					<div className="badge badge-secondary">{proj.scorePV}</div>
				</div>
				<div className="flex flex-row">
					<label>Scale: </label>
					<div className="badge badge-secondary">
						{proj.scoreScale}
					</div>
				</div>
				<div className="flex flex-row">
					<label>Technical Skills: </label>
					<div className="badge badge-secondary">
						{proj.scoreTech}
					</div>
				</div>
				<div className="flex flex-row">
					<label>Distribution: </label>
					<div className="badge badge-secondary">
						{proj.scoreDist}
					</div>
				</div>

				<div className="card-actions justify-end">
					<button className="btn btn-primary">Edit</button>
					<button className="btn btn-primary">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default ProjCard;
