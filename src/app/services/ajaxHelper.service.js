const ajaxHelper = {
    getAllPosts: function (url) {
        if(url === undefined || url == null){
            url = 'https://jsonplaceholder.typicode.com/posts';
        }

        var promise = new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                // console.log(response);
                response.json().then((data) => {
                    resolve(data);
                }, (err) => {
                    reject("Parsing Error...");
                })
            }, (err) => {
                reject("Communication Error...");
            })
        });
        return promise;
    }
};

export default ajaxHelper;