import { useState } from "react";
import { Col, Container, Table } from "react-bootstrap";
import RowMahasiswa from "./components/mahasiswa/RowMahasiswa";
import RowTambahMahasiswa from "./components/mahasiswa/RowTambahMahasiswa";

function App() {
  const arrMahasiswas = [
    {
      nim: "11030401",
      nama: "Eka Putra",
      jurusan: "Teknik Informatika",
      provinsi: "DKI Jakarta",
    },
    {
      nim: "11030402",
      nama: "Lisa Prtama",
      jurusan: "Sistem Informasi",
      provinsi: "Sumatra Barat",
    },
    {
      nim: "11030403",
      nama: "Rudi Setiawan",
      jurusan: "Ilmu Komputer",
      provinsi: "Jawa Tengah",
    },
    {
      nim: "11030404",
      nama: "Friska Ramdhani",
      jurusan: "Ilmu Komputer",
      provinsi: "Jawa Barat",
    },
  ];

  const [mahasiswas, setMahasiswas] = useState(arrMahasiswas);

  return (
    <Container>
      <Col>
        <h1>Tabel Mahasiswa</h1>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Nim</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Provinsi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mahasiswas.map((mahasiswa) => (
              <RowMahasiswa key={mahasiswa.nim} mahasiswa={mahasiswa} />
            ))}

            <RowTambahMahasiswa />
          </tbody>
        </Table>
      </Col>
    </Container>
  );
}

export default App;
