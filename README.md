# Antonio Zito · Portfólio UX/UI

Portfólio pessoal de Antonio Zito, UX/UI Designer em Teresina, PI. Site estático, em uma página, com tema escuro e design system próprio.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Portfólio: apresentação, projetos, experiência e contato |
| `design_system.html` | Design system do portfólio: tokens, tipografia e componentes |
| `artools/` | Estudo de caso **Artools Pigmentum**: landing page com vídeo controlado pelo scroll |
| `estudo-de-caso-easylog.html` | Estudo de caso **EasyLog**: entregas locais por assinatura, com app do lojista, app do motorista e painel web (prints em `assets/projects/easylog-case/`) |

## Estrutura

```
.
├── index.html
├── design_system.html
├── artools/              # Projeto Artools (versão publicada)
└── assets/
    ├── ds/               # Fontes (Inter Display), imagens e ícones do design system
    ├── img/              # Fotos do autor e imagem de compartilhamento (Open Graph)
    ├── projects/         # Capas e prévias dos projetos
    └── docs/             # Currículo em PDF
```

## Como rodar

Sem build e sem dependências. Abra `index.html` no navegador ou sirva a pasta:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Publicação

Pronto para GitHub Pages, Netlify ou Vercel: basta publicar a raiz do repositório.
