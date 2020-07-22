function greetFactory(greetX){
    var greetName = greetX || {};

    function languageSelector(userCheck, selectLang){
        if(selectLang === 'English'){
            return 'Hello, ' + userCheck + '!' + ':)';
        }
        else if(selectLang === 'Latin'){
            return 'Salve, ' + userCheck + '!' + ':)';
        }
        else if(selectLang === 'Dutch'){
            return 'Hallo, ' + userCheck + '!' + ':)';
        }
    }

    function namesX(enterName){
        if(enterName){
            if(greetName[enterName] === undefined){
                greetName[enterName] = 0;
            }
        }
    }

    function alertUser(greetingsX, solidGreet){
        if(!greetingsX && !solidGreet){
            return 'select a language & enter your name';
        }
        else if(!greetingsX){
            return 'enter your name';
        }
        else if(!solidGreet){
            return 'select language';
        }
    }

    function displayName(){
        return greetName;
    }

    function countNames(){
        return Object.keys(greetName).length;
    }

    return {
        languageSelector,
        namesX,
        alertUser,
        displayName,
        countNames
}
    }
