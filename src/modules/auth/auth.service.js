function authService(API_ROOT, $cookies, $state, $q, $http, stateFactory) {
    var self = this;

    self.login = login;

    function request(args) {
        // Let's retrieve the token from the cookie, if available
        if (args.url.localeCompare("/login"))
            $cookies.remove("token");
        else
            $cookies.token = $cookies.get("token");
        if ($cookies.token) {
            $http.defaults.headers.common.Authorization = 'Token ' + $cookies.token;
        }
        var deferred = $q.defer(),
            url = API_ROOT + args.url,
            method = args.method || "GET",
            data = args.data || {};

        // console.log(url);
        // console.log(data);
        // Fire the request, as configured.
        $http({
            url: url,
            withCredentials: false,
            method: method.toUpperCase(),
            headers: { 'X-CSRFToken': $cookies['csrftoken'] },
            data: data
        }).then(
            function success(response) {
                console.log('request', response);
                deferred.resolve(response.data, response.status);
            },
            function error(response) {
                //console.log("error syncing with: " + url);
                if (!($state.includes('changePassword')) && !($state.includes('forgotPassword')))
                    stateFactory.goTo('login');
                // Set request status
                if (response.data) {
                    response.data.status = response.status;
                }
                if (response.status == 0) {
                    if (response.data == "") {
                        response.data = {};
                        response.data['status'] = 0;
                        response.data['non_field_errors'] = ["Could not connect. Please try again."];
                    }
                    // or if the data is null, then there was a timeout.
                    if (response.data == null) {
                        // Inject a non field error alerting the user
                        // that there's been a timeout error.
                        response.data = {};
                        response.data['status'] = 0;
                        response.data['non_field_errors'] = ["Server timed out. Please try again."];
                    }
                }
                deferred.reject(response.data, response.status, response.headers, response.config);
            });
        return deferred.promise;
    }
    function login(data) {
        var deferred = $q.defer();
        request({
            'method': "POST",
            'url': "login/",
            'data': {
                'email': data.email,
                'password': data.password
            }
        }).then(
            function success(data) {
                // console.log('on login service auth', data);
                $cookies.remove("token");
                $http.defaults.headers.common.Authorization = 'Token ' + data.token;
                $cookies.token = data.token;
                $cookies.put("token", data.token);
                self.authenticated = true;
                // $rootScope.$broadcast("self..logged_in", data);
                // console.log('$cookies at api service loaded', $cookies.getAll())
                deferred.resolve(data);
              
            },
            function error(error) {   // On failure
                deferred.reject(error);
            }
        );
        return deferred.promise;

    }
}
authService.$inject = ['API_ROOT', '$cookies', '$state', '$q', '$http', 'stateFactory'];
export { authService }