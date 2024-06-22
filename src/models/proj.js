import { Schema, model, models } from "mongoose";

const ProjSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	projectName: {
		type: String,
		required: [true, "title is required."],
	},
	description: {
		type: String,
		required: [true, "contents is required"],
	},
	scorePV: {
		type: String,
		required: [true, "contents is required"],
	},
	scoreTech: {
		type: String,
		required: [true, "contents is required"],
	},
	scoreDist: {
		type: String,
		required: [true, "contents is required"],
	},
	scoreScale: {
		type: String,
		required: [true, "contents is required"],
	},
});

const Proj = models.Proj || model("Proj", ProjSchema);

export default Proj;
