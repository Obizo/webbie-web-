function showDetails(transport) {
    let info = '';
    
    if (transport === 'car') {
        info = 'Cars are versatile and ideal for road trips or city travel. They provide comfort and flexibility.';
    }

    alert(info);
}

function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const button = document.getElementById('modeToggle');

    
    body.classList.toggle('night-mode');
    header.classList.toggle('night-mode');
    footer.classList.toggle('night-mode');
    button.classList.toggle('night-mode');

    
    if (body.classList.contains('night-mode')) {
        button.textContent = 'Switch to Day Mode';
    } else {
        button.textContent = 'Switch to Night Mode';
    }
}


function setInitialMode() {
    const hours = new Date().getHours();
    if (hours >= 18 || hours < 6) {  
        toggleMode();  
    }
}

setInitialMode(); 