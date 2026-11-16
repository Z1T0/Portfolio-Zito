# Portfólio · Antonio Zito

Portfólio de UX/UI de Antonio Zito, designer em Teresina (PI). Reúne três estudos de caso, o design system do próprio site e o currículo.

![Capa do portfólio](.github/capa.jpg)

## Links

| | |
| --- | --- |
| Site | https://portfoliozitomenezes.vercel.app |
| Estudo de caso EasyLog | https://portfoliozitomenezes.vercel.app/estudo-de-caso-easylog.html |
| Estudo de caso KINETIC // LAB | https://portfoliozitomenezes.vercel.app/estudo-de-caso-kineticlab.html |
| Estudo de caso Artools | https://portfoliozitomenezes.vercel.app/estudo-de-caso-artools.html |
| Design system | https://portfoliozitomenezes.vercel.app/design_system.html |

## Sobre o projeto

Site estático de uma página, com tema claro e escuro. O conteúdo da home fica num objeto `CONTENT` dentro do `index.html`, então trocar um texto não exige mexer no HTML. Cores, tipografia e espaçamentos saem de um único arquivo de tokens (`css/tokens.css`), usado pela home, pelos estudos de caso e pela página do design system.

## Estrutura

```
.
├── index.html                        # Home: apresentação, projetos, experiência e contato
├── estudo-de-caso-easylog.html       # Entregas locais: app do lojista, app do motorista e painel
├── estudo-de-caso-kineticlab.html    # E-commerce de tênis modular
├── estudo-de-caso-artools.html       # Landing page da caneta Artools Pigmentum
├── design_system.html                # Tokens, tipografia e componentes do site
├── artools/                          # Versão publicada da landing page Artools
├── css/
│   ├── tokens.css                    # Fonte única de cores, tipos e espaçamentos
│   └── components.css                # Botões e componentes compartilhados
├── assets/
│   ├── ds/                           # Fontes, ícones e scripts locais
│   ├── img/                          # Fotos e imagem de compartilhamento
│   ├── projects/                     # Capas e imagens dos estudos de caso
│   └── docs/                         # Currículo em PDF e o HTML que o gera
├── robots.txt · sitemap.xml          # SEO
└── vercel.json                       # Cache dos arquivos estáticos
```

## Como rodar

Não tem build nem dependências. Sirva a pasta e abra no navegador:

```bash
npx serve .
# ou
python -m http.server 8000
```

Cada push na branch `main` publica o site na Vercel.

## Ferramentas

HTML, CSS e JavaScript sem framework, GSAP e Lenis para as animações de rolagem, Iconify para os ícones e Vercel para a hospedagem. As telas dos projetos foram desenhadas no Figma, com apoio do Claude nos textos e no código.

## Status

Publicado e em uso. Os ajustes vêm das rodadas de avaliação do portfólio.

## Aviso

EasyLog e KINETIC // LAB são projetos de estudo: marcas, pesquisas e números são fictícios, e cada estudo de caso diz isso no texto.

## Autor

Antonio Zito · [Portfólio](https://portfoliozitomenezes.vercel.app) · [LinkedIn](https://www.linkedin.com/in/antonio-zito-4b64b71b0) · [Behance](https://www.behance.net/antoniozitome)

© 2026 Antonio Zito. O código pode ser consultado; textos, imagens e marcas não podem ser reutilizados sem autorização.
