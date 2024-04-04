let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2},
];

function cekPeminjaman() {
    let jumlahInput = document.getElementById("jumlah").value;
    let pilihanBuku = document.getElementById("pilihan").value;

    if (jumlahInput === "") {
        alert("Masukkan jumlah buku yang ingin dipinjam!");
    } else {
        let bukuDitemukan = false;
        for (let i = 0; i < buku.length; i++) {
            if (buku[i].nama === pilihanBuku) {
                bukuDitemukan = true;
                if (parseInt(jumlahInput) > buku[i].jumlah) {
                    alert("Jumlah buku tidak tersedia!");
                } else {
                    alert("Silahkan ambil buku anda!");
                }
                break;
            }
        }
        if (!bukuDitemukan) {
            alert("Buku tidak ditemukan!");
        }
    }
}
