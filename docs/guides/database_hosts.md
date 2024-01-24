# Database Hosts

Database hosts allow to create per-server databases on the given host.

## Database Configuration

You will need a database user with the correct permissions before
continuing any further. See below to create a user for your database host quickly. To find more detailed information
please have a look at [Setting up MySQL](/tutorials/mysql_setup#creating-a-database-host-for-nodes).

<<< @/.snippets/logindb.sh{bash}

```sql
# Remember to change 'yourPassword' below to be a unique password
# Replace 127.0.0.1 with your panel ip if your panel and wings are on different machines
CREATE USER 'pterodactyluser'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
GRANT ALL PRIVILEGES ON *.* TO 'pterodactyluser'@'127.0.0.1' WITH GRANT OPTION;
exit
```

## Panel Configuration

In the admin area of the panel, go to "Databases" and click the "Create New" button.

Fill in the inputs of the modal:  
![](/create_new_database_host.png)

::: tip Set the Host to a public ip or FQDN
Users will later see the host as their database endpoint. Therefore you should set it to a public ip or FQDN and not to `localhost` for example.
:::

Hit "Create" and if everything was entered correctly you should be redirected to the database host list and see your new database host.

### Common issues

`Connection refused`:  
Make sure that your database server is running and that you allowed external access to your database.

`Host 'X' is not allowed to connect to this MariaDB server`:  
You most likely created the database user with a 127.0.0.1 host and are trying to connect from a different host.

`Access denied for user 'X'@'Y'`:  
You either entered a wrong password or something is wrong with the database user you entered. Make sure that the database user exists and has the required permissions.