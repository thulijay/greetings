var greetBtn = document.querySelector('.langButton')
var enterName = document.querySelector('.enterName')
var counterX = document.querySelector('.greetCount')
var greetMsg = document.querySelector('.greetClass')
var resetX = document.querySelector('.restBtn')

var greetLang;

if (localStorage['name']){
  greetLang = JSON.parse(localStorage.getItem('name'));
}

var langGreet = greetFactory(greetLang);

function greetUser(){
  var greetingsLang = document.querySelector('input[name="solidGreet"]:checked');

  var greetingsCheck = '';

  if(greetingsLang){
    greetingsCheck = greetingsLang.value;
  }

  var userCheck = enterName.value;

  if(greetingsCheck && userCheck){
    var checkName = userCheck.charAt(0).toUpperCase() + userCheck.slice(1).toLowerCase();

    greetMsg.innerHTML = langGreet.languageSelector(checkName, greetingsCheck);
    langGreet.namesX(checkName);
    localStorage['name'] = JSON.stringify(langGreet.displayName());
    counterX.innerHTML = langGreet.countNames();
  }
  else{
    greetMsg.innerHTML = langGreet.alertUser(checkName, greetingsCheck);
  }
}

greetBtn.addEventListener('click', greetUser);
window.addEventListener('load', function(){
  counterX.innerHTML = langGreet.countNames();
});

function resetBtn(){
  localStorage.clear();
  location.reload();
}
resetX.addEventListener('click', resetBtn);
