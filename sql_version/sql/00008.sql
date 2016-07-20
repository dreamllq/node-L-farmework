CREATE TABLE `admin_pvs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL DEFAULT '',
  `today_time` int(11) NOT NULL DEFAULT '0',
  `num` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyname` (`type_name`,`today_time`),
  KEY `admin_pvs_type_name_today_time` (`type_name`,`today_time`),
  KEY `admin_pvs_type_name` (`type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `admin_uvs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL DEFAULT '',
  `today_time` int(11) NOT NULL DEFAULT '0',
  `num` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyname` (`type_name`,`today_time`),
  KEY `admin_uvs_type_name_today_time` (`type_name`,`today_time`),
  KEY `admin_uvs_type_name` (`type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `admin_uvlogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL DEFAULT '',
  `today_time` int(11) NOT NULL DEFAULT '0',
  `key` varchar(255) NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_uvlogs_type_name_today_time_key` (`type_name`,`today_time`,`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into `dbvers` (`ver`, `changelog`) values ('8', '统计表');
