var classeButton = document.querySelectorAll("a");
var html = document.URL;

for (var page = 0; page < classeButton.length; page++){
    if(html === classeButton[page].href){
        classeButton[page].classList.add("active")
    }
}