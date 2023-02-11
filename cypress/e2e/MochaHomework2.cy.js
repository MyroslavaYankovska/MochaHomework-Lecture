 //Second Variant of Homework

 beforeEach(()=> { 
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title~="Forms"]').click();
    cy.get('[title*="Form Layouts"]').click();
  })

 const data = [
    {EmailAddress: 1, Password: 1},
    {EmailAddress: 2, Password: 2},
    {EmailAddress: 3, Password: 3},
    {EmailAddress: 'Miroslava_yankovska@uker.net', Password: '1234qwer'}
]

    data.forEach(({EmailAddress, Password}) => {
        it(`Search Email ${data}`, () => {

            cy.get('#exampleInputEmail1')
            .type(`${EmailAddress}`)
            .should ("contain.value", `${EmailAddress}`);

            cy.get('[id="exampleInputPassword1"]')
            .type(`${Password}`)
            .should ("contain.value", `${Password}`)
        })
      })

      afterEach(() => {
        
        cy.get('nb-card-body>form>div>nb-checkbox');
        cy.get('[status="danger"]');
    
      })
    
    
 