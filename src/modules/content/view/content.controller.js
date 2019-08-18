function ContentController(contentService, $element /*, resolveList*/) {
    var self = this;

    // variables
    self.listItems = [];//resolveList.data;
    // console.log('resolveList', self.listItems);

    self.isSelected = false;
    self.selectedItem = null;

    // functions
    self.getInitData = getInitData;
    self.showSingleItem = showSingleItem;
    self.isUser = isUser;

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
    function isUser() {
        return self.template == 'users';
    }
    function showSingleItem(item) {
        console.log('show single item: ', item);
     
        self.isSelected = !self.isSelected;
        if(self.isSelected){
            $element.addClass('grid-expanded');
            $element.removeClass('grid-collapse');
            self.selectedItem = item
        }else{    
            $element.addClass('grid-collapse');
            $element.removeClass('grid-expanded');
            self.selectedItem = null;
        }
     
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