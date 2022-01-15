
function getValue() {
    const penghasilanValue = document.getElementById("input-penghasilan").value;

    const penghasilan = penghasilanValue;

    const persenan = 10;

    const persen60 = (penghasilan/persenan) * 6;
    const hitung60 = penghasilan - persen60;

    const persen30 = (hitung60/persenan) * 3;
    const hitung30 = hitung60 - persen30;

    const persen10 = (hitung30/persenan) * 1;
    const hitung10 = hitung30 - persen10;

    const hasilKotor = persen60 + persen30 + persen10;
    const sisaPenghasilan = penghasilan - hasilKotor;

    document.getElementById("pendapatan").innerHTML = `Penghasilan: ${penghasilan}`;
    document.getElementById("60").innerHTML = `Kebutuhan Sehari-hari: ${persen60}`;
    document.getElementById("30").innerHTML = `Investasi dan Tabungan: ${persen30}`;
    document.getElementById("10").innerHTML = `Amal: ${persen10}`;
    document.getElementById("sisa").innerHTML = `Sisa Penghasilan: ${sisaPenghasilan}`;

    console.log(persen60);
    console.log(persen30);
    console.log(persen10);
    // console.log(hasilKotor);
    console.log(sisaPenghasilan);

    // console.log(penghasilanValue);
};

// node Penghitung-Keuangan.js
