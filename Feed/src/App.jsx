import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css"; //Não precisa colocar nome do arquivo

export function App() {
  //Expotamops o app para ser impresso através de uma função.
  //A magica das lib de contrução de SPA, do react no caso, é criar o HTML e tudo qie o usuário interage, através do JavaScript.
  //Por isso usamos JSX como extensão
  //JSX = JavaScript + XML (HTML)
  return (
    <div>
      <Header 

      />
      <Post
        //Trocar infos via props
        auth="Vinicius Santos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio asperiores minus quidem dicta, necessitatibus repellat explicabo ducimus blanditiis consequatur repellendus sit assumenda fuga quod corporis? Doloribus, tenetur exercitat74ionem. Modi?"
        qualquerCoisa="Teste QualquerCoisa"
      />
      <Post //
        atributo1="hello" //Não existe no Pai
        atributo2="bye" //Não Renderiza dai
        auth="Outro gato" //Mesmo atributos Existentes no Pai
        qualquerCoisa="Sorvete" // Outro Conteudo no "mesmo" Componente
      />
    </div>
  );
}
