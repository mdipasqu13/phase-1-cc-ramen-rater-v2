// index.js
document.addEventListener("DOMContentLoaded", (event) => {
  main()
});




// Callbacks
const handleClick = (ramen) => {
  // Add code 
  console.log(ramen)
  const detailImage = document.querySelector('.detail-image');
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');
// console.log(ramen.img)
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const ramenMenu = document.getElementById('ramen-menu'); 
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
   
  const imgElement = document.createElement('img')
    imgElement.src = newRamen.image;
    imgElement.alt = newRamen.name;
    imgElement.addEventListener('click', function() {
      
      handleClick(newRamen);
    });
   ramenMenu.appendChild(imgElement);

})
}

const displayRamens = () => {
  // Add code
  const ramenMenu = document.getElementById('ramen-menu');
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach((ramen) => {
      const imgElement = document.createElement('img');
      imgElement.src = ramen.image;
      imgElement.alt = ramen.name;

      imgElement.addEventListener('click', function() {
        // console.log(ramen, 'display ramens')
        handleClick(ramen);
      });

      ramenMenu.appendChild(imgElement);
    });
});
}

const main = () => {
  displayRamens()// Invoke displayRamens here
  addSubmitListener() // Invoke addSubmitListener here
}


//Export functions for testing




export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

// export displayRamens
// export addSubmitListener
// export handleClick
// export main