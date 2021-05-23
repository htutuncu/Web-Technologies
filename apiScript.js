fetch("https://api-football-beta.p.rapidapi.com/players/topscorers?season=2020&league=39", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d12a3425edmsh03b02b43228ed5ap12d3e5jsne4e10cdd69e3",
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
  
  let output = "<table><tr><th>Futbolcu</th><th>Gol Sayısı</th><tr>";
  for(var i=0; i<20; i++){
    output += `<tr><td> ${response.response[i].player.name}</td>  <td style="text-align: center"> ${response.response[i].statistics[0].goals.total}</td></tr>  `
  }
  output += "</table>";

  document.getElementById("output").innerHTML += output;
})
.catch(err => {
	console.error(err);
});