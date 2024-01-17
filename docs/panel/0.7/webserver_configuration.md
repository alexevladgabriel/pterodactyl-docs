---
prev: false
next: false
---

# Webserver Configuration

::: danger This Version is End-of-Life
This documentation is for **end-of-life software** which does not recieve any security updates or support
from the community. This documentation has been left accessible for historial reasons.

You should be installing and using [Pterodactyl Panel 1.0](/panel/1.0/getting_started) in production environments.
:::

[[toc]]

::: warning
When using the SSL configuration you **MUST** create SSL certificates, otherwise your webserver will fail to start. See the [Creating SSL Certificates](/tutorials/creating_ssl_certificates) documentation page to learn how to create these certificates before continuing.
:::

:::: tabs
== NGINX
First, remove the default NGINX configuration.

```bash
rm /etc/nginx/sites-enabled/default
```

Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place the file in `/etc/nginx/sites-available/`, or &mdash; if on CentOS, `/etc/nginx/conf.d/`.

::: code-group
<<< @/.snippets/webservers/nginx/0.7/ssl.conf{5,11,26-27,48 nginx:line-numbers} [With an SSL]
<<< @/.snippets/webservers/nginx/0.7/nossl.conf{3,27 nginx:line-numbers} [Without an SSL]
:::

### Enabling Configuration

The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using RHEL derivatives
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# You need to restart nginx regardless of OS
sudo systemctl restart nginx
```

== Apache
First, remove the default Apache configuration.

```bash
a2dissite 000-default.conf
```

Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place the file in `/etc/apache2/sites-available`, or &mdash; if on CentOS, `/etc/httpd/conf.d/`.

::: warning
When using Apache, make sure you have the `libapache2-mod-php8.1` package installed or else PHP will not display on your webserver.
:::

::: code-group
<<< @/.snippets/webservers/apache/ssl.conf{2,10,24-25 apache:line-numbers} [With an SSL]
<<< @/.snippets/webservers/apache/nossl.conf{2 apache:line-numbers} [Without an SSL]
:::

### Enabling Configuration

Once you've created the file above, simply run the commands below. If you are on CentOS _you do not need to run the commands
below!_ You only need to run `systemctl restart httpd`.

```bash
# You do not need to run any of these commands on CentOS
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite ssl
sudo systemctl restart apache2
```
::::
