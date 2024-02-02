const clickMeButton = document.getElementById('click-me-button');
const ulList = document.getElementById('list');

clickMeButton.addEventListener('click', (event) => {
    const newListItem = document.createElement('li');
    const newListItemContent = document.createTextNode('New list item')

    newListItem.appendChild(newListItemContent)
    ulList.appendChild(newListItem)
})
