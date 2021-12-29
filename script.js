var o = document.body;

function alert(){
    var t = document.createElement("h1");
    for (var p; p< 11; p++){
        t.innerHTML = p + " " + document.cookie;
        o.append(t);
    }
}

document.cookie = 69 * (Math.random() * (Math.random() * Math.random()) + (Math.random() * (Math.random() * Math.random())));

var div = document.getElementById("testing");

function XSS() {
    var p = document.createElement("div");
    p.classList.add("divi");
    var t = document.getElementById("value").value;
    p.innerHTML = t;
    if (t == "cookie") {
        p.innerHTML = "<ul><li>" + document.cookie + "</li></ul>";
    }
    if (t == "<h1>cookie</h1>") {
        p.innerHTML = "<h1>" + document.cookie + "<h1>";
    }
    if (t == "<h1>cookie<h1> original") {
        p.innerHTML = "<h1>cookie</h1>";
    }
    if (t == "cookie original") {
        p.innerHTML = "cookie";
    }
    if (t == "your mom") {
        p.innerHTML = "<img src='karen.jpg' alt='Karen'>";
    }

    if (t == "karen") {
        p.innerHTML = "<h1><strong><b>your mom</b></strong></h1>";
    }

    if (t == "button") {
        for (var l = 0; l < 11; l++) {
            p.innerHTML = "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><button>no rick roll</button></a>";
        }
    }

    if (t == "<a>your mom</a>") {
        p.innerHTML = "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><h1>your mom</h1></a>";
    }

    if (t == "document.body") {
        p.innerHTML = document.body;
    }

    if (t == 69) {
        p.innerHTML = "<h1>nice</h1>"
    }

    if (t == "<bruh></bruh>") {
        p.innerHTML = "<a href='https://www.youtube.com/watch?v=8MOtth7Vln8'><button>bruh</button></a>"
    }

    o.append(p);
    var divs = document.createElement("div");
    divs.classList.add("op");
    o.append(divs);
}