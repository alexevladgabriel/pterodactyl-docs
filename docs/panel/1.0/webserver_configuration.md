---
next:
  text: 'Wings Installation'
  link: '/wings/1.0/installing'
---

# Webserver Configuration

::: warning
When using the SSL configuration you **MUST** create SSL certificates, otherwise your webserver will fail to start. See the [Creating SSL Certificates](/tutorials/creating_ssl_certificates) documentation page to learn how to create these certificates before continuing.
:::

::: tip
If you are using Caddy, you do not have to create SSL certificates manually, Caddy will take care of it automatically.
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
<<< @/.snippets/webservers/nginx/1.x/ssl.conf{5,11,26-27 nginx:line-numbers} [With an SSL]
<<< @/.snippets/webservers/nginx/1.x/nossl.conf{3 nginx:line-numbers} [Without an SSL]
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

== Caddy
Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is `/etc/caddy/Caddyfile`.

To delete the config file completely, run the following command:

```bash
rm /etc/caddy/Caddyfile
```

Then continue with an editor of your choice to write the config.

You should paste the contents of the file below, replacing `<domain>` with your domain name.

::: code-group
<!-- There's no caddy highlighting... -->
<<< @/.snippets/webservers/caddy/ssl.conf{9 nginx:line-numbers} [With an SSL]
<<< @/.snippets/webservers/caddy/nossl.conf{9 nginx:line-numbers} [Without an SSL]
:::

### Enabling Configuration

The final step is to restart Caddy.

```bash
systemctl restart caddy
```
::::
