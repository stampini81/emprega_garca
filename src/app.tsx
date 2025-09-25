import { Outlet } from 'react-router-dom';
import { Container } from './components/container';

export function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
