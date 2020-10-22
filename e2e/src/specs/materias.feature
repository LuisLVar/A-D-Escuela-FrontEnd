Feature: Crud de materias
    esta funcion se encarga de poder crear, editar, listar y eliminar materias 

Scenario: Nuevo materia 
    Given Que Me encuentre en la pagina de materia 
    When presione el boton de nuevo_materia e ingrese un nueva materia 
    Then Presionar el boton de guardar materia para que el valor se mande y se limpia