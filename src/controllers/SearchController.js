const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        // buscar todos os devs num raio de 10 km;
        const { latitude, longitude, techs } = request.query;
        // converte array em string
        const techsArray = parseStringAsArray(techs);
        // filtrar port techs
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // busca usuários com techs dentro de
            },
            location: {
                $near: { // encontra perto de uma localização
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000
                },
            }
        })

        return response.json({ devs });
    }
};