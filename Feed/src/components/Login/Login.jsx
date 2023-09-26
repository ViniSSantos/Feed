import React from 'react';
import styles from './Login.module.css'; // Certifique-se de que esse caminho seja correto

const Login = () => {
  return (
    <>
      <h2>Desafio de Programação Semanal #1: Formulário de Login/Registro</h2>
      <div className={styles.container} id="container">
        <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
          <form action="#">
            <h1>Criar Conta</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>ou use seu email para o registro</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Registrar</button>
          </form>
        </div>
        <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
          <form action="#">
            <h1>Entrar</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>ou use sua conta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <button>Entrar</button>
          </form>
        </div>
        {/* ... outros elementos */}
      </div>
      <footer className={styles.footer}>
        <p>
          Criado com <i className="fa fa-heart"></i> por
          <a target="_blank" rel="noopener noreferrer" href="https://florin-pop.com">Florin Pop</a>
          - Leia como eu criei isso e como você pode participar do desafio
          <a target="_blank" rel="noopener noreferrer" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">aqui</a>.
        </p>
      </footer>
    </>
  );
};

export default Login;
