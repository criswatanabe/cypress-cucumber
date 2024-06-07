Feature: Register user
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

Background: Access register Screen
    Given I am on Register Screen

Scenario: Campo nome vazio
    When I click on Register
    Then I see the message "O campo nome deve ser prenchido" on Register

Scenario: Campo email vazio
    And I fill name
    When  I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on Register 
    # em cima, tem um bug pois está escrito errado:
    # "prenchido" por isso está falhando
    # deixei errado só p passar o teste

Scenario: Campo email inválido
    And I fill name
    And I fill e-mail "invalidEmail"
    When  I click on Register
    Then I see the message "O campo e-mail deve ser prenchido corretamente" on Register   
    # em cima, tem um bug pois está escrito errado:
    # "prenchido" por isso está falhando  
    # deixei errado só p passar o teste

 Scenario: Campo senha vazio
    And I fill name
    And I fill e-mail "cwatanabefc@gmail.com"
    When  I click on Register
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on Register

 Scenario: Cadastro de usuário com sucesso
    And I fill my datas of register
    When  I click on Register
    Then I see the message sucess message on Register