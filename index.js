let $ = window.jQuery;

class Deck {

    /**
     * 0:spade
     * 1:heart
     * 2:dia
     * 3:club
     */
    static markimg = ["♠", "♥", "♦", "♣"];
    static numimg = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    static cards = new Array(4);

    initDeck(){
        for(let i = 0; i < 13; i++){
            Deck.cards[i] = new Array(13).fill(1);
        }
    }

    static deal() {
        let index_array = new Array();
        for (let mark = 0; mark < 4; mark++) {
            for (let num = 0; num < 13; num++) {
                if (this.cards[mark][num] === 1) {
                    index_array.push([mark, num]);
                }
            }
        }
        let draw_card = index_array[Math.floor(Math.random() * index_array.length)];
        this.cards[draw_card[0]][draw_card[1]] = 0;
        return draw_card;
    }
}

class Human {
    constructor(id){
        this.id = id;
    }

    getResult(){
        return 1;
    }

    draw(){
        let num = $('#'+this.id).find('div').length + 1;
        let card = Deck.deal();
        let divId = this.id+'-'+num;
        $("#"+this.id).append('<div id="'+divId+'" class="face-up"></div>');
        $("#"+divId).append("<p>mark："+card[0]+"<br>num："+card[1]+"</p>")
    }
}
let deck = new Deck();
deck.initDeck();
let player = new Human("player");
let dealer = new Human("dealer");
let initGame = () => {
    let init = (id) => {
        let card = Deck.deal();
        $(id).append("<p>mark："+card[0]+"<br>num："+card[1]+"</p>");
    };
    
    init("#dealer-1");
    init("#dealer-2");
    init("#player-1");
    init("#player-2");
};
window.onload = () => {
    initGame();
    //setResult("#dealer-result", getHumanResult());
}

let setResult = (human, result) => {
    $(human).text(result);
}

$('#hit').on('click', () => {
    player.draw();
});
