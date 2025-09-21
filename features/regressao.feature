# language: pt
Funcionalidade: Teste de Regressão - emprega.garca.gov.br

  # Garante que funcionalidades antigas continuam funcionando após mudanças
  Cenário: Página inicial carrega corretamente
    Dado que acesso a página inicial
    Então devo ver o título "Secretaria de Desenvolvimento Econômico de GARÇA"

  Cenário: Busca retorna resultados
    Dado que acesso a página inicial
    Então devo ver o campo de busca
    Quando realizo uma busca por "emprego"
    Então devo ver resultados relacionados

  Cenário: Menu de acesso rápido está presente
    Dado que acesso a página inicial
    Então devo ver o menu de acesso rápido

  Cenário: Links de redes sociais continuam visíveis
    Dado que acesso a página inicial
    Então devo ver os links de redes sociais no rodapé
