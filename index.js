var ttop = document.getElementById('top');
window.onscroll = function () {
   scrollFunc();
};
// Scroll to top only appears  when the window has moved 20px down
function scrollFunc() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      ttop.style.display = 'block';
   } else {
      ttop.style.display = 'none';
   }
}
// Directly scroll to the top
function toop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
// This function helps to add the the items in the list
function add() {
   const writeText = document.getElementById('writeText').value;
   const listItems = document.getElementById('listItems');
   const newDiv = document.createElement('div');
   newDiv.style = 'height:50px ; width : 600px;font-size: large';
   const text = document.createTextNode(writeText);
   // Alerts the user to add something
   if (writeText === '') {
      alert(' Please add something');
      return;
   }
   newDiv.append(text);
   const correctButton = document.createElement('button');
   correctButton.innerText = '✓';
   correctButton.style =
      'float:left; color : aqua; font-size : large; border-radius : 13px; outline:none; border : 3px solid white';
   // Js onclick  event with arrow function
   correctButton.onclick = () => {
      newDiv.style =
         'text-decoration-line: line-through; height :50px;font-size : large';
   };
   correctButton.ondblclick = () => {
      newDiv.style =
         'text-decoration-line:none; font-size:large; height : 50px;';
   };
   newDiv.append(correctButton);
   // Cancel Button
   const cancelButton = document.createElement('button');
   cancelButton.innerText = '\u00d7';
   cancelButton.style =
      'float:right; color : aqua; font-size : large; border-radius : 13px; outline:none; border : 3px solid white';
   // Remove() helps to remove the item , in this case with the help of the cancel button
   cancelButton.onclick = () => {
      newDiv.remove();
   };
   newDiv.append(cancelButton);
   listItems.append(newDiv);
   document.getElementById('writeText').value = ''; // reset the writeText box
}
