const images = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg",
  "images/slider4.jpg",
  "images/slider5.jpg",
  "images/slider6.jpg",
  "images/slider7.jpg",
];

let imgIndex = 0;
const imgElement = document.getElementById("img-url");
setInterval(() => {
  imgIndex++;
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgElement.setAttribute("src", imgUrl);
}, 3000);
