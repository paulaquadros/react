"use strict"; // Ativa o modo estrito do JavaScript, que ajuda a evitar erros comuns

const e = React.createElement; // Cria um atalho para a função createElement do React

// Define a classe do componente Header
class Header extends React.Component {
  render() {
    // Método que retorna o que será renderizado pelo componente
    return e("h1", null, "Esta página é um exemplo"); // Retorna um elemento h1 com o texto especificado
  }
}

// Define a classe do componente WebAcademy
class WebAcademy extends React.Component {
  constructor(props) {
    // Construtor do componente
    super(props); // Chama o construtor da classe pai (React.Component)
    this.state = { liked: false }; // Define o estado inicial do componente
  }

  render() {
    // Método que retorna o que será renderizado pelo componente
    return "Paula Quadros de Mendonça: Minha primeira página React"; // Retorna a string que será renderizada
  }
}

const headerContainer = document.querySelector("#header_container"); // Seleciona o elemento do DOM onde o componente Header será renderizado
const rootHeader = ReactDOM.createRoot(headerContainer); // Cria uma raiz do ReactDOM no elemento selecionado
rootHeader.render(e(Header)); // Renderiza o componente Header na raiz criada

const domContainer = document.querySelector("#web_academy_container"); // Seleciona o elemento do DOM onde o componente WebAcademy será renderizado
const root = ReactDOM.createRoot(domContainer); // Cria uma raiz do ReactDOM no elemento selecionado
root.render(e(WebAcademy)); // Renderiza o componente WebAcademy na raiz criada
