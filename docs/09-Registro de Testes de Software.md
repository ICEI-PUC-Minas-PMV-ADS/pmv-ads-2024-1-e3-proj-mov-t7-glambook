# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| **Caso de Teste**| **CT-001: Cadastrar Usuários (Senha e Confirmação de Senha mascarados)** |
| :--- | :---: |
| Requisito associado | RF-01 O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de todas as idades. |
| Objetivo do Teste | Verificar se os campos "Senha" e "Confirmação de Senha" são mascarados. |
| Procedimentos (passo à passo) | Acessar o aplicativo; </br> Selecionar no banner superior a opção "Cadastrar seu perfil, juntamente com suas informações pessoais ";  </br> Assim que redirecionado para tela "Cadastro", preencher os campos obrigatórios (nome completo, e-mail, n° de telefone, senha e confirmação de senha) |
| Resultado esperado | Campo de senha mascarado |
| Avaliação | O sistema mascarou os campos de senha na página de cadastro e também na página de login |

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


