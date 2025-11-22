import type { ReactNode } from 'react';
import './Alert.css';

interface AlertProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'danger' | 'success';
  onClose?: () => void;
}

export function Alert({ children, type = 'info', onClose }: AlertProps) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="alert-content">{children}</div>
      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
      )}
    </div>
  );
}
