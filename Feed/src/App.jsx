import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import "./global.css"; 
import styles from "./App.module.css";

/*Siulando um response.data da API */
const infoPosts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/86122206?v=4",
      name: "Vinícius S. Santos",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Feed Ignite 🚀'},
      {type : 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-08-21 21:00:11'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.🚀 O nome do projeto é Feed Ignite. Acabei de subir mais um projeto no meu portifa.'},
      { type : 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-09-21 21:00:11'),
  },

];

//Iteração - iterar sobre o array;

export function App() {
  return (
    <div>
      <Header
      />
      <div className={styles.wrapper}>
        <Sidebar
        />
        <main>
          {/*Map na var, pra retorna valores que serão usados como Props para o Post, Extraidas atravé do map() */}
          {infoPosts.map(item => {
            return (
              <Post 
                key={item.id}  // Add unique key
                author={item.author}
                content={item.content}
                publishedAt={item.publishedAt}  
              />
            )
          })}
        </main>        
      </div>
    </div>
  );
}
