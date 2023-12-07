import React, { useState } from "react";
import Title from "./Title";

const Form = () => {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const [mahasiswaCount] = useState(10);
  const [nilai] = useState(10);

  const handleSelectChange = (aspect, mahasiswa, value) => {
    setPenilaian((prevData) => ({
      ...prevData,
      [aspect]: {
        ...prevData[aspect],
        [mahasiswa]: Number(value),
      },
    }));
  };

  const onSubmitHandler = () => {
    console.log(JSON.stringify(penilaian, null, 2));
  };

  return (
    <>
      {Array.from({ length: mahasiswaCount }, (_, index) => index + 1).map(
        (mahasiswa) => (
          <div className="list_body" key={mahasiswa}>
            <Title>{`Mahasiswa ${mahasiswa}`}</Title>
            {Object.keys(penilaian).map((aspect) => (
              <div key={aspect}>
                <select
                  className="inputSelect"
                  value={penilaian[aspect][`mahasiswa_${mahasiswa}`] || ""}
                  onChange={(e) =>
                    handleSelectChange(
                      aspect,
                      `mahasiswa_${mahasiswa}`,
                      e.target.value
                    )
                  }
                >
                  <option>-pilih-</option>
                  {Array.from({ length: nilai }, (_, index) => index + 1).map(
                    (val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    )
                  )}
                </select>
              </div>
            ))}
          </div>
        )
      )}
      <div className="footer">
        <button
          className="button"
          cl="true"
          type="submit"
          onClick={onSubmitHandler}
        >
          <span>Simpan</span>
        </button>
      </div>
    </>
  );
};

export default Form;
