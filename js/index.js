let slide = document.getElementById("slideimg");

let arr = [
  "https://www.boat-lifestyle.com/cdn/shop/files/WEb-_1_1600x.jpg?v=1720162453",
  "https://www.boat-lifestyle.com/cdn/shop/files/Summer-Desk-Banner_1_1600x.jpg?v=1718191845",
  "https://www.boat-lifestyle.com/cdn/shop/files/PB_400_Web_1440x.gif?v=1718346574",
  "https://www.boat-lifestyle.com/cdn/shop/files/Oasis-Web_1600x.jpg?v=1720180879",
  "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_3_Banner_WEB_1_d83f900d-242a-4263-aa4d-560f5a657758.jpg",
];

let z = setInterval(() => {
  function randomNumber() {
    return Math.random() * (5 - 0) + 0;
  }
  let x = Math.trunc(randomNumber());

  slide.src = arr[x];
}, 1000);
