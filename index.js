const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // tutorials.forEach((name, i) => {
  //   const words = name.split(" ")
  //   const titleCasedWords = words.map(word => word[0].toUpperCase() + word.slice(1))
  //   tutorials[i] = titleCasedWords.join(" ")
  // })
  return tutorials.map((name, i) => {
    const words = name.split(" ")
    const titleCasedWords = words.map(word => word[0].toUpperCase() + word.slice(1))
    return titleCasedWords.join(" ")
  })
}

console.log(titleCased())

const display = document.querySelector("#display")

function displayTutorialTitle(tutorial, i, parentNode) {
  const h2 = document.createElement("h2")
  h2.innerHTML = `#${i+1} - ${tutorial}`
  parentNode.append(h2)
}

titleCased().forEach((tutorial, i) => displayTutorialTitle(tutorial, i, display))