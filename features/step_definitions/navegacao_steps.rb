###############################################################
# ATENÇÃO: A automação dos testes está bloqueada pelo captcha. #
# O reconhecimento automático do captcha não é possível via OCR #
# e impede o login automatizado e a navegação completa.         #
# Para automação total, seria necessário remover ou integrar    #
# um serviço externo de resolução de captcha.                  #
###############################################################
require 'selenium-webdriver'
require 'open-uri'
require 'rtesseract'
require 'uri'

$driver ||= Selenium::WebDriver.for :chrome
at_exit { $driver.quit if $driver }

Before do
  @driver = $driver
  @wait = Selenium::WebDriver::Wait.new(timeout: 10)
end
require 'selenium-webdriver'
require 'open-uri'
require 'rtesseract'
require 'uri'

Before do
  @wait = Selenium::WebDriver::Wait.new(timeout: 10)
end

Dado('que estou logado no sistema') do
  begin
    @wait.until { @driver.find_element(:id, 'escolhaAutenticacao').displayed? }
    select = @driver.find_element(:id, 'escolhaAutenticacao')
    options = select.find_elements(tag_name: 'option')
    options.each { |opt| opt.click if opt.attribute('value') == '1' }
    sleep 1
    @wait.until { @driver.find_element(:id, 'email_salva').enabled? }
    @driver.find_element(:id, 'email_salva').click
    sleep 1
  rescue Selenium::WebDriver::Error::NoSuchElementError
    puts "Tela de escolha de autenticação não encontrada. Prosseguindo..."
  end
  @driver = Selenium::WebDriver.for :chrome
  @driver.navigate.to 'https://www.emprega.garca.sp.gov.br/b7W1p8V4'
  @wait.until { @driver.find_element(:id, 'captchaConta-image').displayed? }
  captcha_img = @driver.find_element(:id, 'captchaConta-image').attribute('src')
  base_url = "https://www.emprega.garca.sp.gov.br"
  captcha_url = URI.join(base_url, captcha_img).to_s
  File.open('captcha.png', 'wb') do |f|
    f.write URI.open(captcha_url).read
  end
  sleep 1
  image = MiniMagick::Image.open('captcha.png')
  image.contrast
  image.blur '1x1'
  image.colorspace 'Gray'
  image.threshold '40%'
  image.write('captcha_processed.png')
  sleep 1
  captcha_text = RTesseract.new('captcha_processed.png').to_s.strip
  puts "Captcha reconhecido: #{captcha_text}"
  if captcha_text.nil? || captcha_text.empty?
    puts "Captcha não reconhecido. Pausando para depuração."
    sleep 10
    raise "Captcha não reconhecido. Teste interrompido."
  end
  @wait.until { @driver.find_element(:id, 'login').displayed? }
  @driver.find_element(:id, 'login').send_keys('larissa.luz')
  @wait.until { @driver.find_element(:id, 'password').displayed? }
  @driver.find_element(:id, 'password').send_keys('g@rcaF@TEC0825')
  @wait.until { @driver.find_element(:id, 'captchaConta').displayed? }
  @driver.find_element(:id, 'captchaConta').clear
  @driver.find_element(:id, 'captchaConta').send_keys(captcha_text)
  sleep 2
  @wait.until { @driver.find_element(:id, 'btnLogin').enabled? }
  @driver.find_element(:id, 'btnLogin').click
end

Quando('navego até a página de vagas') do
  @driver.find_element(:link_text, 'Vagas').click
end

Então('devo ver a lista de vagas disponíveis') do
  expect(@driver.page_source).to include('Vagas disponíveis')
end

Quando('navego até a página de cadastro') do
  @driver.find_element(:link_text, 'Cadastro').click
end

Então('devo ver o formulário de cadastro') do
  expect(@driver.page_source).to include('Formulário de Cadastro')
end

Quando('navego até a página de empresas') do
  @driver.find_element(:link_text, 'Empresas').click
end

Então('devo ver a lista de empresas cadastradas') do
  expect(@driver.page_source).to include('Empresas cadastradas')
end

Quando('navego até a página de contato') do
  @driver.find_element(:link_text, 'Contato').click
end

Então('devo ver as informações de contato') do
  expect(@driver.page_source).to include('Informações de Contato')
  @driver.quit
end
