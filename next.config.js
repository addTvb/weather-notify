module.exports = {
	reactStrictMode: true,
};

const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
});

module.exports = {
	env: {
		API_KEY: "6acf1eeb5996979d905cfae66423b6a0",
	},
};
