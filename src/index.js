// index.js
document.addEventListener('DOMContentLoaded', function() {
  // Callbacks
  const handleClick = (ramen) => {
  
    const detailImage = document.querySelector('.detail-image');
    const nameElement = document.querySelector('.name');
    const restaurantElement = document.querySelector('.restaurant');
    const ratingDisplay = document.getElementById('rating-display');
    const commentDisplay = document.getElementById('comment-display');
  
    detailImage.src = ramen.img;
    detailImage.alt = ramen.name;
    nameElement.textContent = ramen.name;
    restaurantElement.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  };
  
  const addSubmitListener = () => {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const newName = document.getElementById('new-name').value;
      const newRestaurant = document.getElementById('new-restaurant').value;
      const newImage = document.getElementById('new-image').value;
      const newRating = document.getElementById('new-rating').value;
      const newComment = document.getElementById('new-comment').value;
  
      const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      };
  
      displayRamens();
  
    });
  
  };
  
  const displayRamens = () => {
    const ramenMenu = document.getElementById('ramen-menu');
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        ramenMenu.innerHTML = '';
        ramens.forEach((ramen) => {
          const imgElement = document.createElement('img');
          imgElement.src = ramen.image;
          imgElement.alt = ramen.name;
  
          imgElement.addEventListener('click', function() {
            handleClick(ramen);
          });
  
          ramenMenu.appendChild(imgElement);
        });
      
      })
  
      .catch(error => {
        console.log('Error fetching ramens:', error);
      });
  
  
  };
  
  const main = () => {
    displayRamens();// Invoke displayRamens here
    addSubmitListener();// Invoke addSubmitListener here
  };
  
  main()
  
  // Export functions for testing
  export {
    displayRamens,
    addSubmitListener,
    handleClick,
    main,
  };
  
  })
  
  
  //displayRamens 
  //  should fetch all ramens and display them as <img> inside #ramen-menu
  //handleClick 
  //  should fire on a click on every img inside #ramen-menu
  //  should append the correct data to the DOM
  //handleSubmit 
  //  should add a new slider image when the submit button is clicked
  //  should attach a click listener to the new element to display its details