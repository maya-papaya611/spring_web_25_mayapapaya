alert('im a convicted murderer');

function askSSS() {
    //the variable below is for the web browser to populate the answer on the webpage
    var nameReturn = document.getElementById('ask-name');
    //the name variable is for the prompt box to appear and the user can type their name
    var name = prompt('please enter your social security number' , 'HERE'); if (socialsecuritynumber == '' || 'HERE') {
        alert('please try again'); 
    } else {
    nameReturn.innerHTML = 'now that we have your social security number:' + socialsecuritynumber + ', we can start the process of finding some suitable victims for you!';

}
}

function askQuestion() {
    var p = prompt('how should you go about finding a person with no close familial ties or friends so you can smoothly rid their filth from the world?');

    if (p != null) {
        document.getElementById
        ('question').innerHTML = 'ooOh!! lOoKs Like yOu are An IncOmpeteNT litTle twERp. Ones like you incompent fools should be eliminated. Answers such as' + p + 'are dearth of reason and need not be considered by the greatest of bloodcallers. Do not come back to us until you have enhanced your knowledge in the library of death. NOW GO! IF YOU COME BACK AND FAIL AGAIN, COUNTLESS BLOODY HORRORS AWAIY YOU! RAGGSGHSHHH!!!*demonic noises drive you panicked. you resolve to do better.*';
    }
}
function showImg(){
