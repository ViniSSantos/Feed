// Importando o módulo de estilos CSS específico para o componente Avatar
import styles from './Avatar.module.css';

// O componente recebe dois parâmetros: bordaCaixaAvatar e src
export function Avatar({ bordaCaixaAvatar = true, src }) {
  return (
    <img
      className={bordaCaixaAvatar ? styles.avatarComBorda : styles.avatar}// Aqui utilizamos uma operação ternária para escolher a classe CSS com base no valor de bordaCaixaAvatar
      src={src} // O atributo src define a URL da imagem a ser exibida no elemento <img>
                //Recebe por props O atributo src é usado para definir a URL da imagem que será exibida no elemento
    />
  );
}
