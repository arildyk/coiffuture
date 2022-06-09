
const links = [
    "https://www.menshairstyletrends.com/wp-content/uploads/2021/04/Bald-fade-haircut-flat-top-beard-andyfadepro-1024x1024.jpg",
    "https://manhaircuts.com/wp-content/uploads/2020/05/Classic-Juice-Box-Fade-with-Parallel-Line-1024x1024.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2021/06/Short-mullet-haircut-with-temple-fade-_nicolerenae-1024x1024.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Taper-haircut-black-Mark-Ingram-Pattycuts-1024x1024.jpg",
    "https://i.pinimg.com/originals/d0/d6/5d/d0d65d67709bf74952c507633a140ee1.jpg",
    "https://www.menshairstyletrends.com/wp-content/uploads/2020/05/buzz-cut-low-fade-short-beard-los_the_barber--1024x1024.jpg",
];

const names = ["Fade", "Juice Box", "Short Mullet", "Taper", "Curly Fade", "Buzz"];
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
// row.style.paddingTop = "20px";

for (var i = 1; i <= 3; i++) {
    const col = document.createElement("div");
    col.className = "col";
    var k = i;
    for (var j = 1; j <= (names.length / 3); j++) {
    
        const img = document.createElement("img");
        const divInfo = document.createElement("div");
        const divStyleItem = document.createElement("div");
        const h5 = document.createElement("h5");
        const pPrice = document.createElement("p");
        const pDuree = document.createElement("p");
        const pDescription = document.createElement("p");
        const aStyleItemButton = document.createElement("a");
        
        var index = k-1
        var id = index + 1;
        divStyleItem.id = id.toString();
        
        img.src = links[index];
        
        pDuree.style.color = "gray";
        pDescription.style.color = "gray";
        divStyleItem.style.marginBottom = "25px";
        
        h5.innerHTML = names[index];
        pPrice.innerHTML = "Prix: 35 $";
        pDuree.innerHTML = "Durée: 20 mins";
        pDescription.innerHTML = descriptions[index];
        aStyleItemButton.innerHTML = "Voir plus";
        
        h5.className = "card-title";
        img.className = "card-img-top";
        pPrice.className = "card-text";
        pDuree.className = "card-text";
        pDescription.className = "card-text";
        divStyleItem.className = "card";
        divInfo.className = "card-body";
        aStyleItemButton.className = "btn btn-dark";

        aStyleItemButton.href = "page-du-style-choisi-" + divStyleItem.id + ".html";

        divInfo.appendChild(h5);
        divInfo.appendChild(pPrice);
        divInfo.appendChild(pDuree);
        divInfo.appendChild(pDescription);
        divInfo.appendChild(aStyleItemButton);
        divStyleItem.appendChild(img);
        divStyleItem.appendChild(divInfo);

        col.appendChild(divStyleItem);
        k += 3;
    }
    
    row.appendChild(col);
}

divStyles.appendChild(row);