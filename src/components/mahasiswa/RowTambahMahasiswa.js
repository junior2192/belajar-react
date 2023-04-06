import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

const RowTambahMahasiswa = () => {
  // state untuk data inputan
  const [formInput, setFormInput] = useState({
    nim: "",
    nama: "",
    jurusan: "",
    provinsi: "",
  });

  // state untuk menampung error
  const [errors, setErrors] = useState({
    nim: "",
    nama: "",
    jurusan: "",
    provinsi: "",
  });

  // function utk membuat 2 ways binding antara form dan state
  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  //submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let pesanError = {};

    // validasi nim
    if (formInput.nim.trim() === "") {
      pesanError.nim = "Nim tidak boleh kosong";
    } else if (!/^[0-9]{8}$/.test(formInput.nim)) {
      pesanError.nim = "Nim harus 8 karakter angka";
    } else {
      pesanError.nim = "";
    }

    //validasi nama
    if (formInput.nama.trim() === "") {
      pesanError.nama = "Nama tidak boleh kosong";
    } else {
      pesanError.nama = "";
    }

    //validasi jurusan
    if (formInput.jurusan.trim() === "") {
      pesanError.jurusan = "Jurusan tidak boleh kosong";
    } else {
      pesanError.jurusan = "";
    }

    //validasi provinsi
    if (formInput.provinsi.trim() === "") {
      pesanError.provinsi = "Provinsi tidak boleh kosong";
    } else {
      pesanError.provinsi = "";
    }

    //update error state
    setErrors(pesanError);

    //cek apakah seluruh form valid atau masih ada error
    let fomrValid = true;
    for (const inputName in pesanError) {
      if (pesanError[inputName].length > 0) {
        fomrValid = false;
      }
    }

    if (fomrValid) {
      console.log(formInput);

      //kosongkan inputan form
      setFormInput({
        nim: "",
        nama: "",
        jurusan: "",
        provinsi: "",
      });
    }
  };

  return (
    <tr>
      <td colSpan={5}>
        <form onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                name="nim"
                placeholder="000000"
                onChange={handleInputChange}
                value={formInput.nim}
              />
              {errors.nim && <small>{errors.nim}</small>}
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                name="nama"
                placeholder="Jhon Doe"
                onChange={handleInputChange}
                value={formInput.nama}
              />
              {errors.nama && <small>{errors.nama}</small>}
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                name="jurusan"
                placeholder="Informatika"
                onChange={handleInputChange}
                value={formInput.jurusan}
              />
              {errors.jurusan && <small>{errors.jurusan}</small>}
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                name="provinsi"
                placeholder="Jawa Barat"
                onChange={handleInputChange}
                value={formInput.provinsi}
              />
              {errors.provinsi && <small>{errors.provinsi}</small>}
            </Col>
            <Col>
              <Button type="submit" variant="primary" size="sm">
                Tambah
              </Button>
            </Col>
          </Row>
        </form>
      </td>
    </tr>
  );
};

export default RowTambahMahasiswa;
