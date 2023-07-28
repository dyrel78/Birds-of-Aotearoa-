let URL = "./nzbird.json";

/*async function fetchData() {
    const response = await fetch(URL);
    if (!response.ok) {
      console.error(response.status);
    }
    const birds = await response.json();
    console.log(birds);
    birds.forEach(bird => {
      const birdArticle = createBirdElement(bird);
    });
  }*/

/*function createBirdElement(obj){
  const main = document.querySelector('#bird-container');
    const birdArticle = document.createElement('article');
    birdArticle.setAttribute('class', 'birdArticle');
    main.appendChild(birdArticle);
    return birdArticle;
}*/







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


      imageArticle.setAttribute("class", "birb-image-article");
      colourCircle.setAttribute("class", "birb-colour-circle");

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

      const sciNameLabel = document.createElement("p");
      sciNameLabel.textContent = "Scientific Name";
      sciName.appendChild(sciNameLabel);
    


  
      primaryName.textContent = birb.primary_name;
      engName.textContent = birb.english_name;
      sciName.textContent =birb.scientific_name;
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
      credit.textContent = birb.photo.credit;
      length.textContent = birb.size.length.value + " " + birb.size.length.units;
      weight.textContent = birb.size.weight.value + " " + birb.size.weight.units;
      //size.appendChild(length);
      //size.appendChild(weight);
  
      //try image by itself
      //imageArticle.appendChild(photo);
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
      section.appendChild(imageArticle);
      section.appendChild(myArticle);

    }


  }
  populate();
  //fetchData();

  