// Navbar
const tab1 = document.querySelector('.tab .row1');
const tab2 = document.querySelector('.tab .row2');
const info = document.querySelector('.tab .info');
const definisi = document.querySelector('.tab .definisi');

tab1.addEventListener('click', function () {
  definisi.classList.toggle('opacity1');
});
tab2.addEventListener('click', function () {
  info.classList.toggle('opacity1');
});

//Total
function hasil(jumlah) {
  var datajumlah = parseInt(jumlah);
  document.getElementById('total').innerHTML = datajumlah * 1000;
};

//WA
$(document).on('click','.send', function(){
  
  var input_blanter = document.getElementById('catatan');
  
  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
      phone = '6281977094280',
      walink2 = 'Halo saya ingin ',
      text_yes = 'Terkirim.',
      text_no = 'Isi semua Formulir lalu klik Send.';
  
  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var walink = 'whatsapp://send';
  }

  if("" != input_blanter.value){
   /* Call Input Form */
  var input_jumlah = $("#jumlah").val(),
      input_catatan = $("#catatan").val();
  
  /* Final Whatsapp URL */
  var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
      '*Jumlah* : ' + input_jumlah + '%0A' +
      '*Catatan* : ' + input_catatan + '%0A';
  
  /* Whatsapp Window Open */
  window.open(blanter_whatsapp,'_blank');
  } 
  });