alert("Game Tebak Angka! \n Tebak Angka antara 1-10 \n Anda Punya 3 Kesempatan");

const angkabenar = 5;

for(let nyawa = 3; nyawa >= 1; nyawa--){
    const tebak = prompt(`Masukan angka`);
    
    if (tebak == angkabenar){
        alert(`Tebakan anda benar! \n Angka yang dicari adalah ${angkabenar}`);
    break;
    }
    
    else if (tebak > angkabenar) {
        alert(`Tebakan anda terlalu besar \n kesempatan sisa ${nyawa - 1}`);
    }

    else if (tebak < angkabenar){
        alert(`Tebakan anda terlalu kecil \n kesempatan sisa ${nyawa - 1}`);
    }
    
    if (nyawa == 1){
        alert(`Game Over \n Angka yang benar adalah ${angkabenar}`);
}
}