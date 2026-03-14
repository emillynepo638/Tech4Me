// @jsxImportSource @emotion/react
import { css } from "@emotion/react";

function App() {
 const fundoAzul = {background: "blue"};
 const fonte = {color: "red"};
 const tamanho = 30;

  return (
    <>
    <div css={{
      fontSize: 22,
      backgroundColor: "olive"
    }}>
      Cor fundo e tamanho
    </div>

    <br />

    <div css={[fundoAzul, fonte]}>
      Fonte vermelha e fundo azul(Array)
    </div>

    <br />

    <div css={css`font-size: ${tamanho}px;`}>
      Bem-vindos! Tamplete String + Interpolação!
    </div>
    </>
  )
}

export default App;