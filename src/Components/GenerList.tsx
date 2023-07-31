import useGeners from "../hooks/useGeners";

const GenerList = () => {
  const { data } = useGeners();
  return (
    <ul>
      {data.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
