describe('Navegação pública - emprega.garca.sp.gov.br', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir o título correto', () => {
    cy.title().should('include', 'Secretaria de Desenvolvimento Econômico de GARÇA');
  });

  it('Deve exibir o menu principal', () => {
    cy.contains('Início').should('be.visible');
  });

  it('Deve exibir o menu de acesso rápido', () => {
    cy.contains('Acesso Rápido').should('be.visible');
  });

  it('Deve navegar para Vagas de Emprego', () => {
    cy.contains('Vagas de Emprego').click();
    cy.contains('Vagas').should('be.visible');
  });

  it('Deve navegar para Notícias', () => {
    cy.contains('Notícias').click();
    cy.contains('Notícias').should('be.visible');
  });

  it('Deve navegar para Expediente', () => {
    cy.contains('Expediente').click();
    cy.contains('Expediente').should('be.visible');
  });

  it('Deve navegar para Fale Conosco', () => {
    cy.contains('Contato').click();
    cy.contains('Fale Conosco').should('be.visible');
  });

  it('Deve exibir o menu de acessibilidade', () => {
    cy.contains('Acessibilidade').should('be.visible');
  });

  it('Deve exibir os links de redes sociais no rodapé', () => {
    cy.contains('Siga nas redes sociais').should('be.visible');
  });

  it('Deve exibir o campo de busca', () => {
    cy.get('input[id*="busca"], input[id*="buscar"]').should('exist');
  });

  it('Deve realizar uma busca por "emprego"', () => {
    cy.get('input[id*="busca"], input[id*="buscar"]').type('emprego');
    cy.get('button[id*="btnBusca"], button[id*="btnBuscar"]').click();
    cy.contains(/emprego/i).should('exist');
  });
});
