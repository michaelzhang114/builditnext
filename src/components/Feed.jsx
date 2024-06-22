"use client";

import React from "react";
import { useState, useEffect } from "react";
import ProjCard from "./ProjCard";

const ProjCardList = ({ data, handleDelete, loading }) => {
	return loading ? (
		<span className="loading loading-ring loading-lg"></span>
	) : data.length == 0 ? (
		<p>You don&apos;t have any verses.</p>
	) : (
		<div className="flex flex-row flex-wrap mx-auto">
			{data.map((proj) => (
				<ProjCard
					key={proj._id}
					proj={proj}
					handleDelete={() => {
						handleDelete && handleDelete(proj);
					}}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [projs, setProjs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProjs = async () => {
			// setLoading(true);
			const response = await fetch("/api/project");
			const data = await response.json();
			setProjs(data);
			// setLoading(false);
		};
		fetchProjs();
	}, []);

	const handleDelete = async (verse) => {
		// console.log("deleting");
		// const hasConfirmed = confirm("Are you sure you want to delete?");
		// if (hasConfirmed) {
		// 	try {
		// 		await fetch(`/api/verse/${verse._id.toString()}`, {
		// 			method: "DELETE",
		// 		});
		// 		// const filteredPosts = posts.filter((p) => p._id !== post._id);
		// 		// setPosts(filteredPosts);
		// 		setVerses((prevVerses) =>
		// 			prevVerses.filter((v) => v._id !== verse._id)
		// 		);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// }
	};

	return (
		<div>
			<ProjCardList
				data={projs}
				handleDelete={handleDelete}
				loading={loading}
			/>
		</div>
	);
};

export default Feed;
