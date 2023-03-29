const express = require('express');
const router = express.Router();
const MapService = require('../service/map.service')

router.get('/googlemaplocation', MapService.getApiData)

module.exports =  router;