global.fetch = require("node-fetch");

name = process.argv.slice(2)
url = `https://api.github.com/users/${name}`

async function getUsers(name) {  
  let response = await fetch(url)
  let result = await response.json();
  if (response.ok) { 
    return result
  } else {
    return `HTTP-Error: ${response.status}`
  }
}

getUsers(name).then(console.log) // 1