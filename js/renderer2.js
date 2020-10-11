// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;
const url = require('url');
inputBox = document.getElementById("inputBox");

document.getElementById("logLink2").addEventListener("click", backToMain);
inputBox.addEventListener("change", logInput)

function backToMain() {
    ipcRenderer.send('message', 'changeToMain')
}

function logInput() {
    console.log(inputBox.value)
    // window.alert("Tour text: " + inputBox.value)
}