require 'selenium-webdriver'
require 'rspec'

describe 'Login emprega.garca.gov.br' do
  before(:each) do
    @driver = Selenium::WebDriver.for :chrome
    @driver.navigate.to 'https://www.emprega.garca.sp.gov.br/b7W1p8V4'
  end

  it 'realiza login com sucesso' do
    @driver.find_element(:id, 'usuario').send_keys('larissa.luz')
    @driver.find_element(:id, 'senha').send_keys('g@rcaF@TEC0825')
    @driver.find_element(:id, 'entrar').click
    expect(@driver.page_source).to include('Bem-vindo').or include('Dashboard')
  end

  after(:each) do
    @driver.quit
  end
end
