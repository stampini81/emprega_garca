# language: pt
Funcionalidade: Teste de Escalabilidade - emprega.garca.gov.br

  # Simula múltiplos acessos simultâneos a páginas públicas
  Cenário: Acesso simultâneo à página inicial
    Dado que acesso a página inicial
    Então devo ver o título "Secretaria de Desenvolvimento Econômico de GARÇA"

  Cenário: Acesso simultâneo à busca
    Dado que acesso a página inicial
    Então devo ver o campo de busca
    Quando realizo uma busca por "emprego"
    Então devo ver resultados relacionados

  # Observação: Para testes reais de escalabilidade, utilize ferramentas como K6 ou JMeter para simular múltiplos usuários concorrentes.
