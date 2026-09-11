export default function IconButton({ children, onClick, size = 38, bg = '#1C1C22', color = '#FFFFFF', fontSize = 16, style, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: size,
        height: size,
        flex: 'none',
        borderRadius: 999,
        border: 'none',
        background: bg,
        color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
