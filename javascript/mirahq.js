const admin = document.querySelector('.admin-task');
const adminTask = document.querySelector('.admin-task-shown');
const cafeteria = document.querySelector('.cafeteria-task');
const cafeteriaTask = document.querySelector('.cafeteria-task-shown');
const communications = document.querySelector('.communications-task');
const communicationTask = document.querySelector('.communications-task-shown');
const medbay = document.querySelector('.medbay-task');
const medbayTask = document.querySelector('.medbay-task-shown');
const reactor = document.querySelector('.reactor-task');
const reactorTask = document.querySelector('.reactor-task-shown');
const storage = document.querySelector('.storage-task');
const storageTask = document.querySelector('.storage-task-shown');
const weapons = document.querySelector('.weapons-task');
const weaponsTask = document.querySelector('.weapons-task-shown');

//Mira Hq

const launchpad = document.querySelector('.launchpad-task');
const launchpadTask = document.querySelector('.launchpad-task-shown');
const balcony = document.querySelector('.balcony-task');
const balconyTask = document.querySelector('.balcony-task-shown');
const greenhouse = document.querySelector('.greenhouse-task');
const greenhouseTask = document.querySelector('.greenhouse-task-shown');
const hallway = document.querySelector('.hallway-task');
const hallwayTask = document.querySelector('.hallway-task-shown');
const laboratory = document.querySelector('.laboratory-task');
const laboratoryTask = document.querySelector('.laboratory-task-shown');
const office = document.querySelector('.office-task');
const officeTask = document.querySelector('.office-task-shown');


const exitTaskOff = document.querySelector('.exit-task-off');
const exitTaskBal = document.querySelector('.exit-task-bal');
const exitTaskGre = document.querySelector('.exit-task-gre');
const exitTaskHal = document.querySelector('.exit-task-hal');
const exitTaskLab = document.querySelector('.exit-task-lab');
const exitTaskLau = document.querySelector('.exit-task-lau');

exitTaskLau.addEventListener('click', () => {
    opened.style.display = 'flex';
    launchpadTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskBal.addEventListener('click', () => {
    opened.style.display = 'flex';
    balconyTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskGre.addEventListener('click', () => {
    opened.style.display = 'flex';
    greenhouseTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskHal.addEventListener('click', () => {
    opened.style.display = 'flex';
    hallwayTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskLab.addEventListener('click', () => {
    opened.style.display = 'flex';
    laboratoryTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskOff.addEventListener('click', () => {
    opened.style.display = 'flex';
    officeTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

balcony.addEventListener('click', () => {
    opened.style.display = 'none';
    balconyTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

greenhouse.addEventListener('click', () => {
    opened.style.display = 'none';
    greenhouseTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

hallway.addEventListener('click', () => {
    opened.style.display = 'none';
    hallwayTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

laboratory.addEventListener('click', () => {
    opened.style.display = 'none';
    laboratoryTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

launchpad.addEventListener('click', () => {
    opened.style.display = 'none';
    launchpadTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

office.addEventListener('click', () => {
    opened.style.display = 'none';
    officeTask.style.display = 'block';
    returnMobile.style.display = 'none';
});





//Skeld




const opened = document.querySelector('.tablet-tasks');
const exitTask = document.querySelector('.exit-task');
const exitTaskCafe = document.querySelector('.exit-task-cafe');
const exitTaskComms = document.querySelector('.exit-task-comms');
const exitTaskMed = document.querySelector('.exit-task-med');
const exitTaskRec = document.querySelector('.exit-task-rec');
const exitTaskStor = document.querySelector('.exit-task-stor');
const exitTaskWeps = document.querySelector('.exit-task-weps');
const returnMobile = document.querySelector('.returnMobile');








//Skeld Task Exit Event Listeners


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


medbay.addEventListener('click', () => {
    opened.style.display = 'none';
    medbayTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

reactor.addEventListener('click', () => {
    opened.style.display = 'none';
    reactorTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

storage.addEventListener('click', () => {
    opened.style.display = 'none';
    storageTask.style.display = 'block';
    returnMobile.style.display = 'none';
});
