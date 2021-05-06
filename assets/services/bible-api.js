// rapidAPI Holy Bible key: 1e79fe3681msh42fc4a37f130e77p1a8693jsn69f85876361f

export function fetchVerses(book, chapter, verse) {
    return fetch(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?Verse=1&chapter=1&Book=Luke`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8c3d8d60a9msha0a7525de0a5703p11a61ajsn88ee2af4467d",
            "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err);
    });
}

export function fetchMegaVerse(book, chapter) {
    return fetch(`https://ajith-holy-bible.p.rapidapi.com/GetChapter?chapter=${chapter}&Book=${book}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8c3d8d60a9msha0a7525de0a5703p11a61ajsn88ee2af4467d",
            "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err);
    });
}