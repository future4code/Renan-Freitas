import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { createGlobalStyle } from 'styled-components';
import ImagemButtonLink from './components/ImagemButtonLink/ImagemButtonLink'
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import perfil from "./img/perfil.png"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    a:link{
      text-decoration: none;
    };
    a:visited{
      text-decoration: none;
      color: black;
    }
  }
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Renan Marinho" 
          descricao="Olá! Sou estudante Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
          logo="https://cdn-icons-png.flaticon.com/512/747/747314.png"
          titulo="e-mail:"
          conteudo="renanmarinho@gmail.com"
        />

        <CardPequeno
          logo="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          titulo="Endereço:"
          conteudo="Bauru, São Paulo"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Renan" 
          descricao="No momento não tenho experiências profissionais"
     
        />
      </div>

      <a href="https://github.com/ReinEinzbern" target="blank">
        <h2>Minhas redes sociais</h2>
        
        <ImagemButtonLink
          imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          texto="GitHub" 
        />        

   
      </a>
    </div>
  );
}

export default App;
