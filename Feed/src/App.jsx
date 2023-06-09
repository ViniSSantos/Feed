import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css"; 
import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Header
      />
      <div className={styles.wrapper}>
        <Sidebar
        />
        <main>
          <Post
            auth="Vinicius Santos"
            content="a fuga quod corporis? Doloribus, tenetur exercitat74ionem. Modi?"
            qualquerCoisa="Teste QualquerCoisa"
          />
          <Post 
            auth="Outro gato" 
            qualquerCoisa="Sorvete"
          />
        </main>        

      </div>

    </div>
  );
}
