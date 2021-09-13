FROM php:7.4-apache

LABEL maintainer="Maxwell Werner"

#Set the working directory in the image
WORKDIR /var/www/html

#Copy our public folder to the working directory
COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf