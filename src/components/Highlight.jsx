export default function Highlight({ children, subtle = false, style }) {
  return (
    <span
      style={{
        background: subtle ? '#EFEAFB' : '#E4DCFA',
        borderRadius: subtle ? 4 : 6,
        padding: subtle ? '0 4px' : '1px 8px',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
