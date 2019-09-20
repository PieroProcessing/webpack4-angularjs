function LoginController (stateFactory, authService, $cookies){
    var self = this;
    // variable
    self.user = {
        email: null, // 'eve.holt@reqres.in'
        password: null, // 'pistol'
    };

    // functions
    self.submit = submit;


    // declarations
    function goTo (state){
        // console.log('state', state);
        stateFactory.goTo(state)
    }
    function submit(formData){
        // if(formData.$invalid)return;
        // console.log('self.user', self.user)
        authService.login(formData).then(
            function success(response) {
                // console.log('logged in ',response);
                // console.log('$cookies at api service loaded', $cookies.getAll())
                goTo('dashboard.users');
            },
            function error(error) {
                console.log('error', error)
            }
        )
        
    }
}

LoginController.$inject = ['stateFactory','authService', '$cookies'];

export {LoginController}