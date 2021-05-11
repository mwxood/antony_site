<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antoniy</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/frontend.bundle.css">
</head>
<body>

<header class="header">
    <div class="header-container">
        <div class="header-left">
            <div class="top-navigation">
                <span class="hamburger mobile-btn-trigger">
                     <span></span>
                  </span>
                <nav class="top navigation"></nav>
            </div><!--end top-navigation-->
            <span class="ece-logo">
                <img src="./assets/img/ece-logo.png" alt="">
                <span class="ece-logo-text">
                    Официален дистрибутор на ECE за България
                </span>
            </span>
        </div><!--end header-left-->

        <div class="header-center">
            <a class="logo" href="/">
                <img src="./assets/img/logo.png" alt="">
            </a>
        </div><!--end header-center-->
        <div class="header-right">
            <div class="lang-holder">
                <ul class="languages">
                    <li>
                        <span>En</span>
                        <ul>
                            <li><a href="#">En</a></li>
                            <li><a href="#">Бг</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div><!--end header-right-->
    </div><!--end header-container-->

<?php include('navigation.php') ?>
</header>