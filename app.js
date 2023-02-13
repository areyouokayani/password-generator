const passwordEl = document.querySelector("#password");
const lengthEl = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generate = document.querySelector("#generate");

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@£$()#%&";

function generatePassword() {
  let password = "";
  let length = lengthEl.value;
  let chars = "";

  chars += uppercase.checked ? uppercaseCharacters : "";
  chars += lowercase.checked ? lowercaseCharacters : "";
  chars += numbers.checked ? numberCharacters : "";
  chars += symbols.checked ? symbolCharacters : "";

  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  passwordEl.value = password;
}

generate.addEventListener("click", generatePassword);
