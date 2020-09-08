// import {Reviews} from './reviews.js';
import './styles.css';
import img from './assets/person-1.jpeg';
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

function generateContent(){
  let avatar = document.querySelector('.img-container');
  let name = document.querySelector('.full-name');
  let major = document.querySelector('.major');
  let about = document.querySelector('.about');
  /*child elements*/
  let img = document.createElement('img');
  img.className = "person-img";
  img.src = `${reviews[0].img}`;
  let h2 = document.createElement('h2');
  h2.innerText = reviews[0].name;
  let h1 = document.createElement('h1');
  h1.innerText = reviews[0].job;
  let p = document.createElement('p');
  p.innerText = reviews[0].text;
  avatar.appendChild(img);
  name.appendChild(h2);
  major.appendChild(h1);
  about.appendChild(p);
}
generateContent();
// (function imgFun(){
//   let li = document.querySelector('li');
//   let imgTag = document.createElement('img');
//   imgTag.src = `${img}`;
//   imgTag.className = "person-img";
//   li.appendChild(imgTag);
// })();
