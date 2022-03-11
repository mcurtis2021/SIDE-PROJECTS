window.onload = function findPicture() {
  // storage of jpg's
  const ranImg = Math.floor(Math.random() * 84);
  const img = document.createElement("img");
  img.src = `img/unnamed (${ranImg}).jpg`;
  const imgHolder = document.querySelector(".second");
  imgHolder.append(img);
};
