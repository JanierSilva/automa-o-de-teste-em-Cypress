

describe('POST/users', () => {

  it('login de usuario', () => {

    const user = {
      user: 'qa',
      password: '123456'
    }

    cy.postUser(user)
      .then(response => {
        expect(response.status).to.equals(200)
      })
  })
})
