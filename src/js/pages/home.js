export const pageHome = ()=>{


  function fullHeight(){
    document.querySelector('.animate-section').style.height = window.innerHeight + 'px';

  }
  fullHeight();
  window.addEventListener('resize', fullHeight);

  $('.animation-bg--1').vide({
    'mp4': 'video/wbreveal.mp4',
    'webm': 'video/wbreveal.webm',
    //'ogv': 'video/udt_cyan.ogv',
    //'poster': 'video/udtbg_static_compressed.jpg',
  }, {
    autoplay: 1,
    loop: 0,
    className: 'videoBG',
  });

  $('.animation-bg--2').vide({
    'mp4': 'video/wbloop.mp4',
    'webm': 'video/wbloop.webm',
    //'ogv': 'video/udt_cyan.ogv',
    //'poster': 'video/udtbg_static_compressed.jpg',
  }, {
    autoplay: 0,
    loop: 1,
    className: 'videoBG2',
  });


    let instance = document.querySelector('.videoBG video');
    instance.onended = function(){
      document.querySelector('.animation-bg--1').style.opacity = 0;
      document.querySelector('.animation-bg--2').style.opacity = 1;
      startVideo('.videoBG2 video');
    };

    startVideo('.videoBG video');

    
    function startVideo(name){
      document.querySelector(name).setAttribute('preload','none');
      setTimeout(function () {
        document.querySelector(name).play();
        document.querySelector(name).style.opacity = 1;
      });
      //play after load if previous does not work
      window.addEventListener('load',()=>{
        document.querySelector(name).play();
        document.querySelector(name).style.opacity = 1;
      });
      //play only mobile
      if(window.innerWidth<768){
        document.querySelector(name).setAttribute('playsinline','playsinline');
        window.addEventListener('load',()=>{
          setTimeout(function () {
            document.querySelector(name).play();
          })
        });

      }
    }





};
