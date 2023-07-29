let URL = "./nzbird.json";

async function populate() {
    const response = await fetch(URL);
    if (!response.ok) {
      console.error(response.status);
    }
    const birds =  await response.json();
  
    const section = document.querySelector("#bird-container");

    for (let birb of birds) {
      // 2 articles inside the bird container

      const imageArticle = document.createElement("div");
      const myArticle = document.createElement("div");
      const photoArticle = document.createElement("div");

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
      colourCircle.setAttribute("class", "birb-colour-circle");
      photoArticle.setAttribute("class", "birb-photo-article");

      myArticle.setAttribute("class", "birb-article");

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
      credit.textContent ="Photo by " + birb.photo.credit;
      length.textContent = birb.size.length.value + " " + birb.size.length.units;
      weight.textContent = birb.size.weight.value + " " + birb.size.weight.units;
      //size.appendChild(length);
      //size.appendChild(weight);
  
      //try image by itself
      //imageArticle.appendChild(photo);
      /*imageArticle.appendChild(primaryName)
      imageArticle.appendChild(colourCircle)
      imageArticle.appendChild(credit)*/

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
      colourCircle.style.backgroundColor = "#02a028";
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
    }else {
    colourCircle.style.backgroundColor = "#02a028";
    }

    const labels = document.createElement("div");
    labels.setAttribute("class", "birb-labels");
    const birbText = document.createElement("div");
    birbText.setAttribute("class", "birb-text-labels");


    const sciNameLabel = document.createElement("p");
    sciNameLabel.textContent = "Scientific Name: ";
    sciName.appendChild(sciNameLabel);
 
    const orderLabel = document.createElement("p");
    orderLabel.textContent = "Order:";
    const familyLabel = document.createElement("p");
    familyLabel.textContent = "Family:";

    const statusLabel = document.createElement("p");
    statusLabel.textContent = "Status:";

    const lengthLabel = document.createElement("p");
    lengthLabel.textContent = "Length:";
    const weightLabel = document.createElement("p");
    weightLabel.textContent = "Weight";




    labels.appendChild(sciNameLabel);
    labels.appendChild(orderLabel);
    labels.appendChild(familyLabel);
    labels.appendChild(statusLabel);
    labels.appendChild(lengthLabel);
    labels.appendChild(weightLabel);

    /*
    birbText.appendChild(sciName);
    birbText.appendChild(order);
    birbText.appendChild(family);
    birbText.appendChild(status);
    birbText.appendChild(length);
    birbText.appendChild(weight);

    photoArticle.appendChild(photo);
    photoArticle.appendChild(primaryName);
    photoArticle.appendChild(colourCircle);
    photoArticle.appendChild(credit);
*/

      
      myArticle.appendChild(photo);
      myArticle.appendChild(primaryName);
      myArticle.appendChild(credit);
      myArticle.appendChild(colourCircle);

      myArticle.appendChild(engName);
      myArticle.appendChild(sciName);
      myArticle.appendChild(order);
      myArticle.appendChild(family);
      //myArticle.appendChild(otherNames);
      myArticle.appendChild(status);
      myArticle.appendChild(length);
      myArticle.appendChild(weight);
      

      //Image and article are children of section
     // section.appendChild(imageArticle);
           section.appendChild(myArticle);
           section.appendChild(labels);

      //section.appendChild(photoArticle);
      //section.appendChild(birbText);

      //myArticle.append(imageArticle);

      

    }


  }
  populate();

  