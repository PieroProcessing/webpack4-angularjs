function UserDashboardController($element) {
  var self = this;
  //var

  //functions

  // life cycle
  self.$onInit = function () {
    $element.addClass('grid-dashboard');
  }
  self.$onChanges = function (obj) {
  }
  self.$onDestroy = function () {
  }
  self.$postLink = function () {
  }
}

UserDashboardController.$inject = ['$element'];

export { UserDashboardController }