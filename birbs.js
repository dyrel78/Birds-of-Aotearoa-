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
      const myArticle = document.createElement("article");

      const primaryName = document.createElement("h2");
      const engName = document.createElement("p");
      const sciName = document.createElement("p");
      const order = document.createElement("p");
      const family = document.createElement("p");
      const otherNames = document.createElement("ul");
      const status = document.createElement("p");
      const photo = document.createElement("img");
      const credit = document.createElement("p");
      const size = document.createElement("ul");
      const length = document.createElement("li");
      const weight = document.createElement("li");
  
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
      credit.textContent = birb.photo.credit;
      length.textContent = birb.size.length.value + " " + birb.size.length.units;
      weight.textContent = birb.size.weight.value + " " + birb.size.weight.units;
      size.appendChild(length);
      size.appendChild(weight);
  
      myArticle.appendChild(primaryName);
      myArticle.appendChild(engName);
      myArticle.appendChild(sciName);
      myArticle.appendChild(order);
      myArticle.appendChild(family);
      myArticle.appendChild(otherNames);
      myArticle.appendChild(status);
      myArticle.appendChild(photo);
      myArticle.appendChild(size);
      myArticle.appendChild(credit);

      section.appendChild(myArticle);

    }


  }
  populate();
  //fetchData();

  