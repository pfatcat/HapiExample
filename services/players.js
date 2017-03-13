'use strict';

let roster = [];
let players = {};

function setRoster(){
	
	//this would be a database call or a call to a repository object.
	roster = [
			{volId: 1, firstName: "Josh", lastName: "Dobbs", position : "Quarterback" },
			{volId: 2, firstName: "Jalen", lastName: "Hurd", position: "Running Back" },
			{volId: 3, firstName: "Evan", lastName: "Berry", position: "Defensive Back" },
			{volId: 4, firstName: "Ethan", lastName: "Wolf", position: "Tight End" },
			{volId: 5, firstName: "Curt", lastName: "Maggitt", position: "Linebacker" },
			{volId: 6, firstName: "Jalen", lastName: "Reeves-Maybin", position: "Linebacker" },
			{volId: 7, firstName: "Cameron", lastName: "Sutton", position: "Defensive Back" }
		];
			
	return roster;
}

players.getAllVols = function(){
	
	return roster;
};

players.getAVol = function(_volId){
	
	for(let i = 0; i < roster.length; i++){
		let objVol = roster[i];
		if(objVol.volId === _volId){
			return objVol;
		}
	}
	
	return null;
};

players.updateAVol = function(_volId, newPosition){
	
	var retObj = {success: true, message: "position updated"};
	
	let objVol = roster[_volId - 1];
	
	if(objVol){
		objVol.position = newPosition;		
	}
	else{
		retObj.success = false;
		retObj.message = "Vol player not found";
	}
	
	return retObj;	
};

setRoster();

module.exports = players;