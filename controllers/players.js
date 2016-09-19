'use strict';

var playerController = {};

const playerService = require("../services/players");

playerController.getAllVols = function (request, reply) {
		let vols = playerService.getAllVols();
        return reply(vols);
    };
		
		
playerController.getAVol = function (request, reply) {

		const volId = parseInt(request.payload.volId);
		
		var masterChange1 = "don't want this";
					
		if(!volId){
			let retObj = {volId: -1, message: "Invalid volId"};
			return reply(retObj);
		}
	
		let vol = playerService.getAVol(volId);
		
		if(!vol){
			vol = {volId: -1, message: "vol not found"};
		}

		
		var masterChange2 = "we want this one";
		
        return reply(vol);
  };
	
	
module.exports = playerController;