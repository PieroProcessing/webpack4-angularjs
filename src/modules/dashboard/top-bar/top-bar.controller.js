function topbarController(stateFactory, $element) {
    var self = this;

    //functions
    self.goTo = goTo;

    // life cycle
    self.$onInit = () => {
        $element.addClass('grid-topbar');
    }
    self.$onChanges = (obj) => {
    }
    self.$onDestroy = () => {
    }
    self.$postLink = () => {
    }
    //declarations
    function goTo(state){
        stateFactory.goTo(state);
    }
}

topbarController.$inject = ['stateFactory', '$element'];

export { topbarController }