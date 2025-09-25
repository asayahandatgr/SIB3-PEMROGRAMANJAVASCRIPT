import users from "./data.js";

const index = () => {
  console.log("Daftar Users:");
  users.map((u, i) => {
    console.log(`${i + 1}. ${u.nama} - Umur: ${u.umur}, Alamat: ${u.alamat}, Email: ${u.email}`);
  });
};

const store = (user) => {
  users.push(user);
  console.log(`Data berhasil ditambahkan: ${user.nama}`);
};

const destroy = (nama) => {
  const indexUser = users.findIndex((u) => u.nama === nama);
  if (indexUser !== -1) {
    users.splice(indexUser, 1);
    console.log(`Data dengan nama ${nama} berhasil dihapus`);
  } else {
    console.log(`Data ${nama} tidak ditemukan`);
  }
};

export { index, store, destroy };
