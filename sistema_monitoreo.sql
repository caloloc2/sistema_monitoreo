/*
Navicat MySQL Data Transfer

Source Server         : Local
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : sistema_monitoreo

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2018-08-17 00:01:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tanques
-- ----------------------------
DROP TABLE IF EXISTS `tanques`;
CREATE TABLE `tanques` (
  `id_datos` int(11) NOT NULL AUTO_INCREMENT,
  `tanque1_motor1` int(11) DEFAULT '0',
  `tanque1_motor2` int(11) DEFAULT '0',
  `tanque1_nivel` double DEFAULT '0',
  `tanque2_motor1` int(11) DEFAULT '0',
  `tanque2_motor2` int(11) DEFAULT '0',
  `tanque2_nivel` double DEFAULT '0',
  `tanque3_nivel` double DEFAULT '0',
  PRIMARY KEY (`id_datos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
