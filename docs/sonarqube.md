// Arquivo movido para docs/sonarqube.md
# SonarQube

Para análise de vulnerabilidade e qualidade do código Ruby:

1. Instale e configure o SonarQube Server ou use SonarCloud.
2. Utilize o scanner CLI para analisar o projeto:
   ```bash
   sonar-scanner -Dsonar.projectKey=emprega_garca -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=SEU_TOKEN
   ```
3. Consulte os relatórios de vulnerabilidade e qualidade no dashboard do SonarQube.

> Para código JavaScript (Playwright, K6), configure projetos separados ou inclua os diretórios no parâmetro `sonar.sources`.
