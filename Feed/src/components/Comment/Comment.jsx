import { BiLike } from 'react-icons/bi'
import { Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from '../Avatar';

export function Comment (props){
    return (
        <div className={styles.comment}>
            <Avatar 
                bordaCaixaAvatar={false}
                src="https://avatars.githubusercontent.com/u/86122206?v=4"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinícius S. Santos</strong>
                            <time title='30 de Março às 08:23h' dateTime='2023-03-30 08:23:11' >Cerca de 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    
                    Aplaudir <span> 20</span>
                    <div></div>
                    <BiLike className={styles.bilike}></BiLike>
                </footer>

            </div>

        </div>
    )
}