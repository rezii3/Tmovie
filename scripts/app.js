


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI3MDhhZTkwODM4ZTJjMmYzMDI3YmM1NGZmMjRhNCIsInN1YiI6IjY1ZDNiYWMwNDE0MjkxMDE3Y2ExNDQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.frtX4pOe0sHC3n5aBxi8_yul0k9U5kgxFnUsk1QbKTk'
  }
};

// კარუსელი პირველი
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    renderJ(data);
    
  });

  
  function renderJ(data) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; 
    let carouselHtml = ''; 
    data.results.forEach(movie => {
      if (movie.poster_path) {
        carouselHtml += `
          <div class="item">
            <img class="cardImg" src="${baseImageUrl}${movie.poster_path}">
            <h6 class="Ctitle">${movie.title}</h6>
            <div class="Imdb">
            <h5 class="IMDB">Rating:</h5>
            <p class="Rating">   ${movie.vote_average}</p>    
      </div>
          </div>
          
        `;
        
      }
    });

    document.querySelector(".MainCarusel").innerHTML = `
      <div class="owl-carousel owl-theme">
        ${carouselHtml}
      </div>
    `;
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }
    });
  }

  // კარუსელი მეორე 
  
  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    renderTV(data);
    
  });

  
  function renderTV(data) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; 
    
    let carouselHtml2 = ''; 
    
    data.results.forEach(movie => {
      if (movie.poster_path) {
        carouselHtml2 += `
          <div class="item">
    
            <img class="cardImg" src="${baseImageUrl}${movie.poster_path}">
            <h6 class="Ctitle">${movie.name}</h6>
            <div class="Imdb">
            <h5 class="IMDB">Rating:</h5>
            <p class="Rating">   ${movie.vote_average}</p>
            
      </div>
          </div>
          
        `;
      }
    });

    document.querySelector(".MainCarusel2").innerHTML = `
      <div class="owl-carousel owl-theme">
        ${carouselHtml2}
      </div>
    `;
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }
    });
  }

  // კარუსელი მესამე

  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(data => {
    renderAll(data);
  });

  function renderAll(data) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; 
    let carouselHtml3 = ''; 
    data.results.forEach(movie => {
      if (movie.poster_path && movie.title) {
        carouselHtml3 += `
          <div class="item">
            <img class="cardImg" src="${baseImageUrl}${movie.poster_path}">
            <h6 class="Ctitle">${movie.title}</h6>
            <div class="Imdb">
            <h5 class="IMDB">Rating:</h5>
            <p class="Rating">   ${movie.vote_average}</p>
      </div>
          </div>
          
        `;
      }
    });
    
    document.querySelector(".MainCarusel3").innerHTML = `
      <div class="owl-carousel owl-theme">
        ${carouselHtml3}
      </div>
    `;
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  })
  }

  // კარუსელი მეოთხე

  fetch("https://api.jikan.moe/v4/anime?q=berserk&sfw")
  .then(response => response.json())
  .then(data => {
    renderAnime(data);
    
  });

  function renderAnime(data) {
    let carouselHtml4 = ''; 
    data.data.forEach(anime => {
      if (anime.images && anime.title && anime.score) {
        carouselHtml4 += `
          <div class="item">
          <a class="Yt" href="${anime.url}"> <img class="cardImg" src="${anime.images.jpg.large_image_url}"></a>
            <h6 class="Ctitle">${anime.title}</h6>
            <div class="Imdb">
            <h5 class="IMDB">Rating:</h5>
            <p class="Rating">   ${anime.score}</p>
            
      </div>
          </div>
          
        `;
      }
    });
    
    document.querySelector(".MainCarusel4").innerHTML = `
      <div class="owl-carousel owl-theme">
        ${carouselHtml4}
      </div>
    `;
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  })
  }
  // მსახიობები

  fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    renderPeople(data);
    
  });

  function renderPeople (data){
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; 
    let actors = document.querySelector(".PeopleDiv")
    data.results.forEach(people =>{
      if (people.profile_path) {
        actors.innerHTML += `
        <div class="cardP" style="width: 18rem;">
        <img  src="${baseImageUrl}${people.profile_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${people.name}</h5>
          <p class="card-text">popularity ${people.popularity}</p>
        </div>
      </div>
        
        `
      }
    })
  }

  // ანიმეები

  fetch("https://api.jikan.moe/v4/anime?q=bleach&sfw")
  .then(response => response.json())
  .then(data => {
    renderAnimePage(data);
    
  });

  function renderAnimePage (data){
    let AllAnime = document.querySelector(".AnimeDiv")
    data.data.forEach(people =>{
      if (people.images && people.title) {
        AllAnime.innerHTML += `
        <div class="cardA" style="width: 18rem;">
        <a href="${people.url}"><img  src="${people.images.jpg.large_image_url}" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title">${people.title}</h5>
          <p class="card-text"> IMDb: ${people.score}</p>
        </div>
        <div class="Imdb">
          <p class="card-text"> IMDb:</p>
          <p class="card-Score">${people.score}</p>
        </div>
      </div>
        
        `
      }
    })
  }

  fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw")
  .then(response => response.json())
  .then(data => {
    renderAnimePage(data);
  });

  function renderAnimePage (data){
    let AllAnime = document.querySelector(".AnimeDiv")
    data.data.forEach(people =>{
      if (people.images && people.title) {
        AllAnime.innerHTML += `
        <div class="cardA" style="width: 18rem;">
        <a href="${people.url}"><img  src="${people.images.jpg.large_image_url}" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-titleA">${people.title}</h5>
        </div>
        <div class="AnimeImdb">
        <p class="card-textA"> IMDb:</p>
        <p class="card-Score">${people.score}</p>
      </div>
      </div>
        
        `
      }
    })
  }

  // filter page start 

  function Search() {
    let movieName = document.querySelector(".Filter").value;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI3MDhhZTkwODM4ZTJjMmYzMDI3YmM1NGZmMjRhNCIsInN1YiI6IjY1ZDNiYWMwNDE0MjkxMDE3Y2ExNDQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.frtX4pOe0sHC3n5aBxi8_yul0k9U5kgxFnUsk1QbKTk'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let FilterCard = document.querySelector(".Selector");
            const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

            data.results.forEach(result => {
              if(result.title && result.poster_path){
                FilterCard.innerHTML += `<div class="cardF" style="width: 18rem;">
                <img src="${baseImageUrl}${result.poster_path}" class="card-img-top" alt="...">
                <div class="card-bodyF">
                    <h5 class="card-titleF">${result.title}</h5>
                    <a href="#" class="btn btn-primary">More Info</a>
                </div>
                </div>
                `;
            }});
            
              
        })
       
        }

Search();

  
  
  
  


  


