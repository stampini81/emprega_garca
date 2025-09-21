require 'net/http'

require 'net/http'
require 'uri'
require 'json'
require 'multipart/post'

api_key = 'SUA_API_KEY_AQUI' # Substitua pela sua chave gratuita do OCR.space
image_path = 'captcha_processed.png'
uri = URI('https://api.ocr.space/parse/image')

form_data = {
  'apikey' => api_key,
  'language' => 'por',
  'file' => UploadIO.new(image_path, 'image/png')
}

request = Net::HTTP::Post.new(uri)
request.set_form(form_data.to_a, 'multipart/form-data')

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

result = JSON.parse(response.body)
captcha_text = result['ParsedResults'][0]['ParsedText'].strip rescue ''
puts "Captcha reconhecido via OCR.space: #{captcha_text}"
