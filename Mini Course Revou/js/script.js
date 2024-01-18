const buttonPersegi = document.querySelector('.persegi');
const sectionPersegi = document.querySelector('.layoutpersegi');
const buttonPersegiPanjang = document.querySelector('.persegi-panjang');
const sectionPersegiPanjang = document.querySelector('.layoutpersegipanjang');

buttonPersegi.addEventListener('click', function () {
    sectionPersegi.style.display = 'block';
    sectionPersegiPanjang.style.display = 'none';
})

buttonPersegiPanjang.addEventListener('click', function () {
    sectionPersegiPanjang.style.display = 'block';
    sectionPersegi.style.display = 'none';
})

const angkaInput = document.getElementById('angka');
const hitungButton = document.getElementById('hitungButton');
const hasilLuasP = document.getElementById('hasilP');
const sisiPersegi = document.getElementById('sisiPersegi');
const rumusLuasPersegi = document.getElementById('rumusLuasPersegi');

const inputKeliling = document.getElementById('angkaKeliling');
const hitungKelilingButton = document.getElementById('hitungKelilingButton');
const hasilKelilingSpan = document.getElementById('hasilKeliling');
const sisiKelilingSpan = document.getElementById('sisiKeliling');
const rumusKelilingPersegi = document.getElementById('rumusKelilingPersegi');

const inputPanjang = document.getElementById('panjang');
const inputLebar = document.getElementById('lebar');
const hitungLuasButton = document.getElementById('hitungLuasButton');
const hasilLuasPP = document.getElementById('hasilLuasPP');
const panjangLebar = document.getElementById('panjangLebar');
const rumusLuasPP = document.getElementById('rumusLuasPP');

const panjangKeliling = document.getElementById('panjangKeliling');
const lebarKeliling = document.getElementById('lebarKeliling');
const hitungKelilingPPButton = document.getElementById('hitungKelilingPPButton');
const hasilKelilingPP = document.getElementById('hasilKelilingPP');
const plKeliling = document.getElementById('plKeliling');
const rumusKelilingPP = document.getElementById('rumusKelilingPP');

hitungButton.addEventListener('click', function() {
    const angka = parseInt(angkaInput.value, 10);
    const sisi = angka;
    

    if (!isNaN(angka) && angka >= 0) {
        const hasil = angka * angka;
        rumusLuasPersegi.textContent = 'L = S x S';
        sisiPersegi.textContent = `L = ${sisi} x ${sisi}`;
        hasilLuasP.textContent = `L = ${hasil}`;
        rumusLuasPersegi.style.display = 'block';
        sisiPersegi.style.display = 'block';
        hasilLuasP.style.display = 'block';
    } else {
        alert('Masukkan angka yang valid.');
    }
});


hitungKelilingButton.addEventListener('click', function() {
    const angka = parseInt(inputKeliling.value, 10);
    const sisi = angka;
    

    if (!isNaN(angka) && angka >= 0) {
        const hasil = angka * 4;
        rumusKelilingPersegi.textContent = 'L = 4 x S';
        sisiKelilingSpan.textContent = `K = 4 x ${sisi}`;
        hasilKelilingSpan.textContent = `K = ${hasil}`;
        rumusKelilingPersegi.style.display = 'block';
        sisiKelilingSpan.style.display = 'block';
        hasilKelilingSpan.style.display = 'block';
    } else {
        alert('Masukkan angka yang valid.');
    }
});

hitungLuasButton.addEventListener('click', function() {
    const panjang = parseInt(inputPanjang.value, 10);
    const lebar = parseInt(inputLebar.value, 10);

    
    if (!isNaN(panjang) && !isNaN(lebar) && panjang >= 0 && lebar >= 0) {
        const hasil = panjang * lebar;
        rumusLuasPP.textContent = 'L = P x l';
        panjangLebar.textContent = `L = ${panjang} x ${lebar}`;
        hasilLuasPP.textContent = `L = ${hasil}`;
        rumusLuasPP.style.display = 'block';
        panjangLebar.style.display = 'block';
        hasilLuasPP.style.display = 'block';
    } else {
        alert('Masukkan angka yang valid.');
    }
});

hitungKelilingPPButton.addEventListener('click', function() {
    const panjang = parseInt(panjangKeliling.value, 10);
    const lebar = parseInt(lebarKeliling.value, 10);
    

    if (!isNaN(panjang) && !isNaN(lebar) && panjang >= 0 && lebar >= 0) {
        const hasil = (2 * panjang) + (2 * lebar);
        rumusKelilingPP.textContent = 'K = 2 (P + l)';
        plKeliling.textContent = `K = 2 (${panjang} + ${lebar})`;
        hasilKelilingPP.textContent = `K = ${hasil}`;
        rumusKelilingPP.style.display = 'block';
        plKeliling.style.display = 'block';
        hasilKelilingPP.style.display = 'block';
    } else {
        alert('Masukkan angka yang valid.');
    }
});

const reset = document.querySelectorAll('button[type="reset"]');
for (let i = 0; i <= reset.length; i++) {
    reset[i].addEventListener('click', function () {
        rumusLuasPersegi.style.display = 'none';
        sisiPersegi.style.display = `none`;
        hasilLuasP.style.display = `none`;
        rumusKelilingPersegi.style.display = 'none';
        sisiKelilingSpan.style.display = 'none';
        hasilKelilingSpan.style.display = 'none';
        rumusLuasPP.style.display = 'none';
        panjangLebar.style.display = 'none';
        hasilLuasPP.style.display = 'none';
        rumusKelilingPP.style.display = 'none';
        plKeliling.style.display = 'none';
        hasilKelilingPP.style.display = 'none';
    })
}

