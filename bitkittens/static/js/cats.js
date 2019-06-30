
document.addEventListener("DOMContentLoaded", function () {
  const summon = document.querySelector('.summon-cats');
  let catbox = document.querySelectorAll('.cat-box');

  summon.addEventListener('click', function () {
    axios.get('http://bitkittens.herokuapp.com/cats.json')
    .then(response => {
      let cats = response.data.cats;

      catbox.forEach((box, index) => {
        let image = document.createElement('img');
        image.src = cats[index].photo;
        image.alt = "Photo of " + cats[index].name;
        if (box.childElementCount > 0) {
          box.replaceChild(image, box.firstChild);
        } else {
          box.appendChild(image);
        }
      });
    });
  });
});