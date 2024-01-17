---
prev: false
next: false
---

# Building Panel Assets

:::warning
Do **not** run the following steps on your production nodes.
:::

Instructions on how to build the panel are also available in the [BUILDING.md](https://github.com/pterodactyl/panel/blob/1.0-develop/BUILDING.md) file.

The frontend of the Panel is built with React. Any changes to the source files require to recompile it.
This also applies to style sheets. The following sections explain how to do so.

## Install Dependencies

The following commands will install the necessary dependencies for building the Panel assets.

The build tools require NodeJS, yarn is used as the package manager.

::: code-group
```bash [Ubuntu/Debian]
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt update
sudo apt install -y nodejs
```
```bash [RHEL derivatives (e.g. CentOS)]
sudo yum install https://rpm.nodesource.com/pub_16.x/nodistro/repo/nodesource-release-nodistro-1.noarch.rpm -y
sudo yum install nodejs -y
```
:::

Install required javascript packages.

```bash
cd /var/www/pterodactyl

# Install Yarn
npm i -g yarn

# Installs panel build dependencies
yarn
```

## Build Panel Assets

The following command will rebuild the Panel frontend. 

::: warning Using NodeJS v17 or higher
In order to build the assets with NodeJS 17 or higher, you would need to run `export NODE_OPTIONS=--openssl-legacy-provider`
:::

```bash
yarn build:production
```

You can use command `yarn watch` to view the progress of your changes in almost real-time for easier development. Once you're satisfied with your changes build the panel using the previously mentioned `yarn build:production` command. 
