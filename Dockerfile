FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/share/nginx/html/
COPY docs/ /usr/share/nginx/html/docs/

EXPOSE 80
