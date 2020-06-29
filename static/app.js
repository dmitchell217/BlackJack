

// Build the deck
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
var record = new Array();

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
            // console.log(card)
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
            let tmp = deck[loc1];

            deck[loc1] = deck[loc2];
            deck[loc2] = tmp;
        }
    }

// create players
const playerNum = 2
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

function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML ='Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

function updateDeck() {
    document.getElementById("deckcount").innerHTML = deck.length
}

function startblackjack()
    {
        document.getElementById('btnStart').value = 'Restart';
        document.getElementById("status").style.display="none";
        // deal 2 cards to every player object
        currentPlayer = 0;
        createDeck();
        shuffle();
        createPlayers(playerNum);
        createPlayersUI();
        dealHands();
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

function dealHands()
    {
        // alternate handing cards to each player
        // 2 cards each
        for(var i = 0; i < 2; i++)
        {
            for (var x = 0; x < players.length; x++)
            {
                var card = deck.pop();
                players[x].Hand.push(card);
                renderCard(card, x);
                updatePoints();
            }
        }

        updateDeck();
    }
function renderCard(card, player)
    {
        var hand = document.getElementById('hand_' + player);
        hand.appendChild(getCardUI(card));
    }

function getCardUI(card)
    {
        var el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = card.Suit + ' ' + card.Value;
        return el;
    }
var currentPlayer = 0;

function updatePoints() {
    players[currentPlayer].Points = 0
    for (i=0; i < players[currentPlayer].Hand.length; i++){
        players[currentPlayer].Points += players[currentPlayer].Hand[i].Weight
    document.getElementById(`points_${currentPlayer}`).innerHTML = players[currentPlayer].Points
}
};

function hitMe()
    {
        // pop a card from the deck to the current player
        // check if current player new points are over 21
        var card = deck.pop();
        players[currentPlayer].Hand.push(card);
        renderCard(card, currentPlayer);
        updatePoints();
        check();
        updateDeck();
    }

function check(){
    idx = currentPlayer
    for (i=0; i < players[idx].Hand.length; i++){
        if (players[idx].Hand[i].value == 'A' && players[idx].points > 21){
            players[idx].points -= 10
        }
    }
    if (players[idx].points > 21){
        console.log('You lose')
    }
    } 
function stay()
    {
        // move on to next player, if any
        if (currentPlayer != players.length-1) {
            document.getElementById('player_' + currentPlayer).classList.remove('active');
            currentPlayer += 1;
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        else {
            end();
        }
    }

    function end()
    {
        var winner = -1;
        var score = 0;

        for(var i = 0; i < players.length; i++)
        {
            if (players[i].Points > score && players[i].Points < 22)
            {
                winner = i;
            }

            score = players[i].Points;
        }
        if (winner == -1) {document.getElementById('status').innerHTML = "No Winner, play again"}
        else {document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID}
        document.getElementById("status").style.display="block";
        record.push(winner)
    }

// test code
// createDeck()
// console.log(deck[0])
// shuffle()
// console.log(deck[0])
// hand_0 = document.getElementById('`hand_${0}`')
// console.log(hand_0)



// want to prgram in AI as well as house as well as user



// logic is near complete. need to develop function to find winner 
// 4 users: human. aggressive AI, passive AI, intermediate AI
// Create a UI

// after round, save winner in list and add bar chart at the bottom
// Make interactive if time afterwards
// add betting if possible





