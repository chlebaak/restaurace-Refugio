<?php
session_start();



if (!isset($_SESSION['username'])) {
} else {
  $admin = $_SESSION['username'];
}
?>



<html lang="cz">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aktuality</title>
  <link rel="stylesheet" href="navbar.css" />
  <link rel="stylesheet" href="footer.css" />
  <link rel="stylesheet" href="aktuality.css" />
  <link rel="icon" type="image/x-icon" href="Images/logo.png" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <meta charset="UTF-8" />
  <meta name="description" content="Restaurace a ubytování Tisá Refugio" />
  <meta name="keywords" content="Refugio, restaurace Tisá, ubytování Tisá, kavárna Tisá, Refugio Tisá, krámek Tisá, horolezectví Tisá" />
  <meta name="author" content="Jan Fiala" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Inter&family=Tinos&display=swap");
  </style>
</head>

<body>
  <header>
    <div class="logo" data-key="logo">Refugio</div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
      <ul>
        <li>
          <a href="index.html" data-key="home">Hlavní stránka</a>
        </li>
        <li>
          <a href="restaurace.html" data-key="restaurant">Restaurace</a>
        </li>
        <li>
          <a href="ubytovani.html" data-key="accommodation">Ubytování</a>
        </li>
        <li>
          <a href="kramek.html" data-key="shop">Krámek</a>
        </li>
        <li>
          <a href="aktuality.php" data-key="news" class="active">Aktuality</a>
        </li>
        <li>
          <button id="change-lang">CZ/DE</button>
        </li>
      </ul>
    </nav>
    <label for="nav_check" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </header>


  <div class="header">
    <h1 data-key="aktuality_header">Aktuality</h1>
    <h2 data-key="aktuality_header2">Co se děje v Refugiu?</h2>
  </div>

  <div class="background">


    <?php if (isset($admin)) {
      echo '   <div id="upload_form">
        <h2>Nahrát aktualitu</h2>
        <div>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <label for="nazev">Název:</label><br>
                <input type="text" id="nazev" name="nazev" class="input-field"><br>
                <label for="obrazek" class="drop-container" id="dropcontainer">
                    <span class="drop-title">Přetáhněte soubor sem</span>
                    nebo <span class="drop-title">Klikněte</span>
                    <input type="file" id="obrazek" name="obrazek" accept="image/*" class="file-input" onchange="previewImage(event)"><br><br>
                    <img id="image-preview" src="" alt="Image Preview" style="display:none; width: 100%; margin-top: 10px;">
                </label>
                <input type="submit" value="Nahrát" class="submit-button">
            </form>
        </div>
    </div>
    ';
    } ?>

    <div class="sort">
      <div>
        <p data-key="sort">Seřadit podle: </p>

        <button onclick="changeSortOrder()" data-key="by_date">Datumu</button>
      </div>
      <?php if (isset($admin)) {
        echo '<form action="logout.php" method="post">
                <button><input type="submit" style="display:none">Log-out</button>
              </form>';
      } else {
        echo '<button id="adminBtn">Admin</button>';
      } ?>


    </div>

    <div id="loginFormWrapper" class="login-form-wrapper">
      <div id="loginForm" class="login-form">
        <span class="close" onclick="closeLoginForm()">&times;</span>
        <h2>Admin Login</h2>
        <div>
          <form method="post" action="login.php">
            <input type="text" id="username" name="username" placeholder="username" required><br>
            <input type="password" id="password" name="password" placeholder="password" required><br><br>
            <input type="submit" value="Login">
          </form>
        </div>
      </div>
    </div>



    <div class="aktuality">
      <?php
      $servername = "db.bagros.eu";
      $username = "zub";
      $password = "tajnyZub";
      $database = "zubDB";
      $port = 8100;

      $conn = new mysqli($servername, $username, $password, $database, $port);

      $sortOrder = isset($_GET['sort']) ? $_GET['sort'] : 'ASC';

      $sql = "SELECT * FROM aktuality ORDER BY created_at $sortOrder;";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          echo '<div class="container">
                <div class="img">
                  <img src="' . $row["obrazek_path"] . '" alt="' . $row["nazev"] . '"  cursor: pointer;" onclick="showImage(this)">
                </div>
                <div class="content">
                  <h2>' . $row["nazev"] . '</h2>
                  <p>' . date('d. m. Y/H:i', strtotime($row["created_at"])) . '</p>';
          if (isset($admin)) {
            echo '<a href="delete.php?id=' . $row["id"] . '">Odstranit</a>';
          }
          echo '</div>
              </div>';
        }
      }

      $conn->close();
      ?>
    </div>



    <div class="overlay" onclick="hideImage()">
      <img src="" alt="Zvětšený obrázek">
    </div>
  </div>


  <footer>
    <div class="footerCon">
      <div>
        <img src="Images/logo.png" alt="" />
      </div>
      <div>
        <h6 data-key="contact">Kontakt</h6>
        <ul>
          <li><strong>Telefon</strong></li>
          <li>+ 420 702 017 774</li>
          <li>+ 420 724 166 693</li>
          <li><strong>E-mail</strong></li>
          <li>refugio@seznam.cz</li>
        </ul>
      </div>
      <div>
        <h6 data-key="address">Adresa</h6>
        <ul>
          <li>Restaurace a Penzion "Refugio"</li>
          <li>Tisá 473</li>
          <li>403 36 Tisá</li>
        </ul>
      </div>
      <div>
        <h6 data-key="social_media">Sociální sítě</h6>
        <label for="" onclick="location.href='https://www.instagram.com/refugio.tisa/'"><i class="bx bxl-facebook-circle"></i></label>
        <label for="" onclick="location.href='https://www.facebook.com/refugio.eshop/'"><i class="bx bxl-instagram"></i></label>
      </div>
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="translate.js">

  </script>
</body>
<script>
  const adminBtn = document.getElementById('adminBtn');
  const loginFormWrapper = document.getElementById('loginFormWrapper');

  adminBtn.addEventListener('click', () => {
    loginFormWrapper.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  function closeLoginForm() {
    loginFormWrapper.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  window.addEventListener('click', (event) => {
    if (event.target === loginFormWrapper) {
      closeLoginForm();
    }
  });


  function changeSortOrder() {
    var currentSortOrder = new URLSearchParams(window.location.search).get('sort');

    var newSortOrder = (currentSortOrder === 'DESC') ? 'ASC' : 'DESC';

    var newUrl = window.location.pathname + '?sort=' + newSortOrder;

    window.location.href = newUrl;
  }

  function showImage(element) {
    var imageUrl = element.src;
    var overlay = document.querySelector('.overlay');
    var overlayImage = overlay.querySelector('img');

    overlayImage.src = imageUrl;
    overlay.style.display = 'block';
  }

  function hideImage() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
  }
</script>
<script>
  function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var imagePreview = document.getElementById('image-preview');
      imagePreview.src = dataURL;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
</script>

</body>

</html>