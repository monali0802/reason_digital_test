const axios = require('axios');

//get all posts or post by id
exports.allPostOrPostFromId = (req, res) => {
    var url = 'https://dinotest.wpengine.com/wp-json/wp/v2/posts';
    if(req.params.id && req.params.id != '') {
        url = 'https://dinotest.wpengine.com/wp-json/wp/v2/posts/' + req.params.id;
    }
    axios.get(url)
    .then(response => {
        res.status(200).send(response.data);
    }).catch(error => {
        res.status(200).send(error);
    });
};
