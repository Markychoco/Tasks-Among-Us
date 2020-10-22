randomizeCrewmate();

function randomizeCrewmate() {
    const crewmateColors = [['#8a071d', '#d9041a'], ['#09158E', '#132ED1'],['#0A4D2E', '#117F2D'], ['#AB2BAD', '#ED54BA'], ['#B33E15', '#EF7D0D'], ['#C28722', '#F5F557'], ['#1E1F26', '#3F474E'], ['#8394BF', '#D6E0F0'], ['#3B177C', '#6B2FBB'], ['#5E2615', '#71491E'], ['#24A8BE', '#38FEDC'], ['#15A742', '#50EF39']]
    let crewmateRandom = crewmateColors[Math.floor(Math.random() * crewmateColors.length)];

    const body = document.querySelector('.body').style.backgroundColor = crewmateRandom[0];
    const backpack = document.querySelector('.backpack').style.backgroundColor = crewmateRandom[0];
    const legLeftUnder = document.querySelector('.leg-left-under').style.backgroundColor = crewmateRandom[0];
    const legLeft = document.querySelector('.leg-left').style.backgroundColor = crewmateRandom[0];
    const legRightUnder = document.querySelector('.leg-right-under').style.backgroundColor = crewmateRandom[0];
    const legRight  = document.querySelector('.leg-right').style.backgroundColor = crewmateRandom[0];
    
    const bodyLight = document.querySelector('.body-light-part').style.backgroundColor = crewmateRandom[1];
    const backpackLight = document.querySelector('.backpack-light-part').style.backgroundColor = crewmateRandom[1];

    setTimeout(randomizeCrewmate, 40000);
}