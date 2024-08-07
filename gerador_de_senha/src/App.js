import { useState } from "react"
import "./app.css"
function addCSS(fileName) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = fileName;
  document.head.appendChild(link);
}

// A função principal do componente App
function App() {
  // Usa o hook useState para criar duas variáveis de estado:
  // 1. 'password': guarda a senha gerada
  // 2. 'copyText': guarda o texto do botão de copiar
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  // Função que gera uma nova senha aleatória
  function generate() {
    // Define o conjunto de caracteres que podem ser usados na senha
    const characters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12; // Define o comprimento da senha
    let newPassword = ""; // Inicializa uma variável para armazenar a nova senha

    // Cria um loop para gerar uma senha de comprimento definido
    for (let i = 0; i < length; i++) {
      // Escolhe uma posição aleatória no conjunto de caracteres
      const position = Math.floor(Math.random() * characters.length);
      // Adiciona o caractere na posição escolhida à nova senha
      newPassword += characters[position];
    }

    // Atualiza a senha e o texto do botão de copiar
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  // Função que copia a senha para a área de transferência
  function copyToClipboard() {
    // Usa o método da API do navegador para copiar o texto da senha
    window.navigator.clipboard.writeText(password);
    // Atualiza o texto do botão para "Copiado!" depois de copiar
    setCopyText("Copiado!");
  }

  // Renderiza a interface do usuário
  return (
    <div className="container">
      <h1>Gerador de senha</h1>
      {/* Botão para gerar uma nova senha */}
      <button className="generate-btn" onClick={generate}>Gerar!</button>
      {/* Botão para copiar a senha para a área de transferência */}
      <button className="copy-btn" onClick={copyToClipboard}>{copyText}</button>
      {/* Exibe a senha gerada */}
      <div className="password-display">{password}</div>
    </div>
  );
}

// Exporta o componente App para ser usado em outros lugares
export default App
