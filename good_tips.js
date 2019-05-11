// console.log

const foo = {name: 'Tom',age: 35, nervous: false}
const bar = {name: 'Tim',age: 45, nervous: true}
const baz = {name: 'Mark',age: 25, nervous: false}

console.log('%c my friend', "color: blue;") // show 'my friend' in blur 
console.log({foo, bar, baz})
console.table([foo,bar,baz])

// Stack Trace log
const deleteMe = () => console.trace('delete one data')

deleteMe()
deleteMe()


// destructring
const student = {
  name: 'Tim',
  age: 18,
  glasses: true,
  height: 180,
  sport: 'Baseball'
}

const introduction = ({name, age, sport}) => {
  return `I am ${name} and ${age} years old, I like ${sport}`
}
// OR
const introduction = (person) => {
  const {name, age, sport} = person
  return `I am ${name} and ${age} years old, I like ${sport}`
}

console.log(introduction(student))


