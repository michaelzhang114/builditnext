/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				// protocol: 'https',
				hostname: "lh3.googleusercontent.com",
				// port: '',
				// pathname: '/account123/**',
			},
		],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};

export default nextConfig;
