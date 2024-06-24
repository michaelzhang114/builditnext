"use client";

import React from "react";
import { useState, useEffect } from "react";
import ProjCard from "./ProjCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const ProjCardList = ({ data, handleDelete, handleEdit, loading }) => {
	return loading ? (
		<span className="loading loading-ring loading-lg"></span>
	) : data.length == 0 ? (
		<p>You don&apos;t have any verses.</p>
	) : (
		<div className="flex flex-col">
			{data.map((proj) => (
				<ProjCard
					key={proj._id}
					proj={proj}
					handleDelete={() => {
						handleDelete && handleDelete(proj);
					}}
					handleEdit={() => {
						handleEdit && handleEdit(proj);
					}}
				/>
			))}
		</div>
	);
};

const sortByKey = (array, key) => {
	const ascend = array.sort((a, b) => {
		const aValue = parseFloat(a[key]);
		const bValue = parseFloat(b[key]);

		if (isNaN(aValue) || isNaN(bValue)) {
			// Handle NaN cases, if necessary, e.g., move NaNs to the end
			return isNaN(aValue) ? 1 : -1;
		}

		if (aValue < bValue) {
			return -1;
		}
		if (aValue > bValue) {
			return 1;
		}
		return 0;
	});
	return ascend.toReversed();
};

const Feed = () => {
	const [projs, setProjs] = useState([]);
	const [loading, setLoading] = useState(false);

	const searchParams = useSearchParams();
	const mySort = searchParams.get("sort");
	console.log(mySort);

	const router = useRouter();

	useEffect(() => {
		const fetchProjs = async () => {
			// setLoading(true);
			const response = await fetch("/api/project");
			const data = await response.json();
			console.log(data);

			// // if no sorting
			if (!mySort) {
				setProjs(data);
			}

			if (
				mySort == "scorePV" ||
				mySort == "scoreScale" ||
				mySort == "scoreTech" ||
				mySort == "scoreDist" ||
				mySort == "scoreJeannen"
			) {
				console.log("sorting");
				const sortedData = sortByKey(data, mySort);
				console.log(sortedData);
				setProjs(sortedData);
			}
			// console.log(data);

			// setLoading(false);
		};
		fetchProjs();
	}, [mySort]);

	const handleDelete = async (proj) => {
		// console.log("deleting");
		const hasConfirmed = confirm("Are you sure you want to delete?");
		if (hasConfirmed) {
			try {
				await fetch(`/api/project/${proj._id.toString()}`, {
					method: "DELETE",
				});
				// const filteredPosts = posts.filter((p) => p._id !== post._id);
				// setPosts(filteredPosts);
				setProjs((prevProjs) =>
					prevProjs.filter((p) => p._id !== proj._id)
				);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const handleEdit = (proj) => {
		console.log(proj);
		router.push(`/update-proj?id=${proj._id}`);
	};

	return (
		<div className="max-w-sm mx-auto md:max-w-xl lg:max-w-3xl mt-4">
			<div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
				<span>Sort by:</span>

				<Link href={"?sort=scoreJeannen"}>
					{mySort == "scoreJeannen" ? (
						<div className="badge badge-success">Overall</div>
					) : (
						<div className="badge badge-outline">Overall</div>
					)}
				</Link>
				<Link href={"?sort=scorePV"}>
					{mySort == "scorePV" ? (
						<div className="badge badge-primary">
							Perceived Value
						</div>
					) : (
						<div className="badge badge-outline">
							Perceived Value
						</div>
					)}{" "}
				</Link>
				<Link href={"?sort=scoreScale"}>
					{mySort == "scoreScale" ? (
						<div className="badge badge-secondary">Scale</div>
					) : (
						<div className="badge badge-outline">Scale</div>
					)}{" "}
				</Link>
				<Link href={"?sort=scoreTech"}>
					{mySort == "scoreTech" ? (
						<div className="badge badge-accent">
							Technical Skills
						</div>
					) : (
						<div className="badge badge-outline">
							Technical Skills
						</div>
					)}{" "}
				</Link>
				<Link href={"?sort=scoreDist"}>
					{mySort == "scoreDist" ? (
						<div className="badge badge-warning">Distribution</div>
					) : (
						<div className="badge badge-outline">Distribution</div>
					)}{" "}
				</Link>
			</div>

			<ProjCardList
				data={projs}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
				loading={loading}
			/>
		</div>
	);
};

export default Feed;
