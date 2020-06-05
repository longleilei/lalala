
window.onload = function() {


  const unpackBtn = document.getElementById("unpack"); 


  unpackBtn.addEventListener('click', function (e) {

    document.getElementById('gift-wrapper').style.display = "flex";
    unpackBtn.style.display = "none"; 

  }); 

  const gift1 = document.getElementById('LeiLei'); 
  const modal1 = document.getElementById('modal-1');

  const gift2 = document.getElementById('Adrian'); 
  const modal2 = document.getElementById('modal-2'); 

  const gift3 = document.getElementById('Family'); 
  const modal3 = document.getElementById('modal-3'); 

  const gift4 = document.getElementById('Nina'); 
  const modal4 = document.getElementById('modal-4'); 

  const gift5 = document.getElementById('Yaro'); 
  const modal5 = document.getElementById('modal-5'); 

  const gift6 = document.getElementById('Sergii'); 
  const modal6 = document.getElementById('modal-6');

  const gift7 = document.getElementById('Vinci'); 
  const modal7 = document.getElementById('modal-7');


  document.getElementById('overlay1').classList.remove('active'); 
  document.getElementById('overlay2').classList.remove('active'); 
  document.getElementById('overlay3').classList.remove('active'); 
  document.getElementById('overlay4').classList.remove('active'); 
  document.getElementById('overlay5').classList.remove('active'); 
  document.getElementById('overlay6').classList.remove('active'); 
  document.getElementById('overlay7').classList.remove('active'); 

  
  //Gift 1
  gift1.addEventListener('click', function (e) {
    modal1.classList.add('active'); 
    document.getElementById('overlay1').classList.add('active'); 
  });

  document.getElementById('btn-1').addEventListener('click', function (e) {
    modal1.classList.remove('active'); 
    document.getElementById('overlay1').classList.remove('active'); 
    //document.getElementById("video-1").pause();
  });


  //Gift 2
  gift2.addEventListener('click', function (e) {
    modal2.classList.add('active'); 
    document.getElementById('overlay2').classList.add('active'); 
  });

  document.getElementById('btn-2').addEventListener('click', function (e) {
    //console.log("clicked!") 
    modal2.classList.remove('active'); 
    document.getElementById('overlay2').classList.remove('active'); 
    //document.getElementById("video-2").pause();
  });


  //Gift 3
  gift3.addEventListener('click', function (e) {
    modal3.classList.add('active'); 
    document.getElementById('overlay3').classList.add('active'); 
  });

  document.getElementById('btn-3').addEventListener('click', function (e) { 
    modal3.classList.remove('active'); 
    document.getElementById('overlay3').classList.remove('active'); 
    //document.getElementById("video-3").pause();
  });


  //Gift 4
  gift4.addEventListener('click', function (e) {
    modal4.classList.add('active'); 
    document.getElementById('overlay4').classList.add('active'); 
  });

  document.getElementById('btn-4').addEventListener('click', function (e) { 
    modal4.classList.remove('active'); 
    document.getElementById('overlay4').classList.remove('active'); 
    //document.getElementById("video-4").pause();
  });

  //Gift 5 
   gift5.addEventListener('click', function (e) {
    modal5.classList.add('active'); 
    document.getElementById('overlay5').classList.add('active'); 
  });

  document.getElementById('btn-5').addEventListener('click', function (e) { 
    modal5.classList.remove('active'); 
    document.getElementById('overlay5').classList.remove('active'); 
  });

  
  //Gift 6 
  gift6.addEventListener('click', function (e) {
    modal6.classList.add('active'); 
    document.getElementById('overlay6').classList.add('active'); 
  });

  document.getElementById('btn-6').addEventListener('click', function (e) { 
    modal6.classList.remove('active'); 
    document.getElementById('overlay6').classList.remove('active'); 
  });

  //Gift 7 
  gift7.addEventListener('click', function (e) {
    modal7.classList.add('active'); 
    document.getElementById('overlay7').classList.add('active'); 
  });

  document.getElementById('btn-7').addEventListener('click', function (e) { 
    modal7.classList.remove('active'); 
    document.getElementById('overlay7').classList.remove('active'); 
  });


 
  




}