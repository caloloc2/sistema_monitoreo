/*
Navicat MySQL Data Transfer

Source Server         : LOCAL
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : sistema_monitoreo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-01-10 12:38:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for registros
-- ----------------------------
DROP TABLE IF EXISTS `registros`;
CREATE TABLE `registros` (
  `id_registro` int(11) NOT NULL AUTO_INCREMENT,
  `id_tanque` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `nivel` double DEFAULT NULL,
  PRIMARY KEY (`id_registro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of registros
-- ----------------------------

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
  `pozo_motor` int(11) DEFAULT '0',
  PRIMARY KEY (`id_datos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tanques
-- ----------------------------
INSERT INTO `tanques` VALUES ('2', '0', '0', '45', '0', '0', '10', '100', '0');
