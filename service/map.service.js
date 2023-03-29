const { createClient } = require('@google/maps');
require('dotenv').config();
const apiKey = process.env.API_KEY;
const client = createClient({ key: apiKey, Promise: Promise });

// const location = '30.7046, 76.7179'; // latitude,longitude
const radius = 5000; // in meters

MapService = {
    getApiData: async (req, res) => {
        const data = await req.headers;
        client.placesNearby({
            location: { lat: data.latitude, lng: data.longitude, cityName: data.cityName },
            radius: radius,
          }).asPromise().then((response) => {
            res.send({status: 200, data: response})
          }).catch((err) => {
            res.send({status: 200, error: err})
          });
    }
}


module.exports = MapService;