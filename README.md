## Projeto

 O Next foi criado por causa de uma funcionalidade que é chamada de Server Side Rendering(SSR), que nada mais é do que a interface da aplicação ser criada pelo servidor, isso já era feito desde os princípios da web mas não é da mesma forma.
 O SSR tradicional é basicamente o nosso usuário acessa uma rota do backend e o backend devolve pro usuário o HTML/CSS/JS, com o Next não é dessa maneira, no Next ao invés do usuário acessar diretamente o backend ele vai acessar o frontend da aplicação e o front chama um serviço que foi criado pelo Next que é uma camada intermediária que roda um serviço em Node e esse serviço chama o backend, o backend retorna os dados em JSON para o serviço do Next e esse serviço monta a interface e ela já vem pronta do server side mas isso não acontece em todas as requisições.

 O serviço do Next é em node porque, o React é puramente javascript e se o Node consegue entender javascript pelo lado do servidor será que ele não conseguiria entender código React e executar o react dentro de um serviço Node? Sim, ele consegue.
 Então conseguimos ter esse serviço em Node responsável por fazer a construção de algumas interfaces em alguns momentos dentro de uma camada de servidor.
