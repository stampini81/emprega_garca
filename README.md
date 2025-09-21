## Alternativas Gratuitas de OCR

### 1. Tesseract OCR (open source, local)
- Já integrado ao projeto via gem `rtesseract`.
- Melhore a acurácia com pré-processamento:
   - Binarização (threshold)
   - Aumento de contraste
   - Remoção de ruído
- Exemplo de pré-processamento em Ruby:
   ```ruby
   require 'mini_magick'
   image = MiniMagick::Image.open('captcha.png')
   image.colorspace 'Gray'
   image.contrast
   image.threshold '60%'
   image.write('captcha_processed.png')
   captcha_text = RTesseract.new('captcha_processed.png').to_s.strip
   puts "Captcha reconhecido: #{captcha_text}"
   ```

### 2. OCR.space API (gratuito, HTTP)
- Cadastre-se em https://ocr.space/ocrapi para obter uma API key gratuita.
- Exemplo de uso em Ruby:
   ```ruby
   require 'net/http'
   require 'uri'
   require 'json'
   api_key = 'SUA_API_KEY_AQUI'
   image_path = 'captcha_processed.png'
   uri = URI('https://api.ocr.space/parse/image')
   request = Net::HTTP::Post::Multipart.new uri.path,
      'apikey' => api_key,
      'language' => 'por',
      'file' => UploadIO.new(image_path, 'image/png')
   response = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      http.request(request)
   end
   result = JSON.parse(response.body)
   captcha_text = result['ParsedResults'][0]['ParsedText'].strip rescue ''
   puts "Captcha reconhecido via OCR.space: #{captcha_text}"
   ```
   (Necessário instalar a gem `multipart-post`)

### 3. EasyOCR (Python, open source)
- Instale com:
   ```bash
   pip install easyocr
   ```
- Exemplo de uso em Python:
   ```python
   import easyocr
   reader = easyocr.Reader(['pt'])
   result = reader.readtext('captcha_processed.png', detail=0)
   print('Captcha reconhecido via EasyOCR:', result)
   ```

Essas alternativas permitem testar diferentes abordagens para reconhecimento de captchas simples sem custos.
### Exemplo: Usando Google Cloud Vision OCR em Ruby

1. Crie um projeto no Google Cloud Platform e ative a API Vision.
2. Gere e baixe a chave de serviço (JSON) e defina a variável de ambiente:
   ```powershell
   $env:GOOGLE_APPLICATION_CREDENTIALS="Caminho\para\sua-chave.json"
   ```
3. Adicione ao seu Gemfile:
   ```ruby
   gem 'google-cloud-vision'
   ```
   E execute:
   ```powershell
   bundle install
   ```
4. Exemplo de código Ruby para reconhecer texto do captcha:
   ```ruby
   require "google/cloud/vision"
   image_path = "captcha_processed.png"
   image_annotator = Google::Cloud::Vision.image_annotator
   response = image_annotator.text_detection image: image_path
   captcha_text = response.responses.first.text_annotations.first&.description&.strip
   puts "Captcha reconhecido pela Google Vision: #{captcha_text}"
   ```
5. Substitua o trecho do Tesseract pelo código acima no seu fluxo de automação.

Observação: O uso da API Google Vision pode gerar custos após a cota gratuita.
## Testes com OCR e Captcha

### Resultados com Tesseract OCR
- O fluxo automatizado de login utiliza Tesseract OCR para tentar reconhecer o captcha.
- Mesmo com pré-processamento (binarização, aumento de contraste), o OCR não conseguiu extrair o texto corretamente dos captchas do sistema.
- O login automatizado falhou devido ao captcha não ser reconhecido (campo ficou em branco).
- Captchas visuais são projetados para bloquear OCR, tornando a automação pouco confiável.

### Limitações
- Taxa de sucesso do OCR em captchas reais é muito baixa.
- Captchas com distorção, ruído ou fontes não triviais são praticamente impossíveis de resolver apenas com OCR open source.
- Para automação total, recomenda-se:
   - Remover o captcha em ambiente de testes (se possível).
   - Integrar um serviço externo de resolução de captcha (ex: 2Captcha, Anti-Captcha, DeathByCaptcha).
   - Utilizar APIs de OCR avançadas, como Google Cloud Vision OCR, que podem ter resultados melhores, mas ainda não garantem 100% de sucesso.

### Alternativas: API Google Cloud Vision
- É possível integrar a API Google Cloud Vision para tentar reconhecer captchas mais complexos.
- Exemplo de uso (Ruby):
   1. Crie um projeto no Google Cloud e ative a API Vision.
   2. Instale a gem `google-cloud-vision`.
   3. No script, envie a imagem do captcha para a API e utilize o texto retornado.
- Mesmo assim, a taxa de sucesso pode ser baixa em captchas robustos.

### Observação
- O bloqueio por captcha impede automação completa de login e navegação restrita.
- Testes públicos e de navegação funcionam normalmente.

# emprega.garca.gov.br - Automação de Testes

Este repositório contém o estudo de caso, scripts e resultados dos testes automatizados para o site emprega.garca.gov.br.

## Ferramentas Utilizadas
- Ruby + Selenium WebDriver
- Cucumber (BDD)
- RSpec (unitário/funcional)
- Appium (mobile)
- JMeter/K6 (carga/stress)
- SonarQube (vulnerabilidade)

## Estrutura do Projeto
- features/: Cenários de teste Cucumber
- features/step_definitions/: Steps Ruby/Selenium
- k6/: Scripts de carga K6
- Gemfile: Dependências Ruby
- .gitignore: Exclusão de arquivos temporários e sensíveis

## Como Executar
1. Instale as dependências Ruby:
   ```powershell
   bundle install
   ```
2. Execute os testes Cucumber:
   ```powershell
   bundle exec cucumber features/publico.feature
   ```
3. Execute os testes RSpec:
   ```powershell
   bundle exec rspec
   ```
4. Execute testes de carga com K6:
   ```powershell
   k6 run --summary-export=resultado_k6.json .\k6\login_test.js
   ```
   Para exportar relatório HTML:
   ```powershell
   node .\node_modules\k6-html-reporter\src\index.js resultado_k6.json
   ```
5. Execute análise de vulnerabilidade com SonarQube:
   - Use SonarQube integrado ao VS Code ou CLI para analisar os arquivos Ruby.

## Estudo de Caso
- Testes funcionais, regressão, responsividade, vulnerabilidade, carga e stress.
- Cenários públicos: navegação, busca, acessibilidade, redes sociais, menu rápido.
- Cenários restritos: login bloqueado por captcha (documentado).
- Scripts de exemplo para login, navegação, carga e stress.

## Resultados
- Testes públicos executados com sucesso.
- Testes de login bloqueados pelo captcha.
- Relatórios de performance e vulnerabilidade disponíveis nos arquivos de resultado.



## Observações
- Estrutura pronta para expandir cenários e scripts.
- Siga boas práticas de automação.
- Para dúvidas ou melhorias, consulte o README ou abra uma issue.

## Autor
Leandro da Silva Stampini
