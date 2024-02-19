alert("Aplikasi Cek Nilai");

const nama = prompt("Masukan Nama");
const nilai = prompt("Masukan Nilai");

//alert("Nama " + nama + " Nilai " + nilai);

//Peraturan
//Nilai 100-90 : A
//Nilai 89-80 : B
if (nilai > 90 && nilai < 100){
    alert (`Siswa ${nama} dengan nilai ${nilai} mendapat`);
}
if (nilai > 90){
    alert('Siswa ' + nama + ' dengan nilai ' + nilai + ' mendapat poin A');
}
else if (nilai >= 80){
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat poin B`);
}
else if (nilai > 70){
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat poin C`);
}
else if (nilai > 60){
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat poin D`);
}
else {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat poin E`);
}