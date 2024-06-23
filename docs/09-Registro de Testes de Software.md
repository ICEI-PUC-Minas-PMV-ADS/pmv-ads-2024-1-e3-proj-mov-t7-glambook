# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

CT-001: Cadastrar Usuários (Senha e Confirmação de Senha mascarados)
Requisito associado	RF-001: O aplicativo deve conter uma ficha para cadastro com os dados pessoais.
Objetivo do Teste	Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastrar seu perfil, juntamente com suas informações pessoais"; </br> Assim que redirecionado para a tela "Cadastro", preencher os campos obrigatórios (nome completo, e-mail, n° de telefone, senha e confirmação de senha).
Resultado esperado	Campos de senha mascarados.
Avaliação	O sistema mascarou os campos de senha na página de cadastro e também na página de login.
Caso de Teste	

CT-002: Cadastrar Estabelecimentos
Requisito associado	RF-002: A aplicação deve conter uma página de cadastro para o estabelecimento.
Objetivo do Teste	Verificar se é possível cadastrar um estabelecimento com todos os dados necessários.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar a opção "Cadastrar Estabelecimento"; </br> Preencher os campos obrigatórios (nome do estabelecimento, endereço, telefone, e-mail, senha).
Resultado esperado	Estabelecimento cadastrado com sucesso.
Avaliação	O sistema permitiu o cadastro do estabelecimento com todos os dados necessários.
Caso de Teste	

CT-003: Login de Usuários Cadastrados
Requisito associado	RF-003: A aplicação deve incluir uma página de login para usuários cadastrados.
Objetivo do Teste	Verificar se usuários cadastrados conseguem fazer login.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar a opção "Login"; </br> Inserir e-mail e senha cadastrados; </br> Clicar em "Entrar".
Resultado esperado	Login realizado com sucesso.
Avaliação	O sistema permitiu o login dos usuários cadastrados.
Caso de Teste	

CT-004: Login de Estabelecimentos
Requisito associado	RF-004: O aplicativo deve conter uma página de login para o estabelecimento.
Objetivo do Teste	Verificar se os estabelecimentos conseguem fazer login.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar a opção "Login Estabelecimento"; </br> Inserir e-mail e senha cadastrados; </br> Clicar em "Entrar".
Resultado esperado	Login realizado com sucesso.
Avaliação	O sistema permitiu o login dos estabelecimentos cadastrados.
Caso de Teste	CT-005: Cancelar ou Alterar Agendamentos
Requisito associado	

RF-005: Permitir que os clientes cancelem ou alterem seus agendamentos até 24 horas antes do horário marcado.
Objetivo do Teste	Verificar se clientes conseguem cancelar ou alterar seus agendamentos dentro do prazo permitido.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar a opção "Meus Agendamentos"; </br> Selecionar o agendamento desejado; </br> Optar por "Cancelar" ou "Alterar" e realizar a alteração.
Resultado esperado	Agendamento cancelado ou alterado com sucesso.
Avaliação	O sistema permitiu cancelar ou alterar agendamentos dentro do prazo permitido.
Caso de Teste	CT-006: Visualizar e Controlar Agendamentos (Estabelecimento)
Requisito associado	

RF-006: Permitir que o estabelecimento possa visualizar e controlar o agendamento.
Objetivo do Teste	Verificar se os estabelecimentos conseguem visualizar e controlar seus agendamentos.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Fazer login como estabelecimento; </br> Selecionar a opção "Agendamentos"; </br> Visualizar a lista de agendamentos; </br> Realizar controle necessário (confirmar, cancelar, alterar).
Resultado esperado	Estabelecimento consegue visualizar e controlar agendamentos.
Avaliação	O sistema permitiu que os estabelecimentos visualizassem e controlassem seus agendamentos.
Caso de Teste	CT-007: Apresentar Imagens ou Especificações de Cortes de Cabelo
Requisito associado	

RF-007: Apresentar imagens ou especificações do corte de cabelo.
Objetivo do Teste	Verificar se o sistema apresenta imagens ou especificações dos cortes de cabelo disponíveis.
Procedimentos (passo a passo)	Acessar o aplicativo; </br> Selecionar a opção "Cortes de Cabelo"; </br> Visualizar as imagens ou especificações disponíveis.
Resultado esperado	Imagens ou especificações dos cortes de cabelo são apresentadas.
Avaliação	O sistema apresentou as imagens ou especificações dos cortes de cabelo conforme esperado.

## Avaliação

Resultados do Teste:
O teste CT-001 foi conduzido para verificar se os campos "Senha" e "Confirmação de Senha" são mascarados na página de cadastro do sistema, conforme o requisito RF-01. Abaixo está uma análise dos resultados:

Pontos Fortes
Mascaração de Campos: Os dois campos, "Senha" e "Confirmação de Senha", foram mascarados corretamente, garantindo privacidade e segurança das informações inseridas pelos usuários.
Usabilidade: A interface de cadastro foi intuitiva e fácil de navegar, proporcionando uma experiência positiva para os usuários ao realizarem seu cadastro.
Validação de Senha: Houve uma validação adequada que impediu o avanço do cadastro sem que os campos de senha e confirmação de senha correspondessem, reforçando a segurança.

Requisitos Associados:

RF-02: O sistema deve permitir que os usuários agendem serviços.

RF-03: O sistema deve permitir a seleção do estabelecimento, data e hora para o serviço.

Objetivo do Teste: Verificar se o sistema permite que os usuários selecionem um serviço, escolham um estabelecimento e agendem uma data e hora.

Procedimentos:

Acessar o aplicativo.
Navegar até a seção de agendamentos.
Selecionar o serviço desejado.
Escolher o estabelecimento.
Selecionar uma data e hora disponível.
Confirmar o agendamento.

Resultado Esperado: O usuário deve ser capaz de selecionar um serviço, estabelecimento e data, e confirmar o agendamento sem erros.

Resultado Obtido:

O sistema permitiu a seleção de serviço, estabelecimento e data.
O agendamento foi confirmado corretamente.


