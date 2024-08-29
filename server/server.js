require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Import the cors package
const axios = require('axios');
const app = express();

app.use(morgan('dev'));
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const token = process.env.GITHUB_TOKEN;
const username = 'MushysWebs';

// Fetch and aggregate language data from all GitHub repositories
async function fetchAndAggregateLanguages() {
    const headers = {
        'Authorization': `token ${token}`
    };

    try {
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
        const repos = reposResponse.data;

        let languagesCount = {};

        for (let repo of repos) {
            try {
                const langResponse = await axios.get(repo.languages_url, { headers });
                const repoLanguages = langResponse.data;

                // Aggregate language data
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

// Endpoint to get aggregated languages data
app.get("/api/github/languages", async (req, res) => {
    try {
        const languages = await fetchAndAggregateLanguages();
        res.json(languages);
    } catch (err) {
        console.log(err);
        res.status(500).send('Failed to fetch GitHub languages data');
    }
});

const port = process.env.PORT || 3006;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
