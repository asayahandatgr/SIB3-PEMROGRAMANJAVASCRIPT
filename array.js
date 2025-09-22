// Array awal produk di toko
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length + 1; 
  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);
  console.log(`Produk ${nama} berhasil ditambahkan!`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
  produkToko = produkToko.filter(produk => produk.id !== id);
  console.log(`Produk dengan id ${id} berhasil dihapus!`);
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
  console.log("Daftar Produk Toko:");
  produkToko.forEach(produk => {
    console.log(
      `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`
    );
  });
}

// --- Contoh penggunaan ---
tampilkanProduk(); 
tambahProduk("Headset", 500000, 8); 
tampilkanProduk();
hapusProduk(2); 
tampilkanProduk(); 
