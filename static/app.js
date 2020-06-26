

// Build the deck
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();

    function createDeck()
    {
        deck = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    weight = 10;
                // Ace can also be one. IMPLEMENT
                if (values[i] == "A")
                    weight = 11; 
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }

// shuffle the cards
function shuffle()
    {
        // for 1000 turns
        // switch the values of two random cards
        let cut = 1000
        for (let i = 0; i < cut; i++)
        {
            let loc1 = Math.floor((Math.random() * deck.length));
            let loc2 = Math.floor((Math.random() * deck.length));
            let tmp = deck[location1];

            deck[loc1] = deck[location2];
            deck[loc2] = tmp;
        }
    }

// create players
var players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(var i = 1; i <= num; i++)
        {
            var hand = new Array();
            var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }
// want to prgram in AI as well as house as well as user






// after game, save scores in json and present bar chart of top scores



// below game feature. Will be interactive. 





