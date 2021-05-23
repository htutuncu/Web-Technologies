fetch("https://api-football-beta.p.rapidapi.com/players/topscorers?season=2020&league=39", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d12a3425edmsh03b02b43228ed5ap12d3e5jsne4e10cdd69e3",
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
  for(var i=0; i<20; i++){
    console.log(response.response[i].player.name);
    console.log(response.response[i].statistics[0].goals.total);
  }

  let output = "<ol>";
  for(var i=0; i<20; i++){
    output += `<li> ${response.response[i].player.name}  - ${response.response[i].statistics[0].goals.total}`
  }
  output += "</ol>";

  document.getElementById("output").innerHTML += output;
	  
})
.catch(err => {
	console.error(err);
});