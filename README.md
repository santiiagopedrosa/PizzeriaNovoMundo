# Pizzeria Novo Mundo — Site Web

Site estático com design rústico e artesanal.
Cores: Verde (dominante) · Amarelo dourado (secundário) · Vermelho (detalhe e estrelas)

## Estrutura de Ficheiros

```
pizzeria/
├── index.html     — Página Principal (hero, sobre, destaques, horários, contactos)
├── ementa.html    — Página da Ementa completa (todas as categorias)
├── style.css      — Estilos globais partilhados por todas as páginas
├── script.js      — JavaScript partilhado (status aberto/fechado, navegação)
└── README.md      — Este ficheiro
```

## Páginas

### index.html — Página Inicial
- Hero com medalha "Desde 1995" e estrelas vermelhas
- Ticker animado com informações de entrega (fundo vermelho)
- Secção "O Nosso Espaço" com citação e estatísticas
- Destaques da ementa (4 pizzas populares)
- Horários com indicator de Aberto/Fechado em tempo real
- Contactos + link para Google Maps

### ementa.html — Ementa Completa
- Hero próprio com estrelas
- Barra de navegação sticky por categoria
- Entradas (2 itens)
- Complementos (4 itens)
- Pizzas (22 pizzas com ingredientes e preços G/P)
- Especialidades (Lasanha, Chicken Parmagiana)
- Saladas (4 saladas)
- Pratos Diários (Escalope Panado de Frango)
- Bebidas (6 itens)
- Notas finais (embalagem, extras, pagamento)

### style.css — Estilos Globais
- Variáveis CSS (paleta de cores, fontes)
- Navegação sticky
- Ticker animado
- Estrelas decorativas (.estrela-r vermelho, .estrela-g dourado)
- Ornamentos divisórios
- Botões (.btn-gold, .btn-ghost, .btn-red)
- Footer
- Status pill (aberto/fechado)
- Fontes: Playfair Display + Crimson Text + Josefin Sans

### script.js — JavaScript
- atualizarStatus() — indica se está aberto ou fechado em tempo real
- navScroll() — scroll suave na página da ementa
- IntersectionObserver — highlight automático na barra da ementa
- Highlight do link activo na navegação

## Como Usar

Abrir index.html no browser. Não requer servidor — funciona directamente como ficheiros estáticos.
Para publicar online, fazer upload da pasta inteira para qualquer hosting (Netlify, GitHub Pages, etc.).

## Paleta de Cores

| Variável | Cor         | Uso                          |
|----------|-------------|------------------------------|
| --v      | #2A4D0F     | Verde escuro — fundo hero/nav|
| --am     | #C8920A     | Amarelo — acentos, preços    |
| --ac     | #E5AA18     | Amarelo claro — logótipo     |
| --vm2    | #B5271A     | Vermelho — estrelas, detalhe |
| --cr     | #F8F2E0     | Creme — fundo principal      |
| --vbg    | #EEF5E0     | Verde pálido — fundo alt     |

## Contactos do Restaurante

- Tel: 262 842 969
- Email: geral@pizzanovomundo.com
- Localização: Caldas da Rainha
