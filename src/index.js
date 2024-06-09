const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

async function fetchData(req, res, next) {
    const apiKey = '5f344fdb6e12a4c6991cb0ff692f5a60';
    const url ='https://api.themoviedb.org/3/movie/popular'

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

app.get('/movies', fetchData);

app.listen(port, () => {
    console.log(`Servier is running on http://localhost:${port}`);
}); 