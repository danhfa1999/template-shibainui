$(document).ready(function() {
   var controller = new ScrollMagic.Controller();
   var TL = new TimelineMax({ paused: true });
   var infoTimeLine = new TimelineMax({ paused: true });
   var galleryTimeLine = new TimelineMax({ paused: true });
   var libraryTimeLine = new TimelineMax({ paused: true });
 
   /*header vars*/
   var header = $('.header');
   var navigation = $('.header-navigation');
   var mainContainer = $('.main-container');
   var textInner = $(mainContainer).find('.text-wrapper .text-inner');
   var imgContainer = $(mainContainer).find('.img-container');
 
   /*info vars*/
 
   var info = $('.info');
   var infoImageContainer = $(info).find('.img-container');
   var infoTextInner = $(info).find('.text-inner');
 
   /*gallery vars*/
 
   var gallery = $('.gallery');
   var galleryRevealer = $(gallery).find('.revealer');
   var galleryImageRevealer = $(gallery).find('.img-revealer');
 
   /*library vars*/
 
   var library = $('.library');
   var libTextInner = $(library).find('.text-inner');
   var book = $(library).find('.book');
 
   var animationSpeed = 0.75;
   var animationTimingIn = Expo.easeIn;
   var animationTimingOut = Expo.easeOut;
 
   TL.fromTo(
     header,
     animationSpeed,
     { y: 1500, opacity: 0, ease: animationTimingIn },
     { y: 0, opacity: 1, ease: animationTimingOut }
   )
     .fromTo(
       navigation,
       animationSpeed,
       { y: '-100%', opacity: 0, ease: animationTimingIn },
       { y: '0%', opacity: 1, ease: animationTimingOut },
       '-=0.25'
     )
     .staggerFromTo(
       textInner,
       animationSpeed,
       { y: '120%', ease: animationTimingIn },
       { y: '0%', ease: animationTimingOut },
       0.15
     )
     .fromTo(
       imgContainer,
       animationSpeed,
       { y: -50, opacity: 0, ease: animationTimingIn },
       { y: 0, opacity: 1, ease: animationTimingOut },
       '-=1'
     );
 
   TL.play();
 
   /********************************** */
 
   infoTimeLine
     .fromTo(
       info,
       animationSpeed,
       { y: 100, ease: animationTimingIn, opacity: 0 },
       { y: 0, opacity: 1, ease: animationTimingOut }
     )
     .staggerFromTo(
       infoTextInner,
       animationSpeed,
       { y: 50, opacity: 0, ease: animationTimingIn },
       { y: 0, opacity: 1, ease: animationTimingOut },
       0.05
     );
   /*info scene*/
   new ScrollMagic.Scene({
     triggerElement: '.info',
     triggerHook: 0.65
   })
     .setTween(infoTimeLine)
     .setPin(true)
     .reverse(false)
     // .addIndicators()
     .addTo(controller);
 
   /************************************************* */
 
   galleryTimeLine
     .fromTo(
       gallery,
       animationSpeed,
       { x: '-100%', ease: animationTimingIn },
       { x: '0%', ease: animationTimingOut }
     )
     .fromTo(
       galleryRevealer,
       animationSpeed * 0.75,
       { x: '0%', ease: animationTimingIn },
       { x: '100%', ease: animationTimingOut }
     )
     .fromTo(
       galleryImageRevealer,
       animationSpeed,
       { x: '-100%', ease: animationTimingIn },
       { x: '100%', ease: animationTimingOut },
       '-=.58'
     );
 
   /*gallery scene*/
   new ScrollMagic.Scene({
     triggerElement: '.gallery',
     triggerHook: 0.85
   })
     .setTween(galleryTimeLine)
     .setPin(true)
     .reverse(true)
     // .addIndicators()
     .addTo(controller);
 
   /******************************** */
   libraryTimeLine
     .fromTo(
       libTextInner,
       animationSpeed,
       { y: 150, opacity: 1, ease: animationTimingIn },
       { y: 0, opacity: 1, ease: animationTimingOut }
     )
     .staggerFromTo(
       book,
       animationSpeed + 2,
       { opacity: 0, y: 10, ease: animationTimingIn },
       { opacity: 1, y: 0, ease: animationTimingOut },
       0.05
     );
 
   new ScrollMagic.Scene({
     triggerElement: '.library',
     triggerHook: 0.6
   })
     .setTween(libraryTimeLine)
     // .addIndicators()
     .setPin(true)
     .reverse(false)
     .addTo(controller);
 });