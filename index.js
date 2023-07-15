function changeLanguage(language) {
    const signinLink = document.getElementById('signin-link');
    const joinnowLink = document.getElementById('joinnow-link');
    const languageButton = document.getElementById('language-button');
    const currencyButton = document.getElementById('currency-button');
  
    const english = document.getElementById('english');
    const malay = document.getElementById('malay');
    const chinese = document.getElementById('chinese');
  
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const roomssuitesLink = document.getElementById('rooms-suites-link');
    const servicesLink = document.getElementById('services-link');
    const promosLink = document.getElementById('promos-offers-link');
    const testimonialsLink = document.getElementById('testimonials-link');
    const contactLink = document.getElementById('contact-link');
  
    const welcomeText = document.getElementById('welcome-text');
    const hotelName = document.getElementById('hotel-name');
    const hotelType = document.getElementById('hotel-type');
    const tagline = document.getElementById('tagline');
  
    if (language === 'en') {
      signinLink.innerText = 'Sign In';
      joinnowLink.innerText = 'Join Now';
      languageButton.innerText = 'Language';
      currencyButton.innerText = 'Currency';
  
      english.innerText = 'English';
      malay.innerText = 'Malay';
      chinese.innerText = 'Chinese';
  
      homeLink.innerText = 'Home';
      aboutLink.innerText = 'About';
      roomssuitesLink.innerText = 'Rooms & Suites';
      servicesLink.innerText = 'Services';
      promosLink.innerText = 'Promos & Offers';
      testimonialsLink.innerText = 'Testimonials';
      contactLink.innerText = 'Contact';
  
      welcomeText.innerText = 'WELCOME TO';
      hotelName.innerText = 'THE VANS';
      hotelType.innerText = 'Resort & Spa Hotel';
      tagline.innerText = 'Where City Chic Meets Hotel Bliss!';
    } else if (language === 'malay') {
      signinLink.innerText = 'Log Masuk';
      joinnowLink.innerText = 'Sertai Sekarang';
      languageButton.innerText = 'Bahasa';
      currencyButton.innerText = 'Mata Wang';
  
      english.innerText = 'Bahasa Inggeris';
      malay.innerText = 'Bahasa Melayu';
      chinese.innerText = 'Bahasa Cina';
  
      homeLink.innerText = 'Utama';
      aboutLink.innerText = 'Tentang Kami';
      roomssuitesLink.innerText = 'Bilik & Suite';
      servicesLink.innerText = 'Perkhidmatan';
      promosLink.innerText = 'Promosi & Tawaran';
      testimonialsLink.innerText = 'Testimoni';
      contactLink.innerText = 'Hubungi Kami';
  
      welcomeText.innerText = 'SELAMAT DATANG KE';
      hotelName.innerText = 'THE VANS';
      hotelType.innerText = 'Hotel Resort & Spa';
      tagline.innerText = 'Tempat City Chic Menyatu dengan Kesejahteraan Hotel!';
    } else if (language === 'chinese') {
      signinLink.innerText = '登录';
      joinnowLink.innerText = '立即注册';
      languageButton.innerText = '语言';
      currencyButton.innerText = '货币';
  
      english.innerText = '英文';
      malay.innerText = '马来文';
      chinese.innerText = '中文';
  
      homeLink.innerText = '首页';
      aboutLink.innerText = '关于';
      roomssuitesLink.innerText = '客房与套房';
      servicesLink.innerText = '服务';
      promosLink.innerText = '促销与优惠';
      testimonialsLink.innerText = '客户评价';
      contactLink.innerText = '联系我们';
  
      welcomeText.innerText = '欢迎来到';
      hotelName.innerText = 'THE VANS';
      hotelType.innerText = '度假村和水疗酒店';
      tagline.innerText = '城市时尚与酒店幸福相遇的地方！';
    }
  }

function redirectToRoomPage() {
  window.location.href = "rooms&suites/room.html";
}
  
$(function () {
  $('.datepicker').datepicker({
    minDate: 0,
    onSelect: function (selectedDate, instance) {
      var startDate = new Date($('#indates').datepicker('getDate'));
      var endDate = new Date($('#outdates').datepicker('getDate'));

      if (startDate && endDate) {
        var nights = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
        if (nights >= 1) {
          $('#night-label').text(nights + ' night' + (nights > 1 ? 's' : ''));
        } else {
          $('#night-label').text('');
        }
      } else {
        $('#night-label').text('');
      }
    },
  });
});
