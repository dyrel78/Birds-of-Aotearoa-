let URL = "./nzbird.json";

populate();



// function closeSidebar(){
//   if(document.querySelector("sidebar").style.width > "0"){
//   document.getElementById("sidebar").style.width = "0";
//   }else{
//     document.getElementById("sidebar").style.width = "200"; 
//   }
// }

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarWidth = parseInt(sidebar.style.width);

  if (sidebarWidth > 0) {
    sidebar.style.width = "0";
    // sidebar.style.visibility = "hidden";
  } else {
    sidebar.style.width = "200px";
    // sidebar.style.visibility = "visible";


  }
}

function openSidebar(){
  document.getElementById("sidebar").style.width = "200";
}


// object.addEventListener("click", myScript);

// const button = document.createElement("button");
// button.textContent = "Dark Mode";
// button.setAttribute("class", "dark-mode-button");
// button.addEventListener("click", darkMode);
// document.header.appendChild(button);
// function darkMode(){
// }

const statusArr = new Array(
  "Not Threatened",
  "Naturally Uncommon",
  "Relict",
  "Recovering",
  "Declining",
  "Nationally Increasing",
  "Nationally Vulnerable",
  "Nationally Endangered",
  "Nationally Critical",
  "Extinct",
  "Data Deficient");

  const section2 = document.getElementById('bird-container');
  

let birbArr = [];
let id = null;


