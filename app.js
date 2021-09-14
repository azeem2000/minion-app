var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function urlTranslate(inputText){
    return serverURL+"?"+"text="+ inputText
}

function errorHandler(error){
    console.log("Error Occured : "+ error)
    alert("There seems to be a problem with server")
}

function clickHandler() {
    var inputText = textInput.value
    var finalUrl = urlTranslate(inputText)
    fetch(urlTranslate(finalUrl))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated
    })
    .catch(errorHandler)//This is a callback function
    
}

btnTranslate.addEventListener("click",clickHandler)
