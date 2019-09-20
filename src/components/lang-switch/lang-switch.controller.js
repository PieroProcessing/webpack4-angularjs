function langSwitchController (gettextCatalog, $rootScope){
    var self = this;
    // variables
    self.selectedLang = gettextCatalog.getCurrentLanguage();
    self.languages = [
        'it',
        'en',
        'de',
        'es'
    ]
    // functions
    self.switchLang = switchLang;

    self.$onChanges = ()=>{
    }
    function switchLang() {
        gettextCatalog.setCurrentLanguage(self.selectedLang);
        $rootScope.$broadcast('current-lang', self.selectedLang);
    }
    

}
langSwitchController.$inject = ['gettextCatalog', '$rootScope'];
export {langSwitchController}