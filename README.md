# 🚘 LetaAlves — Transporte Executivo Premium

> Landing page institucional para serviço de transporte executivo, desenvolvida com foco em **elegância, credibilidade, experiência do usuário e conversão de clientes**.

<div align="center">
    assets/logo/letaAlvesLogo.png
</div>


---

## 📌 Sobre o Projeto

A **LetaAlves** é uma landing page desenvolvida para apresentar os serviços de transporte executivo da empresa, destacando sua experiência, frota, diferenciais e canais de contato.

O projeto foi desenvolvido com uma abordagem **premium e minimalista**, utilizando uma identidade visual baseada em tons de preto, branco, cinza e dourado.

A página foi pensada para funcionar como um ponto central de apresentação da empresa e, principalmente, como uma ferramenta para **geração de novos contatos e solicitações de orçamento**.

### 🎯 Objetivos

* Apresentar a empresa e sua experiência;
* Divulgar os serviços oferecidos;
* Apresentar a frota disponível;
* Destacar diferenciais competitivos;
* Facilitar o contato com potenciais clientes;
* Permitir solicitações de orçamento diretamente pelo site;
* Direcionar clientes para atendimento via WhatsApp;
* Oferecer uma experiência moderna em dispositivos desktop e mobile.

---

## ✨ Funcionalidades

### 🏠 Landing Page Institucional

A página possui uma estrutura completa de apresentação da empresa, incluindo:

* Hero Section;
* Sobre a empresa;
* História e trajetória;
* Estatísticas;
* Serviços;
* Frota;
* Diferenciais;
* Área de cobertura;
* FAQ;
* Formulário de contato;
* Rodapé institucional.

---

### 🚗 Serviços

A landing page apresenta diferentes modalidades de transporte:

* **Transporte Executivo**
* **Aeroportos**
* **Eventos**
* **Viagens**
* **Atendimento Corporativo**
* **Motorista Particular**

---

### 🚘 Frota

A página apresenta os principais veículos disponíveis para atendimento:

* Toyota Corolla;
* Honda Civic;
* Hyundai Creta.

As imagens dos veículos estão organizadas no diretório:

```text
assets/carros/
```

---

### 📱 Integração com WhatsApp

O site possui botões de contato direto pelo WhatsApp, permitindo que o visitante inicie uma conversa com a empresa sem precisar preencher o formulário.

Exemplo de fluxo:

```text
Visitante
   ↓
Botão WhatsApp
   ↓
WhatsApp
   ↓
Solicitação de orçamento
   ↓
Atendimento da LetaAlves
```

---

### 📩 Formulário de Orçamento

O formulário utiliza o **FormSubmit** para encaminhar as solicitações diretamente para o e-mail da empresa.

Os dados coletados incluem:

* Nome;
* Telefone;
* E-mail;
* Origem;
* Destino;
* Data;
* Horário;
* Serviço desejado;
* Mensagem adicional.

O formulário utiliza campos nomeados para que as informações sejam identificadas corretamente no e-mail recebido.

Exemplo:

```html
<input type="text" name="nome">
<input type="tel" name="telefone">
<input type="email" name="email">
<input type="text" name="origem">
<input type="text" name="destino">
<input type="date" name="data">
<input type="time" name="horario">
<select name="servico">
<textarea name="mensagem"></textarea>
```

---

## 🎨 Design

A identidade visual foi construída para transmitir uma sensação de:

* Elegância;
* Segurança;
* Exclusividade;
* Profissionalismo;
* Conforto;
* Confiança.

### 🎨 Paleta principal

| Cor              | Hexadecimal | Utilização          |
| ---------------- | ----------- | ------------------- |
| Preto            | `#0D0D0D`   | Fundo principal     |
| Preto secundário | `#171717`   | Cards e componentes |
| Cinza            | `#D6D6D6`   | Textos              |
| Cinza secundário | `#9E9E9E`   | Textos auxiliares   |
| Dourado          | `#B8955F`   | Destaques e CTAs    |
| Dourado claro    | `#D6B884`   | Hover e detalhes    |
| Branco           | `#FFFFFF`   | Textos e elementos  |

---

## 🖋️ Tipografia

O projeto utiliza duas famílias tipográficas do Google Fonts:

### Inter

Utilizada principalmente para:

* Textos;
* Menus;
* Botões;
* Informações;
* Elementos de interface.

### Playfair Display

Utilizada principalmente para:

* Títulos;
* Headings;
* Elementos de destaque.

Essa combinação cria um contraste entre **modernidade e sofisticação**.

