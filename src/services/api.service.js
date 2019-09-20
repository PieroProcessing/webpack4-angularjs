function apiService(API_ROOT, $q, $http, $location, stateFactory, $cookies) {
    var self = this;

    var token = null;
 
    var service = {
        get: get,
        post: post,
        put: put,
    }
    return service;

    function get(endpoint) {
        init();
        var deferred = $q.defer();
        var url = API_ROOT + endpoint;
        $http({
            method: 'GET',
            url: url,
            headers: {
                "Authorization": token
            },
            cache: true
        }).then(
            function success(response) {
                if (angular.isObject(response.data))
                    deferred.resolve(response.data);
                else
                    deferred.reject();
            },
            function error(error) {
                deferred.reject(error);
            }
        )
        return deferred.promise;
    }
    function init() {
        // console.log('$cookies at api service loaded', $cookies.getAll())
        if (!$cookies.get('token')) $location.path('/');
        else token = "Token " + $cookies.get('token');
        // console.log('token', token);
    }
    function post() {
        init();
        var deferred = $q.defer();
        var url = API_ROOT + endpoint;
        $http({
            method: 'POST',
            url: url,
            headers: {
                "Authorization": token
            },
            cache: true
        }).then(
            function success(response) {
                if (angular.isObject(response.data))
                    deferred.resolve(response.data);
                else
                    deferred.reject();
            },
            function error(error) {
                deferred.reject(error);
            }
        )
        return deferred.promise;
    }
    function put() {
        init();
        var deferred = $q.defer();
        var url = API_ROOT + endpoint;
        $http({
            method: 'PUT',
            url: url,
            headers: {
                "Authorization": token
            },
            cache: true
        }).then(
            function success(response) {
                if (angular.isObject(response.data))
                    deferred.resolve(response.data);
                else
                    deferred.reject();
            },
            function error(error) {
                deferred.reject(error);
            }
        )
        return deferred.promise;
    }

}
apiService.$inject = ['API_ROOT', '$q', '$http', '$location', 'stateFactory', '$cookies'];

module.exports = (ngModule) => {
    ngModule.service('Api', apiService);
}