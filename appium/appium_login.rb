require 'appium_lib'

def caps
  {
    caps: {
      platformName: 'Android',
      deviceName: 'Android Emulator',
      browserName: 'Chrome'
    },
    appium_lib: {
      server_url: 'http://localhost:4723/wd/hub'
    }
  }
end

@driver = Appium::Driver.new(caps, true)
@driver.start_driver

@driver.get('https://www.emprega.garca.sp.gov.br/b7W1p8V4')
@driver.find_element(:id, 'usuario').send_keys('larissa.luz')
@driver.find_element(:id, 'senha').send_keys('g@rcaF@TEC0825')
@driver.find_element(:id, 'entrar').click

if @driver.page_source.include?('Bem-vindo') || @driver.page_source.include?('Dashboard')
  puts 'Login realizado com sucesso!'
else
  puts 'Falha no login.'
end

@driver.quit
