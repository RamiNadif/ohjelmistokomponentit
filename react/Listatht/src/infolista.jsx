function Infolista({ taulukko }) {
  return (
    <ul>
      {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default Infolista;
