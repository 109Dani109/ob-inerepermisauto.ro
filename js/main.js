(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// footer section


let footer = document.querySelector(".footer");

let copyRight = document.querySelector(".copyRight");


footer.innerHTML = `  <div class="dateContact">
<h1> Date de contact:</h1>
<p> <i class="fas fa-map-marker-alt"></i>  Str. Ștefan cel Mare nr 1-3 <br> <span style="padding-left: 18px;">  bl. Perla SC. 2 Et. 3 ap. 54 Interfon 054, Bucuresti, Sector 1 <br><span style="padding-left: 18px;">(Dorobanţi - Perla)</span>  </span> </p>
<br><br>
<p> <i class="fas fa-phone-alt"></i> 0737 129 122 <br> <span style="padding-left: 20px;"> </span></p>
<br><br>

<div >
<h1>Program</h1> 
  
  <p>  Luni-Vineri : 9:00 - 21:00</p> 
  <p style="padding-left: 15px;"> Sâmbătă : 9:00 - 16:00</p>

  </div>    
              
<br><br>
</div>



<div  class="text">

<h1> Informaţii utile:</h1>
<a  href="https://psyhology.ro/informatii-utlie.html#gdpr" >
     GDPR
</a>

<a  href="https://psyhology.ro/informatii-utlie.html#termenisiconditii" >
    Termeni Si Condiţii
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#politicaconfidentialitate" >
    Politica de confidentialitate
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#notainformare" >
    Nota de informare  
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#cookies" >
    Politica de cookies 
</a>

<a  href="https://anpc.ro" >
   A.N.P.C.
</a>

<a  href="https://anpc.ro/ce-este-sal/" >
   A.N.P.C. - SAL
</a>

<a  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" >
   ODR
</a>

<a href="https://anpc.ro/ce-este-sal/">

<img src="img/anpc-sal.png" style="width:250px">

</a>

<a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">

<img src="img/anpc-sol.png" style="width:250px">

</a>

</div>

<div" class="map">
<h1> Unde ne gasiţi? </h1>

<iframe id="map" style="border-radius: 10px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.9992325938!2d26.09809957205988!3d44.45370269630567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8ac3ea4e307%3A0x529ef55b99bbfb6a!2s%C8%98oseaua%20%C8%98tefan%20cel%20Mare%201-3%2C%20Bucure%C8%99ti%20011736!5e0!3m2!1sen!2sro!4v1642773019509!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>`;


copyRight.innerHTML = ` <div class="logoFooter">
<img id="logo" style="width:145px; height:145px;" alt="aviz" title="aviz " src="img/LogoDorobantiPerla.png">
</div>
Copyright © 2022 
<br> <br>
<p style="font-weight: bold;font-size: 115%;"> Centrul De Evaluare Psihologica <br> "Dorobanţi - Perla"  </p> 
<br>
BUCURESTI SECTOR 1 `;


// footer section



// img add title and alt for seo

let imgsTags = document.querySelectorAll("img");

for(let i = 0; i<imgsTags.length; i++){

    imgsTags[i].alt = "aviz obtinere/redobandire permis conducere";

    imgsTags[i].title = "aviz obtinere/redobandire permis auto";
    

}


// img add title and alt for seo


let buttonNav = document.querySelector(".buttonNav");

let activeNav = false;

buttonNav.addEventListener("click", () =>{

    if(activeNav == false) {
        activeNav = true;
    } else {
        activeNav = false;
    }

    

    if(activeNav) {

        document.querySelector("#logoHeader").style.display = "none";

    } else {
        
        document.querySelector("#logoHeader").style.display = "unset";
    }

});



// seo bar


var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: false});
var time = 40;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});

// seo bar


// title add bucuresti sector 1 dorobanti perla for seo

document.title+= ", Bucuresti Sector 1, Dorobanţi - Perla";

// title add bucuresti sector 1 dorobanti perla for seo