// DOM Manipulation

// Activity-1: Selecting and Manpulatig Elements

document.addEventListener('DOMContentLoaded', function() {
    // Task-1: Select an HTML element by its ID and change its text content.
    var element = document.getElementById('divID');
    element.textContent = 'New Text!';
    
    // Task-2: Select an HTML element by its class and change its background color.
    var firstElementWithClass = document.getElementsByClassName('bg-color')[0];
    if (firstElementWithClass) {
        firstElementWithClass.style.backgroundColor = 'red';
    }
});

// Activity-2: Creating and Appending Elements

// Task-3: Create a new div element with some text content and append it to the body.

var newDiv = document.createElement("div");

newDiv.textContent = "This is a new div which is being appended using DOM manipulation in javascript.";

document.body.appendChild(newDiv);

// Task-4: Create a new li element and add it to an existing ul list.

var newList = document.createElement("li");

newList.textContent= "4";

var existingUL = document.getElementById('ul-list');

existingUL.appendChild(newList);

// Activity-4: Removing Elements

// Task-5: Select an HTML element and remove it from the DOM

function removeElement() {
    var elementRemove = document.getElementById("element");
    elementRemove.parentNode.removeChild(elementRemove);
}

// Task-6: Remove the last child of a specific HTML element.

function removeLastElement() {
    var element = document.getElementById("ul-list");
    if (element.lastChild) {
        element.removeChild(element.lastChild)
    }
}

// Activity-4: Modifying Attributes and Classes

// Task-7: Select an HTML element and change one of its attributes (e.g., src of and img tag.)

function changeSrc () {
    var imgTag = document.getElementById('img');
    imgTag.setAttribute('src', "https://picsum.photos/200/300")
}

// Task-8: Add and remove a CSS class to/from an HTML element.

function addClass() {
    var element = document.getElementById("p-tag");
    element.classList.add("highlight");
}

function removeClass() {
    var element = document.getElementById("p-tag");
    element.classList.remove("highlight");
}

// Activity-5: Event Handling

// Task-9: Add a click event listener to a button that changes the text content of a paragraph.

document.getElementById('change-text-btn').addEventListener('click', function() {
    var paragraph = document.getElementById('text-change');
    paragraph.textContent = "This is the new text."
});

// Task-10: Add a mouseover event listener to an element that changes its border color.

document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("text-mouseover");

    element.addEventListener("mouseover", function() {
        element.style.borderColor= 'red';
    });

    element.addEventListener("mouseout", function() {
        element.style.borderColor= 'black';
    })
})

