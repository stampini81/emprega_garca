require 'selenium-webdriver'
require 'open-uri'
require 'rtesseract'
require 'uri'
require 'mini_magick'
Dado('que estou na página de login') do
  @driver = Selenium::WebDriver.for :chrome
  @driver.navigate.to 'https://www.emprega.garca.sp.gov.br/b7W1p8V4'
end

Quando('preencho o usuário {string} e a senha {string}') do |usuario, senha|
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.find_element(:id, 'login').displayed? }
  @driver.find_element(:id, 'login').send_keys(usuario)
  wait.until { @driver.find_element(:id, 'password').displayed? }
  @driver.find_element(:id, 'password').send_keys(senha)
  # Captcha OCR
  wait.until { @driver.find_element(:id, 'captchaConta-image').displayed? }
  captcha_img = @driver.find_element(:id, 'captchaConta-image').attribute('src')
  base_url = "https://www.emprega.garca.sp.gov.br"
  captcha_url = URI.join(base_url, captcha_img).to_s
  File.open('captcha.png', 'wb') do |f|
    f.write URI.open(captcha_url).read
  end
  # Aguarda o arquivo ser gerado e processa
  require 'timeout'
  Timeout.timeout(5) do
    until File.exist?('captcha.png') && File.size('captcha.png') > 0
      sleep 0.2
    end
  end
  # Pré-processamento: converter para preto e branco e aplicar threshold
  image = MiniMagick::Image.open('captcha.png')
  image.colorspace 'Gray'
  image.threshold '50%'
  image.write('captcha_processed.png')
  # Aguarda processamento
  Timeout.timeout(5) do
    until File.exist?('captcha_processed.png') && File.size('captcha_processed.png') > 0
      sleep 0.2
    end
  end
  captcha_text = RTesseract.new('captcha_processed.png').to_s.strip
  puts "Captcha reconhecido: #{captcha_text}"
  wait.until { @driver.find_element(:id, 'captchaConta').displayed? }
  @driver.find_element(:id, 'captchaConta').clear
  @driver.find_element(:id, 'captchaConta').send_keys(captcha_text)
  # Pré-processamento: converter para preto e branco e aplicar threshold
  image = MiniMagick::Image.open('captcha.png')
  image.colorspace 'Gray'
  image.threshold '50%'
  image.write('captcha_processed.png')
  captcha_text = RTesseract.new('captcha_processed.png').to_s.strip
  puts "Captcha reconhecido: #{captcha_text}"
  wait.until { @driver.find_element(:id, 'captchaConta').displayed? }
  @driver.find_element(:id, 'captchaConta').send_keys(captcha_text)
end

Quando('clico em {string}') do |botao|
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.find_element(:id, 'btnLogin').enabled? }
  @driver.find_element(:id, 'btnLogin').click
end

Então('devo ver a mensagem de boas-vindas ou o dashboard') do
  expect(@driver.page_source).to include('Bem-vindo').or include('Dashboard')
  @driver.quit
end
