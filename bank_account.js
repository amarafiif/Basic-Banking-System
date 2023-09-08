let saldo = 0;

function tambahSaldo() {
    let nominal = parseFloat(window.prompt("Masukkan jumlah yang ingin ditambahkan"));

    if(!isNaN(nominal) && nominal > 0) {
        saldo += nominal;

        alert(`Nominal sejumlah ${nominal} berhasil ditambahkan!`);
    }else{
        alert(`Gagal, pastikan menggunakan format angka!`);
    }
}

function kurangiSaldo() {
    let nominal = parseFloat(window.prompt("Masukkan jumlah yang ingin dikurangi"));

    if(!isNaN(nominal) && nominal > 0) {
        saldo -= nominal;

        alert(`Nominal sejumlah ${nominal} berhasil dikurangi!`);
    }else{
        alert("Gagal, pastikan menggunakan format angka!");
    }
}

function lihatSaldo() {
    alert(`Saldo anda saat ini berjumlah Rp. ${saldo}`);
}