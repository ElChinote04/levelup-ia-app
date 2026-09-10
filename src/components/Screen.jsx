export default function Screen({ background = '#FFFFFF', children }) {
  return (
    <div
      style={{
        minHeight: '100svh',
        maxWidth: 480,
        margin: '0 auto',
        background,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
}
