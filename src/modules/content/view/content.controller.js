function ContentController (Api, $element){
    var self = this;
    console.log('controller called')
    // variables
    self.listItems = [];
    self.isSelected = true;
    self.selectedItem = {};

    // functions
    self.getInitData = getInitData;
    self.showSingleItem = showSingleItem;

    // life cycle
    self.$onInit = function () {
        $element.addClass('grid-dashboard_main');
        getInitData();
    }
    self.$onChanges = function (obj) {
    }
    self.$onDestroy = function () {
    }
    self.$postLink = function () {
    }
    // declarations
    function getInitData() {
        var endpoint = (self.template == 'users')? 'users': 'unknown';
        Api.get(endpoint + '?per_page=9').then(
            function success(response) {
                self.listItems = response.data;
                console.log('response', response)
            },
            function error(error) {
                console.log('error', error);
            }
        )
    }

    function showSingleItem(item) {
        console.log('show single item: ', item);
        self.isSelected = !self.isSelected;
        self.selectedItem = item
    }
}

ContentController.$inject = ['Api', '$element'];

export {ContentController}