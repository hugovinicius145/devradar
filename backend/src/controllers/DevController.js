const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    // Funcao de listar os usuario do banco
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    // Funcao de criar o Dev no banco
    async store(request, response) {
        const { github_username, techs, latitude, longitude} = request.body;

        //Busca se ja existe dev no banco
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        return response.json(dev);
    }
};