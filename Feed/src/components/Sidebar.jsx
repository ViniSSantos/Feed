import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        
            <aside className={styles.sidebar}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    
                    />

                <div className={styles.profile}>
                    <strong>Vinícius S Santos</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        Editar o seu perfil
                    </a>
                </footer>
            </aside>
    
    );
}