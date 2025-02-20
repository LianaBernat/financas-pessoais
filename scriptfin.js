function togglePanel() {
    let tabelaPoupanca = document.getElementById("tabelaPoupanca");
    let tabelaCDB= document.getElementById("tabelaCDB");
    
    tabelaPoupanca.classList.toggle("active");
    tabelaCDB.classList.toggle("active");
    }


    let currentPanel = 0;
    const panels = document.querySelectorAll('.tabela');

    function changePanel(direction) {
        panels[currentPanel].classList.remove('active');
        currentPanel = (currentPanel + direction + panels.length) % panels.length;
        panels[currentPanel].classList.add('active');
    }