interface PaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

function PaginationButton({ onClick, children, className = "" }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 bg-dev-card text-dev-text rounded hover:bg-dev-accent hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
