
  const user = {
    firstName: 'Victor',
    lastName: 'Crest',
    age: 26,
    city: 'London',

    followers: '80K',
    likes: '803K',
    photos: '1.4K'
  }

  document.getElementById("user-first-name").textContent = user.firstName;
  document.getElementById("user-last-name").textContent = user.lastName;
  document.getElementById("user-age").textContent = user.age;
  document.getElementById("user-city").textContent = user.city;

  document.getElementById("followers-num").textContent = user.followers;
  document.getElementById("likes-num").textContent = user.likes;
  document.getElementById("photos-num").textContent = user.photos;
