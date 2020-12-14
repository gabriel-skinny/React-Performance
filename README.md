# React-Performance
Projeto feito durante o workshop DoWhile da rocketseat. Nesse workshop foi feito um melhoramento da performance de aplicações no React usando React-window e funções nativas

## O que foi feito

  - Primeiro foi usado a função `FixedSizeList` da blibioteca react-window para realizar a renderização apenas dos components que estão na tela. 
  Isso fez a performance da aplicação melhorar muito
  
  - Depois foi falado sobre o problema da renderezição de components normais do react ao se passar props pra ele. No video foi mostrado uma solução que é
  o React.memo, que serve para memorizar o component e so executar denovo esse componente quando o as dependencias passadas no segundo parametro da função
  são alteradas.
