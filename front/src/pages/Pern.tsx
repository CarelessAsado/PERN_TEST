import React, { useEffect, useState } from "react";
import * as pernAPI from "API/pernAPI";

import styled from "styled-components";
export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;
export const ContainerResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;
export const NurseItem = styled.div`
  padding: 10px;
  font-size: 2rem;
  border: 1px solid black;
  border-radius: 10px;
`;

export interface IFac {
  facility_id: number;
  facility_name: string;
}
export interface INurse {
  nurse_id: number;
  score: string;
}
const Pern = () => {
  const [facilities, setFacilities] = useState<IFac[]>([]);
  const [selected, setSelected] = useState("100");
  useEffect(() => {
    pernAPI.initialLoad().then(({ data }) => {
      console.log(data);
      setFacilities(data);
    });
  }, []);
  const [nurseData, setNurseData] = useState<INurse[]>([]);
  useEffect(() => {
    pernAPI.fetchNurses(selected).then(({ data }) => {
      console.log(data);
      setNurseData(data);
    });
  }, [selected]);

  return (
    <Container>
      Pern
      <select onChange={(e) => setSelected(e.target.value)}>
        {facilities.length > 0 &&
          facilities.map((i) => {
            return <option value={i.facility_id}>{i.facility_name}</option>;
          })}
      </select>
      <ContainerResults>
        {nurseData.map((i) => {
          return <NurseItem>{i.nurse_id}</NurseItem>;
        })}
      </ContainerResults>
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
    </Container>
  );
};

export default Pern;

export const Exercise4 = () => {
  const [data, setData] = useState([]);
  function handleSubmit() {
    pernAPI.exercise4().then(({ data }) => {
      setData(data);
    });
  }
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit}>FETCH RESPONSE</button>
      <button onClick={() => setData([])}>CANCEL</button>
    </>
  );
};
export const Exercise5 = () => {
  const [data, setData] = useState([]);
  function handleSubmit() {
    pernAPI.exercise5().then(({ data }) => {
      setData(data);
    });
  }
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit}>FETCH RESPONSE</button>
      <button onClick={() => setData([])}>CANCEL</button>
    </>
  );
};
export const Exercise6 = () => {
  const [data, setData] = useState([]);
  function handleSubmit() {
    pernAPI.exercise6().then(({ data }) => {
      setData(data);
    });
  }
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit}>FETCH RESPONSE</button>
      <button onClick={() => setData([])}>CANCEL</button>
    </>
  );
};
