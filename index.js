const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 4000;

/* 
    Translations are stored in json files, e.g:
        en.json
        fr.json

    To add new languages, create a new json file and add the language
    code to list below.
*/
const translations = [
    'en',
    'fr'
];

/*
    Uses query string params:
        lang=[lang]&key=[key]

    Examples:
        lang=en&key=fooPage
        lang=fr&key=fooPage
        lang=us&key=barPage
*/
const server = http.createServer((request, response) => {
    
    let { lang, key } = url.parse(request.url, true).query;

    if (lang && key) {
        fs.readFile(`./${lang}.json`, 'utf8', (err, data) => {
            if (err) throw err;

            let translation = JSON.parse(data).find(t => t.key === key);

            if (translation) {
                response.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                });
                response.write(JSON.stringify(translation));
            }

            response.end();
        });
    } else {
        response.end();
    }
});

server.listen(port, 'localhost', () => {
    console.log('Server working at http://localhost:' + port);
});