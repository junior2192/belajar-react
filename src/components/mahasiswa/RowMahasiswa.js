import { Button, Stack } from "react-bootstrap";

const RowMahasiswa = (props) => {
  return (
    <tr key={props.mahasiswa.nim}>
      <td>{props.mahasiswa.nim}</td>
      <td>{props.mahasiswa.nama}</td>
      <td>{props.mahasiswa.jurusan}</td>
      <td>{props.mahasiswa.provinsi}</td>
      <td>
        <Stack direction="horizontal" gap={2}>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
          <Button variant="danger" size="sm">
            Hapus
          </Button>
        </Stack>
      </td>
    </tr>
  );
};

export default RowMahasiswa;
