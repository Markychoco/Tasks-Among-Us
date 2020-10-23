const admin = document.querySelector('.admin-task');
const adminTask = document.querySelector('.admin-task-shown');
const cafeteria = document.querySelector('.cafeteria-task');
const cafeteriaTask = document.querySelector('.cafeteria-task-shown');
const communications = document.querySelector('.communications-task');
const communicationTask = document.querySelector('.communications-task-shown');
const electrical = document.querySelector('.electrical-task');
const electricalTask = document.querySelector('.electrical-task-shown');
const engines = document.querySelector('.engines-task');
const enginesTask = document.querySelector('.engines-task-shown');
const medbay = document.querySelector('.medbay-task');
const medbayTask = document.querySelector('.medbay-task-shown');
const navigation = document.querySelector('.navigation-task');
const navigationTask = document.querySelector('.navigation-task-shown');
const o2 = document.querySelector('.o2-task');
const o2Task = document.querySelector('.o2-task-shown');
const reactor = document.querySelector('.reactor-task');
const reactorTask = document.querySelector('.reactor-task-shown');
const security = document.querySelector('.security-task');
const securityTask = document.querySelector('.security-task-shown');
const shields = document.querySelector('.shields-task');
const shieldsTask = document.querySelector('.shields-task-shown');
const storage = document.querySelector('.storage-task');
const storageTask = document.querySelector('.storage-task-shown');
const weapons = document.querySelector('.weapons-task');
const weaponsTask = document.querySelector('.weapons-task-shown');



const opened = document.querySelector('.tablet-tasks');
const exitTask = document.querySelector('.exit-task');
const exitTaskCafe = document.querySelector('.exit-task-cafe');
const exitTaskComms = document.querySelector('.exit-task-comms');
const exitTaskElec = document.querySelector('.exit-task-elec');
const exitTaskEng = document.querySelector('.exit-task-eng');
const exitTaskMed = document.querySelector('.exit-task-med');
const exitTaskNav = document.querySelector('.exit-task-nav');
const exitTaskO2 = document.querySelector('.exit-task-o2');
const exitTaskRec = document.querySelector('.exit-task-rec');
const exitTaskSec = document.querySelector('.exit-task-sec');
const exitTaskShield = document.querySelector('.exit-task-shield');
const exitTaskStor = document.querySelector('.exit-task-stor');
const exitTaskWeps = document.querySelector('.exit-task-weps');
const returnMobile = document.querySelector('.returnMobile');

//Task Exit Event Listeners


exitTask.addEventListener('click', () => {
    opened.style.display = 'flex';
    adminTask.style.display = 'none';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskCafe.addEventListener('click', () => {
    opened.style.display = 'flex';
    cafeteriaTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskComms.addEventListener('click', () => {
    opened.style.display = 'flex';
    communicationTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskElec.addEventListener('click', () => {
    opened.style.display = 'flex';
    electricalTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskEng.addEventListener('click', () => {
    opened.style.display = 'flex';
    enginesTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskMed.addEventListener('click', () => {
    opened.style.display = 'flex';
    medbayTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskNav.addEventListener('click', () => {
    opened.style.display = 'flex';
    navigationTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskO2.addEventListener('click', () => {
    opened.style.display = 'flex';
    o2Task.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskRec.addEventListener('click', () => {
    opened.style.display = 'flex';
    reactorTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskSec.addEventListener('click', () => {
    opened.style.display = 'flex';
    securityTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskShield.addEventListener('click', () => {
    opened.style.display = 'flex';
    shieldsTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskStor.addEventListener('click', () => {
    opened.style.display = 'flex';
    storageTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskWeps.addEventListener('click', () => {
    opened.style.display = 'flex';
    weaponsTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});



//Task Open Event Listners

admin.addEventListener('click', () => {
    opened.style.display = 'none';
    adminTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

cafeteria.addEventListener('click', () => {
    opened.style.display = 'none';
    cafeteriaTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

communications.addEventListener('click', () => {
    opened.style.display = 'none';
    communicationTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

electrical.addEventListener('click', () => {
    opened.style.display = 'none';
    electricalTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

engines.addEventListener('click', () => {
    opened.style.display = 'none';
    enginesTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

medbay.addEventListener('click', () => {
    opened.style.display = 'none';
    medbayTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

navigation.addEventListener('click', () => {
    opened.style.display = 'none';
    navigationTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

o2.addEventListener('click', () => {
    opened.style.display = 'none';
    o2Task.style.display = 'block';
    returnMobile.style.display = 'none';
});

reactor.addEventListener('click', () => {
    opened.style.display = 'none';
    reactorTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

security.addEventListener('click', () => {
    opened.style.display = 'none';
    securityTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

shields.addEventListener('click', () => {
    opened.style.display = 'none';
    shieldsTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

storage.addEventListener('click', () => {
    opened.style.display = 'none';
    storageTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

weapons.addEventListener('click', () => {
    opened.style.display = 'none';
    weaponsTask.style.display = 'block';
    returnMobile.style.display = 'none';
});