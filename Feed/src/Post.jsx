export function Post(props) {
  //console.log(props);
  return (
    <div>
      {/*Acessar elementos da Props*/}
      <p>-----------------------------</p>
      <p>{props.qualquerCoisa}</p>
      <strong>
        <p>{props.auth}</p>
      </strong>
    </div>
  );
}
//Use {Chaves} para escrever JavaScript no HTML
//export default Buttom
//Named Export -> export no nome da função + import no outro aqrivo com {Destructor}
