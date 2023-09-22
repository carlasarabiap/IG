-- Data Definition Languaje
drop database if exists bolsa;
create database bolsa;
use bolsa;

create table candidato(
    id int auto_increment primary key,
    apellidos varchar(30) not null check (length(apellidos) >=3),
    nombres varchar(30) not null check (length(nombres) >=3),
    tipo_documento  enum('DNI','PASS') not null,
    numero_documento varchar(12) check (length(numero_documento) >=5),
    fenaci date not null check (fenaci<'2010/01/01'),
    estudios_primarios enum ('s','n'),
    estudios_secundarios enum ('s','n'),
    estudios_terciarios enum ('s','n'),
    estudios_universitarios enum ('s','n'),
    estudios_primarios_colegio varchar(100),
    estudios_secundarios_colegio varchar(100),
    estudios_terciarios_colegio varchar(100),
    estudios_universitarios_universidad varchar(100),
    estudios_secundarios_titulo varchar(100),
    estudios_terciarios_titulo varchar(100),
    estudios_universitarios_titulo varchar(100),
    idiomas varchar(100),
    habilidades varchar(255),
    perfil_laboral varchar(100),
    direccion varchar(255),
    telefono varchar(20),
    email varchar(50)
);