async function populate() {
  const response = await fetch(URL);
  if (!response.ok) {
    console.error(response.status);
  }
  const birds = await response.json();
  //const section = document.getElementById('bird-container');

  for (let i = 0; i < birds.length; i++) {
    createBirdPanel(birds[i]);
  }

}
// for (let birb of birds) {
// 2 articles inside the bird container
function createBirdPanel(birb) {

 // <div> Section 2
  // <div myArticle> 
  //   <div> Colour circle</div>
  //   <div> Photo</div>
  //   <div> Credit</div>
  //   <div> Primary Name</div>
  //   <div> English Name</div>
      //    <div labels >
            //     <div> Scientific Name</div>
            //     <div> Order</div>
            //     <div> Family</div>
            //     <div> Other Names</div>
            //     <div> Status</div>
            //     <div> Size</div>
            //     <div> Length</div>
            //     <div> Weight</div>
      //    </div>
      //<div> 
      // Back of card
      //</div>

      
  // </div>
// </div>

  const cardHouse = document.createElement("div");
  const myArticle = document.createElement("div");
  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  const colourCircle = document.createElement("div");
  const photo = document.createElement("img");
  const credit = document.createElement("p");
  const primaryName = document.createElement("h2");
  const engName = document.createElement("p");
  const sciName = document.createElement("p");
  const order = document.createElement("p");
  const family = document.createElement("p");
  const otherNames = document.createElement("ul");
  const status = document.createElement("p");
  const size = document.createElement("ul");
  const length = document.createElement("p");
  const weight = document.createElement("p");


  //Giving ID's
  //imageArticle.setAttribute("class", "birb-image-article");
    cardHouse.setAttribute("class", "birb-card-house");
  colourCircle.setAttribute("class", "birb-colour-circle");
  myArticle.setAttribute("class", "birb-article");
  cardBack.setAttribute("class", "birb-card-back");
    cardFront.setAttribute("class", "birb-card-front");


  photo.setAttribute("class", "birb-photo");
  credit.setAttribute("class", "birb-credit");
  primaryName.setAttribute("class", "birb-primary-name");
  engName.setAttribute("class", "birb-english-name");
  sciName.setAttribute("class", "birb-scientific-name");
  order.setAttribute("class", "birb-order");
  family.setAttribute("class", "birb-family");
  otherNames.setAttribute("class", "birb-other-names");
  status.setAttribute("class", "birb-status");
  //size.setAttribute("class", "birb-size");
  length.setAttribute("class", "birb-length");
  weight.setAttribute("class", "birb-weight");
  //Trial


  primaryName.textContent = birb.primary_name;
  engName.textContent = birb.english_name;
  sciName.textContent = birb.scientific_name;
  order.textContent = birb.order;
  family.textContent = birb.family;
  status.textContent = birb.status;

  const otherNamesList = birb.other_names;
  for (const x of otherNamesList) {
    const li = document.createElement("li");
    li.textContent = x;
    otherNames.appendChild(li);
  }

  
  photo.src = birb.photo.source;
  credit.textContent = "Photo by " + birb.photo.credit;
  length.textContent = birb.size.length.value + " " + birb.size.length.units;
  weight.textContent = birb.size.weight.value + " " + birb.size.weight.units;

  if (birb.status.toLowerCase().localeCompare("Not Threatened") === 0) {
    colourCircle.style.backgroundColor = "#02a028";
  }
  else if (birb.status.toLowerCase().localeCompare("naturally uncommon") === 0) {
    colourCircle.style.backgroundColor = "#649a31";
  }
  else if (birb.status.toLowerCase().localeCompare("relict") === 0) {
    colourCircle.style.backgroundColor = "#99cb68";
  }
  else if (birb.status.toLowerCase().localeCompare("recovering") === 0) {
    colourCircle.style.backgroundColor = "#fecc33";
  }
  else if (birb.status.toLowerCase().localeCompare("declining") === 0) {
    colourCircle.style.backgroundColor = "#fe9a01";
  }
  else if (birb.status.toLowerCase().localeCompare("nationally increasing") === 0) {
    colourCircle.style.backgroundColor = "#c26967";
  }
  else if (birb.status.toLowerCase().localeCompare("nationally vulnerable") === 0) {
    colourCircle.style.backgroundColor = "#9b0000";
  }
  else if (birb.status.toLowerCase().localeCompare("nationally endangered") === 0) {
    colourCircle.style.backgroundColor = "#660032";
  }
  else if (birb.status.toLowerCase().localeCompare("nationally critical") === 0) {
    colourCircle.style.backgroundColor = "#320033";
  }
  else if (birb.status.toLowerCase().localeCompare("extinct") === 0) {
    colourCircle.style.backgroundColor = "black";
  }
  else if (birb.status.toLowerCase().localeCompare("data deficient") === 0) {
    colourCircle.style.backgroundColor = "black";
  } else {
    colourCircle.style.backgroundColor = "#02a028";
  }


  
 

  const labels = document.createElement("div");
  labels.setAttribute("class", "birb-labels");
  const birbText = document.createElement("div");
  birbText.setAttribute("class", "birb-text-labels");

  


  const sciNameLabel = document.createElement("p");
  sciNameLabel.textContent = "Scientific Name:";
  sciNameLabel.setAttribute("class", "sci-name-label");
  sciName.appendChild(sciNameLabel);

  const orderLabel = document.createElement("p");
  orderLabel.textContent = "Order:";
  orderLabel.setAttribute("class", "order-label");
  const familyLabel = document.createElement("p");
  familyLabel.setAttribute("class", "family-label");
  familyLabel.textContent = "Family:";

  const statusLabel = document.createElement("p");
  statusLabel.textContent = "Status:";
  statusLabel.setAttribute("class", "status-label");

  const lengthLabel = document.createElement("p");
  lengthLabel.textContent = "Length:";
  lengthLabel.setAttribute("class", "length-label");
  const weightLabel = document.createElement("p");
  weightLabel.textContent = "Weight:";
  weightLabel.setAttribute("class", "weight-label");



  /*
        Back of the card
  */
  const otherNamesHeader = document.createElement("h2");
  otherNamesHeader.setAttribute("class", "other-names-header");
  otherNamesHeader.textContent = "Other Names:";

  const backImage = document.createElement("img");
  backImage.setAttribute("class", "back-card-image");
  backImage.src = "heightStock.jpeg";

 


  labels.appendChild(sciNameLabel);
  labels.appendChild(sciName);
  labels.appendChild(familyLabel);

  labels.appendChild(orderLabel);
  labels.appendChild(order);

  labels.appendChild(family);
  labels.appendChild(statusLabel);
  labels.appendChild(status);
  labels.appendChild(lengthLabel);
  labels.appendChild(length);
  labels.appendChild(weightLabel);
  labels.appendChild(weight);

//Working
//   myArticle.appendChild(photo);
//   myArticle.appendChild(primaryName);
//   myArticle.appendChild(credit);
//   myArticle.appendChild(colourCircle);
//   myArticle.appendChild(engName);
//   myArticle.appendChild(labels);




    cardFront.appendChild(photo);
    cardFront.appendChild(primaryName);
    cardFront.appendChild(credit);
    cardFront.appendChild(colourCircle);
    cardFront.appendChild(engName);
    cardFront.appendChild(labels);

    cardBack.appendChild(otherNamesHeader);
    cardBack.appendChild(otherNames);
    //cardBack.appendChild(backImage);

 

  myArticle.appendChild(cardFront);
  myArticle.appendChild(cardBack);


  cardHouse.appendChild(myArticle);
  section2.appendChild(cardHouse);
  //section2.appendChild(myArticle);

  // Label not part of birc article 
  /*section.appendChild(labels);*/




  

  // COLOUR CHANGE HOVER

// Set the background color for the color circle
  const circleBgColor = getStatusColor(birb.status);
  //colourCircle.style.backgroundColor = circleBgColor;
  // Set the custom property --circle-bg-color on the birb-article element
  myArticle.style.setProperty('--circle-bg-color', circleBgColor);

  //section2.appendChild(myArticle);
  //birb.element = myArticle;
  birb.element= cardHouse;
  birbArr.push(birb);

  console.log(otherNames);

  
}





//Testing

console.log(birbArr);


