import styles from "./Header.module.css";
import igniteLogo from '../assets/ignite-logo.svg';


export function Header() {
  return (
    <header className={styles.header}>
        <img src="/src/assets/ignite-logo.svg"
             alt="Logo tipo do Ignite" 
        />
      <strong>Inite Feed</strong>
    </header>
  );
}
