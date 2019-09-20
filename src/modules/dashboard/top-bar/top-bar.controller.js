function topbarController(stateFactory, $element, authService) {
    var self = this;

    //functions
    self.goTo = goTo;
    self.logout = logout;

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
    function logout() {
        authService.logout();
    }
    function goTo(state) {
        stateFactory.goTo(state);
    }
}

topbarController.$inject = ['stateFactory', '$element', 'authService'];

export { topbarController }