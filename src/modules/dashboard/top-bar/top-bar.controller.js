function topbarController(stateFactory) {
    var self = this;

    //functions
    self.goTo = goTo;

    // life cycle
    self.$onInit = () => {
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

topbarController.$inject = ['stateFactory'];

export { topbarController }