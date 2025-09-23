class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  sewaKendaraan() {
    return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa}`;
  }
}

let dataPelanggan = [];

function tambahPelanggan(nama, telepon, kendaraan) {
  const pelanggan = new Pelanggan(nama, telepon, kendaraan);
  dataPelanggan.push(pelanggan);
  console.log("Transaksi berhasil dicatat!");
}

function tampilkanDaftarPelanggan() {
  console.log("Daftar Pelanggan ");
  dataPelanggan.forEach((p, i) => {
    console.log(`${i + 1}. ${p.sewaKendaraan()}`);
  });
}

tambahPelanggan("Andi", "08123456789", "Mobil Avanza");
tambahPelanggan("Budi", "08987654321", "Motor Vario");
tampilkanDaftarPelanggan();
