import useGeners from "../hooks/useGeners";

const GenerList = () => {
  const { geners } = useGeners();
  return (
    <ul>
      {geners.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