---

## ⚙️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web nativas:

### Front-end

* HTML5
* CSS3
* JavaScript
* Google Fonts
* Lucide Icons

### Serviços externos

* FormSubmit — processamento do formulário;
* WhatsApp — contato direto;
* Google Fonts — tipografia;
* Lucide — biblioteca de ícones.

### Sem frameworks

O projeto não depende de:

* React;
* Vue;
* Angular;
* Bootstrap;
* Tailwind CSS;
* jQuery.

Isso mantém a aplicação **leve, simples de hospedar e fácil de manter**.

---

## 🧩 Estrutura do Projeto

```text
LetaAlves/
│
├── assets/
│   ├── carros/
│   │   ├── CITY.jpg
│   │   ├── COROLA.png
│   │   └── SUV.png
│   │
│   ├── images/
│   │   └── rogerio.jpg
│   │
│   └── logo/
│       ├── favicon-32x32.png
│       └── letaAlvesLogo.png
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── index.html
```

---

## 📄 Estrutura da Página

A landing page está organizada nas seguintes seções:

```text
Início
│
├── Hero
│
├── Sobre
│   ├── História
│   ├── Missão
│   ├── Visão
│   └── Valores
│
├── Serviços
│
├── Frota
│
├── Diferenciais
│
├── Cobertura
│
├── FAQ
│
└── Contato
    └── Solicitação de orçamento
```

---

## ⚡ Interações e Animações

O JavaScript implementa diversas interações para melhorar a experiência do usuário.

### Loader

Exibe uma tela de carregamento ao acessar o site e desaparece após o carregamento da página.

### Cursor personalizado

Em dispositivos compatíveis, o site utiliza um cursor personalizado com efeito de interação sobre elementos clicáveis.

### Navbar dinâmica

A navegação recebe uma alteração visual quando o usuário realiza o scroll da página.

### Scroll Reveal

Elementos são revelados progressivamente conforme entram na área visível da tela.

### Contadores animados

Os números estatísticos da empresa possuem animação progressiva quando entram no viewport.

### Smooth Scroll

Os links internos da navegação utilizam rolagem suave entre as seções.

### Menu Mobile

Em dispositivos menores, o menu de navegação pode ser aberto através do botão mobile.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela:

* 💻 Desktop;
* 💻 Notebook;
* 📱 Smartphone;
* 📱 Tablet.

O CSS possui regras específicas para adaptar:

* Menu;
* Grid de serviços;
* Cards;
* Frota;
* Formulário;
* Hero;
* Tipografia;
* Espaçamentos;
* Botões.

---

## 🔎 SEO

A página possui configurações básicas de SEO diretamente no HTML:

```html
<meta
    name="description"
    content="LetaAlves Transporte Executivo Premium. Mais de 30 anos oferecendo segurança, conforto e pontualidade em São Paulo."
>

<meta
    name="keywords"
    content="Transporte Executivo, Motorista Executivo, São Paulo, Aeroporto, Executivo, LetaAlves"
>

<meta
    name="author"
    content="LetaAlves"
>

<meta
    name="robots"
    content="index, follow"
>
```

Também foram adicionadas configurações básicas de **Open Graph**, permitindo uma melhor apresentação da página quando compartilhada em plataformas compatíveis.

---

## 🛠️ Personalização

Os principais elementos visuais podem ser alterados no arquivo:

```text
css/style.css
```

As variáveis globais estão concentradas em:

```css
:root {
    --black: #0d0d0d;
    --black2: #171717;
    --black3: #202020;
    --white: #ffffff;
    --gray: #d6d6d6;
    --gray2: #9e9e9e;
    --gold: #b8955f;
    --gold-light: #d6b884;
}
```

Isso permite alterar rapidamente a identidade visual de todo o site.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido para a **LetaAlves Transporte Executivo**, com foco em criar uma presença digital moderna, profissional e orientada à conversão.

### Stack

```text
HTML5
CSS3
JavaScript
Google Fonts
Lucide Icons
FormSubmit
WhatsApp
```

---

## 📜 Licença

Este projeto foi desenvolvido especificamente para a **LetaAlves Transporte Executivo**.

O código, identidade visual, imagens, logotipo e demais materiais presentes no projeto podem estar sujeitos a direitos de uso e propriedade intelectual.

**Não reutilize os elementos de marca ou materiais proprietários sem autorização.**

---

<div align="center">

### LetaAlves

**Transporte Executivo Premium**

Conforto • Segurança • Pontualidade

</div>
