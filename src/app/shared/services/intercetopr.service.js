export default function ($location) {
    return {
        'responseError': (response) => {
           //console.log('responseError', response);
            if (response.status == -1) {
                //console.log('bad');
                $location.path('/api/users/login/');
            }
            return response;
        },
        'response': (response) => {
            //console.log('goodResponse', response);
            let url = response.config.url;
            if(response.data.succeeded) {
                if((url.indexOf("/api/users/login") > -1) || (url.indexOf("/api/users/register") > -1)) {
                    $location.path('/api/users/boards/');
                }
            } 
            return response;
        }   
    };
}