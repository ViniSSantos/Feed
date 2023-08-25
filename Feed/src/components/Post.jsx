import { format, formatDistanceToNow } from 'date-fns'; //Lib pra Trabalahr com varios tipos de data no JS
// format - fuction for format date all model
// formatDistanceToNow - calcular a diferença de tempo entre uma data fornecida e o momento atual.
import  ptBR from 'date-fns/locale/pt-BR'; //Idiomas dos formatos das datas

import { Comment } from './Comment/Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post ({ author, publishedAt,content }) {
   // console.log(props); -> Esse log quebrou a aplicação pois se usamos destructor, não podemos usar as props.
    
   //1parm: date, composição "dd, LLLL, HH:mm", {locale :idioma} -> Usamos "dd, 'de' LLLL 'às' HH:mm'h'" - "(string duplas e simples " '' ") pra imprimir e não reconhecer que é formato da data  
   const formatPublishedAt = format(publishedAt, "dd, 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
   })

   const formataDistanciaDoAgora = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true    
   })


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span >{author.role}</span>
                    </div>
                </div>
                <time title={formatPublishedAt} dateTime={publishedAt.toISOString()} >
                    {formataDistanciaDoAgora}
                    
                </time>
            </header>

            <div className={styles.content}>
                {//map - Percorer e retornar conteudo
                    content.map(linhaDoArray => {
                        //variavel.map(iten arrorFunction e objeto esperado)
                        if(linhaDoArray.type === 'paragraph'){
                            return <p>{linhaDoArray.content}</p>
                        }else if(linhaDoArray.type === 'link'){
                            return <p> <a href='#'> {linhaDoArray.content}</a> </p>
                        }       

                    {/*
                    //trocar se
                    switch (linhaDoArray.type){
                        //caso        // : execute
                        case 'paragraph' :
                          return  <p>{linhaDoArray.content}</p>;
                        break
                        case 'link' : 
                          return  <p> <a href='#'> {linhaDoArray.content}</a> </p>;
                        break;
                    default : return <p>'É isso aí galera, devia ter aparecido um content aqui'</p>
                    }
                    */}
                    })
                }
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