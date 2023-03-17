const axios = require('axios');

const animeinfo = (req, res) => {
    
    axios.get('https://kitsu.io/api/edge/anime/')
        .then(response => {
            console.log(response.data)
            res.status(200).json({success: true, ...response.data})
        })
        .catch(error => {
            res.status(500).json({success: false, message: error.message})
        })

}



module.exports = {animeinfo}