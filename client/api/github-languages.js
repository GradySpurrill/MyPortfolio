const { fetchAndAggregateLanguages } = require('../utils/github'); 

export default async function handler(req, res) {
    try {
        if (!process.env.GITHUB_TOKEN) {
            console.error('GitHub token is missing from environment variables.');
            res.status(500).send('GitHub token not configured.');
            return;
        }

        const languages = await fetchAndAggregateLanguages();
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.status(200).json(languages);
    } catch (error) {
        console.error('Error fetching GitHub languages:', error);
        res.status(500).send('Failed to fetch GitHub languages');
    }
}
