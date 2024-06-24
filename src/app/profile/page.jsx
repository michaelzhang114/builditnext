import React, { Suspense } from "react";
import Feed from "@components/Feed";
import { Suspense } from "react";

const Profile = ({ searchParams }) => {
	// console.log(searchParams);
	// const { sort, filter } = searchParams;
	// console.log(`sort: ${sort}`);

	return (
		<section>
			<Suspense>
				<Feed />
			</Suspense>
		</section>
	);
};

export default Profile;
