const data = {
  first: {
    Fname: "FIRST",
    Lname: "1",
    img_src: "/images/first.jpeg",
    value: "70",
  },
  second: {
    Fname: "SECOND",
    Lname: "2",
    img_src: "/images/third.jpeg",
    value: "10",
  },
  third: {
    Fname: "THIRD  ",
    Lname: "3",
    img_src: "/images/secondnft.jpeg",
    value: "20",
  },
  fourth: {
    Fname: "FOURTH  ",
    Lname: "4",
    img_src: "/images/turbines.jpeg",
    value: "30",
  },
  fifth: {
    Fname: "fifth  ",
    Lname: "5",
    img_src: "/images/avatar5.png",
    value: "30",
  },
  current: {
    Fname: "CURRENT  ",
    Lname: "5",
    img_src: "/images/3551911.jpg",
    value: "40",
  },
};
current_array = [];
const avatars = ["first", "second", "third"];
let offset = -1;
const images = document.querySelectorAll(".img");
const currentImage = document.getElementById("img_current");

const renderImages = () => {
  for (const [index, image] of images.entries()) {
    image.src = data[current_array[index]]?.img_src;
  }
};

const renderAvatars = (currentData) => {
  avatars.forEach((val, index) => {
    // console.log(currentData[index]);
    let bar = new ldBar(`#${val}_loadbar`);
    bar.set(data[currentData[index]].value);
    let Fname = document.getElementById(`${val}_Fname`);
    let Lname = document.getElementById(`${val}_Lname`);
    Fname.innerHTML = data[currentData[index]].Fname.slice(0, 10);
    Lname.innerHTML = data[currentData[index]].Lname.slice(0, 10);
    bar.set(data[currentData[index]].value);
  });
};

const render = () => {
  offset++;
  const keys = Object.keys(data);
  const mappedData = avatars.map(
    (val, index) => keys[(index + offset) % keys.length]
  );

  currentData = mappedData;
  current_array = mappedData;
  renderAvatars(mappedData);
  renderImages();
};

const renderRight = () => {
  offset = offset !== 0 ? offset : 4;
  offset--;
  const keys = Object.keys(data);
  const mappedData = avatars.map(
    (val, index) => keys[(index + offset) % keys.length]
  );
  current_array = mappedData;
  renderAvatars(mappedData);
  renderImages();
};

const displayAvatars = () => {
  const a = document.getElementById("main");
  a.style.display = a.style.display === "none" ? "flex" : "none";
};

const initAllImgs = () => {
  for (const [index, image] of images.entries()) {
    image.addEventListener("mouseover", () => {
      image.style.opacity = "0.2";
    });
    image.addEventListener("mouseleave", () => {
      image.style.opacity = "1";
    });
  }
};

const initCurrentImg = () => {
  currentImage.addEventListener("mouseover", () => {
    currentImage.style.opacity = "0.2";
  });
  currentImage.addEventListener("mouseleave", () => {
    currentImage.style.opacity = "1";
  });
  currentImage.src = data.current.img_src;
};

render();
initCurrentImg();
initAllImgs();
