import logo from './logo.svg';
import './App.css';

document.body.style.backgroundColor="white";

document.querySelector('.cardbtn').addEventListener("click", (e) => {
  const card = document.getElementById("card");
  const copy = card.cloneNode(true);
  document.body.appendChild(copy);
})

document.querySelector('.backgroundbtn').addEventListener("click", (e) => {
  if (document.body.style.backgroundColor=="white"){
    document.body.style.backgroundColor="black";
  }
  else if (document.body.style.backgroundColor="black") {
    document.body.style.backgroundColor="white"
  }
})

document.querySelector('.deletebtn').addEventListener("click", (e) => {
  const deleter = document.getElementById("card");
  deleter.remove(deleter.lastElementChild);
  })

document.querySelector('.haxbtn').addEventListener("click", (e) => {
  var descRevealer = document.getElementById("descript");
  if (descRevealer.style.visibility === "hidden") {
    descRevealer.style.visibility = "visible";
  }
  else{
    descRevealer.style.visibility = "hidden";
  }
  })

document.querySelector('.headingchangebtn').addEventListener("click", (e) => {
  const headset = document.getElementById("head");
  headset.innerHTML = "something else";
  })

function App() {
  return (

<>
    <div>
  <button class="cardbtn"> Duplicate </button>
  <button class="backgroundbtn cardbtn"> Dark Mode/Light Mode </button>
  <button class="deletebtn cardbtn"> Delete Last Instance </button>
  <button class="headingchangebtn cardbtn"> Change Heading </button>
</div>

<div id="card" class="size">
  <div id="head" class="top">
    <h1> Thursday Homework (Week 2) </h1>
  </div>
  <div class="image">
    <img src="https://i.ytimg.com/vi/0gC7onSsEUU/hqdefault.jpg" alt="Bing Chilling"/>
    <button class="haxbtn"> Details </button>

  </div>
  <div id="descript" class="desc">
    Image above depicts Actor and WWE Wrestler John Cena attempting to promote his upcoming movie, Fast and the Furious 9, in mandarin towards the chinese viewer market after previously making a controversial claim. The image comes from a video, famously known for its ridiculous scenario and for its famous line "bīng qí lín", or "Bing Chilling" as what it is commonly known as around the internet.
  </div>
</div>
</>
  );
}

export default App;
