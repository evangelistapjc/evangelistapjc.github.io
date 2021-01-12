/* GLOBAL VARIABLES */
let work = 0;
let project = 0;

$(document).ready( () => {
    /* STICKY NAVIGATION STARTS HERE*/
    var waypoint = new Waypoint({
      element: $('.section-about-js'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky-nav');
                // document.querySelector('.main-nav-icon').style.display = "block";
                // document.querySelector('.main-nav').style.display = "none";
            }  else {
                $('nav').removeClass('sticky-nav');
                // document.querySelector('.main-nav-icon').style.display = "none";
                // document.querySelector('.main-nav').style.display = "block";
            }
        }, offset: '50px;',
    });

    /* STICKY NAVIGATION */
    $('.wp-1-go-js').click( function() {
        $('html, body').animate({scrollTop: $('.wp-1-js').offset().top -70}, 1000);
    });
    
    $('.wp-2-go-js').click( function() {
        work = 1;
        $('html, body').animate({scrollTop: $('.wp-2-js').offset().top -70}, 1000);
        $('.wp-2-js').waypoint( () => {
            $('.wp-2-js').addClass('animate__animated animate__pulse'); 
        }, {
            offset: '50%',
        });
        reset();
    });

    $('.wp-3-go-js').click( function() {
        project = 1;
        $('html, body').animate({scrollTop: $('.wp-3-js').offset().top -100}, 1000);
        $('.wp-3-js').waypoint( () => {
            $('.wp-3-js').addClass('animate__animated animate__pulse'); 
        }, {
            offset: '50%',
        });
        reset();
    });
});

function reset() {
    if (work) {
        $('.wp-2-js').removeClass('animate__animated animate__pulse'); 
    }

    if (project) {
        $('.wp-3-js').removeClass('animate__animated animate__pulse'); 
    }
};

/* THE FOLLOWING CODE WAS SOURCES FROM CSS TRICKS TYPEWRITER EFFECT */
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+ "I am " + this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta/1.5);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};