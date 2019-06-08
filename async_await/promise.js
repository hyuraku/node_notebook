const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, rejest) => {
    setTimeout(() => {
      posts.push(post)

      const error = false;

      if (!error) {
        resolve();
      } else {
        rejest('Error')
      }
    }, 2000);
  })
}

createPost({ title: "Post Three", body: 'This is post three' })
  .then(getPosts)

// promise method chain
function getName() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve('Tim');
    }, 2000)
  })
}

function getAge() {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve(20);
    }, 2000);
  })
}

getName()
.then(name => {
  console.log(name)
})
.then(getAge)
.then(age =>{
  console.log(age)
})


// Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,rejest)=>
  setTimeout(resolve,2000, 'Goodbye')
)

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
Promise.all([getName(),getAge()])
.then(([name,age]) => {
  console.log(name);
  console.log(age);
 }
)


// Async / Await
async function init(){
  await createPost({ title: "Post Four", body: 'This is post four' });
  getPosts();
}

init();


let myPromise = new Promise(resolve => {
  resolve('Tim')
})

async function main(){
  let name = await myPromise;
  // name
}
let name = main()
console.log(name)
