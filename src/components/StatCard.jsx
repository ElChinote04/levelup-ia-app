export default function StatCard({ icon, iconBg, value, label, style }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #F1EAD9',
        borderRadius: 18,
        padding: '12px 13px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        ...style,
      }}
    >
      <div style={{ width: 32, height: 32, borderRadius: 999, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{icon}</div>
      <div className="heading-font" style={{ fontSize: 19, fontWeight: 800, color: '#1C1C22', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 10.5, fontWeight: 600, color: '#8A8570' }}>{label}</div>
    </div>
  );
}
