
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
            console.log(facebookData);
            fbFollowers.innerHTML = facebookData.followers;
            fblikes.innerHTML = facebookData.likes;
            fbpageviews.innerHTML = facebookData.pageViews;

            const igData = data.social.instagram;
            const youData = data.social.youtube;

            igFollowers.innerHTML = igData.followers;
            youFollowers.innerHTML = youData.subscribers;
          })
       .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();
