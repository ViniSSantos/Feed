import styles from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"

export function Sidebar(){
    return(
        
            <aside className={styles.sidebar}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                />

                <div className={styles.profile}>
                    <img className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/86122206?v=4" 
                        alt="Quando é dinâmico igual esse caso, não devemos inserir alt=(Texto alternativo de identificação)" 
                    />
                    <strong>Vinícius S Santos</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} /*size={32} color="hotpink" weight="fill*/
                        />
                        Editar o seu perfil
                    </a>
                </footer>
            </aside>
    
    );
}