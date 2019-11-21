global.fetch = require("node-fetch");

url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"

async function f() {
  
  let response = await fetch(url)
  let result = await response.json();
  if (response.ok) { 
    // HTTP ステータスが 200-299 の場合
    // レスポンスの本文を取得(後述)
  return result
  } else {
    return `HTTP-Error: ${response.status}`
  }
}

f().then(console.log) // 1