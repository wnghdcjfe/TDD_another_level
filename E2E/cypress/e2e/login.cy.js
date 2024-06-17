describe('Login Functionality', () => {
  it('should allow a user to log in with valid credentials', () => {
      // Visit the login page
      cy.visit('http://localhost:3000/login'); 
      // Enter email and password
      cy.get('input[id="email"]').type('testuser@example.com');
      cy.get('input[id="password"]').type('password123');

      // Submit the login form
      cy.get('button[type="submit"]').click();

      // Verify that the user is redirected to the login endpoint
      cy.url().should('include', '/login');

      // Verify that the login form submission was successful
      // 이 부분은 실제로 서버 응답을 확인할 수 있는 방법으로 수정해야 합니다.
      // 예를 들어, 로그인이 성공하면 대시보드 페이지로 리디렉션된다면 아래와 같이 수정할 수 있습니다.
      // cy.url().should('include', '/dashboard');

      // 현재 페이지에서 특정 텍스트 확인하기 (로그인 실패 시 메시지 확인 예시)
      // cy.contains('Login failed').should('not.exist'); // 로그인 실패 메시지가 없어야 함
  });
});
