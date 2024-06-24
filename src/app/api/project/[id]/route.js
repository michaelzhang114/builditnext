import Proj from "@models/proj";
import { connectToDB } from "@utils/database";

//GET
export const GET = async (request, { params }) => {
	try {
		await connectToDB();
		const proj = await Proj.findById(params.id).populate("creator");
		if (!proj) return new Response("Proj not found", { status: 404 });
		return new Response(JSON.stringify(proj), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch all projs", { status: 500 });
	}
};

//PATCH
export const PATCH = async (request, { params }) => {
	const {
		projectName,
		description,
		scorePV,
		scoreScale,
		scoreTech,
		scoreDist,
	} = await request.json();
	try {
		await connectToDB();
		const existingProj = await Proj.findById(params.id);
		if (!projectName)
			return new Response("Project name not found", { status: 404 });

		existingProj.projectName = projectName;
		existingProj.description = description;
		existingProj.scorePV = scorePV;
		existingProj.scoreScale = scoreScale;
		existingProj.scoreTech = scoreTech;
		existingProj.scoreDist = scoreDist;
		(existingProj.scoreJeannen =
			Number(scorePV) +
			Number(scoreScale) +
			Number(scoreTech) +
			Number(scoreDist) * 3),
			await existingProj.save();
		return new Response(JSON.stringify(existingProj), { status: 200 });
	} catch (error) {
		return new Response("failed to update project", { status: 500 });
	}
};

//DELETE
export const DELETE = async (request, { params }) => {
	try {
		await connectToDB();
		await Proj.findByIdAndDelete(params.id);
		return new Response(JSON.stringify("Project deleted successfully"), {
			status: 200,
		});
	} catch (error) {
		return new Response("failed to delete project", { status: 500 });
	}
};
