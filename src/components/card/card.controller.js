import { Z_BLOCK } from "zlib";

function cardController() {
    var self = this;
    // variables


    // functions
    self.getRandomNumber = getRandomNumber;
    self.getColor = getColor;
    self.showSingleItem = showSingleItem;
    
    
    // declarations
    function getRandomNumber(minimum,maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
    function getColor(i) {
        var style ={
            'display': 'flex',
            'background-color': self.itemList[i].color,
        }
        return style;
    }
    function showSingleItem(selected) {
        self.isSelected({item: selected})
    }
}

cardController.$inject = [];

export {cardController}