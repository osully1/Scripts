// rapidAPI Holy Bible key: 1e79fe3681msh42fc4a37f130e77p1a8693jsn69f85876361f

export function fetchBooks() {
    return fetch("https://ajith-holy-bible.p.rapidapi.com/GetBooks", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1e79fe3681msh42fc4a37f130e77p1a8693jsn69f85876361f",
            "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err);
    });
}