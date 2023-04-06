import { Stack } from "react-bootstrap";

const Mahasiswa = ({ tinggiBadan }) => {
  const mahasiswa = {
    nama: "Lisa",
    jurusan: "Sistem Informasi",
    pasFoto: "https://via.placeholder.com/150/92c952",
  };

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <h1>{mahasiswa.nama}</h1>
        <h2>{mahasiswa.jurusan}</h2>
        <figure>
          <img src={mahasiswa.pasFoto} alt="" />
        </figure>
        <h3>Tinggi Badan {tinggiBadan}cm</h3>
      </Stack>
    </div>
  );
};

export default Mahasiswa;
