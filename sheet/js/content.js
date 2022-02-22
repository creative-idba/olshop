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

// Slider
const myslide = document.querySelectorAll('.myslider'),
  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

function plusSlides(n) {
  counter += n;
  slidefun(counter);
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active');
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = 'block';
  dot[counter - 1].classList.add('active');
}

const myslidee = document.querySelectorAll('.myslidee'),
  dott = document.querySelectorAll('.tab p');

let counterr = 1;
slidefunn(counterr);

function plusSlidess(n) {
  counterr += n;
  slidefunn(counterr);
}
function currentSlidee(n) {
  counterr = n;
  slidefunn(counterr);
}

function slidefunn(n) {
  let i;
  for (i = 0; i < myslidee.length; i++) {
    myslidee[i].style.display = 'none';
  }
  for (i = 0; i < dott.length; i++) {
    dott[i].classList.remove('activee');
  }
  if (n > myslidee.length) {
    counterr = 1;
  }
  if (n < 1) {
    counterr = myslidee.length;
  }
  myslidee[counterr - 1].style.display = 'block';
  dott[counterr - 1].classList.add('activee');
}
//End Slider

//Total apem
function hasilApem(jumlah_apem) {
  var datajumlah = parseInt(jumlah_apem);
  document.getElementById('total-apem').innerHTML = datajumlah * 1500;
}
//Total donat
function hasilDonat(jumlah_donat) {
  var datajumlah = parseInt(jumlah_donat);
  document.getElementById('total-donat').innerHTML = datajumlah * 2500;
}
//Total lemper
function hasilLemper(jumlah_lemper) {
  var datajumlah = parseInt(jumlah_lemper);
  document.getElementById('total-lemper').innerHTML = datajumlah * 2500;
}
//Total pastel
function hasilPastel(jumlah_pastel) {
  var datajumlah = parseInt(jumlah_pastel);
  document.getElementById('total-pastel').innerHTML = datajumlah * 2500;
}
//Total putu ayu
function hasilPutuAyu(jumlah_putu_ayu) {
  var datajumlah = parseInt(jumlah_putu_ayu);
  document.getElementById('total-putu-ayu').innerHTML = datajumlah * 2500;
}
//Total wingko
function hasilWingko(jumlah_wingko) {
  var datajumlah = parseInt(jumlah_wingko);
  document.getElementById('total-wingko').innerHTML = datajumlah * 2500;
}
//Total sus buah
function hasilSusBuah(jumlah_sus_buah) {
  var datajumlah = parseInt(jumlah_sus_buah);
  document.getElementById('total-sus-buah').innerHTML = datajumlah * 2500;
}
//Total bolu kelapa
function hasilBoluKelapa(jumlah_bolu_kelapa) {
  var datajumlah = parseInt(jumlah_bolu_kelapa);
  document.getElementById('total-bolu-kelapa').innerHTML = datajumlah * 2500;
}

//WA
$(document).on('click', '.send', function () {
  var input_blanter = document.getElementById('catatan');

  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
    phone = '6285854708692',
    walink2 = 'Halo, saya ingin memesan:';

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
  }

  if ('' != input_blanter.value) {
    /* Call Input Form */
    var input_nama = $('#tittle').text(),
      input_jumlah = $('#jumlah').val(),
      date = $('#date').val(),
      total = $('.tota').text(),
      input_catatan = $('#catatan').val();

    // dp
    var dp = total / 2;

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      '?phone=' +
      phone +
      '&text=' +
      walink2 +
      '%0A%0A' +
      '*Jenis Pangan* : ' +
      input_nama +
      '%0A' +
      '*Jumlah* : ' +
      input_jumlah +
      '%0A' +
      '*Total* : ' +
      'Rp.' +
      total +
      '%0A' +
      '*DP* : ' +
      'Rp.' +
      dp +
      '%0A ' +
      '*Catatan* : ' +
      input_catatan +
      '%0A' +
      '*Tanggal Pengambilan* : ' +
      date +
      '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, '_blank');
  }
});
