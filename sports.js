const allLeagues = () => {
fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
.then(res => res.json())
.then(data => displayLeagues(data.leagues))

}
allLeagues();

const displayLeagues = leagues => {
const showLeague = document.getElementById('display-league');
for(league of leagues){
    // console.log(league);
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML=`
<div class="card h-100 gx-4 border border-2 border-primary rounded-3">
            <div class="card-body">
              <h5 class="card-title text-center">Id: ${league.idLeague}</h5>
              <h3 class="card-title text-center text-danger fw-bold">${league.strLeague}</h3>
              <p class="card-text text-center">Sport Type: ${league.strSport}</p>
            </div>
            <button onclick="showTeams(${league.idLeague})" type="button" class="btn btn-outline-primary w-50 mx-auto mb-5">Show Details</button>
            
          </div>

`;
showLeague.appendChild(div);


}

}

const showTeams = (id) => {
const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`;
fetch(url)
.then(res => res.json())
.then(data => showTeamDetails(data.teams))

}

const showTeamDetails = allTeams => {

console.log(allTeams);

const displayTeam = document.getElementById('display-team');
for(team of allTeams){

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card p-4  border border-2 border-primary rounded-3" style="width: 18rem;">
    <h4 class="text-center fw-bold">${team.strAlternate}</h4>
    <h5 class="text-center">Shortname: ${team.strTeamShort}</h5>
  <div class="card-body">
    <p class="card-text text-center text-secondary">${team.strDescriptionEN.slice(0,150)}</p>
  </div>
  <a href="${team.strWebsite}" class="mx-auto mb-4 text-info">Visit Website</a>
</div>
    
    
    `;
    displayTeam.appendChild(div);
}

}