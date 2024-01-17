# If using NGINX or Apache (not on RHEL derivatives)
chown -R www-data:www-data /var/www/pterodactyl/*

# If using NGINX on RHEL derivatives (e.g. CentOS)
chown -R nginx:nginx /var/www/pterodactyl/*

# If using Apache on RHEL derivatives (e.g. CentOS)
chown -R apache:apache /var/www/pterodactyl/*