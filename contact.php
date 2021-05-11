<?php include('includes/header.php'); ?>

    <main class="content">
        <section class="contact-section inner-section">
            <div class="custom-container">
                <div class="border-content">
                    <div class="heading-holder">
                        <ul class="breadcrumbs">
                            <li><a href="/">Начало</a></li>
                            <li>Контакти</li>
                        </ul>
                        <h1>Контакти</h1>
                    </div><!--end heading-holder-->


                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5866.328206428455!2d26.344128026978886!3d42.67906606666679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6272f675bca2d%3A0x12a3aca5df3157eb!2zODgwNiDQti7Qui4g0JTRgNGD0LbQsdCwLCBTbGl2ZW4!5e0!3m2!1sen!2sbg!4v1620754871648!5m2!1sen!2sbg" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div><!--end map-->

                    <div class="address-header">
                        <span class="active-address address-title">
                            <span class="address-pin"></span>
                            Офис
                        </span>

                        <span class="address-title">
                            <span class="address-pin"></span>
                            Складова база
                        </span>
                    </div><!--end address-header-->

                    <div class="contact-info">
                        <div class="address-col">
                            <span class="address-col-title">Град Сливен</span>
                            <span class="address">Квартал "Дружба" до блок 20 - комплекс "Мерканто"</span>

                            <a href="tel:044666966">Тел. (044) 666966</a>
                            <span class="fax">Факс. (044) 667843</span>

                            <a href="mailto:antoniy@merkanto.com">email: antoniy@merkanto.com</a>
                        </div><!--end address-col-->

                        <div class="address-col">
                            <span class="address-col-title">Град Сливен</span>
                            <span class="address">"Индустриална зона" Складова база "РКС"</span>

                            <a href="tel:044666044">Тел. (044) 666044</a>
                            <span class="fax">Факс. (044) 667843</span>
                        </div><!--end address-col-->
                </div><!--end border-content-->

                </div><!--end contact-info-->

               <div class="contact-form">
                    <span class="contact-title">Изпратете ни запитване</span>

                   <form action="" class="contacts">
                       <div class="form-group">
                           <label class="half-width">
                               <input type="text" class="input-bg" placeholder="Вашето име">
                           </label>
                           <label class="half-width">
                               <input type="text" class="input-bg" placeholder="Вашият имейл">
                           </label>
                       </div>

                       <div class="form-group">
                           <label>
                               <textarea name="" class="input-bg" placeholder="Съобщение" cols="30" rows="10"></textarea>
                           </label>
                       </div>
                       <div class="buttons-holder">
                           <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                           <input type="submit" class="send-btn" value="Изпрати">
                       </div>
                   </form>
               </div>
            </div><!--end company-info-container-->
        </section>
    </main>
<?php include('includes/footer.php'); ?>