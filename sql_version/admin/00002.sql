CREATE TABLE `admin_rights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `create_user` int(11) NOT NULL DEFAULT '0',
  `create_user_name` varchar(255) NOT NULL DEFAULT '0',
  `list` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT='权限管理表';

insert into `dbvers` (`ver`, `changelog`) values ('2', '后台权限管理表初始化');