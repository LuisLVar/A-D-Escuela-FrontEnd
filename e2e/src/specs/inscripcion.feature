Feature: Inscripcion Alumnos
    Esta funcion se encarga de poder crear  inscripciones especificas de alumnos en secciones

Scenario: Nueva inscripcion 
    Given Me encuentre en la pagina de inscripcion
    When presione el boton de Nueva Inscripcion e ingrese una nueva seccion y alumno
    Then Presionar el boton de guardar para que el valor se mande