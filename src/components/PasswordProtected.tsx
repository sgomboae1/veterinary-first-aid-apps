import { useState, type ReactNode } from 'react';
import { Button, Alert, Card } from './index';
import './PasswordProtected.css';

interface PasswordProtectedProps {
  children: ReactNode;
  correctPassword?: string;
}

export function PasswordProtected({ 
  children, 
  correctPassword = 'admin123' 
}: PasswordProtectedProps) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Contraseña incorrecta. Intenta nuevamente.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-protected">
      <div className="container">
        <div className="password-protected-content">
          <Card className="password-card">
            <div className="password-icon">🔒</div>
            <h2>Acceso Restringido</h2>
            <p>Esta sección requiere una contraseña de acceso</p>

            {error && (
              <Alert type="danger" onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="password-form">
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa la contraseña"
                  autoFocus
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="large">
                Acceder
              </Button>
            </form>

            <div className="password-hint">
              <p className="hint-text">
                💡 Contraseña por defecto: <code>admin123</code>
              </p>
              <p className="hint-note">
                (En producción, cambiar esta contraseña)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
