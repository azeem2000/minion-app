var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function urlTranslate(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("Error Occured : "+ error)
    alert("There seems to be a problem with server")
}

function clickHandler() {
    var inputText = textInput.value
    fetch(urlTranslate(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)//This is a callback function
    
}

btnTranslate.addEventListener("click",clickHandler)
