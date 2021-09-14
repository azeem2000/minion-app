var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function urlTranslate(inputText){
    var finalurl = serverURL + "?"+"text="+inputText
    return finalurl
}

function errorHandler(error){
    console.log("Error Occured : "+ error)
    alert("There seems to be a problem with server")
}

function clickHandler() {
    var inputText = textInput.value
    var finalUrl = urlTranslate(inputText)
    fetch(finalUrl)
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated
    })
    .catch(errorHandler)//This is a callback function
    
}

btnTranslate.addEventListener("click",clickHandler)
// var translateButton = document.querySelector("#translate-button");

// translateButton.addEventListener("click", buttonClickHandler)

// // read input
// var translateInput = document.querySelector("#translate-input");

// // show output
// var translateOutput = document.querySelector("#translate-output");

// // var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// var url = "https://api.funtranslations.com/translate/minion.json"

// // REPL URL: https://repl.it/@tanaypratap/lessonfourapi

// function buttonClickHandler(event) {
//     console.log("button clicked");
//     var input = translateInput.value;
//     var finalURL = constructURL(input);
//     console.log(finalURL);
//     fetch(finalURL)
//         .then(response => response.json())
//         .then(json => {
//             translateOutput.innerText = json.contents.translated;
//         })
//         .catch(() => alert("some error occured"))
    
// }

// function constructURL(inputText) {
//     var encodedURI = encodeURI(inputText);
//     return `${url}?text=${encodedURI}`;
// }