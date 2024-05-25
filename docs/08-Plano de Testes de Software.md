# Plano de Testes de Software


|Caso de Teste         |CT-01  Cadastrar Usuários (Senha e Confirmação de Senha mascarados)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-01** </br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de todas as idades. |
|Objetivo do Teste| Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
|Passos |Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastre seu perfil de acordo com seus tipos de corte";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, e-mail, n° de telefone, senha e confirmação de senha).|
|Critério de Êxito|Os caractéres do campo "Senha" e "Confirmaçao de Senha" devem ser mascarados.|


|Caso de Teste         |CT-02  Login (Aceitar perfil)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-03
** </br> O site deve permitir que os clientes se cadastrem, fornecendo informações sobre seus cortes de cabelo. |
|Objetivo do Teste| Garantir que o site aceite corretamente o perfil do usuário, validando as informações fornecidas pelo usuário. |
|Passos |<br>Acesse a página de registro do usuário no aplicativo.<br> Preencha os campos obrigatórios com informações válidas sobre seus cortes.<br> Envie o formulário de registro.<br>Verifique se o sistema aceita o registro do usuário sem erros aparentes.|
|Critério de Êxito| <br> O site deve aceitar o registro do usuário sem mostrar mensagens de erro. <br>As informações fornecidas pelo usuário devem ser armazenadas corretamente no banco de dados.|

|Caso de Teste         |CT-03  Login (Teste de senha incorreta)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-03** </br> O site deve verificar a validade da senha inserida durante o processo de login. |
|Objetivo do Teste| Garantir que o site detecte corretamente senhas incorretas durante o processo de login. |
|Passos | <br> Acesse a tela de login. <br>Insira um nome de usuário ou e-mail válido. <br>Insira uma senha inválida. <br>Pressione o botão de login.|
|Critério de Êxito| <br> O sistema deve exibir uma mensagem de erro indicando que a senha inserida é incorreta.|

|Caso de Teste         |CT-04  Login (Teste de recuperação de senha)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-03** </br> O site deve fornecer uma maneira segura para os usuários recuperarem suas senhas em caso de esquecimento. |
|Objetivo do Teste| Verificar se o sistema permite que os usuários solicitem uma recuperação de senha, caso tenham esquecido suas senhas. |
|Passos | <br> Acesse a tela de login. <br> Clique no link "Esqueceu sua senha?". <br>Insira o e-mail associado à conta. <br>Pressione o botão de enviar/recuperar.|
|Critério de Êxito| <br> O site deve enviar um e-mail de recuperação de senha para o endereço fornecido pelo usuário, caso ele exista na base de dados
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
