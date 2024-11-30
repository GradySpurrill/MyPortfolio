const { fetchAndAggregateLanguages } = require('../utils/github');

export default async function handler(req, res) {
    try {
        const languages = await fetchAndAggregateLanguages();
        res.status(200).json(languages);
    } catch (error) {
        console.error('Error fetching GitHub languages:', error);
        res.status(500).send('Failed to fetch GitHub languages');
    }
}
