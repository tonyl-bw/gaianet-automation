const axios = require("axios");
const cron = require("node-cron");

const BASE_URL = "https://connect.gaia.domains/v1";
const API_KEY = "<YOUR_API_KEY>";

const questions = [
	"What causes rainbows?",
	"How do plants make food?",
	"Why is the sky blue?",
	"What makes popcorn pop?",
	"How do birds navigate during migration?",
	"Why do leaves change color in fall?",
	"How do submarines work?",
	"What causes thunder?",
	"How do bees make honey?",
	"Why do we dream?",
	"How do airplanes stay in the air?",
	"What makes a rainbow appear?",
	"How do magnets work?",
	"Why do we hiccup?",
	"How do cameras capture images?",
];

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
		console.log(JSON.stringify(data, null, 2));
	} catch (error) {
		console.error(error.message);
	}
};

cron.schedule("*/2 * * * *", main);
