# language: pt
Funcionalidade: Smoke Test - emprega.garca.gov.br

  # Teste rápido dos principais fluxos públicos
  Cenário: Verifica carregamento da página inicial
    Dado que acesso a página inicial
    Então devo ver o título "Secretaria de Desenvolvimento Econômico de GARÇA"

  Cenário: Verifica menu principal
    Dado que acesso a página inicial
    Então devo ver o menu principal

  Cenário: Verifica busca
    Dado que acesso a página inicial
    Então devo ver o campo de busca
    Quando realizo uma busca por "emprego"
    Então devo ver resultados relacionados
