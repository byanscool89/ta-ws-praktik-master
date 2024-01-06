/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.1.37-MariaDB : Database - dbtopup
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dbtopup` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dbtopup`;

/*Table structure for table `paket` */

DROP TABLE IF EXISTS `paket`;

CREATE TABLE `paket` (
  `id_paket` int(11) NOT NULL AUTO_INCREMENT,
  `nama_paket` varchar(100) DEFAULT NULL,
  `harga_paket` int(11) DEFAULT NULL,
  `jumlah_data` varchar(50) DEFAULT NULL,
  `jumlah_telpon` int(11) DEFAULT NULL,
  `masa_aktif` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_paket`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `paket` */

insert  into `paket`(`id_paket`,`nama_paket`,`harga_paket`,`jumlah_data`,`jumlah_telpon`,`masa_aktif`) values 
(1,'Loop Internet 1 GB',14000,'1 GB',30,'30 Hari'),
(2,'Combo 6,5GB',63000,'Internet 4,5GB,Vidiomax 2GB',100,'30 Hari');

/*Table structure for table `pembeli` */

DROP TABLE IF EXISTS `pembeli`;

CREATE TABLE `pembeli` (
  `id_pembeli` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_pembeli`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembeli` */

/*Table structure for table `pulsa` */

DROP TABLE IF EXISTS `pulsa`;

CREATE TABLE `pulsa` (
  `id_pulsa` int(11) NOT NULL AUTO_INCREMENT,
  `jumlah_pulsa` int(11) DEFAULT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `harga_pulsa` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pulsa`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pulsa` */

insert  into `pulsa`(`id_pulsa`,`jumlah_pulsa`,`provider`,`harga_pulsa`) values 
(1,5000,'Telkomsel',7000),
(2,10000,'Telkomsel',12000),
(3,15000,'Telkomsel',17000),
(4,20000,'Telkomsel',23000);

/*Table structure for table `transaksi` */

DROP TABLE IF EXISTS `transaksi`;

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL AUTO_INCREMENT,
  `id_pembeli` int(11) DEFAULT NULL,
  `id_paket` int(11) DEFAULT NULL,
  `id_pulsa` int(11) DEFAULT NULL,
  `waktu` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `jenis` enum('paket','pulsa') DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_transaksi`),
  KEY `id_pembeli` (`id_pembeli`),
  KEY `id_paket` (`id_paket`),
  KEY `id_pulsa` (`id_pulsa`),
  CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_pembeli`) REFERENCES `pembeli` (`id_pembeli`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_paket`) REFERENCES `paket` (`id_paket`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaksi_ibfk_3` FOREIGN KEY (`id_pulsa`) REFERENCES `pulsa` (`id_pulsa`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `transaksi` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
