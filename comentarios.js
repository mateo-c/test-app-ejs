const getComentarios = fetch('http://localhost:3000/comments').then(res => res.json);

console.log(getComentarios());
