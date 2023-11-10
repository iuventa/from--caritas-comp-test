let ganatebaon = () => {
    document.getElementById("natura").src = "img/lampOn.png";
}

let ganatebaoff = () => {
    document.getElementById("natura").src = "img/lamp.png";
}

let ganateba = (a) => {
    let surati = document.
        getElementById("natura").src;

    console.log(surati);

    if (surati == 'file:///C:/Users/CCT_17/Desktop/gakvetili%201%20java%20script/img/lamp.png') {
        document.getElementById("natura").src = "img/lampOn.png";
        a.innerHTML = "off"
    }
    else {
        document.getElementById("natura").src = "img/lamp.png";
        a.innerHTML = "on"
    }
}
