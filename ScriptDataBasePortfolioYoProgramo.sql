-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema yoprogramo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema yoprogramo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yoprogramo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci ;
USE `yoprogramo` ;

-- -----------------------------------------------------
-- Table `yoprogramo`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombrePersona` VARCHAR(45) NOT NULL DEFAULT 'Nombre',
  `apellidoPersona` VARCHAR(45) NOT NULL DEFAULT 'Apellido',
  `cargo` VARCHAR(50) NOT NULL DEFAULT 'Cargo',
  `descripcion` VARCHAR(250) NOT NULL DEFAULT 'Descripcion',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yoprogramo`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(45) NOT NULL,
  `contraseñaUsuario` VARCHAR(45) NOT NULL,
  `Persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Persona_id`),
  INDEX `fk_Usuario_Persona_idx` (`Persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Persona`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `yoprogramo`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yoprogramo`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Experiencia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL DEFAULT 'Titulo de trabajo',
  `descripcionTrabajo` VARCHAR(300) NOT NULL DEFAULT 'Descripcion',
  `logoEmpresa` VARCHAR(300) NULL,
  `Persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Persona_id`),
  INDEX `fk_Experiencia_Persona1_idx` (`Persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Experiencia_Persona1`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `yoprogramo`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yoprogramo`.`Estudio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Estudio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `logo` VARCHAR(300) NULL,
  `Persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Persona_id`),
  INDEX `fk_Estudio_Persona1_idx` (`Persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Estudio_Persona1`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `yoprogramo`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yoprogramo`.`Habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Habilidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `porcentaje` INT NOT NULL,
  `logo` VARCHAR(250) NOT NULL,
  `Persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Persona_id`),
  INDEX `fk_Habilidades_Persona1_idx` (`Persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Habilidades_Persona1`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `yoprogramo`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yoprogramo`.`Redes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yoprogramo`.`Redes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `logo` VARCHAR(250) NOT NULL,
  `Persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Persona_id`),
  INDEX `fk_Redes_Persona1_idx` (`Persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Redes_Persona1`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `yoprogramo`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
