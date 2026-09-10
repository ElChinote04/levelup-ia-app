import { useNavigate } from 'react-router-dom';

export default function TabBar({ tabs, active, columns }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        flex: 'none',
        height: 76,
        borderTop: '1px solid #EDEBF4',
        background: '#FFFFFFEE',
        backdropFilter: 'blur(6px)',
        display: 'grid',
        gridTemplateColumns: `repeat(${columns ?? tabs.length}, 1fr)`,
        alignItems: 'center',
        padding: '0 8px 10px',
        position: 'sticky',
        bottom: 0,
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
              gap: 4,
              paddingTop: 10,
              background: 'none',
              border: 'none',
              cursor: tab.to ? 'pointer' : 'default',
            }}
          >
            <div style={{ fontSize: 19, opacity: isActive ? 1 : 0.45 }}>{tab.icon}</div>
            <div
              style={{
                fontSize: 10,
                fontWeight: isActive ? 700 : 600,
                color: isActive ? '#4C6FFF' : '#8A889A',
              }}
            >
              {tab.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
