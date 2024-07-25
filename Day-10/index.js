// Event Handling

// Activity-1: Basic Event Handling

// Task-1: Add a click event listener to a button that changes the text content of a paragraph.

document
  .getElementById("change-text-btn")
  .addEventListener("click", function () {
    var element = document.getElementById('p-tag');
    element.textContent = "This text is change due clicked on button"
  });

// Task-2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('image');

image.addEventListener('dblclick', () => {
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

// Activity-2: Mouse Events

// Task-3: Add a mouseover event listener to an element that changes its background color.

document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("para");

    element.addEventListener("mouseover", function() {
        element.style.backgroundColor= 'red';
    });
    // Task-4: Add a mouseour event listener to an element that resets its background color.
    element.addEventListener("mouseout", function() {
        element.style.backgroundColor = ''
    });
});

// Activity-3: Keyboard Events

// Task-5: Add a keydown event listener to an input field that logs the key pressed to the console.

document.getElementById('input').addEventListener('keydown', (event) => {
    console.log('Key Pressed', event.key)
});

// Task-6: Add a keyup event listener to an input filed that displays the current valur in a paragraph.

const inputField = document.getElementById('input');
const output = document.getElementById('output');

inputField.addEventListener('keyup', function() {
    const currentValue = this.value;

    output.textContent = 'Current value: ' + currentValue;
});

// Activity-4: Form Events

// Task-7: Add a submit event listener to a form that prevents the default submission and logs the from data to the console.

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    console.log('Form Data:');
    for (let [key, value] of formData.entries()) {
        console.log(key + ': ' + value)
    }
});

// Task-8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectElement = document.getElementById('selectEvent');
const outputPara = document.getElementById('selectEventOutput');

selectElement.addEventListener('change', function() {
    const selectedValue = this.value;

    outputPara.textContent = 'Selected value:' + selectedValue;
});

// Activity-5: Event Delegation

// Task-9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById('ul-list');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
});


// Task-10: Add an event listner to a parent element that listens for events from dynamically added child elements.

const parentContainer = document.getElementById('parentContainer');

parentContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.textContent);
    }
});

function addNewButton() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button ' + (parentContainer.children.length + 1);
    parentContainer.appendChild(newButton); 
} 