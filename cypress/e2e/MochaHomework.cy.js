
    //First Variant of Homework

    const data = [
        {EmailAddress: 1, NewEmail: 1},
        {EmailAddress: 2, NewEmail: 2},
        {EmailAddress: 3, NewEmail: 3},
        {EmailAddress: 'Mira', NewEmail: 'Mira'}
    ]

    const data1 = [
        {Password: 1, NewPassword: 1},
        {Password: 2, NewPassword: 2},
        {Password: 3, NewPassword: 3},
        {Password: 'Mira', NewPassword: 'Mira'}   
    ]
        data.forEach(({EmailAddress, NewEmail}) => {
            it(`Search Email ${data}`, () => {

                cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
                cy.get('[title~="Forms"]').click();
                cy.get('[title*="Form Layouts"]').click();
                cy.get('#exampleInputEmail1').type(`${EmailAddress}`);
                cy.get('#exampleInputEmail1').should ("contain.value", `${NewEmail}`)
                cy.get('nb-card-body>form>div>nb-checkbox');
                cy.get('[status="danger"]');
            })
          })
     
          data1.forEach(({Password, NewPassword}) => {
            it(`Search Email ${data}`, () => {

                cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
                cy.get('[title~="Forms"]').click();
                cy.get('[title*="Form Layouts"]').click();
                cy.get('[id="exampleInputPassword1"]').type(`${Password}`);
                cy.get('[id="exampleInputPassword1"]').should ("contain.value", `${NewPassword}`)
                cy.get('nb-card-body>form>div>nb-checkbox');
                cy.get('[status="danger"]');
            })
          })



 

          