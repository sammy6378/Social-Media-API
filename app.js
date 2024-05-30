document.addEventListener('DOMContentLoaded', function(e) {
  const spinner = document.querySelector('.spinner');
  if (spinner) {
      spinner.classList.add('spinn');
      $('.spinner').fadeIn(4000, function() {
          setTimeout(function() {
              $('.spinner').fadeOut(2000);
          }, 1000);
      });
  }
});

// toggle dark and light
const dark = document.getElementById('checked');
const slider = document.querySelector('.slider');

slider.addEventListener('click', () => {
    dark.checked = !dark.checked;
    slider.classList.toggle(dark.checked);
    document.body.classList.toggle("dark");
});

// fetch followers

const fbFollowers = document.querySelector('.fb-followers');
const fblikes = document.getElementById('fbLikes');
const fbpageviews = document.querySelector('.fb-views');
const igFollowers = document.querySelector('.ig-followers');
const youFollowers = document.querySelector('.youtube-followers');

 function fetchData(){
   fetch(`db.json`)
   .then(response => response.json())
   .then(data => {
        const facebookData = data.social.facebook;
            setTimeout(()=>{
              fbFollowers.innerHTML = facebookData.followers;
              fblikes.innerHTML = facebookData.likes;
              fbpageviews.innerHTML = facebookData.pageViews;
            },2000)
            

            const igData = data.social.instagram;
            const youData = data.social.youtube;
            setTimeout(() => {
            igFollowers.innerHTML = igData.followers;
            youFollowers.innerHTML = youData.subscribers;
            }, 2000);
            
          })
       .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();
