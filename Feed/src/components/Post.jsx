// format - fuction for format date all model
import { format, formatDistanceToNow } from 'date-fns'; //Lib pra Trabalahr com varios tipos de data no JS
// formatDistanceToNow - calcular a diferença de tempo entre uma data fornecida e o momento atual.
import  ptBR from 'date-fns/locale/pt-BR'; //Idiomas dos formatos das datas

import styles from './Post.module.css';
import { Comment } from './Comment/Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post ({ author, publishedAt, content }) {
   // console.log(props); -> Esse log quebrou a aplicação pois se usamos destructor, não podemos usar as props.variavel
    
   //1parm: date, composição "dd, LLLL, HH:mm", {locale :idioma} -> Usamos "dd, 'de' LLLL 'às' HH:mm'h'" - "(string duplas e simples " '' ") pra imprimir e não reconhecer que é formato da data  
   const formatPublishedAt = format(publishedAt, "dd, 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
   });

   const formataDistanciaDoAgora = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true    
   });

   //Criamos um array de comentários(comments)
   const [comments, setComments] = useState(['Poste legal']);

   //Funcao SetState            set+Variavel
   const [novoTextoComentario, setNovoTextoComentario] = useState('');

   function CriarNovoComentario (event){
        event.preventDefault(); //Quando não queremos o comportamento defult da action e sim passamos uma função.

        const novoTextoComentario = event.target.comment.value;

        //...comments Spred Operator (...variavel) copia os já existentes, mede o tamanho e add +1.
        setComments([...comments, novoTextoComentario]);

        setNovoTextoComentario('');
   };

   function handleNovoTextoComentario (event) {
        setNovoTextoComentario(event.target.value)
        //console.log('teste');
   }

   




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
                    //variavel.map(iten, index(paramtrs.) arrorFunction e objeto esperado)
                    switch (linhaDoArray.type) {
                        case 'paragraph':
                        return <p key={linhaDoArray.content}>{linhaDoArray.content}</p>;
                    
                        case 'link':
                        return <p key={linhaDoArray.content}><a href='#'>{linhaDoArray.content}</a></p>;
                    
                        default:
                        return <p key={linhaDoArray.content}>É isso aí galera, devia ter aparecido um content aqui, bugou hehe</p>;

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
                    }})
                }
                <form onSubmit={CriarNovoComentario} 
                 className={styles.commentForm}>
                    <strong>Deixa seu feedback</strong>
                    
                    <textarea
                        name='comment'
                        placeholder='Deixe seu comentário...'
                        value={novoTextoComentario} /*O valor da textarea passa a ser o estado da var */
                        onChange={handleNovoTextoComentario}

                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </div>

            <div className={styles.commentList}>
            {
                comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })
            }
            </div>
        </article>
    )    
}