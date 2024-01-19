FROM nginx:1.17.4
RUN apt-get update && apt-get install -y nginx-extras && rm -rf /var/lib/apt/lists/*
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/src/app/dist/