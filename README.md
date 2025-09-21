# emprega.garca.gov.br - Automação de Testes

Este repositório contém o estudo de caso, scripts e resultados dos testes automatizados para o site emprega.garca.gov.br.

## Ferramentas Utilizadas
- Ruby + Selenium WebDriver
- Cucumber (BDD)
- RSpec (unitário/funcional)
- Appium (mobile)
- JMeter/K6 (carga/stress)
- SonarQube (vulnerabilidade)

## Estrutura do Projeto
- features/: Cenários de teste Cucumber
- features/step_definitions/: Steps Ruby/Selenium
- k6/: Scripts de carga K6
- Gemfile: Dependências Ruby
- .gitignore: Exclusão de arquivos temporários e sensíveis

## Como Executar
1. Instale as dependências Ruby:
   ```powershell
   bundle install
   ```
2. Execute os testes Cucumber:
   ```powershell
   bundle exec cucumber features/publico.feature
   ```
3. Execute os testes RSpec:
   ```powershell
   bundle exec rspec
   ```
4. Execute testes de carga com K6:
   ```powershell
   k6 run --summary-export=resultado_k6.json .\k6\login_test.js
   ```
   Para exportar relatório HTML:
   ```powershell
   node .\node_modules\k6-html-reporter\src\index.js resultado_k6.json
   ```
5. Execute análise de vulnerabilidade com SonarQube:
   - Use SonarQube integrado ao VS Code ou CLI para analisar os arquivos Ruby.

## Estudo de Caso
- Testes funcionais, regressão, responsividade, vulnerabilidade, carga e stress.
- Cenários públicos: navegação, busca, acessibilidade, redes sociais, menu rápido.
- Cenários restritos: login bloqueado por captcha (documentado).
- Scripts de exemplo para login, navegação, carga e stress.

## Resultados
- Testes públicos executados com sucesso.
- Testes de login bloqueados pelo captcha.
- Relatórios de performance e vulnerabilidade disponíveis nos arquivos de resultado.

## Caminhos dos Resultados no Projeto

- **Testes Cucumber (funcionais e públicos):**
  - Resultados no terminal após execução dos comandos em `features/`.
  - Logs e relatórios (se configurados): `features/reports/`

- **Testes RSpec (unitários/funcionais):**
  - Resultados no terminal após rodar `bundle exec rspec`.
  - Relatórios customizados: `spec/reports/`

- **Testes de carga K6:**
  - Relatório JSON: `resultado_k6.json` (raiz do projeto)
  - Relatório HTML: `k6/relatorio_html/index.html`

- **Testes de carga JMeter:**
  - Relatório bruto: `resultado_jmeter.jtl` (raiz do projeto)
  - Relatório HTML: `jmeter/relatorio_html/index.html`

- **Testes mobile (Appium):**
  - Resultados no terminal e, se configurado, em `appium/reports/`

- **Análise de vulnerabilidade (SonarQube):**
  - Resultados disponíveis no painel do SonarQube ou exportados conforme configuração.

> Consulte cada pasta indicada acima para visualizar os arquivos de resultado e relatórios de cada tipo de teste.

---

## Observações
- Estrutura pronta para expandir cenários e scripts.
- Siga boas práticas de automação.
- Para dúvidas ou melhorias, consulte o README ou abra uma issue.

## Repositório no GitHub

- Repositório principal: [https://github.com/stampini81/emprega_garca](https://github.com/stampini81/emprega_garca)

> Todos os scripts, relatórios e documentação estão versionados neste repositório. Consulte as pastas e instruções acima para localizar os resultados de cada teste.

## Autor
Leandro da Silva Stampini

