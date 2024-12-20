<!-- index.html -->
<?php include '../php/registrado.php'; ?>
<!DOCTYPE html>
<html lang="cat">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="/css/domicili.css">

    <link href='https://fonts.googleapis.com/css?family=Bilbo Swash Caps' rel='stylesheet'>
    <title>Can Trinxat</title>
</head>
<body id="body">
    <header>
       <a href="/index.html" id="logoText"><img src="/img/LletraFina.png" alt="logoText" ></a>
       <a href="#menu" id="toggle"><span></span></a>
        
    </header>
    
    <nav id="menu">
        <div id="navLinks">
            <br>
      <div class="navImgA"> <a href="/html/domicili.php">DOMICILI</a> </div>
            <br>
            <div class="navImgA"><a href="/html/carta.html">CARTA</a></div>
          
            <br>
            <div class="navImgA"><a href="/html/contacte.html">CONTACTE</a></div>
            <br>
            <div class="navImgA" id="pedidos"><a href="/html/comandes.html">COMANDES</a></div>
           
        </div>
       
        <div id="log">
            <a href="/html/login.html">LOGIN</a>
        
            <a href="/html/signin.html">SIGN UP</a>
        </div>
        <div id="deslog">
          <button id="deleteCookieButton">Tanca Sessio</button>           
      </div>
    </nav>
    <article  id="principal">
        <h2>DOMICILI</h2>
        <div class="card">
          <h3>PRIMER PLAT</h3>
          <ul>
            <li>NO HAS SELECIONAT NINGUN PRIMER PLAT </li>     
            <!-- <li><button>-</button></li> -->
          </ul>
        </div>
        <div class="card">
            <h3>SEGON PLAT</h3>
            <ul>
              <li>NO HAS SELECIONAT NINGUN SEGON PLAT</li>     
            </ul>
          </div>
          <div class="card">
            <h3>POSTRES</h3>
            <ul>
              <li>NO HAS SELECIONAT NINGUN POSTRA</li>
             
            </ul>
          </div>
          <div class="card">
            <h3>BEGUDA</h3>
            <ul>
              <li>NO HAS SELECIONAT NINGUN BEGUDA</li>
           
            </ul>
          </div>
        </article>
    <footer id="foot">
        <img src="/img/DetallatFinaLogo.png" alt="logoCasa" id="logoCasa">
        <p>&copy; Copyright 2024 Can Trinxat</p>
    </footer>
</body>
<script src="/js/domicili.js"></script>
<script src="/js/global.js"></script>
</html>