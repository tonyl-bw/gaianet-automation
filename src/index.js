const axios = require("axios");
const cron = require("node-cron");
const dotenv = require("dotenv");

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.GAIA_API_KEY;
const questions = JSON.parse(process.env.QUESTIONS);

const main = async () => {
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
		console.log(`Question: ${randomQuestion}`);
		return data;
	} catch (error) {
		console.error(error.message);
	}
};

main().then((data) => {
	console.log(`Prompt Tokens: ${data.usage.prompt_tokens}`);
	console.log(`Completion Tokens: ${data.usage.completion_tokens}`);
	console.log(`Total Tokens: ${data.usage.total_tokens}`);
});
