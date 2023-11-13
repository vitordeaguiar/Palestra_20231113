describe('Teste de API com Cypress', () => {
  it('Deve listar todos os usuários', () => {
    cy.request('/api/users')
      .its('status')
      .should('equal', 200);
  });

  it('Deve obter um usuário específico', () => {
    const userId = 1; // Substitua pelo ID de um usuário existente
    cy.request(`/api/users/${userId}`)
      .its('status')
      .should('equal', 200);
  });

  it('Deve criar um novo usuário', () => {
    const newUser = {
      name: 'Novo Usuário',
      email: 'novo_usuario@example.com',
    };

    cy.request({
      method: 'POST',
      url: '/api/users',
      body: newUser,
    })
      .its('status')
      .should('equal', 201);
  });

  it('Deve atualizar um usuário existente', () => {
    const userId = 1; // Substitua pelo ID de um usuário existente
    const updatedUser = {
      name: 'Usuário Atualizado',
      email: 'usuario_atualizado@example.com',
    };

    cy.request({
      method: 'PUT',
      url: `/api/users/${userId}`,
      body: updatedUser,
    })
      .its('status')
      .should('equal', 200);
  });

  it('Deve excluir um usuário existente', () => {
    const userId = 1; // Substitua pelo ID de um usuário existente

    cy.request({
      method: 'DELETE',
      url: `/api/users/${userId}`,
    })
      .its('status')
      .should('equal', 204);
  });


  it('Usando alias', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

    cy.get('@comments').should((response) => {
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
    })
  })
});
