const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const reviews = [
{
name:"Rishiks saha",
rating:"★★★★★",
text:"Staying at this PG has been a truly pleasant experience. The rooms are clean, well-maintained, and comfortable, making it feel like a home away from home. The environment is peaceful and safe, which really helps after a long day. The owners are very sweet , kind, supportive, and always ready to help whenever needed. Basic facilities are provided properly, and cleanliness is given good importance. Overall, it’s a wonderful place to stay, and I would definitely recommend this PG to anyone looking for comfort, safety, and a positive living experience.And yes Aunty prepared very good food ,it's delicious."
},
{
name:"Gamya K",
rating:"★★★★★",
text:"I am writing this staying after a month over here.This PG offers a clean, peaceful, and well-maintained environment perfect for students and working professionals. The rooms are spacious, hygienic, and regularly cleaned.The owners are genuinely kind and approachable. They’re quick to respond to any concerns, treat tenants with respect, and go the extra mile to make everyone feel at home."
},
{
name:"Dimmiti.sruthi",
rating:"★★★★☆",
text:"Staying at this hostel has been an incredibly warm and memorable experience. The food is not only delicious but also carries a homely touch, clearly prepared with love and care. Aunty and Uncle are the soul of this place – their kindness, support, and genuine care make everyone feel like part of the family. The hostel itself is clean, comfortable, and well-maintained, with spacious rooms and a peaceful, safe environment. I highly recommend it to anyone seeking a serene, home-like stay."
},
{
name:"Vaishnavi chavhan",
rating:"★★★★★",
text:"Overall a really good PG. Rooms are clean and comfortable, food is good, and the environment feels safe and homely. Management is cooperative and everything is well maintained. Happy staying here."
}
];

const container =
document.getElementById("review-container");

reviews.forEach(review=>{

container.innerHTML += `
<div class="review">
<h3>${review.name}</h3>
<p>${review.rating}</p>
<p>${review.text}</p>
</div>
`;

});