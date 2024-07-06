function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  document.getElementById('startButton').addEventListener('click', function() {
    openTab(event, 'destino');
    document.getElementsByClassName('tablinks')[1].className += " active"; 
  });
  
  document.getElementById('nextToTarjetaCredito').addEventListener('click', function() {
    openTab(event, 'tarjetaCredito');
    document.getElementsByClassName('tablinks')[2].className += " active"; 
  });
  
  document.getElementById('nextToIdPersonal').addEventListener('click', function() {
    openTab(event, 'idPersonal');
    document.getElementsByClassName('tablinks')[3].className += " active"; 
  });
  
  document.getElementById('emitirBoleto').addEventListener('click', function() {
    const tarjetaCredito = document.getElementById('tarjetaCreditoInput').value;
    const idPersonal = document.getElementById('idPersonalInput').value;
  
    if (tarjetaCredito && idPersonal) {
   
  
        openTab(event, 'resultado');
        document.getElementsByClassName('tablinks')[4].className += " active"; 
        document.getElementById('mensajeResultado').innerText = 'Boleto emitido exitosamente y cargado a su tarjeta de crédito.';
    } else {
        alert('Por favor, ingrese todos los datos requeridos.');
    }
  });