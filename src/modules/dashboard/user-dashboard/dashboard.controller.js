function UserDashboardController($element) {
    var self = this;
    //var
    
    //functions

    // life cycle
    self.$onInit = function() {
        $element.addClass('grid-dashboard');
      };
}
UserDashboardController.$inject = ['$element'];

export {UserDashboardController}