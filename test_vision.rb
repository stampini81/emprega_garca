require "google/cloud/vision"

# Caminho da imagem de teste (use um captcha ou qualquer imagem com texto)
image_path = "captcha_processed.png"

# Inicializa o cliente da API Google Vision
image_annotator = Google::Cloud::Vision.image_annotator

# Faz a requisição de OCR
response = image_annotator.text_detection image: image_path

# Extrai o texto reconhecido
captcha_text = response.responses.first.text_annotations.first&.description&.strip

puts "Texto reconhecido pela Google Vision: #{captcha_text}"
