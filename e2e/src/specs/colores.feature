Feature: Crud de colores
    esta funcion se encarga de poder crear, editar, listar y eliminar colores

Scenario: Nuevo color
    Given que se encuentre en la pagina de colores
    When presione el boton de color y escoga un nuevo color
    Then presione el boton de guardar para que el valor se envia a la base de datos
