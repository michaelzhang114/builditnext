import React from "react";
import "@styles/globals.css";
import { AOSInit } from "@components/aos";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
	title: "Built It Next",
	description: "Blah blah",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head></head>
			<AOSInit />
			<body>
				<Provider>
					<main className="app">
						<Nav></Nav>
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
