Feature: Crud aspectos
        esta funcion se encarga de poder crear, editar, listar y eliminar aspectos

Scenario: Nuevo Aspecto
        Given que se encuentre en la pagina de aspectos
        When presione el boton de crear aspecto y escriba un nuevo aspecto 
        Then Presionar el boton de guardar y que se mande a la base de dato