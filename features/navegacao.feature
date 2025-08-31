# ATENÇÃO: A automação dos testes está bloqueada pelo captcha.
# O reconhecimento automático do captcha não é possível via OCR
# e impede o login automatizado e a navegação completa.
# Para automação total, seria necessário remover ou integrar
# um serviço externo de resolução de captcha.
# language: pt
Funcionalidade: Navegação pelas subpáginas do sistema

  Cenário: Usuário acessa a página de vagas
    Dado que estou logado no sistema
    Quando navego até a página de vagas
    Então devo ver a lista de vagas disponíveis

  Cenário: Usuário acessa a página de cadastro
    Dado que estou logado no sistema
    Quando navego até a página de cadastro
    Então devo ver o formulário de cadastro

  Cenário: Usuário acessa a página de empresas
    Dado que estou logado no sistema
    Quando navego até a página de empresas
    Então devo ver a lista de empresas cadastradas

  Cenário: Usuário acessa a página de contato
    Dado que estou logado no sistema
    Quando navego até a página de contato
    Então devo ver as informações de contato
