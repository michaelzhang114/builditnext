"use client";

import Form from "@components/Form";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Suspense } from "react";

const UpdateProj = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [submitting, setSubmitting] = useState(false);

	const [proj, setProj] = useState({
		projectName: "",
		description: "",
		scorePV: "0",
		scoreTech: "0",
		scoreDist: "0",
		scoreScale: "0",
	});

	const searchParams = useSearchParams();
	const projId = searchParams.get("id");

	useEffect(() => {
		const getProjDetails = async () => {
			const response = await fetch(`/api/project/${projId}`);
			const data = await response.json();

			setProj({
				projectName: data.projectName,
				description: data.description,
				scorePV: data.scorePV,
				scoreTech: data.scoreTech,
				scoreDist: data.scoreDist,
				scoreScale: data.scoreScale,
			});
		};

		if (projId) {
			getProjDetails();
		}
	}, [projId]);

	const updateProj = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		if (!projId) return alert("missing proj id in query params!!!");

		try {
			const response = await fetch(`api/project/${projId}`, {
				method: "PATCH",
				body: JSON.stringify({
					projectName: proj.projectName,
					description: proj.description,
					scorePV: proj.scorePV,
					scoreScale: proj.scoreScale,
					scoreTech: proj.scoreTech,
					scoreDist: proj.scoreDist,
				}),
			});

			if (response.ok) {
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section>
			<Suspense>
				<Form
					type={"Edit"}
					proj={proj}
					setProj={setProj}
					handleSubmit={updateProj}
					submitting={submitting}
				/>
			</Suspense>
		</section>
	);
};

export default UpdateProj;
