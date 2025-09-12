# Projeto: Testes Portal Secretaria de Desenvolvimento Econômico de GARÇA

Este diretório é destinado à documentação, scripts e automações de testes manuais e automatizados do portal.

## Estrutura Sugerida

- `/casos-de-teste/` — Casos de teste manuais em formato Markdown
- `/automacao/` — Scripts de automação (ex: Cypress, Selenium, Playwright)
- `/relatorios/` — Relatórios de execução de testes

## Como contribuir

1. Adicione novos casos de teste em `/casos-de-teste/`.
2. Scripts de automação devem ser organizados por ferramenta em `/automacao/`.
3. Relatórios de execução devem ser salvos em `/relatorios/`.

## Responsáveis
- Scrum Master: Felipe Falcão
- QA Sênior: Leandro Stampini
- QA Pleno: Igor
- QA Júnior: Douglas e Gabriel

---

# Estudo de Caso: Testes Manuais e Automatizados
**Projeto:** Portal Secretaria de Desenvolvimento Econômico de GARÇA
**Equipe:**
- Scrum Master: Felipe Falcão
- QA Sênior: Leandro Stampini
- QA Pleno: Igor
- QA Júnior: Douglas e Gabriel

---

## 1. Objetivo

Garantir a qualidade do portal por meio de testes manuais e automatizados, seguindo metodologias ágeis, visando identificar inconsistências, erros e validar requisitos funcionais e não funcionais.

---

## 2. Requisitos Funcionais (RF)

| Código | Descrição                                                                                   | Responsável Execução |
|--------|----------------------------------------------------------------------------------------------|----------------------|
| RF001  | O usuário deve conseguir buscar conteúdos pelo campo de busca no topo e no mobile.           | Igor                 |
| RF002  | O usuário deve acessar as abas "Cidadão", "Empresa" e "Servidor" em "Acesso Rápido".        | Douglas              |
| RF003  | O usuário deve visualizar e interagir com a galeria multimídia (vídeos).                     | Gabriel              |
| RF004  | O usuário deve acessar links de redes sociais no rodapé.                                     | Leandro Stampini     |
| RF005  | O usuário deve visualizar corretamente o modal de cookies e conseguir aceitar, rejeitar ou personalizar. | Igor                 |
| RF006  | O usuário deve conseguir gerar, imprimir e baixar o QR Code da página.                       | Douglas              |
| RF007  | O usuário deve conseguir visualizar o calendário de eventos e o plugin do Facebook.          | Gabriel              |
| RF008  | Controles de acessibilidade para aumentar, diminuir e resetar fonte funcionam corretamente.  | Douglas              |
| RF009  | Alternância de alto contraste liga/desliga e permanece entre navegações (quando aplicável). | Douglas              |
| RF010  | Ativação do plugin VLibras exibe/oculta o intérprete e mantém acessibilidade ativa.         | Douglas              |
| RF011  | Área "Teclas de Atalho" exibe instruções e atalhos funcionam para navegação.                | Gabriel              |
| RF012  | Link "Mapa do Site" é acessível e carrega a página de mapa do site.                         | Gabriel              |
| RF013  | Seletor de idioma/Google Translate altera o idioma da interface conforme seleção.           | Igor                 |
| RF014  | Ícones de redes sociais no topo abrem os perfis corretos em nova aba.                        | Leandro Stampini     |
| RF015  | Menu responsivo (hambúrguer) abre/fecha e mostra links escondidos corretamente.             | Igor                 |
| RF016  | Navegação do menu e submenus direciona para as páginas internas esperadas.                  | Leandro Stampini     |
| RF017  | Busca (desktop e mobile) submete a consulta e direciona para a página de resultados.        | Igor                 |
| RF018  | Clique nos itens da lista de vídeos troca o vídeo principal na galeria multimídia.          | Gabriel              |
| RF019  | Carrosséis de banners rotacionam automaticamente e permitem navegação manual.               | Leandro Stampini     |
| RF020  | Calendário de eventos exibe eventos e permite navegação entre meses/dias.                   | Gabriel              |
| RF021  | Plugin do Facebook carrega dentro do container, adapta largura e é rolável quando necessário.| Douglas              |
| RF022  | Botão flutuante do WhatsApp abre conversa no número configurado.                            | Gabriel              |
| RF023  | Botão de QR Code abre modal e gera QR do URL atual da página.                               | Douglas              |
| RF024  | Botão "Imprimir" do modal gera PDF do QR Code e abre em nova aba.                          | Douglas              |
| RF025  | Botão "Baixar QR Code" salva a imagem PNG do QR Code localmente.                           | Douglas              |
| RF026  | Botão "Aceitar" cookies registra preferência e oculta a barra de cookies.                  | Igor                 |
| RF027  | "Personalizar" abre modal; salvar/rejeitar grava preferências e aplica imediatamente.      | Igor                 |
| RF028  | Botão "Voltar ao topo" aparece após rolagem e retorna suavemente ao topo.                  | Gabriel              |
| RF029  | Links de Termos, Políticas e LGPD abrem em nova aba e são acessíveis via teclado.           | Leandro Stampini     |
| RF030  | Área de contato do rodapé exibe dados e links funcionais: e-mail, Webmail e "Ver Localização". | Leandro Stampini |

