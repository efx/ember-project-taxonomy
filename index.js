const fetch = require('node-fetch');
const { readFileSync } = require('fs');
const { GITHUB_PERSONAL_TOKEN } = process.env;

const [ , , emberProject ] = process.argv;

if (!emberProject) {
	console.log('Please specify the name of a repository in the emberjs organization.');
	process.exit(1);
}
if (!GITHUB_PERSONAL_TOKEN) {
	console.log('Please specify a token.');
	process.exit(1);
}

(async () => {
	const query = readFileSync('./labels.graphql').toString();
	const variables = { emberProject };
	const res = await fetch('https://api.github.com/graphql', {
		method: 'post',
		// nabbed below trick from https://github.com/marktani/scripts/blob/master/fetch/fetch-query.js#L22
		body: JSON.stringify({query, variables}),
		headers: {
			'Content-Type': 'application/graphql',
			'Authorization': `bearer ${GITHUB_PERSONAL_TOKEN}`
		}
	});

	try {
		const data = await res.json();
		console.log(JSON.stringify(data));
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();
