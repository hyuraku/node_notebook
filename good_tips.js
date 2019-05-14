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
const student_1 = {
  name: 'Tim',
  age: 18,
  glasses: true,
  height: 180,
  sport: 'Baseball'
}

const introduction_1 = ({name, age, sport}) => {
  return `I am ${name} and ${age} years old, I like ${sport}`
}
// OR
const introduction_2 = (person) => {
  const {name, age, sport} = person
  return `I am ${name} and ${age} years old, I like ${sport}`
}

console.log(introduction_1(student_1))
console.log(introduction_2(student_1))

// template-literals
const student_2 = {
  name: 'Tim',
  age: 18,
  favorite: ['language', 'math'],
  height: 180
}

const {name, age, favorite} = student_2
let intro = `He is ${name} and ${age} years old, he is good at ${favorite.join(' and ')}`
console.log(intro)

const aboutAge = (str,age) => {
  const ageStr = age > 20 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years`
}

const intro_2 = aboutAge`He is ${student_2.age}`
console.log(intro_2)

// sperad-syntax
const student_3 = {name: 'Tom'}
const result = {language: 80, math: 90, science: 75}

const student_3_result = {...student_3, ...result}
const student_3_result2 = {...student_3, history: 60}
console.log(student_3_result)
student_3_result2
