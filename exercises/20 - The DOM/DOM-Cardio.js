// Make a div
const coolDiv = document.createElement('div');
// add a class of wrapper to it
coolDiv.classList.add('wrapper');
// put it into the body
document.body.prepend(coolDiv);
// make an unordered list
const messyList = document.createElement('ul');
// add three list items with the words "one, two three" in them
for (let index = 0; index < 3; index++) {
        const element = document.createElement('li');
        element.innerText = `This is item number ${index + 1}`;
        messyList.append(element);
}
// put that list into the above wrapper
coolDiv.append(messyList);
// create an image
const coolImg = document.createElement('img');
// set the source to an image
coolImg.src = `https://images.unsplash.com/photo-1575927509236-1f62151d1b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80`;
// set the width to 250
coolImg.width = 250;
// add a class of cute
coolImg.classList.add('cute');
// add an alt of Cute Puppy
coolImg.alt = 'Cute Puppy';
// Append that image to the wrapper
coolDiv.append(coolImg);
// with HTML string, make a div, with two paragraphs inside of it
const htmlForDiv = `
    <div>
        <p>Cool Paragraph #1</p>
        <p>Cool Paragraph #1</p>
    </div>
`;
const stringToHtml = document.createRange().createContextualFragment(htmlForDiv);
// put this div before the unordered list from above
coolDiv.prepend(stringToHtml);
// add a class to the second paragraph called warning
const secondParagraph = document.querySelectorAll('p')[1];
secondParagraph.classList.add('warning');
// remove the first paragraph
const firstParagraph = document.querySelector('p');
firstParagraph.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('playerCard');
        playerCard.innerHTML = `
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old.
    In Dog years this person would be ${age * 7}.
    That would be a tall dog!</p>
    <p class="trash">🗑️ trash</p>
    `;
        return playerCard;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const peopleDiv = document.createElement('div');
peopleDiv.classList.add('cards');
// Have that function make 4 cards

const people = [
        { name: 'John', age: 15, height: 174 },
        { name: 'Mary', age: 25, height: 161 },
        { name: 'Joseph', age: 19, height: 144 },
        { name: 'Gabriel', age: 79, height: 190 },
];
for (let i = 0; i < people.length; i++) {
        const element = people[i];
        const { name } = element;
        const { age } = element;
        const { height } = element;
        peopleDiv.append(generatePlayerCard(name, age, height));
}
// append those cards to the div
// put the div into the DOM just before the wrapper element
coolDiv.insertAdjacentElement('beforebegin', peopleDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
document.addEventListener('click', function(e) {
        if (e.target.matches('p.trash')) {
                e.path[1].remove();
        }
});

// select all the buttons!
// make out delete function
// loop over them and attach a listener
