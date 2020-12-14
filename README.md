# React-Performance
Projeto feito durante o workshop DoWhile da rocketseat. Nesse workshop foi feito um melhoramento da performance de aplicações no React usando React-window e funções nativas

## O que foi feito

  - Primeiro foi usado a função `FixedSizeList` da blibioteca react-window para realizar a renderização apenas dos components que estão na tela. 
  Isso fez a performance da aplicação melhorar muito
  
  - Depois foi falado sobre o problema da renderezição de components normais do react ao se passar props pra ele. No video foi mostrado uma solução que é
  o React.memo, que serve para memorizar o component e so executar denovo esse componente quando o as dependencias passadas no segundo parametro da função
  são alteradas. Exemplo:
  
    <img src="./exemplo1.png" />
  
  - Foi falado também sobre o problema de renderização condicional no react, pois quando voce coloca uma condição fora do return normal da função, o algoritimo do React faz uma comparação de arvore do DOM, e quando ve que os elementos estão posicionados diferente dos outros eles faz toda renderização e recalcula toda a arvore, e isso faz com
  que a perfomance da sua aplicação seja muito prejudicada. A solução para isso então foi o render condicion inline, que seria na mesma linha voce colocar
  a condição, assim o react vai vir que o component na primeira posição pode ser nulo, assim ele não vai precisar recalcular tudo denovo e renderizar o componente
  novamente.
  
  Renderização errada: 
  
  
  
  Renderização certa:
