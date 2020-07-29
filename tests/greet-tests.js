describe("Greets user in the language they've selected", function(){
    it('should greet user in English if they selected English', function(){
        var greetingsFunction = greetFactory();
        var greetingsFactory = greetingsFunction.languageSelector('Leroy', 'English');

        assert.equal(greetingsFactory, 'Hello, Leroy!:)');
    });

it('should greet user in Latin if they seletcted Latin', function(){
    var greetingsFunction = greetFactory();
    var greetingsFactory = greetingsFunction.languageSelector('Jamie', 'Latin');

    assert.equal(greetingsFactory, 'Salve, Jamie!:)');
});

it('should greet user in Dutch if they selected Dutch', function(){
    var greetingsFunction = greetFactory();
    var greetingsFactory = greetingsFunction.languageSelector('Jody', 'Dutch');
    
    assert.equal(greetingsFactory, 'Hallo, Jody!:)');
});
});

describe("Alerts user if they haven't entered their name, selected a language or both", function(){
    it("should alert user if they haven't entered their name", function(){
    var greetingsFunction = greetFactory();
    var greetingsFactory = greetingsFunction.alertUser('', 'Dutch');

    assert.equal(greetingsFactory, 'enter your name');
});

it("should alert user if they haven't selected a language", function(){
    var greetingsFunction = greetFactory();
    var greetingsFactory = greetingsFunction.alertUser('Ammaar', '');

    assert.equal(greetingsFactory, 'select language');
});

it("should alert user if they haven't entered their name or selecte a language", function(){
    var greetingsFunction = greetFactory();
    var greetingsFactory = greetingsFunction.alertUser('', '');

    assert.equal(greetingsFactory, 'select a language & enter your name')

});
});

describe('Counter', function(){
    it('should count 5 names', function(){
        var greetingsFunction = greetFactory();
        var greetingsFactory = greetingsFunction.countNames({'Troy': 1, 'Hanna': 1, 'Finn': 1, 'Jake': 1, 'Dorothy': 1});

        assert.equal(greetingsFactory, 0)
    });

    it('should only increment once if the name has already been entered', function (){
        var greetingsFunction = greetFactory();

        greetingsFunction.namesX('Nykio', 'English');
        greetingsFunction.namesX('Nyiko', 'Dutch');
        greetingsFunction.namesX('Nyiko', 'Latin');

        assert.equal(greetingsFunction.countNames(), 2);
    });

    it('should stay 0 if no name has been entered', function(){
        var greetingsFunction = greetFactory();

        greetingsFunction.namesX('', '');

        assert.equal(greetingsFunction.countNames(), 0)
    })
});

