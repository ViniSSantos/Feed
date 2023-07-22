import { Comment } from './Comment/Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/86122206?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Vinícius S. Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='30 de Março às 08:23h' dateTime='2023-03-30 08:23:11' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Feed Ignite 🚀</p>
                <p>👉 <a href=''>jane.design/doctorcare</a></p>
                <p> 
                    <a href=''>#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
                <form className={styles.commentForm}>
                    <strong>Deixa seu feedback</strong>
                    
                    <textarea
                        placeholder='Deixe seu comentário...'

                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </div>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )    
}