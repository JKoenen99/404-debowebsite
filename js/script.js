var button = document.getElementById('button');

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'js/data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Lost in space", // Name for future reference. Optional.
})


button.addEventListener("mouseenter", function() {
animation.play();
});

button.addEventListener("mouseleave", function() {
animation.stop();
});