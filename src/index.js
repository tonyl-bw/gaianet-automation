const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.GAIA_API_KEY;
const questions = JSON.parse(process.env.QUESTIONS);

const main = async () => {
	const now = performance.now();
	try {
		const randomQuestion =
			questions[Math.floor(Math.random() * questions.length)];
		const { data } = await axios.post(
			`${BASE_URL}/chat/completions`,
			{
				messages: [
					{ role: "system", content: "You are a helpful assistant." },
					{ role: "user", content: randomQuestion },
				],
			},
			{
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		// console.log(`Question: ${randomQuestion}`);
		// console.log(`Time taken: ${end - now}ms`);
		return data;
	} catch (error) {
		console.error(error.message);
		return null;
	}
};

(async () => {
	await main();
})();
