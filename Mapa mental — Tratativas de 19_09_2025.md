# Mapa mental — Tratativas de 19/09/2025

## Objetivo e visão geral dos testes

### Objetivo principal

- Executar todos os testes do repositório garantindo ambiente configurado e scripts Playwright funcionando com verificação de login automatizada e tratamento de captchas quando necessário.

### Artefatos gerados hoje

- Lista de arquivos produzidos: playwright.config.js, playwright/login.spec.js (OCR), README_TrabalhadoHoje.md e MINDMAP.md para documentação e reprodução das tratativas.

## Detecção e preparação do ambiente

### Dependências e ferramentas presentes

- Vérificação inicial indica Node (ok) e Java (ok), enquanto Ruby/Bundler/rspec/cucumber estão ausentes e precisam ser instalados para testes dependentes.

### Passos para configurar Playwright e dependências

- Procedimento: instalar dependências, baixar Chromium, configurar playwright.config.js e rodar testes em ./playwright conforme roteiro de setup documentado.

## Problemas, diagnóstico e soluções propostas

### Falha de login e diagnóstico inicial

- Problema principal: login protegido por captcha gerando timeout ao tentar preencher campos; OCR com tesseract.js testado como abordagem alternativa para leitura.

### Possíveis causas técnicas do captcha

- Causas levantadas: captcha renderizado em canvas, imagem distorcida afetando OCR, ou seletor incorreto impedindo captura correta dos elementos.

### Estratégias: depuração headful e inspeção do seletor, pré-processamento de imagem (sharp/jimp) antes de Tesseract, ou ignorar captcha em ambiente de testes via desativação ou login por API/cookie.

### Soluções propostas e alternativas

### Opção de serviços externos e trade-offs

- Outra alternativa é usar serviços externos de resolução de captcha, considerando custo, latência e dependência de terceiros para ambiente de teste automatizado.

