# language: pt
Funcionalidade: Navegação pública no emprega.garca.gov.br

  # ATENÇÃO: Testes para o site público, sem login/captcha

  Cenário: Página inicial carrega corretamente
    Dado que acesso a página inicial
    Então devo ver o título "Secretaria de Desenvolvimento Econômico de GARÇA"
    E devo ver o menu principal
    E devo ver o menu de acesso rápido

  Cenário: Usuário acessa a página de vagas de emprego
    Dado que acesso a página inicial
    Quando navego para "Vagas de Emprego"
    Então devo ver a lista de vagas

  Cenário: Usuário acessa a página de notícias
    Dado que acesso a página inicial
    Quando navego para "Notícias"
    Então devo ver notícias publicadas

  Cenário: Usuário acessa a página de expediente
    Dado que acesso a página inicial
    Quando navego para "Expediente"
    Então devo ver informações de atendimento

  Cenário: Usuário acessa a página de contato
    Dado que acesso a página inicial
    Quando navego para "Fale Conosco"
    Então devo ver o formulário de contato

  Cenário: Verifica elementos de acessibilidade e redes sociais
    Dado que acesso a página inicial
    Então devo ver o menu de acessibilidade
    E devo ver os links de redes sociais no rodapé

  Cenário: Verifica funcionalidade de busca
    Dado que acesso a página inicial
    Então devo ver o campo de busca
    Quando realizo uma busca por "emprego"
    Então devo ver resultados relacionados
