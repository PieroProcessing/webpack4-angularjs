function contentService(Api) {
    var service ={
        getUsers: getUsers,
        getColors: getColors
    }
    return service;

    function getUsers(){
        return Api.get('users/?per_page=9');
    }
    function getColors(){
        return Api.get('unknown/?per_page=12');
    }
}
contentService.$inject=['Api'];
export{contentService}