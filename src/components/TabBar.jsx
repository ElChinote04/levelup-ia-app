import { useNavigate } from 'react-router-dom';

export default function TabBar({ tabs, active, columns }) {
  const navigate = useNavigate();
  return (
    <div style={{ flex: 'none', padding: '0 16px 18px', position: 'sticky', bottom: 0 }}>
      <div
        style={{
          height: 64,
          borderRadius: 999,
          background: '#1C1C22',
          boxShadow: '0 14px 30px rgba(28,28,34,0.35)',
          display: 'grid',
          gridTemplateColumns: `repeat(${columns ?? tabs.length}, 1fr)`,
          alignItems: 'center',
          padding: '0 6px',
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              onClick={() => tab.to && navigate(tab.to)}
              disabled={!tab.to}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                background: 'none',
                border: 'none',
                cursor: tab.to ? 'pointer' : 'default',
              }}
            >
              <div style={{ fontSize: 18, opacity: isActive ? 1 : 0.5 }}>{tab.icon}</div>
              <div
                style={{
                  fontSize: 9.5,
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#F2A93E' : 'rgba(255,255,255,0.55)',
                }}
              >
                {tab.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
