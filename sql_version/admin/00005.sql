insert into `admin_menus` (`name`, `uri`) values ('Dashboard', '/admin/index');
insert into `admin_menus` (`name`) values ('系统设置');
insert into `admin_menus` (`name`, `uri`,`parent_id`) values ('权限管理', '/admin/right/index','2');
insert into `admin_menus` (`name`, `uri`,`parent_id`) values ('用户管理', '/admin/user/index','2');

insert into `dbvers` (`ver`, `changelog`) values ('5', '初始化菜单');
