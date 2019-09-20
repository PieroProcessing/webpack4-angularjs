function stateFactory ($state){
    var service = {
        goTo: goTo,
        getState: getState,
    };
    return service;

    function goTo (state,obj) {
        console.log(state)
        $state.go(state, obj);
    }
    function getState() {
        return $state.current.name;
    }

}
stateFactory.$inject =  ['$state'];

module.exports = function (ngModule) {
    ngModule.factory('stateFactory', stateFactory);
}