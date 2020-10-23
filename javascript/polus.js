const boilerroom = document.querySelector('.boilerroom-task');
const boilerroomTask = document.querySelector('.boilerroom-task-shown');
const communications = document.querySelector('.communications-task');
const communicationsTask = document.querySelector('.communications-task-shown');
const dropship = document.querySelector('.dropship-task');
const dropshipTask = document.querySelector('.dropship-task-shown');
const electrical = document.querySelector('.electrical-task');
const electricalTask = document.querySelector('.electrical-task-shown');
const laboratory = document.querySelector('.laboratory-task');
const laboratoryTask = document.querySelector('.laboratory-task-shown');
const medbay = document.querySelector('.medbay-task');
const medbayTask = document.querySelector('.medbay-task-shown');
const o2 = document.querySelector('.o2-task');
const o2Task = document.querySelector('.o2-task-shown');
const office = document.querySelector('.office-task');
const officeTask = document.querySelector('.office-task-shown');
const outside = document.querySelector('.outside-task');
const outsideTask = document.querySelector('.outside-task-shown');
const specimenroom = document.querySelector('.specimenroom-task');
const specimenroomTask = document.querySelector('.specimenroom-task-shown');
const storage = document.querySelector('.storage-task');
const storageTask = document.querySelector('.storage-task-shown');
const weapons = document.querySelector('.weapons-task');
const weaponsTask = document.querySelector('.weapons-task-shown');

const exitTaskBoiler = document.querySelector('.exit-task-boiler');
const exitTaskCommunications = document.querySelector('.exit-task-communications');
const exitTaskDropship = document.querySelector('.exit-task-dropship');
const exitTaskElectrical = document.querySelector('.exit-task-electrical');
const exitTaskLaboratory = document.querySelector('.exit-task-laboratory');
const exitTaskMedbay = document.querySelector('.exit-task-medbay');
const exitTaskO2 = document.querySelector('.exit-task-o2');
const exitTaskOffice = document.querySelector('.exit-task-office');
const exitTaskOutside = document.querySelector('.exit-task-outside');
const exitTaskSpecimenroom = document.querySelector('.exit-task-specimenroom');
const exitTaskStorage = document.querySelector('.exit-task-storage');
const exitTaskWeapons = document.querySelector('.exit-task-weapons');

const opened = document.querySelector('.tablet-tasks');



exitTaskBoiler.addEventListener('click', () => {
    opened.style.display = 'flex';
    boilerroomTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskCommunications.addEventListener('click', () => {
    opened.style.display = 'flex';
    communicationsTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskDropship.addEventListener('click', () => {
    opened.style.display = 'flex';
    dropshipTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskElectrical.addEventListener('click', () => {
    opened.style.display = 'flex';
    electricalTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskLaboratory.addEventListener('click', () => {
    opened.style.display = 'flex';
    laboratoryTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskMedbay.addEventListener('click', () => {
    opened.style.display = 'flex';
    medbayTask.style.display = 'none';
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

exitTaskOffice.addEventListener('click', () => {
    opened.style.display = 'flex';
    officeTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskOutside.addEventListener('click', () => {
    opened.style.display = 'flex';
    outsideTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskSpecimenroom.addEventListener('click', () => {
    opened.style.display = 'flex';
    specimenroomTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskStorage.addEventListener('click', () => {
    opened.style.display = 'flex';
    storageTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});

exitTaskWeapons.addEventListener('click', () => {
    opened.style.display = 'flex';
    weaponsTask.style.display = 'none';
    returnMobile.style.display = 'block';

    if (window.innerWidth <= 1085) {
        returnMobile.style.display = 'block';
    } else {
        returnMobile.style.display = 'none';
    }
});




// Open Folder 

boilerroom.addEventListener('click', () => {
    opened.style.display = 'none';
    boilerroomTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

communications.addEventListener('click', () => {
    opened.style.display = 'none';
    communicationsTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

dropship.addEventListener('click', () => {
    opened.style.display = 'none';
    dropshipTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

electrical.addEventListener('click', () => {
    opened.style.display = 'none';
    electricalTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

laboratory.addEventListener('click', () => {
    opened.style.display = 'none';
    laboratoryTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

medbay.addEventListener('click', () => {
    opened.style.display = 'none';
    medbayTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

o2.addEventListener('click', () => {
    opened.style.display = 'none';
    o2Task.style.display = 'block';
    returnMobile.style.display = 'none';
});

office.addEventListener('click', () => {
    opened.style.display = 'none';
    officeTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

outside.addEventListener('click', () => {
    opened.style.display = 'none';
    outsideTask.style.display = 'block';
    returnMobile.style.display = 'none';
});

specimenroom.addEventListener('click', () => {
    opened.style.display = 'none';
    specimenroomTask.style.display = 'block';
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
