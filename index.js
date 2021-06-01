const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.status(200).send('OK');
});

const reverse = name => {
    if (!name || typeof name !== 'string' || name.length > 1000) {
        throw new Error('please provide a "name" query parameter that is between 1 and 1000 characters');
    }
    return name.split('').reverse().join('');
}

const isPalindrome = (name, reversed) => {
    if (reversed) {
        return name === reversed;
    }
    return name === reverse(name);
}

app.get('/reverse', (req, res) => {
    const { name } = req.query;
    try {
        const reversed = reverse(name);
        return res.status(200).send({
            reversed,
            isPalindrome: isPalindrome(name, reversed)
        });
    } catch (e) {
        return res.status(400).send({
            error: e
        });
    }
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});

module.exports = { reverse, isPalindrome };
