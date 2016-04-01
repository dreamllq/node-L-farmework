CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `pass_word` varchar(32) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `auth_id` int(11) NOT NULL DEFAULT '0',
  `email` varchar(255) NOT NULL DEFAULT '0',
  `phone` varchar(255) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`user_name`),
  KEY `admin_users_auth_id` (`auth_id`),
  KEY `admin_users_parent_id` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

insert into `dbvers` (`ver`, `changelog`) values ('1', '后台用户表初始化');