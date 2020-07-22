function greetFactory(greetX){
  var greetName = greetX || {};

  function userInput(userCheck, selectLang){
    if(selectLang === 'English'){
            return 'Hello, ' + userCheck + '!' + ' :)';
          }
          else if(selectLang === 'Latin'){
            return 'Salve, '+ userCheck + '!'  + ' :)';
          }
          else if(selectLang === 'Dutch'){
            return 'Hallo, ' + userCheck + '!' + ' :)';
          }
        }
        function setNames(enterName){
          if(enterName){
            if(greetName[enterName] === undefined){
              greetName[enterName] = 0;
            }
          }
        }

        function errorHandler(greetingsX, solidGreet){
          if(!greetingsX && !solidGreet){
            return 'select a language and enter your name';
          }
          else if(!greetingsX){
            return 'enter your name';
          }else if(!solidGreet){
            return 'select a language';
          }
        }

        function getNames(){
          return greetName;
        }

        function getCounter(){
          return Object.keys(greetName).length;
        }

        return {
          userInput,
          setNames,
          getCounter,
          getNames,
          errorHandler
        }
      }
