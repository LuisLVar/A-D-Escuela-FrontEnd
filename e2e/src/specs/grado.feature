Feature: Crud de grados
    esta funcion se encarga de poder crear, editar, listar y eliminar grados 

Scenario: Nuevo grado 
    Given Que Me encuentre en la pagina de grados 
    When presione el boton de nuevo_grado e ingrese un nuevo grado 
    Then Presionar el boton de guardar para que el valor se mande y se limpia