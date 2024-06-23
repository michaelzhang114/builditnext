"use client";

import React from "react";
import { useState, useEffect } from "react";
import ProjCard from "./ProjCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

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
	// console.log(mySort);

	useEffect(() => {
		const fetchProjs = async () => {
			// setLoading(true);
			const response = await fetch("/api/project");
			const data = await response.json();

			// // if no sorting
			if (!mySort) {
				setProjs(data);
			}

			if (
				mySort == "scorePV" ||
				mySort == "scoreScale" ||
				mySort == "scoreTech" ||
				mySort == "scoreDist"
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

	return (
		<div>
			<div className="flex flex-row gap-4">
				<Link href={"?sort=scorePV"}>Sort by PV</Link>
				<Link href={"?sort=scoreScale"}>Sort by scale</Link>
				<Link href={"?sort=scoreTech"}>Sort by tech</Link>
				<Link href={"?sort=scoreDist"}>Sort by distribution</Link>
			</div>

			<ProjCardList
				data={projs}
				handleDelete={handleDelete}
				loading={loading}
			/>
		</div>
	);
};

export default Feed;
