
//night mode toggle button
var nightModeToggleButton = document.querySelector(".nightmodbtn");
var body = document.querySelector("body");

nightModeToggleButton.onclick = function () {
    nightModeToggleButton.classList.toggle("nightmode");
    body.classList.toggle("nightmode");
    
};

//onclick on button text change
btn.addEventListener('click',function handleclick(){
    const initialText = 'Night Mode';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Day Mode';
      } else {
        btn.textContent = initialText;
      }
});