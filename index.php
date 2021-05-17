<?php include('includes/header.php'); ?>

<main class="content">
    <div class="slider-holder">
        <div class="top-slider">
            <div id="top-slider">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <img src="assets/img/slide-1.jpg" alt="slide">
                            <a href="category.php" class="slider-more-btn">
                                Всички продукти
                                <img data-src="assets/img/button-arrow.png" alt="arrow">
                            </a>
                        </li>

                        <li class="splide__slide">
                            <img src="assets/img/slide-1.jpg" alt="slide">
                            <a href="category.php" class="slider-more-btn">
                                Всички продукти
                                <img data-src="assets/img/button-arrow.png" alt="arrow">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div><!--end top-slider-->
    </div><!--end slider-holder-->

    <div class="card-holder">
        <span class="left-leaf" data-speed="2">
            <img src="assets/img/leaf-left.png" alt="leaf">
        </span>

        <span class="right-leaf" data-speed="2">
            <img src="assets/img/right-leaf.png" alt="leaf">
        </span>

        <div class="card-info-holder">
            <h1 class="card-heading">
                <span class="card-year-holder">
                   <span class="card-year card-year-1">19</span>
                    <span class="card-year  card-year-2">90</span>
                    <span class="card-year-desc">Качество, което познавате от:</span>
                </span>
            </h1>

            <div class="card-info-text">
                <p>Създадена през 1990 година, фирма “Антоний” внася от съседна Турция и изгражда собствена мрежа за разносна търговия. Фирмата притежава богат практически опит, висококвалифициран и отговорен персонал, съвременен транспорт и всичко необходимо за пълното задоволяване на клиента.</p>
           <p>висококвалифициран и отговорен персонал, съвременен транспорт и всичко необходимо за пълното задоволяване на клиента.</p>
            </div>
            <div class="button-holder">
                <a href="about.php" class="load-more-btn">Прочети повече тук <img data-src="assets/img/button-arrow.png" alt="button arrow"></a>
            </div>
        </div><!--end card-info-holder-->

    </div><!--end card-holder-->

    <div class="about-index-section">
        <div class="about-index-inner">
            <div class="about-inner">
                <h2>
                    <span class="big-heading">Истинският вкус</span>
                    <span class="small-heading">на маслиновото <br>злато</span>
                </h2>
                <div class="about-cols">
                    <p>От векове жителите на Анталия вярват и разчитат на силата на зехтина. От години приключението, наречено “зехтин”, се свързва и развива заедно с търговската марка Кърлангъч. От основаването на фирмата през 1953г. досега историята на Кърлангъч от Акхисар до Яримча отразява продължително развитие и непрекъснат успех. Придобиването на </p>
                    <p>“Сезай Юмер Мадра”, една добре позната от 1914г. марка., стабилизира още повече компанията, за да стане тя един от главните участници във вътрешния пазар. Компанията продължава своето развитие със силата на Анадолската група. </p>
                </div>

                <a href="about.php" class="about-button">Научете повече <span class="arrow"></span></a>

            </div><!--end about-inner-->
        </div><!--end about-index-inner-->
        <span class="oil-hand"></span>
        <span class="about-leaf"></span>
        <span class="about-small-leaf"></span>
        <span class="about-oil"></span>
    </div><!--end about-index-section-->

    <div class="product-index-section">
        <h3>
            Продукти
            <span class="sub-title">Разгледайте цялата продуктова гама маслини и зехтин</span>
        </h3>
        <div class="row">
            <div class="col-sm-6 col-md-6 index-left-col">
                <a href="product.php" class="oil-col left-col">
                <img data-src="assets/img/right-stamp.png" alt="stamp">
                   
                </a>
            </div><!--end col-md-6-->
            <div class="col-sm-6 col-md-6 index-right-col">
                <a href="product.php" class="oil-col right-col">
                <img data-src="assets/img/left-stamp.png" alt="stamp">
                </a>
            </div><!--end col-md-6-->
        </div><!--end row-->
    </div><!--end product-index-section-->

    <div class="company-info-container">
        <span class="company-logo">
            <img data-src="assets/img/antony-logo.png" alt="company logo">
            <span class="company-logo-slogan">Официален дистрибутор на ECE и KIRLANGIC за България</span>
        </span>

        <div class="company-text">
            <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.</p>
        </div><!--end -->
    </div><!--end company-info-container-->
</main>
<?php include('includes/footer.php'); ?>