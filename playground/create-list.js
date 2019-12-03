const list = document.createElement('ul');
document.body.appendChild(list);
for (let index = 0; index < 5; index++) {
        const listItem = document.createElement('li');
        listItem.textContent = `This is item number ${index + 1}`;
        list.appendChild(listItem);
}

const htmlList = `
    <ul>
        <li>This is a line item</li>
        <li>This is a line item</li>
        <li>This is a line item</li>
        <li>This is a line item</li>
        <li>This is a line item</li>
    </ul>    
`;

const myFragment = document.createRange().createContextualFragment(htmlList);
const listDiv = document.createElement('div');
listDiv.classList.add('cool-list');
listDiv.appendChild(myFragment);
document.body.appendChild(listDiv);
