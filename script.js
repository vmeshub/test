const carousel = document.querySelector('.carousel');
  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;
  const totalItems = items.length;
  const slideWidth = items[0].clientWidth;

  function slide(direction) {
    if (direction === 'next') {
      currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    } else {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
    }
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  setInterval(() => slide('next'), 5000); // Change image every 2 seconds

let posts = {
  "0000": true,
  "0001": true,
  "0002": true,
  "0003": true,
  "0004": true,
  "0005": true
};

let tags = {
  "comedia": [
    "0000"
  ],
  "video": [
    "0004"
  ],
  "humor": [
    "0003",
    "0005",
    "0001"
  ],
  "historias": [
    "0003",
    "0002"
  ],
  "musica": [
    "0004"
  ],
  "bizarro": [
    "0000"
    ],
  "memes": [
    "0000"
  ],
  "musicas": [
    "0004"
  ],
  "wtf": [
    "0000"
  ]
};

function viewTag(tag) {
    if (tags[tag] !==  undefined) {
      if (document.getElementById("coluna").style.display === "none") {
        document.getElementById("coluna").removeAttribute("style");
      }
      for (var post in posts) {
        document.getElementById(post).style.display = "none";
      }
      for (var post in tags[tag]) {
        document.getElementById(tags[tag][post]).removeAttribute("style");
      }
    }
    else {
      document.getElementById("coluna").style.display = "none";
      viewPost("0000");
    }
}

function viewPost(id) {
    for (var post in posts) {
      document.getElementById(post).style.display = "none";
    }
    document.getElementById(id).removeAttribute("style");
}

function inputSearch() {
    if (document.getElementById("search").value.length === 4) {
      if (posts[document.getElementById("search").value] === true) {
        if (document.getElementById("coluna").style.display === "none") {
          document.getElementById("coluna").removeAttribute("style");
        }
        viewPost(document.getElementById("search").value);
      }
      else {
        document.getElementById("coluna").style.display = "none";
        viewPost("0000");
      }
    }
}

