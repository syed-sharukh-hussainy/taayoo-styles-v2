const CookiesButtons = ({
  label,
  defaultValue,
  value,
  onClick,
}: {
  label: string;
  defaultValue: string;
  value: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg 
    ${
      value === defaultValue
        ? 'bg-muted-foreground/10 font-medium'
        : 'text-muted-foreground'
    }`}
    >
      {label}
    </div>
  );
};

export default CookiesButtons;
