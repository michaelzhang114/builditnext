import React from "react";

const ProjCard = ({ proj, handleDelete, handleEdit }) => {
	return (
		<div className="card bg-base-100 shadow-xl w-full mx-auto mb-4">
			<div className="card-body">
				<h2 className="card-title">{proj.projectName}</h2>
				<p>{proj.description}</p>

				<div className="flex items-center mx-auto content-center gap-2">
					<label>Overall: </label>
					<div className="badge badge-success">
						{Number(proj.scoreJeannen) >= 45 ? (
							<div>{proj.scoreJeannen} 🚀</div>
						) : Number(proj.scoreJeannen) >= 20 ? (
							<div>{proj.scoreJeannen} 🤔</div>
						) : (
							<div>{proj.scoreJeannen} 🔮</div>
						)}
					</div>
				</div>

				<div className="flex gap-3">
					<div>
						<label>Perceived Value:</label>
						<div className="badge badge-primary">
							{proj.scorePV}
						</div>
					</div>
					<div className="">
						<label>Scale: </label>
						<div className="badge badge-secondary">
							{proj.scoreScale}
						</div>
					</div>
				</div>

				<div className="flex gap-3">
					<div>
						<label>Technical Skills: </label>
						<div className="badge badge-accent">
							{proj.scoreTech}
						</div>
					</div>
					<div>
						<label>Distribution: </label>
						<div className="badge badge-warning">
							{proj.scoreDist}
						</div>
					</div>
				</div>

				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={handleEdit}>
						Edit
					</button>
					<button className="btn btn-primary" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjCard;
