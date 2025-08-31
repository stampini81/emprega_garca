require 'selenium-webdriver'
require 'rspec'

# ATENÇÃO: Steps para navegação pública, sem login/captcha

Dado('que acesso a página inicial') do
  @driver ||= Selenium::WebDriver.for :chrome
  @driver.navigate.to 'https://www.emprega.garca.sp.gov.br/'
end

Então('devo ver o título "Secretaria de Desenvolvimento Econômico de GARÇA"') do
  expect(@driver.title).to include('Secretaria de Desenvolvimento Econômico de GARÇA')
end

Então('devo ver o menu principal') do
  expect(@driver.page_source).to include('Início')
end

Então('devo ver o menu de acesso rápido') do
  expect(@driver.page_source).to include('Acesso Rápido')
end

Quando('navego para "Vagas de Emprego"') do
  @driver.find_element(:link_text, 'Vagas de Emprego').click
end

Então('devo ver a lista de vagas') do
  expect(@driver.page_source).to include('Vagas')
end

Quando('navego para "Notícias"') do
  @driver.find_element(:link_text, 'Notícias').click
end

Então('devo ver notícias publicadas') do
  expect(@driver.page_source).to include('Notícias')
end

Quando('navego para "Expediente"') do
  @driver.find_element(:link_text, 'Expediente').click
end

Então('devo ver informações de atendimento') do
  expect(@driver.page_source).to include('Expediente')
end

Quando('navego para "Fale Conosco"') do
  @driver.find_element(:link_text, 'Contato').click
end

Então('devo ver o formulário de contato') do
  expect(@driver.page_source).to include('Fale Conosco')
end

Então('devo ver o menu de acessibilidade') do
  expect(@driver.page_source).to include('Acessibilidade')
end

Então('devo ver os links de redes sociais no rodapé') do
  expect(@driver.page_source).to include('Siga nas redes sociais')
end

Então('devo ver o campo de busca') do
  expect(@driver.page_source).to include('Buscar')
end

Quando('realizo uma busca por "emprego"') do
  campo = @driver.find_element(:id, 'buscaCompleta_v2') rescue @driver.find_element(:id, 'buscarServico_v2')
  campo.send_keys('emprego')
  botao = @driver.find_element(:id, 'btnBuscaCompleta_v2') rescue @driver.find_element(:id, 'btnBuscarServico_v2')
  botao.click
end

Então('devo ver resultados relacionados') do
  expect(@driver.page_source).to match(/emprego/i)
end

at_exit { @driver.quit if @driver }
