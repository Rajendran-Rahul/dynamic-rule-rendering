import { type LucideIcon } from 'lucide-react';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  children: ReactNode;
  variant?: 'default' | 'danger';
}

const ActionButton = ({ 
  icon: Icon, 
  children, 
  variant = 'default',
  className = '',
  ...props 
}: ActionButtonProps) => {
  const variantStyles = {
    default: 'hover:opacity-70',
    danger: 'text-red-600 hover:text-red-700'
  };

  return (
    <button 
      className={`inline-flex items-center gap-2 transition-opacity cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <Icon className="w-4 h-4" />
    </button>
  );
};

export {ActionButton};