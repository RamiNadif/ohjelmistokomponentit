function Linkkilista({ Lista }) {
  return (
    <ul>
      {Lista.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.nimi}</a>
        </li>
      ))}
    </ul>
  );
}
export default Linkkilista;
