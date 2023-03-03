FROM nginx:1.19.0-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./ssl /ssl

RUN mkdir -p /vol/static
