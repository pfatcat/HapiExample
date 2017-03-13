'use strict';

var playerController = {};

const playerService = require("../services/players");

playerController.getAllVols = function (request, reply) {
		let vols = playerService.getAllVols();
        return reply(vols);
    };
		
		
playerController.getAVol = function (request, reply) {

		const volId = parseInt(request.payload.volId);
		
		if(!volId){
			let retObj = {volId: -1, message: "Invalid volId"};
			return reply(retObj);
		}
	
		let vol = playerService.getAVol(volId);
		
		if(!vol){
			vol = {volId: -1, message: "vol not found"};
		}
		
        return reply(vol);
  };
  
  
playerController.updateAVol = function (request, reply) {

		const volId = parseInt(request.payload.volId);
		const newPosition = request.payload.newPosition
	
		
		if(!volId){
			let retObj = {volId: -1, message: "Invalid volId"};
			return reply(retObj);
		}
	
		let retObj = playerService.updateAVol(volId, newPosition);
			
        return reply(retObj);
  };
	
	
module.exports = playerController;