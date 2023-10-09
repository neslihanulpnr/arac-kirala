const almabirakma = document.getElementById("alma-birakma");
   
almabirakma.addEventListener("submit", function (e){



    localStorage.setItem("alma", al);
    localStorage.setItem("bırakma", birak);
    localStorage.setItem("tarih ve saat", tarihvesaat);
});

