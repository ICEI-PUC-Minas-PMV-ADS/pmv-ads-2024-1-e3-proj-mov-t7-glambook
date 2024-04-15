# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-glambook/assets/123324372/649862f8-89ac-460b-83bd-1a486ff73cf2)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-glambook/assets/123324372/f0310b30-d4e5-4239-b0c5-6ade1e95ba37)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Blue Professional Extensive Mind Map Graph (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-glambook/assets/123324372/86b2f1e7-282a-4545-b451-f3d8369d9d1b)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- Linguagem: Java Script.
- Biblioteca: React Native.
- IDE: Visual Studio Code.
- Ferramenta Wiregrames: Figma.
- Ferramenta de Comunicação: Microsoft Teams e Meta Whatsapp.
- Ferramenta de Gestão de Projeto: Github Projects.
- Sistema de Gerenciamento de Banco de Dados:

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Com intuito de avaliarmos um aplicativo que faz agendamento de cortes de cabelo, foram empregados os requisitos de Proteção, facilidade de uso, performance das funcionalidades e capacidade de manutenção.

- 	Funcionalidade: O aplicativo deve fornecer todas as funcionalidades necessárias para o usuário poder fazer seu agendamento, de forma simples. 
- Usabilidade: O aplicativo deve ser simples de navegar, com uma interface  organizada. 
- Desempenho: O aplicativo deve ser adaptável , com carregamento rápido e sem longas demandas.  
- Proteção: O aplicativo deve proteger todas as informações pessoais do usuário.
- Manutenção: O aplicativo deve ser descomplicado de atualizar e usufruir. 

|Característica de Qualidade| Subcaracterísticas |Justificativa      |
|--------------------|------------------------------------|----------------------------------------|
| ● Adequação Funcional  |         Adequação   <BR>  <BR>     Acurácia  <BR>  <BR>  Conformidade  | Prover um conjunto apropriado de funções para tarefas e objetivos do usuário especificados.<BR> <BR> Prover, com o grau de precisão necessário, resultados ou efeitos corretos ou conforme acordados.<BR><BR> O software deve estar de acordo com normas, convenções ou regulamentações previstas em leis e prescrições similares relacionadas à funcionalidade.
|    ●  Eficiência de Desempenho          |   Comportamento em relação aos recursos           |  Capacidade do produto de software de usar tipos e quantidades apropriados de recursos, quando o software executa suas funções sob condições estabelecidas.
|● Usabilidade                            |    Inteligibilidade    <BR>  <BR> Apreensibilidade    <BR>  <BR> Operacionalidade     |  Capacidade do produto de software de possibilitar ao usuário compreender se o software é apropriado e como ele pode ser usado para tarefas e condições de uso específicas. <BR>  <BR> Capacidade do produto de software de possibilitar ao usuário aprender sua aplicação. <BR>  <BR> Capacidade do produto de software de possibilitar ao usuário operá-lo e controlá-lo.
| ● Manutenibilidade   |   Modularidade   <BR>   <BR> Modificabilidade    <BR>  <BR> Testabilidade    |   A modularização (ou componentização) é o mecanismo que permite que um sistema de software seja dividido em partes que interagem entre si. <BR> <BR> Capacidade do produto de software de permitir que uma modificação especificada seja implementada. <BR>  <BR> Capacidade do produto de software de permitir que o software, quando modificado, seja validado.
| ● Segurança   |  Confidencialidade             |Capacidade do produto de software de proteger informações e dados, de forma que pessoas ou sistemas não autorizados não possam lê-los nem modificá-los e que não seja negado o acesso às pessoas ou sistemas autorizados.



|Subcaracterísticas| Métrica |Escala      |Peso      |
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
|Adequação | O sistema propõe-se a fazer o que é apropriado? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende       |ALTO      |
|Acurácia| O sistema gera resultados corretos conforme acordado?|1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende    |ALTO        |
|Conformidade| O sistema está de acordo com normas e convenções previstas em leis e descrições similares?|1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende     |ALTO        |
|Comportamento em relação aos recursos| Quanto recurso o sistema utiliza? |1) Muito <BR>2) Suficiente<BR> 3) Pouco       |ALTO        |
|Interoperabilidade| O sistema é capaz de interagir com os sistemas especificados? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Inteligibilidade| É fácil entender como utilizar o software ? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Apreensibilidade| É fácil aprender a usar? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende      |ALTO        |
|Operacionalidade| É fácil de operar e controlar a operação? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende    |ALTO        |
|Modularidade| As partes (módulos) do sistema estão interagindo entre si ? |1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende     |ALTO        |
|Modificabilidade| Qual a complexidade de implementar modificações ? |1) Alta <br>2) Média <br>3) Baixa      |ALTO        |
|Testabilidade| Qual a complexidade de se validar o software ?  |1) Alta <br>2) Média <br>3) Baixa       |ALTO        |
|Coexistência| O sistema de software pode coexistir com outros produtos de software independentes ? |1) Sim <BR>2) Não       |ALTO        |
|Tolerância a falhas | Ocorrendo falhas, o sistema está parametrizado para reagir ? |1) Sim <BR>2) Não       |ALTO        |
|Confidencialidade | O sistema evita acesso não autorizado, acidental ou deliberado a programas de dados? |1) Sim <BR>2) Não       |ALTO        |
