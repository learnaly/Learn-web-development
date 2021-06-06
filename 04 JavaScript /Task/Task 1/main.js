
// Small nuget of wisdome
// Whenever you wanna do some javascript like this
// you have to do it after all the resources load when HTML page displays
// and then run the javascript code
// so it can run without bugs
// Just take it as is for now
window.onload = () => {

  // 1. Get body component and change background-color on it with javascript.

  // This function returns an array (list) of components
  // [0] is way to access items of an array
  // 0 is first element, it's called index 0
  // Elements in array start with index 0, so element 1 has index 0, element 2 index 1, etc.
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundColor = 'lightgoldenrodyellow';

  // 2. Get button component in the header, and add a click event listener (google it), and every time you click that button, console.log 'Clicked!'.

  const button = document.getElementById('call-to-action');

  button.onclick = () => {
    console.log('Clicked!');
  };

};