---

## 3. Requisitos Não Funcionais (RNF)

| Código  | Descrição                                                                                                   | Responsável Execução |
|---------|--------------------------------------------------------------------------------------------------------------|----------------------|
| RNF001  | O portal deve ser responsivo e funcionar em diferentes dispositivos e navegadores.                          | Leandro Stampini     |
| RNF002  | O tempo de carregamento das páginas deve ser inferior a 3 segundos.                                         | Igor                 |
| RNF003  | O site deve ser acessível, com suporte a alto contraste, aumento de fonte e VLibras.                        | Douglas              |
| RNF004  | Todos os links externos devem abrir em nova aba e possuir atributo `rel="nofollow"`.                        | Gabriel              |
| RNF005  | O modal de cookies não deve bloquear funcionalidades essenciais do site.                                     | Igor                 |
| RNF006  | Todo o tráfego deve usar HTTPS e recursos de terceiros devem carregar via HTTPS.                             | Leandro Stampini     |
| RNF007  | Cabeçalhos de segurança ativos (HSTS, X-Content-Type-Options, X-Frame-Options/Frame-Ancestors, CSP básica). | Leandro Stampini     |
| RNF008  | Compatibilidade com navegadores: Chrome/Edge/Firefox atuais e Safari 2 últimas versões.                     | Igor                 |
| RNF009  | Layout responsivo funcional a partir de 320px, com pontos de quebra bem definidos.                           | Douglas              |
| RNF010  | Conformidade A11y WCAG 2.1 AA: contraste ≥ 4.5:1, foco visível, navegação por teclado, ARIA adequada.       | Gabriel              |
| RNF011  | SEO técnico: metatags essenciais, sitemap.xml, robots.txt, canonical e títulos únicos por página.            | Igor                 |
| RNF012  | Métricas Web Vitals: LCP < 2.5s, CLS < 0.1, FID/INP dentro dos limites recomendados.                         | Leandro Stampini     |
| RNF013  | Observabilidade: erros JS capturados e monitorados; console limpo em produção.                               | Igor                 |
| RNF014  | Disponibilidade da camada web ≥ 99,5% mensal.                                                                | Leandro Stampini     |
| RNF015  | LGPD: consentimento de cookies persistido e revogável; links de políticas sempre acessíveis.                 | Gabriel              |
| RNF016  | Resiliência a terceiros: falha de plugins (Facebook, Translate) não deve quebrar funcionalidades críticas.   | Douglas              |
| RNF017  | Peso da página inicial < 2MB (com compressão Brotli/Gzip habilitada no servidor).                            | Igor                 |
| RNF018  | Cache/CDN: assets versionados (cache-busting) e servidos via CDN com TTL ≥ 7 dias.                           | Leandro Stampini     |
| RNF019  | Imagens responsivas e lazy-loading (`srcset`, `sizes`, `loading="lazy"`).                                     | Douglas              |
| RNF020  | Pipeline CI: build minificado, lint e testes automatizados executados a cada merge.                          | Igor                 |

