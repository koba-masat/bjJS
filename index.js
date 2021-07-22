let $ = window.jQuery;

class Deck {

    /**
     * 0:spade
     * 1:heart
     * 2:dia
     * 3:club
     */
    constructor() {
        var markimg = ["♠", "♥", "♦", "♣"];
        var numimg = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.cards = new Array(4);
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i] = new Array(13).fill(1);
        }
    }

    draw() {
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

let deck = new Deck();

let deal = (id) => {
    let card = deck.draw();
    $(id).append("mark："+card[0]+"<br>num："+card[1]);
}

window.onload = () => {
    deal("#d-1");
    deal("#d-2");
    deal("#p-1");
    deal("#p-2");
}

$('#hit').on('click', () => {
    $("#player").append('<div id="p-3" class="face-up"></div>');
    deal("#p-3");
});