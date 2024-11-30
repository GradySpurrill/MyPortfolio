const axios = require('axios');
const token = process.env.GITHUB_TOKEN;
const username = 'MushysWebs';

async function fetchAndAggregateLanguages() {
    const headers = { 'Authorization': `token ${token}` };

    try {
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
        const repos = reposResponse.data;

        let languagesCount = {};
        for (let repo of repos) {
            try {
                const langResponse = await axios.get(repo.languages_url, { headers });
                const repoLanguages = langResponse.data;

                for (const [language, lines] of Object.entries(repoLanguages)) {
                    if (!languagesCount[language]) {
                        languagesCount[language] = 0;
                    }
                    languagesCount[language] += lines;
                }
            } catch (langError) {
                console.error(`Error fetching languages for repo ${repo.name}:`, langError.message);
            }
        }

        return languagesCount;
    } catch (error) {
        console.error('Error fetching repositories or languages:', error);
        return {};
    }
}

module.exports = { fetchAndAggregateLanguages };
