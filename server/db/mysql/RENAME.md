# mysql 使用笔记

#### MySql中创建表格

```sql
 --- 创建user数据表
 mysql> CREATE TABLE IF NOT EXISTS `user`(
    `Id` INT UNSIGNED AUTO_INCREMENT,
    `user` VARCHAR(20) NOT NULL,
    `pwd` VARCHAR(20) NOT NULL,
    `email` VARCHAR(10),
    `phone` INT(18),
    `addr` VARCHAR(6),
    `ip` VARCHAR(10) NOT NULL,
    `mac_addr` VARCHAR(10) NOT NULL,
    `create_datetime` DATETIME,
    PRIMARY KEY ( `Id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 在表格中插入一行
```sql
 INSERT INTO user
    (user, pwd, email, phone, addr, ip, mac_addr, create_datetime)
    VALUES
   ("admin", "admin123", "188888@163.com", 1888888, "CN", "127.0.0.1", "mac_undefiend", NOW());
```

#### MySql中增加一列

如果想在一个已经建好的表中添加一列，可以用诸如：
```sql
alter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null;
```
这条语句会向已有的表中加入新的一列，这一列在表的最后一列位置。如果我们希望添加在指定的一列，可以用：
```sql
alter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null after COLUMN_NAME;
```
注意，上面这个命令的意思是说添加新列到某一列后面。如果想添加到第一列的话，可以用：
```sql
alter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null first;
```