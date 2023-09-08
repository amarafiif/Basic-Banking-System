class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    deposit(amount) {
        setTimeout(() => {
            if (!isNaN(amount) && amount > 0) {
                this.saldo += amount;
                alert(`Nominal sejumlah ${amount} berhasil ditambahkan! Saldo saat ini: Rp. ${this.saldo}`);
            } else {
                alert("Gagal, pastikan menggunakan format angka yang benar!");
            }
        }, 2000); // Menunda eksekusi selama 2 detik
    }

    withdraw(amount) {
        setTimeout(() => {
            if (!isNaN(amount) && amount > 0) {
                if (this.saldo >= amount) {
                    this.saldo -= amount;
                    alert(`Nominal sejumlah ${amount} berhasil ditarik! Saldo saat ini: Rp. ${this.saldo}`);
                } else {
                    alert("Gagal, saldo tidak mencukupi!");
                }
            } else {
                alert("Gagal, pastikan menggunakan format angka yang benar!");
            }
        }, 2000); // Menunda eksekusi selama 2 detik
    }

    lihatSaldo() {
        alert(`Saldo anda saat ini berjumlah Rp. ${this.saldo}`);
    }
}

const myAccount = new BankAccount();

// myAccount.deposit(parseFloat(prompt("Masukkan jumlah yang ingin ditambahkan")));
// myAccount.withdraw(parseFloat(prompt("Masukkan jumlah yang ingin ditarik")));
// myAccount.lihatSaldo();

function deposit() {
    const amount = parseFloat(prompt("Masukkan jumlah yang ingin ditambahkan"));
    myAccount.deposit(amount);
}

function withdraw() {
    const amount = parseFloat(prompt("Masukkan jumlah yang ingin ditarik"));
    myAccount.withdraw(amount);
}

function lihatSaldo() {
    myAccount.lihatSaldo();
}