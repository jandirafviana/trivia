/// <reference types="cypress" />

describe('Ticketbox', () => {
    /// para quê serve essas setinhas?
    /// it é o que o teste se propõe a fazer
    it('Compra bem sucedida no site', () => {
        cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html');
        cy.get('#first-name').type('Teste');
        //Se colocar #, ele entende que é um id. Pode usar #first-name ou [id="first-name"]. ID é o nome do elemento? Todo objeto é um elemento, mas nem todo elemento é um objeto? De onde tirei essa palavra "elemento?"
        //Se colocar um . no começo, entende que é classe. Classe é o tipo de elemento?
        //Qual seria o problema de usar ; no final da linha?

        //Para abrir o Cypress: npx cypress open

        //No Cypress, ele ficou assim:
        ////TEST BODY
        //1 visit 	  https://ticket-box.s3.eu-central-1.amazonaws.com/index.html
        //2 get 	  #first-name
        //3 - type   Teste 
        //(Quando vem o traço - é porque está condicionado à ação anterior)
        //Pra ver o que o Cypress fez, clica no ícone de PIN pra pinar e vê o comparativo "before/after" no fim da página.
        //Comando "Open Selector Playground" (ícone de alvo) 
        cy.get('#last-name').type('Sobrenome Teste');
        cy.get('#email').type('teste@teste.com');
        cy.get('#ticket-quantity').select('2');
        cy.get('#vip').check();
        cy.get('#general').check();
        cy.get('#friend').check();
        cy.get('#friend').uncheck();
        cy.get('#publication').check();        
        cy.get('#social-media').check();
        cy.get('#agree').check();
        cy.get('#signature').type('Teste Sobrenome Teste');
        cy.get('button[type="submit"]').click();
     //Nessa hora que trocou de    cy.get('[id="signature"]')  para   cy.get('button[type="submit"]')  , o que mudou?
     //Na hora de inspecionar o elemento do "Ticket(s) successfully ordered", ele não tem objeto, é apenas um texto. Toda vez que pedir para o Cypress examinar texto em html, basta digitar o nome do elemento e colocar em seguida > p? Não teria que colocar completo "class="success"? Para entender que não tem ID?    
        cy.get('.success > p').should('be.visible');
        //Assertions are the validation steps that determine whether the specified step of the automated test case succeeded or not. In actual, Assertions validates the desired state of your elements, objects, or application under test. Eg. Assertions enable you to validate scenarios such as whether an element is visible or has a particular attribute, CSS class, or state. It is always a recommended practice that all the automated test cases should have assertion steps. Otherwise, it will not be feasible to validate whether the application reached the expected state or not.       

        //O comando "npx cypress run" roda o cypress no modo headless, sem abrir aquele navegador. Ele vai testar pelo próprio terminal. É usado em 20 ou 30 cenários, quando tá rolando muito teste ao mesmo tempo. Nesse caso, o resultado do teste roda no terminal e é criada uma pasta "vídeos", abaixo de "support", com um vídeo do teste.
        // 



    });
    




});