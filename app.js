const form = document.querySelector('.all');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const alma = form.querySelector('select[name="alma-yeri"]').value;
    const birakma = form.querySelectorAll('select[name="birakma-yeri"]').value;
    const almaBirakmaTarihi = form.querySelectorAll('input[type="datetime-local"]');

    const almaTarihi = almaBirakmaTarihi[0].value;
    const birakmaTarihi = almaBirakmaTarihi[1].value;

    localStorage.setItem("alma", alma);
    localStorage.setItem("birakma", birakma);
    localStorage.setItem("almaTarihi", almaTarihi);
    localStorage.setItem("birakmaTarihi", birakmaTarihi);

    form.reset();

    console.log("seçimler localstorage'a eklendi")
});

