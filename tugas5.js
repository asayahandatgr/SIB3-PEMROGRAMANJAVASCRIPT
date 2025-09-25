let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headset", harga: 700000 },
  { id: 4, nama: "Keyboard", harga: 350000 },
  { id: 5, nama: "Mouse", harga: 250000 }
];

const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (id) => hapusProduk(id),
  tampil: () => tampilkanProduk()
};

function tambahProduk(id, nama, harga) {
  let produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`Produk ${nama} berhasil ditambahkan!`);
}

function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  console.log(`Produk dengan id ${id} berhasil dihapus!`);
}

function tampilkanProduk() {
  console.log("Daftar Produk:");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp ${harga.toLocaleString()}`);
  });
}

eventHandler.tampil();

eventHandler.tambah(6, "Tablet", 7000000);
eventHandler.tampil();

eventHandler.hapus(2);
eventHandler.tampil();
