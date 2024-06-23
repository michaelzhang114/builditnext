"use client";

import Form from "@components/Form";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CreateProj = () => {
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			const payload = JSON.stringify({
				...proj,
				userId: session?.user.id,
			});
			const response = await fetch("api/project/new", {
				method: "POST",
				body: payload,
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
			<Form
				type={"Create"}
				proj={proj}
				setProj={setProj}
				handleSubmit={handleSubmit}
				submitting={submitting}
			/>
		</section>
	);
};

export default CreateProj;
