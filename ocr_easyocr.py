import easyocr
from PIL import Image

# Garante que a imagem esteja em RGB
img_path = 'captcha_processed.png'
img = Image.open(img_path)
if img.mode != 'RGB':
	img = img.convert('RGB')
	img.save(img_path)

reader = easyocr.Reader(['pt'])
result = reader.readtext(img_path, detail=0)
print('Captcha reconhecido via EasyOCR:', result)