---

## 4. Principais Inconsistências e Erros Encontrados

| ID   | Descrição                                                                                     | Severidade | Status   | Responsável Reporte |
|------|----------------------------------------------------------------------------------------------|------------|----------|---------------------|
| INC01| Links de redes sociais "Messenger", "LinkedIn", "Pinterest", "Snapchat", "TikTok" aparecem com `href="#"` e classe `display-none_v2`, mas ainda são renderizados no HTML. | Baixa      | Aberto   | Douglas             |
| INC02| O campo de busca do topo não possui ação definida (`action=""`), não executa busca real.      | Média      | Aberto   | Igor                |
| INC03| O modal de cookies pode sobrepor elementos em telas pequenas, dificultando a navegação.       | Média      | Aberto   | Gabriel             |
| INC04| O botão "Ver Localização" no rodapé leva para `/fale-conosco/`, que pode não ser o esperado.  | Baixa      | Aberto   | Leandro Stampini    |-ok|
| INC05| O iframe do Facebook pode não carregar corretamente em conexões lentas ou com bloqueadores.   | Baixa      | Aberto   | Douglas             |
| INC06| Falta de feedback visual ao clicar nos botões de cookies (Aceitar, Personalizar, Rejeitar).   | Baixa      | Aberto   | Igor                |
| INC07| Alguns textos alternativos de imagens estão genéricos ou ausentes.                            | Baixa      | Aberto   | Gabriel             |

---

## 5. Estratégia de Testes

### 5.1 Testes Manuais
- Execução de cenários de uso principais por QA Pleno e Júnior.
- Validação visual, navegação, acessibilidade e usabilidade.
- Registro de bugs e inconsistências em ferramenta de gestão ágil (ex: Jira, Trello).

### 5.2 Testes Automatizados
- Utilização de ferramentas como Selenium, Cypress ou Playwright para automação de fluxos críticos:
  - Busca de conteúdo.
  - Navegação entre abas de acesso rápido.
  - Interação com modais e geração de QR Code.
  - Verificação de links externos e atributos.
- Execução contínua em pipeline CI/CD.

---

## 6. Relatório de Execução

| Sprint | Teste Realizado           | Responsável         | Status   | Observações                        |
|--------|--------------------------|---------------------|----------|------------------------------------|
| 01     | Teste de busca           | Igor                | Pendente | Aguardando definição de backend    |
| 01     | Teste de acessibilidade  | Douglas             | Em curso | Testando alto contraste e VLibras  |
| 01     | Teste de cookies         | Igor                | Em curso | Falta feedback visual              |
| 01     | Teste de redes sociais   | Leandro Stampini    | Pendente | Links ocultos ainda renderizados   |
| 01     | Teste de QR Code         | Douglas             | Em curso | Impressão e download funcionando   |
| 01     | Teste de responsividade  | Leandro Stampini    | Em curso | Ajustes em telas pequenas          |

---

## 7. Considerações Finais

- Recomenda-se priorizar a correção dos campos de busca e feedback visual dos botões de cookies.
- Links de redes sociais ocultos devem ser removidos do DOM para evitar confusão.
- Garantir que todos os requisitos de acessibilidade estejam implementados e testados.
- Automatizar os fluxos críticos para garantir regressão mínima a cada sprint.

---

**Este relatório será atualizado a cada ciclo de sprint, conforme evolução dos testes e correções.**
