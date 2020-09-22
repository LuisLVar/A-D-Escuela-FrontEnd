Feature: Crud de inscripcion_alumnos
    esta funcion se encarga de poder crear, editar, listar y eliminar alumnos

Scenario: Nuevo Alumno
    Given que me encuentre en la pagina de inscripcion alumnos
    When presione el boton de inscribir e ingrese un alumno
    Then presione el boton de guardar para que el valor se envia a la base de datos
