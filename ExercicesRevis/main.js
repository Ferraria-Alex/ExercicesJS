async function getRandomProfile() {
  try{
  let res = await fetch("https://randomuser.me/api/");
  let person = await res.json();
  return person.results[0];
  }catch(error){
    console.error(error);
  }
}
let profile = await getRandomProfile();

let mainDiv = document.getElementById("userCard");
let profileImg = document.createElement("img");
let div = document.createElement("div");
let h5 = document.createElement("h5");
let email = document.createElement("p");
let address = document.createElement("p");
let phone = document.createElement("p");
let button = document.createElement("button");

profileImg.src = profile.picture.large;
profileImg.alt = "Person";
profileImg.classList.add("card-img-top");
mainDiv.appendChild(profileImg);

div.classList.add("card-body");
mainDiv.appendChild(div);

h5.classList.add("card-title");
h5.textContent = `${profile.name.title} ${profile.name.first} ${profile.name.last}`;
div.appendChild(h5);

email.textContent = profile.email
email.classList.add("card-text");
div.appendChild(email);

address.textContent = "Address : " + profile.location.postcode + " - " + profile.location.street.name + " (" + profile.location.city + " - " + profile.location.country + ")"; 
address.classList.add("card-text");
div.appendChild(address);

phone.textContent = "Phone : " + profile.cell
phone.classList.add("card-text");
div.appendChild(phone);

button.textContent = "Random User"
button.classList.add("btn", "btn-primary");
button.addEventListener("click", function(){
  
});
div.appendChild(button);



