'use strict';

let players = {};

function getRoster(){
	
	//this would be a database call or a call to a repository object.
	let roster = [
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
	
	return getRoster();
};

players.getAVol = function(_volId){
	
	let roster = getRoster();
	
	for(let i = 0; i < roster.length; i++){
		let objVol = roster[i];
		if(objVol.volId === _volId){
			return objVol;
		}
	}
	
	return null;
};

module.exports = players;