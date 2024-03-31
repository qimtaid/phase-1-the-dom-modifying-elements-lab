// Write your code here!

// Remove the main element 
const mainElement = document.getElementById('main');
mainElement.remove();

// Create element
const newHeader = document.createElement('h1');
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME 
newHeader.id = "victory";

// Append the new h1 element t
document.body.append(newHeader);
