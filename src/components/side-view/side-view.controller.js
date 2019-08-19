function sideviewController($element) {
    var self = this;
    self.item = {};

    self.$onChanges = () => {

        self.item = (!!self.selected)? self.selected : null;

        console.log('selected', self.item)
    }
    self.$onDestroy = () => {
        
        $element.removeClass('expand').addClass('collapse');
        angular.element('.grid-dashboard_main').removeClass('grid-expanded').addClass('grid-collapse');
        console.log('on destroy')
    }
    self.$postLink = () => {
        angular.element('.grid-dashboard_main').removeClass('grid-collapse').addClass('grid-expanded');
        $element.addClass('expand').removeClass('collapse');
        console.log('on post link')
    }
}
sideviewController.$inject = ['$element'];
export { sideviewController }