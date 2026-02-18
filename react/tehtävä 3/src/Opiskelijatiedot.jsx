function Opiskelijatiedot(props) {
  return (
    <div>
      <p>nimi: {props.nimi}</p>
      <p>ika: {props.ika}</p>
      <p>kurssi: {props.kurssi}</p>
    </div>
  );
}
export default Opiskelijatiedot;
