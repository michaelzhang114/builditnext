import React from "react";
import Feed from "@components/Feed";

const Profile = ({ searchParams }) => {
	// console.log(searchParams);
	// const { sort, filter } = searchParams;
	// console.log(`sort: ${sort}`);

	return (
		<section>
			<Feed />
		</section>
	);
};

export default Profile;
