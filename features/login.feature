# ATENÇÃO: A automação dos testes está bloqueada pelo captcha.
# O reconhecimento automático do captcha não é possível via OCR
# e impede o login automatizado e a navegação completa.
# Para automação total, seria necessário remover ou integrar
# um serviço externo de resolução de captcha.
# language: pt
Funcionalidade: Login no sistema emprega.garca.gov.br

  Cenário: Usuário realiza login com sucesso
    Dado que estou na página de login
    Quando preencho o usuário "larissa.luz" e a senha "g@rcaF@TEC0825"
    E clico em "Entrar"
    Então devo ver a mensagem de boas-vindas ou o dashboard
