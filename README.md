<h1 align="center">
  Kenzie Hub
</h1>
<h3 align="center">Projeto do curso de Desenvolvimento Web Fullstack da Kenzie Academy Brasil.</h3>
<br/>
<p>
O objetivo dessa aplicação é criar um hub de portfólios para programadores da Kenzie. Nela, o usuário poderá cadastrar, adicionar tecnologias que aprendeu/está aprendendo.
</p>  

<br/>

## **Tecnologias e bibliotecas utilizadas no FrontEnd:**
- React.js
- React Hook Form
- Yup
- Axios
- React Router Dom
- Toastify
- Styled-components
- React-icons
  
<br/>


O url base da aplicação é https://12-react-entrega-s2-kenzie-hub-anavaleska2908.vercel.app/
O url base da API é https://kenziehub.herokuapp.com
A documentação da API é https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-api

<br/>

## **Funcionalidades encontradas na aplicação Frontend:**

### Página Inicial:
- Na página inicial, encontramos dois botões, cadastre-se e login. 
- Ao clicar no botão de cadastre-se, somos redirecionados para a página de cadastro.
- Ao clicar no botão de login, somos redirecionados para a página de login.

### Página de Cadastro:
- Encontra-se um formulário de cadastro onde passamos as informações necessárias do programador (nome, email, senha e o módulo em que se encontra)
- Ao clicar em cadastrar e os dados estão corretos, uma mensagem de sucesso aparece e o usuário é redirecionado para a tela de login.
  
### Página de Login:
- Encontra-se um formulário de login onde passamos as informações necessárias para o programador fazer login (email e senha)
- Ao clicar em fazer login e os dados estão corretos, uma mensagem de sucesso aparece e o usuário é redirecionado para a tela da dashboard. Esta, só pode ser acessada caso o login dê certo e o usuário esteja autenticado.
  
### Página Dashboard:
- Nela encontramos um header com o nome da aplicação e um botão de saída, onde há a exclusão do token de autenticação. Para retornar o acesso a essa página será necessário fazer novo login.
- Abaixo desse header, aparecerá o nome de usuário e o módulo indicado no cadastro.
- Após isso, estará a área de cadastro das tecnologias aprendidas. Ao clicar no botão "+", abrirá um modal onde poderá adicionar uma nova tecnologia.
- Para cadastrar uma nova tecnologia é necessário passar o nome da mesma e o seu status (iniciante, intermediário ou avançado)
- Após cadastrar, também é possível editar ou excluir essa tecnologia, clicando na barra criada. Assim, um novo modal será aberto, trazendo as informações cadastradas anteriormente. Apenas o status é alterável. 
- Importante lembrar de salvar a alteração no status para que ela se torne permanente. 

<br/>

<hr/>

Para rodar o código da aplicação, é necessário:
- yarn (para baixar as estruturas necessárias da aplicação, contida no package.json)
- yarn start (para rodar a aplicação)

