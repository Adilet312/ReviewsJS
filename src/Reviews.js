
import './styles.css';
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
let currentItem = 0;

document.querySelector('.nextBtn').addEventListener('click',function(){
  currentItem++;
  currentItem < reviews.length ? generateContent(currentItem) : "";
},false);
document.querySelector('.prevBtn').addEventListener('click',function(){
  currentItem--;
  currentItem >= 0 ? generateContent(currentItem) : "";


},false);

document.querySelector('.genBtn').addEventListener('click',function(){
  let index = Math.floor(Math.random()*reviews.length);
  generateContent(index);
},false);
window.addEventListener('DOMContentLoaded',function() {
  generateContent(currentItem);
},false);


function generateContent(index){
        let avatar = document.querySelector('.img-container img');
        let name = document.querySelector('.full-name h2');
        let major = document.querySelector('.major h1');
        let about = document.querySelector('.about p');
      /*child elements*/

        avatar.className = "person-img";
        avatar.src = `${reviews[index].img}`;
        name.innerText = reviews[index].name;
        major.innerText = reviews[index].job;
        about.innerText = reviews[index].text;
}
