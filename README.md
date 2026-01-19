# Clone Disney+

Este projeto é um clone da landing page do Disney+, desenvolvido como parte de um estudo sobre desenvolvimento web front-end. O objetivo é replicar a interface responsiva e interativa da plataforma de streaming.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Estruturação semântica do conteúdo.
- **SCSS (Sass):** Pré-processador CSS para estilização avançada, uso de variáveis, aninhamento e mixins.
- **JavaScript (Vanilla):** Lógica para interatividade (abas, FAQ, etc.).
- **Gulp:** Automação de tarefas (compilação do SASS, otimização de imagens, minificação de arquivos).
- **NPM:** Gerenciamento de dependências.

## 🎯 Funcionalidades

A página inclui as seguintes seções:

- **Hero Section:** Apresentação principal com opções de assinatura e destaques.
- **Shows Tabs:** Navegação por abas para exibir conteúdos "Em Breve", "Mais Populares" e "Mais no Star+".
- **Planos:** Exibição das opções de assinatura (Mensal, Combo+, etc.).
- **Dispositivos:** Lista de dispositivos compatíveis (Computador, TV, Videogames, Celular).
- **FAQ:** Seção de perguntas frequentes com funcionalidade de acordeão.
- **Rodapé:** Links institucionais e seleção de idioma.

## 📁 Estrutura do Projeto

- `src/`: Contém os arquivos fonte (SCSS, código JS original, imagens não otimizadas).
- `dist/`: Contém os arquivos compilados e otimizados para produção (CSS gerado, JS minificado, imagens comprimidas).
- `gulpfile.js`: Configuração das tarefas do Gulp.
- `index.html`: Arquivo principal da página.

## 🔧 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Alexandre-Mir/clone-disneyplus.git
    ```
2.  Acesse o diretório do projeto:
    ```bash
    cd clone-disneyplus
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Comandos Disponíveis

- **Desenvolvimento:**
  Para iniciar o ambiente de desenvolvimento (com watch para alterações):

  ```bash
  npm run dev
  ```

- **Build de Produção:**
  Para gerar os arquivos otimizados na pasta `dist`:
  ```bash
  npm run build
  ```

## 📝 Nota

Este projeto é apenas para fins educacionais e não possui vínculo oficial com a Disney ou suas subsidiárias. Todas as imagens e logotipos são propriedade de seus respectivos donos.
