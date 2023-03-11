const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord1 = document.querySelector("#password-1")
let passWord2 = document.querySelector("#password-2")
let copyPassword1 = document.querySelector("#copy-password-1")
let copyPassword2 = document.querySelector("#copy-password-2")
let genPass = document.querySelector("#gen-pass")

let passwordLength = 15

genPass.addEventListener("click", renderPasswords)

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter() 
    }
    return randomPassword
}

function renderPasswords() {
    let firstPassword = generatePasswords()
    let secondPassword = generatePasswords()

    passWord1.textContent = firstPassword
    passWord2.textContent = secondPassword
}

copyPassword1.addEventListener("click", copyFirstPassword())
copyPassword2.addEventListener("click", copySecondPassword())

function copyFirstPassword() {
    navigator.clipboard.writeText(passWord1.textContent)
}
function copySecondPassword() {
    navigator.clipboard.writeText(passWord2.textContent)
}

