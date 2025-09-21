require 'mini_magick'
require 'rtesseract'

image = MiniMagick::Image.open('captcha.png')
image.colorspace 'Gray'
image.contrast
image.threshold '60%'
image.write('captcha_processed.png')

captcha_text = RTesseract.new('captcha_processed.png').to_s.strip
puts "Captcha reconhecido: #{captcha_text}"
