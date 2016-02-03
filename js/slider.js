$(function(){
  $('body').vegas({
    slides:[
      {src:'images/1.jpg'},
      {src:'images/28.jpg'},
      {src:'images/32.jpg'},
      {src:'images/33.jpg'},
      {src:'images/48.jpg'},
    ],
    animation: 'random',
    animationDuration: 30000,
    overlay: 'js/vegas/overlays/02.png'
  });
});
