window.onload = () => {
    detectColor();
}

const colors = ['black', 'purple', 'orange']; 

function detectColor() {
    var buttons = document.querySelectorAll('#container div');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', function() {
            changeBgColor(colors);
        })
    }
}

function changeBgColor(color) {
    document.getElementsByTagName('container div')[0].style.Color = color;
}