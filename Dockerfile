FROM ruby:3.2

# Instala dependências do sistema
RUN apt-get update && \
    apt-get install -y \
      wget \
      unzip \
      xvfb \
      libxi6 \
    \
      libnss3 \
      libxss1 \
    \
    \
      fonts-liberation \
      libatk-bridge2.0-0 \
      libgtk-3-0 \
      tesseract-ocr \
      imagemagick \
      nodejs \
      npm

# Instala Google Chrome (novo método sem apt-key)
RUN wget -O /usr/share/keyrings/google-chrome.gpg https://dl.google.com/linux/linux_signing_key.pub && \
  echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
  apt-get update && \
  apt-get install -y google-chrome-stable

# Instala ChromeDriver compatível
RUN CHROME_VERSION=$(google-chrome --version | grep -oP '\d+\.\d+\.\d+') && \
    DRIVER_VERSION=$(wget -qO- "https://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}") && \
    wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/${DRIVER_VERSION}/chromedriver_linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin/ && \
    chmod +x /usr/local/bin/chromedriver

# Instala dependências Ruby
WORKDIR /app
COPY Gemfile .
RUN gem install bundler && bundle install

# Copia o restante do projeto
COPY . .

# Comando padrão: executa todos os testes
CMD ["bash", "-c", "bundle exec rspec && bundle exec cucumber"]
