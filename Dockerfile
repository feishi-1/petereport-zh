FROM debian:stable-slim

# Set environment variables in one layer
ARG HTTP_PROXY
ARG HTTPS_PROXY

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DEBIAN_FRONTEND=noninteractive \
    LC_ALL=zh_CN.UTF-8 \
    LANG=zh_CN.UTF-8 \
    LANGUAGE=zh_CN.UTF-8 \
    HTTP_PROXY=${HTTP_PROXY} \
    HTTPS_PROXY=${HTTPS_PROXY}

# Replace single RUN commands with a single RUN command to reduce layers
RUN echo "deb http://mirrors.huaweicloud.com/debian stable main" > /etc/apt/sources.list \
    && apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y locales locales-all \
    && apt-get install -y texlive-latex-recommended texlive-fonts-extra texlive-latex-extra texlive-xetex texlive-lang-chinese \
    && apt-get install -y python3-minimal python3-pip python3-distutils \
    && apt-get install -y python3-pypandoc wget pipenv pandoc \
    && apt-get clean \
    && apt-get autoremove -y

# Set working directory
WORKDIR /opt/petereport
COPY Pipfile ./
COPY app ./app

# Clean unnecessary files to reduce image size
RUN mv ./app/locale/zh_Hans/AlibabaPuHuiTi-3-55-Regular.ttf /usr/share/fonts/ \
    && rm -rf ./app/db.sqlite3 \
    && rm -rf ./app/storage_reports/pdf/*.* \
    && rm -rf ./app/storage_reports/csv/*.* \
    && rm -rf ./app/storage_reports/html/*.* \
    && rm -rf ./app/storage_reports/images/*.* \
    && rm -rf ./app/storage_reports/jupyter/*.* \
    && rm -rf ./app/storage_reports/markdown/*.* \
    && pipenv install --deploy --ignore-pipfile --python 3.11 \
    && pipenv run ./app/manage.py makemigrations \
    && pipenv run ./app/manage.py migrate \
    && pipenv run ./app/manage.py loaddata ./app/config/cwe-list.json \
    && pipenv run ./app/manage.py loaddata ./app/config/owasp-list.json \
    && pipenv run ./app/manage.py loaddata ./app/config/finding-list.json \
    && rm -rf /var/lib/apt/lists/* \
    && pipenv --clear

# Start the application
CMD ["pipenv", "run", "./app/manage.py", "runserver", "0.0.0.0:8000", "--insecure"]