function searchNames(input, bird) {
  const maoriName = bird.primary_name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const sciName = bird.scientific_name.toLowerCase();
  const engName = bird.english_name.toLowerCase();

  for(let i = 0; i < bird.other_names.length; i++) {
    const otherName = bird.other_names[i].toLowerCase();
    if(otherName.includes(input)) {
      return true;
    }
  }

  if (maoriName.includes(input) || sciName.includes(input) || engName.includes(input)) {
    return true;
  } else {
    return false;
  }

}


function addBirds(currentBirds) {
  section2.innerHTML = "";
  //section2 = document.querySelector('section2');
  const birbsFound = document.getElementById("birbs-found");

  birbsFound.textContent = `Found ${currentBirds.length} bird(s).`;



  currentBirds.forEach(birb => {
    section2.append(birb.element);
  });

  if (currentBirds.length === 0) {
    const errorMessage = document.createElement('p');
    errorMessage.setAttribute('class', 'error');
    errorMessage.textContent = "No birds matched your search terms.";
    section2.append(errorMessage);
  }
}


function lightestToHeaviest(a, b) {
  if (a.size.weight.value < b.size.weight.value) { return -1; }
  if (a.size.weight.value > b.size.weight.value) { return 1; }
  return 0;
}
function heaviestToLightest(a, b) {
  if (a.size.weight.value > b.size.weight.value) { return -1; }
  if (a.size.weight.value < b.size.weight.value) {return 1;}
  return 0;
}
function alphabeticalByEnglish(a, b) {
  if (a.english_name < b.english_name) {return -1;}
  if (a.english_name > b.english_name) {return 1;}
  return 0;
}
function alphabeticalByMaori(a, b) {
  if (a.primary_name < b.primary_name) {return -1;}
  if (a.primary_name > b.primary_name) {return 1;}
  return 0;
}
function shortestToLongest(a, b) {
  if (a.size.length.value < b.size.length.value) {return -1;}
  if (a.size.length.value > b.size.length.value) {return 1;}
  return 0;
}
function longestToShortest(a, b) {
  if (a.size.length.value > b.size.length.value) {
    return -1;
  }
  if (a.size.length.value < b.size.length.value) {
    return 1;
  }
  return 0;
}






// Search when filter button clicked
document.getElementById("filter-button").addEventListener('click', function () {
  const searchTerm = document.querySelector("#search").value;
  let currentBirds = birbArr.slice();

  // Search by name
  if (searchTerm === "") {
    currentBirds = birbArr.slice();
    //currentBirds = birbArr;
  } else {
    currentBirds = [];
    // Remove macrons and diacritics from search term
    let processedSearch = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    birbArr.forEach(birb => {
      if (searchNames(processedSearch, birb)) {
        //console.log(birb);
        currentBirds.push(birb);
      }
    });
  }

    //console.log(currentBirds);
  // Search by status
  const conservationStatus = document.querySelector("#searchStatus").selectedIndex;
  if (conservationStatus > 0) {
    for (let i = currentBirds.length - 1; i > -1; i--) {
      if (currentBirds[i].status != statusArr[conservationStatus - 1]) {
        currentBirds.splice(i, 1);

      }
    }
  }

  // Sort by selector
  const searchOption = document.querySelector("#sortBy").selectedIndex;
  switch (searchOption) {
    case 0:
     currentBirds.sort(alphabeticalByMaori);
     break;
    case 1:
      currentBirds.sort(lightestToHeaviest);
      break;
    case 2:
      currentBirds.sort(heaviestToLightest);
      break;
    case 3:
      currentBirds.sort(alphabeticalByEnglish);
      break;
    case 4:
      currentBirds.sort(alphabeticalByMaori);
      break;
    case 5:
      currentBirds.sort(shortestToLongest);
      break;
    case 6:
      currentBirds.sort(longestToShortest);
      break;

    
  }
  //Birds Found
  addBirds(currentBirds);
});


// Reset button
document.getElementById("reset-button").addEventListener('click', function () {
  document.querySelector("#search").value = "";
  document.querySelector("#searchStatus").selectedIndex = 0;
  document.querySelector("#sortBy").selectedIndex = 0;
  addBirds(birbArr);
  



});


function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "not threatened":
      return "#02a028";
    case "naturally uncommon":
      return "#649a31";
    case "relict":
      return "#99cb68";
    case "recovering":
      return "#fecc33";
    case "declining":
      return "#fe9a01";
    case "nationally increasing":
      return "#c26967";
    case "nationally vulnerable":
      return "#9b0000";
    case "nationally endangered":
      return "#660032";
    case "nationally critical":
      return "#320033";
    case "extinct":
      return "black";
    case "data deficient":
      return "black";
    default:
      return "#02a028"; // Default color if status is not recognized
  }
}



// const openBar = document.getElementById("open-sidebar-button");

// openBar.addEventListener('click', () => {
//   sidebar.classList.toggle('hidden');
// });



//Change colour of shadow on hover for each bird
