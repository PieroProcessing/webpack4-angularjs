function LoginController (stateFactory){
    var self = this;
    // variable
 
    // functions
    self.goTo = goTo;

    // declarations
    function goTo (state){
        console.log('state', state);
        stateFactory.goTo(state)
    }

}

LoginController.$inject = ['stateFactory'];

export {LoginController}