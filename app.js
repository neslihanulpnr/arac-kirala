const almabirakma = document.getElementById("alma-birakma");
   
almabirakma.addEventListener("submit", function (e){



    localStorage.setItem("alma");
    localStorage.setItem("bırakma");
    localStorage.setItem("tarih ve saat");
});

