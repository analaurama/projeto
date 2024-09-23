
<article class="cartao">
        <div class="cartao__conteudo">
                <h3> Programação </h3>
                      <div class="cartao__conteudo__pergunta">
                            O que é CSS?
                        </div>                        
                       <div class="cartao__conteudo__resposta">
                            O CSS é uma linguagem de estilização.
                         </div>
                        </div>
                            
         </article>
         #container {
            display:flex ;
        }
        .cartao {
            margin: 1rem 1rem;
        }
        .cartao {
            margin: 1rem 1rem;
            background-color: aqua;
            height: 20rem;
        }
        .cartao {
            margin: 1rem 1rem;
            background-color: aqua;
            height: 20rem;
            flex-grow: 1;
            flex-basis: calc(33% -6rem);
        }
        body {
            background: url('img/bg-desktop.webp');
            font-family: Bai Jamjuree;
        }
        :root {
            --text-color: #DBE4EF;
            --card-front-color: #144480;
            --card-back-color: #00F4BF;
        }
        .cartao__conteudo h3 {
            color: var(--text-color);
            border: 1px solid var(--text-color);
            text-align: left;
            padding: 0.5rem;
            position: absolute;
            margin: 0.6rem;
            border-radius: 0.6rem;
            font-size: 1vw;
        }
        .cartao__conteudo {
            text-align: center;
            height: 100%;
            background-color: var(--card-front-color);
        }
        .cartao__conteudo__pergunta p{
            color: var(--text-color);
            font-weight: 500;
        }
        .cartao__conteudo__resposta p{
            color: var(--card-back-color);
            font-weight: 700;
        }
        .cartao:hover .cartao__conteudo {
            transform: rotateY(180deg);
        }
        .cartao__conteudo {
            background-color: var(--card-front-color);
            text-align: center;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 300ms ease-in-out;
        }
        .cartao__conteudo h3 {
            color: var(--text-color);
            border: 1px solid var(--text-color);
            text-align: left;
            padding: 0.5rem;
            position: absolute;
            margin: 0.6rem;
            border-radius: 0.6rem;
            font-size: 1vw;
            backface-visibility: hidden;
        }
        .cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
}
.cartao__conteudo__resposta {
    transform: rotateY(180deg);
}
.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}
.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
}
#container {
    display: flex;
     flex-wrap: wrap;
}
#container {
    display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     padding: 4rem;
}
#container {
    display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     padding: 4rem;
     gap: 3rem;
}
criaCartao(
    categoria,
    pergunta,
    resposta
)
criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)
criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
).cartao.active .cartao__conteudo {
    transform: rotateY(180deg);
}
.cartao__conteudo__resposta{
    transform: rotateY(180deg);
    background-color: rdba(0, 244, 191, 0.2);
}
.cartao__conteudo__resposta{
    transform: rotateY(180deg);
    background-color: rgba(0, 244, 191, 0.2);
    border: 4px solid var(--card-back-color);
}
.cartao_conteudo_pergunta,
.cartao_conteudo_resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
    font-size: 1.4vw;
}
@media (max-width: 560px){

}
@media (max-width: 560 px) {

    body {
        background: url('img/bd-mobile.webp');
    }

}
.cartao {
    flex: 1 0 calc(100% - 1rem);
}
.cartao__conteudo h3 {
    font-size: 3vw;
}
.cartao__conteudo p {
    font-size: 3.8vw;
}