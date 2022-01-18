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

    document.getElementById("pendapatan").innerHTML = `Penghasilan: ${converterRupiah(penghasilan)},-`;
    document.getElementById("60").innerHTML = `Kebutuhan Sehari-hari: ${converterRupiah(persen60)},-`;
    document.getElementById("30").innerHTML = `Investasi dan Tabungan: ${converterRupiah(persen30)},-`;
    document.getElementById("10").innerHTML = `Amal: ${converterRupiah(persen10)},-`;
    document.getElementById("sisa").innerHTML = `Sisa Penghasilan: ${converterRupiah(sisaPenghasilan)},-`;

    // console.log(penghasilanValue);

    // console.log(`Penghasilan: ${converterRupiah(penghasilan)}`);
    // console.log(`60%: ${converterRupiah(persen60)}`);
    // console.log(`30%: ${converterRupiah(persen30)}`);
    // console.log(`10%: ${converterRupiah(persen10)}`);
    // console.log(`Sisa Penghasilan: ${converterRupiah(sisaPenghasilan)}`);
};

function converterRupiah(num) {
    let rupiah = "";
    let angkarev = num.toString().split("").reverse().join("");
    for (let i = 0; i < angkarev.length; i++) {
      if (i % 3 === 0) {
        // Kondisi jika index kelipatan 3 sama dengan 0
        rupiah += angkarev.substr(i, 3) + ".";
      }
    }
    const result =
      "Rp." +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("");
    return result;
};

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    getValue();
  });