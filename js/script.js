// -------------------------------------js----------------------------------

var menu = document.getElementById("navbar-contents");
var toggalbar = document.getElementById("toggal");

function mytoggal() {
    if (menu.style.display == "none") {
        menu.style.cssText="display:flex;";
    }
    else {
        menu.style.cssText="max-width:770px !important;display:none;";
      }
}

// -------------------------------------js----------------------------------

// const toggleButton = document.getElementsByClassName('menu-icon')[0]
// const navbarLinks = document.getElementsByClassName('navbar-content')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })


// number counter 

$(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
      {
        counter: countTo
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
  });









// -------------------------------------jq-----------------------------

// $(document).ready(function(){
//     $("#play").click(function(){
//       $("#navbar-contents").toggle();
//     });
//   });

// -------------------------------------jq-----------------------------


  // https://github.com/michalsnik/aos