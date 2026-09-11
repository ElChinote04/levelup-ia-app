export default function PrimaryButton({ children, onClick, height = 54, fontSize = 16, style, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        height,
        width: '100%',
        border: 'none',
        borderRadius: 999,
        background: '#1C1C22',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Manrope, sans-serif',
        fontSize,
        fontWeight: 700,
        color: '#FFFFFF',
        boxShadow: '0 10px 22px rgba(28,28,34,0.22)',
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
