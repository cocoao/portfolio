<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- seo meta tag -->
  <meta name="title" content="나혜정 포트폴리오">
  <meta name="keywords" content="포트폴리오, 웹퍼블리싱, 디자인">
  <meta name="description" content="웹퍼블리싱과 디자인 작업물을 담은 포트폴리오 사이트입니다.">
  <meta property="og:description" content="나혜정 포트폴리오 사이트입니다.">
  <title>NA_HYEJEONG</title>

  <!-- favicon link -->
  <link rel="icon" href="/na_pf/img/favicon_na.png">
  <link rel="apple-touch-icon" href="/na_pf/img/favicon_na.png">

  <!-- font awesome font link -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- css link -->
  <link rel="stylesheet" href="/na_pf/css/reset.css">
  <link rel="stylesheet" href="/na_pf/css/style.css">
  <link rel="stylesheet" href="/na_pf/css/animation.css">
  <link rel="stylesheet" href="/na_pf/css/media.css">

  <!-- jquery link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/na_pf/js/custom.js"></script>
</head>
<body>
  <div class="main-wrap">
    <!-- main slide section -->
    <div class="slides" id="slide">
      <div class="slide-box">
        <div class="slide main-na active" value="main-na">
          <img src="/na_pf/img/main_na.jpg" onclick="location.href='/na_pf/pages/about.php'" alt="main_about_img">
          <i class="fa fa-angle-double-right"></i>
          <span>N<p>A HYEJEONG</p></span>
        </div>
        <div class="slide main-pu" value="main-pu">
          <img src="/na_pf/img/main_pu.jpg" onclick="location.href='/na_pf/pages/publishing.php'"
            alt="main_publishing_img">
          <i class="fa fa-angle-double-right"></i>
          <span>P<p>UBLISHING</p></span>
        </div>
        <div class="slide main-de" value="main-de">
          <img src="/na_pf/img/main_de.jpg" onclick="location.href='/na_pf/pages/design.php'" alt="main_design_img">
          <i class="fa fa-angle-double-right"></i>
          <span>D<p>ESIGN</p></span>
        </div>
        <div class="slide main-mo" value="main-mo">
          <img src="/na_pf/img/main_mo.jpg" onclick="location.href='/na_pf/pages/more.php'" alt="main_moreWorks_img">
          <i class="fa fa-angle-double-right"></i>
          <span>M<p>ORE WORKS</p></span>
        </div>
      </div>
    </div>
    <!-- main slide contents section -->
    <div class="txtBoxes">
      <div class="txtBox">
        <div class="contents clear main-na">
          <div class="indexTxt" onclick="location.href='/na_pf/pages/about.php#ab_intro'">
            <p>Information of me</p>
            <hr>
            <h3>INTRO</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/about.php#ab_history'">
            <p>History of me</p>
            <hr>
            <h3>CAREER</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/about.php#ab_skill'">
            <p>My ability</p>
            <hr>
            <h3>SKILL</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/about.php#ab_contact'">
            <p>Contact me</p>
            <hr>
            <h3>CONTACT</h3>
          </div>
        </div>
        <div class="contents clear main-pu">
          <div class="indexTxt" onclick="location.href='/na_pf/pages/publishing.php#1'">
            <p>Database project</p>
            <hr>
            <h3>SPACE</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/publishing.php#2'">
            <p>API project</p>
            <hr>
            <h3>CINEMA <p>NOW.</p></h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/publishing.php#3'">
            <p>Renewal project</p>
            <hr>
            <h3>JOMALONE <p>LONDON</p></h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/publishing.php#5'">
            <p>UI/UX project</p>
            <hr>
            <h3>BURGER'S</h3>
          </div>
        </div>
        <div class="contents clear main-de">
          <div class="indexTxt" onclick="location.href='/na_pf/pages/design.php#1'">
            <p>Products leaflet</p>
            <hr>
            <h3>SAMSUNG <p>LIFE INSURANCE</p></h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/design.php#2'">
            <p>Card newsa</p>
            <hr>
            <h3>SAMSUNG <p>LIFE INSURANCE</p></h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/design.php#3'">
            <p>Brochure</p>
            <hr>
            <h3>K FASHION AUDITION</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/design.php#4'">
            <p>POP advertisement</p>
            <hr>
            <h3>MAGIC</h3>
          </div>
        </div>
        <div class="contents clear main-mo">
          <div class="indexTxt" onclick="location.href='/na_pf/pages/more.php#.edit'">
            <p>Leaflet & Brochure</p>
            <hr>
            <h3>EDITORIAL</h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/more.php#.ad'">
            <p>POP & Poster</p>
            <hr>
            <h3>ADVERTISE<p>MENT</p></h3>
          </div>
          <div class="indexTxt" onclick="location.href='/na_pf/pages/more.php#.etc'">
            <p>Branding & Packaging</p>
            <hr>
            <h3>ETC.</h3>
          </div>
          <div class="indexTxt">
          </div>
        </div>
        <div class="copy">
          <p>COPYRIGHTⓒ 2021 BY NA</p>
        </div>
        <div class="btns">
          <button class="prev"><</button>
          <button class="next">></button>
        </div>
      </div>
      <div class="nameBox mainNam">
        <a href="/na_pf/index.php">
        <h3><p>NA </p>HYE JEONG</h3>
        <p>PORTFOLIO</p>
        </a>
        <hr>
      </div>
      <!-- main navigation section -->
      <div class="nav">
        <div class="mobileNav">
          <i class="fa fa-bars"></i>
        </div>
        <ul>
          <li><a href="/na_pf/index.php">
            <p>MAIN</p>
            <span class="hover">
              <i class="fa fa-angle-double-right"></i><hr>
            </span>
          </a></li>
          <li><a href="/na_pf/pages/about.php">
            <p>ABOUT ME</p>
            <span class="hover">
              <i class="fa fa-angle-double-right"></i><hr>
            </span>
          </a></li>
          <li><a href="/na_pf/pages/publishing.php">
            <p>PUBLISHING</p>
            <span class="hover">
              <i class="fa fa-angle-double-right"></i><hr>
            </span>
          </a></li>
          <li><a href="/na_pf/pages/design.php">
            <p>DESIGN</p>
            <span class="hover">
              <i class="fa fa-angle-double-right"></i><hr>
            </span>
          </a></li>
          <li><a href="/na_pf/pages/more.php">
            <p>MORE WORKS</p>
            <span class="hover">
              <i class="fa fa-angle-double-right"></i><hr>
            </span>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>