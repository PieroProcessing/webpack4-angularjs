function ContentController(contentService, $element /*, resolveList*/) {
    var self = this;

    // variables
    self.listItems = [];//resolveList.data;
    // console.log('resolveList', self.listItems);

    self.isSelected = false;
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
        var call = (self.template == 'users') ? contentService.getUsers() : contentService.getColors();
        call.then(
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

ContentController.$inject = ['contentService', '$element'/*, 'resolveList'*/];

// ContentController.resolve = {
//     resolveList: ['contentService', '$location', (contentService, $location) => {
//         var template = $location.path().replace(/\//g, "");
//         console.log('template', template)
//         var call = (template == 'users') ? contentService.getUsers() : contentService.getColors();
//         console.log('list', call);
//         return call;
//     }]
// }
export { ContentController }