-- Consultas de prueba de la BD
use bolsa;

-- 1 Obtener todos los candidatos que tienen estudios universitarios:
SELECT * FROM candidato WHERE estudios_universitarios = 's';

-- 2 Obtener los candidatos que hablan inglés y tienen experiencia en programación:
SELECT * FROM candidato WHERE idiomas LIKE '%Inglés%' AND habilidades LIKE '%Programación%';

-- 3 Obtener los candidatos que nacieron después de 1990 y tienen al menos estudios secundarios completos:
SELECT * FROM candidato WHERE fenaci > '1990-01-01' AND estudios_secundarios = 's';

-- 4 Obtener los candidatos que poseen habilidades en gestión de proyectos y están dispuestos a viajar:
SELECT * FROM candidato WHERE habilidades LIKE '%Gestión de proyectos%' AND perfil_laboral LIKE '%viajar%';

-- 5 Obtener los candidatos cuyos apellidos comienzan con "López" y tienen un correo electrónico de Gmail:
SELECT * FROM candidato WHERE apellidos LIKE 'López%' AND email LIKE '%@gmail.com';

-- 6 Cantidad de candidator que tengan como habilidad Java?
describe candidato;
select count(*) cantidad from candidato where habilidades like '%java%';
