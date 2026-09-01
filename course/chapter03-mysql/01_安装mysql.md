
### 卸载mysql
sudo apt-get remove --purge mysql-server mysql-client mysql-common mysql-server-core-*mysql-client-core-*

sudo rm -rf /etc/mysql/var/lib/mysql
sudo rm -rf /var/log/mysql
sudo rm -rf /var/log/mysql.*
sudo rm -rf /var/run/mysqld

sudo apt autoremove
sudo apt autoclean

### 安装mysql
sudo dpkg -i mysql-apt-config_0.8.40-1_all.deb
sudo apt update
sudo apt install mysql-server
sudo systemctl status mysql
systemctl enable mysql

mysql -uroot -p123456
select host,user from mysql.user;
update mysql.user set host='%' where user='root';
flush privileges;