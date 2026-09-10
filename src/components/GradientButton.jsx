export default function GradientButton({ children, onClick, height = 54, fontSize = 16, style, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        height,
        width: '100%',
        border: 'none',
        borderRadius: 999,
        background: 'linear-gradient(90deg, #4C6FFF, #8B3FE8 55%, #B721D6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Manrope, sans-serif',
        fontSize,
        fontWeight: 700,
        color: '#FFFFFF',
        boxShadow: '0 12px 26px rgba(103,63,232,0.3)',
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
