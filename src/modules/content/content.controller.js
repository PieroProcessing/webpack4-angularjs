function ContentController (Api){
    var self = this;
    console.log('controller called')
    // variables
    self.listItems = [];

    // functions
    self.getInitData = getInitData;
    self.showSingleItem = showSingleItem;

    // life cycle
    self.$onInit = function () {
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
        Api.get('users?per_page=10').then(
            function success(response) {
                self.listItems = response.data;
                console.log('response', response)
            },
            function error(error) {
                console.log('error', error);
            }
        )
    }

    function showSingleItem(id) {
        console.log('show single item: ', id);
    }
}

ContentController.$inject = ['Api'];

export {ContentController}