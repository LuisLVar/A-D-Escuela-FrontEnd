Feature: Crud de ciclos
    esta funcion se encarga de crear, editar, listar y eliminar ciclos.

Scenario: Nuevo ciclo
    Given que se encuentre en la pagina de ciclos y presione el boton de crear nuevo ciclo
    When coloque el ciclo a agregar y presione el boton guardar
    Then se limpia el campo y guarda el dato en base de datos