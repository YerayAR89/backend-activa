-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: bd_activa_app
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activa_work`
--

DROP TABLE IF EXISTS `activa_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `resume` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work`
--

LOCK TABLES `activa_work` WRITE;
/*!40000 ALTER TABLE `activa_work` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activa_work_student_rel`
--

DROP TABLE IF EXISTS `activa_work_student_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work_student_rel` (
  `id_student` int NOT NULL,
  `id_work` int NOT NULL,
  `xp_points` int DEFAULT NULL,
  `feedback` text,
  PRIMARY KEY (`id_student`,`id_work`),
  KEY `activa_work_student_rel_fk1` (`id_work`),
  CONSTRAINT `activa_work_student_rel_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`),
  CONSTRAINT `activa_work_student_rel_fk1` FOREIGN KEY (`id_work`) REFERENCES `activa_work` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work_student_rel`
--

LOCK TABLES `activa_work_student_rel` WRITE;
/*!40000 ALTER TABLE `activa_work_student_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work_student_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activa_work_tech_skill_rel`
--

DROP TABLE IF EXISTS `activa_work_tech_skill_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work_tech_skill_rel` (
  `id_work` int NOT NULL,
  `id_tech_skill` int NOT NULL,
  PRIMARY KEY (`id_work`,`id_tech_skill`),
  KEY `activa_work_tech_skill_rel_fk1` (`id_tech_skill`),
  CONSTRAINT `activa_work_tech_skill_rel_fk0` FOREIGN KEY (`id_work`) REFERENCES `activa_work` (`id`),
  CONSTRAINT `activa_work_tech_skill_rel_fk1` FOREIGN KEY (`id_tech_skill`) REFERENCES `tech_skill` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work_tech_skill_rel`
--

LOCK TABLES `activa_work_tech_skill_rel` WRITE;
/*!40000 ALTER TABLE `activa_work_tech_skill_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work_tech_skill_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `name` varchar(40) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `description` text NOT NULL,
  `current_work` tinyint(1) NOT NULL,
  `id_student` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_fk0` (`id_student`),
  CONSTRAINT `job_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user_sender` int NOT NULL,
  `id_user_rewarded` int NOT NULL,
  `xp_points` int NOT NULL,
  `date` date NOT NULL,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reward_fk0` (`id_user_sender`),
  KEY `reward_fk1` (`id_user_rewarded`),
  CONSTRAINT `reward_fk0` FOREIGN KEY (`id_user_sender`) REFERENCES `user` (`id`),
  CONSTRAINT `reward_fk1` FOREIGN KEY (`id_user_rewarded`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_skill`
--

DROP TABLE IF EXISTS `soft_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_skill` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `id_student` int NOT NULL,
  KEY `soft_skill_fk0` (`id_student`),
  CONSTRAINT `soft_skill_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_skill`
--

LOCK TABLES `soft_skill` WRITE;
/*!40000 ALTER TABLE `soft_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `first_surname` varchar(30) NOT NULL,
  `second_surname` varchar(30) DEFAULT NULL,
  `email_personal` varchar(60) NOT NULL,
  `email_activa` varchar(60) NOT NULL,
  `phone_number` varchar(14) NOT NULL,
  `avatar` blob,
  `cv` blob,
  `descrtiption` text,
  `zip_code` varchar(5) NOT NULL,
  `id_user` int NOT NULL,
  `prom` int NOT NULL,
  `activa_points_balance` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_fk0` (`id_user`),
  CONSTRAINT `student_fk0` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Oscar','Villaplana','Giménez','oscar.villaplana@hotmail.com','oscar.villaplana@xarxatecactiva.com','654095289',NULL,NULL,NULL,'12100',1,20,30),(2,'Yeray','Añó','Ródenas','yeray.a.r@gmail.com','yeray.anyo@xarxatecactiva.com','652275530',NULL,NULL,NULL,'12540',2,20,30);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tech_skill`
--

DROP TABLE IF EXISTS `tech_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tech_skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `max_xp_points` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tech_skill`
--

LOCK TABLES `tech_skill` WRITE;
/*!40000 ALTER TABLE `tech_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `tech_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `training` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `center` varchar(50) NOT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `duration` int NOT NULL,
  `regulated` tinyint(1) NOT NULL,
  `id_student` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `training_fk0` (`id_student`),
  CONSTRAINT `training_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'oscar.villaplana@xarxatecactiva.com','123456789','estudiante'),(2,'yeray.anyo@xarxatecactiva.com','987654321','estudiante');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-22  9:54:20
