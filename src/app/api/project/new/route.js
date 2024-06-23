import { connectToDB } from "@utils/database";
import Proj from "@models/proj";

export const POST = async (req, res) => {
	const {
		userId,
		projectName,
		description,
		scorePV,
		scoreTech,
		scoreDist,
		scoreScale,
	} = await req.json();

	try {
		await connectToDB();
		const newProj = new Proj({
			creator: userId,
			projectName,
			description,
			scorePV,
			scoreTech,
			scoreDist,
			scoreScale,
			scoreJeannen:
				Number(scorePV) +
				Number(scoreScale) +
				Number(scoreTech) +
				Number(scoreDist) * 3,
		});
		// console.log(newProj);
		await newProj.save();
		return new Response(JSON.stringify(newProj), { status: 201 });
	} catch (error) {
		return new Response("Failed to create a new Proj", { status: 500 });
	}
};
