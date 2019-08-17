function cardController() {
    var self = this;
    // variables
    var height = [];
    var width = [];

    // functions
    self.getRandomNumber = getRandomNumber;
    self.getRandomStyle = getRandomStyle;
    self.getSpan = getSpan;
    self.showSingleItem = showSingleItem;
    
    
    // declarations
    function getRandomNumber(minimum,maximum) {
        height.push(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
        width.push(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
    }
    function getRandomStyle(color,index) {
        var style =  {
            // 'width': width[index]+'px',
            // 'height': height[index]+'px',
            'background-color': color,
        }
        return style;
    }
    function getSpan(index) {
        var style ={
            'grid-row': 'span ' + Math.floor(width[index]/40),
            'grid-column': 'span ' + Math.floor(height[index]/40) 
        }
        console.log(style);

        // return style;
    }
    function showSingleItem(selected) {
        self.isSelected({item: selected})
    }
}

cardController.$inject = [];

export {cardController}