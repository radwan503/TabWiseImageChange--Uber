const hero = document.querySelector('.hero-banner-content');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content')
const heroBanner = document.querySelector('.hero-banner')

hero.addEventListener('click', function (e) {
   const id = e.target.dataset.id;
   console.log(id)
   if (id) {
      btns.forEach((btn) => {
         btn.classList.remove('active')
      })
      e.target.classList.add('active')

      content.forEach((item) => {
         item.classList.remove('active')
      })
      const element = document.getElementById(id);
      element.classList.add("active");

      // image change
      if (id === 'driver') {
         heroBanner.style.backgroundImage = "url('./img/driver.webp')";
      } else if (id === 'eat') {
         heroBanner.style.backgroundImage = "url('./img/eat.webp')";
      } else if (id === 'rider') {
         heroBanner.style.backgroundImage = "url('./img/ride.webp')";
      }

   }
})