function LoginController (stateFactory, authService){
    var self = this;
    // variable
    self.user = {
        email: null, // 'eve.holt@reqres.in'
        password: null, // 'pistol'
    };

    // functions
    self.goTo = goTo;
    self.submit = submit;


    // declarations
    function goTo (state){
        console.log('state', state);
        stateFactory.goTo(state)
    }
    function submit(formData){
        // if(formData.$invalid)return;
        // console.log('self.user', self.user)
        authService.login(formData).then(
            function success(response) {
                console.log('logged in ',response);
                stateFactory.goTo('dashboard.content');
            },
            function error(error) {
                console.log('error', error)
            }
        )
        
    }
}

LoginController.$inject = ['stateFactory','authService'];

export {LoginController}