# Site Anniara Lima - Psicóloga

Site profissional para a psicóloga Anniara Lima, especializada em Terapia Cognitivo-Comportamental (TCC).

## 📋 Sobre

Este é um site moderno e responsivo desenvolvido com HTML e Tailwind CSS para a psicóloga Anniara Lima. O site apresenta seus serviços de terapia online, especializações e informações de contato.

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Tailwind CSS**: Utiliza Tailwind CSS para estilização moderna e eficiente
- **Navegação Suave**: Scroll suave entre seções
- **Botão "Voltar ao Topo"**: Para melhor experiência do usuário
- **Ícones SVG locais**: Sprite inline, sem dependência de CDN
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Zero terceiros**: CSS, fontes, ícones e imagens são todos servidos do próprio domínio

## 📱 Seções do Site

1. **Header**: Navegação principal com menu responsivo
2. **Hero**: Seção principal com chamada para ação
3. **Features**: Diferenciais do atendimento
4. **Tratamentos**: Tipos de terapia oferecidos
5. **Sobre**: Informações profissionais da Anniara
6. **Como Funciona**: Processo de atendimento em 5 etapas
7. **Benefícios**: Como a terapia pode ajudar
8. **Depoimentos**: Testemunhos de pacientes
9. **Instagram**: Link para redes sociais
10. **Agendar**: Seção de contato e agendamento
11. **Footer**: Informações legais e links

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador web
2. O site é totalmente funcional sem necessidade de servidor
3. Para personalizar, edite o arquivo HTML conforme necessário

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS**: compilado localmente para `styles.css` (não é mais o Play CDN)
- **Ícones**: sprite SVG inline no início do `<body>`
- **Fontes**: Playfair Display e Inter self-hosted em `static/fonts/`
- **JavaScript**: Funcionalidades interativas

## 🔧 Regerar o CSS

`styles.css` é gerado e **versionado no repositório** — o deploy no Netlify continua
sendo só `git push` na `main`, sem build step. Mas ele precisa ser regerado sempre
que você **adicionar ou remover uma classe do Tailwind** no `index.html`, senão a
classe nova não terá estilo:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i src/input.css -o styles.css --minify
```

Estilos que não vêm do Tailwind (animações, `.transition-section`, `@font-face`,
`.icon`) ficam em `src/input.css` — edite lá, não no `styles.css` gerado.

## 🖼️ Imagens

As fotos originais estão em `images/` e as variantes responsivas servidas ao
visitante em `images/opt/`. O `index.html` referencia só as variantes, via
`srcset`. Para regerar depois de trocar uma foto, redimensione o original para as
larguras já usadas (hero e sobre: 480/640/900/1200; trabalho: 384/512/768).

## 📞 Informações de Contato

Para personalizar as informações de contato, edite as seguintes seções no arquivo `index.html`:

- Link do WhatsApp: `https://wa.me/5551999999999`
- E-mail: `anniara@example.com`
- Instagram: `@psi.anniaralima`

## 🎯 Especializações

- Terapia Cognitivo-Comportamental (TCC)
- Ansiedade e Depressão
- Relacionamentos Saudáveis
- Autocontrole Financeiro
- Comunicação Não-Violenta
- Atendimento em Situações de Crise

## 📄 Licença

Este projeto foi desenvolvido para uso profissional da psicóloga Anniara Lima.

---

**CRP: 07/32606**  
*Psicóloga especializada em Terapia Cognitivo-Comportamental* 