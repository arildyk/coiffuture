
const links = [
    "https://www.menshairstyletrends.com/wp-content/uploads/2021/04/Bald-fade-haircut-flat-top-beard-andyfadepro-1024x1024.jpg",
    "https://manhaircuts.com/wp-content/uploads/2020/05/Classic-Juice-Box-Fade-with-Parallel-Line-1024x1024.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2021/06/Short-mullet-haircut-with-temple-fade-_nicolerenae-1024x1024.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts-1024x1024.jpg",
    "https://i.pinimg.com/originals/d0/d6/5d/d0d65d67709bf74952c507633a140ee1.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2020/05/buzz-cut-low-fade-short-beard-los_the_barber--1024x1024.jpg",
];

const names = ["Fade", "Juice Box", "Short Mullet", "Fade Taper", "Curly Fade", "Buzz"];
const descriptions = [
    "Une coiffure où les cheveux sur les côtés sont coupés et qui s'estompe sur la peau.",
    "Une coiffure qui imite la forme carrée d'une boîte à jus.",
    "Une coiffure où les cheveux sont coupés plus courts à l'avant et sur les côtés et plus un peu plus longs à l'arrière.",
    "Une coiffure où les cheveux changent progressivement d'une longueur à l'autre.",
    "Une coiffure où les cheveux sur les côtés sont coupés et estompé sur la peau et les cheveux sur le dessus restent bouclés.",
    "Une coiffure où la longueur des cheveux est la même sur toutes les parties de la tête.",
];

var divStyles = document.getElementById("divStyles");

const row = document.createElement("div");
row.className = "row justify-content-lg-around";
row.style.paddingTop = "20px";

for (var i = 1; i <= 3; i++) {
    const col = document.createElement("div");
    var k = i;
    for (var j = 1; j <= (names.length / 3); j++) {
        col.className = "col-lg";
    
        const img = document.createElement("img");
        const divInfo = document.createElement("div");
        const divStyleItem = document.createElement("div");
        const h5 = document.createElement("h5");
        const pPrice = document.createElement("p");
        const pDuree = document.createElement("p");
        const pDescription = document.createElement("p");
        
        divInfo.style.paddingTop = "10px";
        divInfo.style.height = "200px";
        divInfo.className = "text-left";
        
        divStyleItem.style.marginBottom = "40px";
        divStyleItem.className = "container";
        var index = k-1
        divStyleItem.id = index.toString();
        
        img.src = links[k-1];
        img.style.borderRadius = "60px";
        img.className = "img-fluid";

        pDuree.style.color = "darkgray";
        pDescription.style.color = "darkgray";

        h5.innerHTML = names[k-1];
        pPrice.innerHTML = "35 $";
        pDuree.innerHTML = "20 mins";
        pDescription.innerHTML = descriptions[k-1];

        divInfo.appendChild(h5);
        divInfo.appendChild(pPrice);
        divInfo.appendChild(pDuree);
        divInfo.appendChild(pDescription);
        divStyleItem.appendChild(img);
        divStyleItem.appendChild(divInfo);
        col.appendChild(divStyleItem);
        k += 3;
    }
    
    row.appendChild(col);
}

divStyles.appendChild(row);

var searchButton = document.getElementById("searchButton");

searchButton.onmouseover = function() {
    this.style.backgroundColor = "darkgray";
}

searchButton.onmouseout = function() {
    this.style.backgroundColor = "white";
}

searchButton.onmousedown = function() {
    this.style.backgroundColor = "gray";
}

searchButton.onmouseup = function() {
    this.style.backgroundColor = "darkgray";
}

searchButton.onclick = function() {
    var inputSearch = document.getElementById("inputSearch");
    var elements = divStyles.childNodes.elements;

    for (var i = 0; i < names.length; i++) {
       document.getElementById(i.toString()).style.display = "block";
    }

    if (inputSearch.value != "") {
        for (var i = 0; i < names.length; i++) {
            if (!names[i].includes(inputSearch.value)) {
                document.getElementById(i.toString()).style.display = "none";
            }

            if (elements[i].children.length == 0) {
                elements[i].style.display = "none";
            }

        }

    }
}