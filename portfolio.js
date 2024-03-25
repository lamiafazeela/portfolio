
// NAV BAR
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-50px";
//   }
// }


//////////////////////////////////////////////////////



  //  Typing Text Animation  //
    
  document.addEventListener('DOMContentLoaded', (event) => {
    const words = document.querySelectorAll('.word');
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    function changeText() {
        const currentWord = words[currentWordIndex];
        const nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        const nextWord = words[nextWordIndex];

        // Fade out current word
        currentWord.classList.remove('in');
        currentWord.classList.add('out');

        // Fade in next word
        nextWord.classList.remove('out');
        nextWord.classList.add('in');

        currentWordIndex = nextWordIndex;
    }

    // Initial call
    changeText();

    // Change text every 1 seconds
    setInterval(changeText, 1500);
});














  // var typed = new typed(".typing", {
  //   strings: ["python developer", "Full Stack Developer"],
  //   typeSpeed: 90,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // var typed = new typed(".typing-2", {
  //   strings: ["python developer", "Full stack Developer"],
  //   typeSpeed: 90,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // //  Owl Carousel  //
  // $(".carousel").owlCarousel({
  //   margin: 20,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     600: {
  //       items: 2,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: false,
  //     },
  //   },
  // });
