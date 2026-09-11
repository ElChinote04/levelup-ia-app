import { useState } from 'react';
import Screen from '../components/Screen.jsx';

const students = [
  { initials: 'LM', bg: '#ECE9FB', color: '#4B3A9E', name: 'Lucía Mendoza', meta: 'Adm. de Negocios · Mundo 2', status: 'Activa', statusBg: '#E3F1EC', statusColor: '#235847' },
  { initials: 'JR', bg: '#FDEEDB', color: '#A8560B', name: 'Javier Ríos', meta: 'Marketing · Mundo 1', status: 'Inactiva', statusBg: '#FDEEDB', statusColor: '#A8560B' },
  { initials: 'CS', bg: '#FBE6EA', color: '#9B2079', name: 'Camila Soto', meta: 'Diseño · Mundo 4', status: 'Activa', statusBg: '#E3F1EC', statusColor: '#235847' },
];

const reports = [
  { icon: '📄', iconBg: '#ECE9FB', label: 'Progreso por facultad · PDF' },
  { icon: '📊', iconBg: '#E3F1EC', label: 'Uso y desempeño · CSV' },
];

const TABS = [
  { key: 'metricas', icon: '📊', label: 'Métricas' },
  { key: 'licencias', icon: '🎟️', label: 'Licencias' },
  { key: 'reportes', icon: '📄', label: 'Reportes' },
];

export default function AdminScreen() {
  const [activeTab, setActiveTab] = useState('metricas');

  return (
    <Screen background="#FBF1DE">
      <div style={{ flex: 1, padding: '20px 18px 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D14863' }}>PANEL INSTITUCIONAL</div>
            <div className="heading-font" style={{ fontSize: 23, fontWeight: 800, color: '#1C1C22', letterSpacing: '-0.025em' }}>Universidad Andina</div>
          </div>
          <div style={{ height: 28, padding: '0 10px', borderRadius: 999, background: '#FFFFFF', border: '1px solid #ECE6D6', display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, color: '#4A4857', whiteSpace: 'nowrap' }}>Admin Demo</div>
        </div>

        <div style={{ borderRadius: 24, background: '#3B8C74', padding: 16, display: 'flex', flexDirection: 'column', gap: 11, boxShadow: '0 18px 40px rgba(59,140,116,0.30)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.72)' }}>RESUMEN DEL CICLO · 2026-1</div>
          <div className="heading-font" style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18 }}>248 estudiantes afiliados avanzando.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            <div style={{ background: 'rgba(255,255,255,0.14)', borderRadius: 16, padding: 11 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.78)' }}>USO SEMANAL</div>
              <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', marginTop: 4 }}>72%</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.14)', borderRadius: 16, padding: 11 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.78)' }}>PROGRESO</div>
              <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', marginTop: 4 }}>3.4<span style={{ fontSize: 12 }}>/7</span></div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.14)', borderRadius: 16, padding: 11 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.78)' }}>DESEMPEÑO</div>
              <div className="heading-font" style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', marginTop: 4 }}>81%</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
            <button onClick={() => setActiveTab('metricas')} style={{ height: 40, borderRadius: 999, background: '#1C1C22', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700, color: '#FFFFFF', cursor: 'pointer' }}>Ver métricas</button>
            <button onClick={() => setActiveTab('reportes')} style={{ height: 40, borderRadius: 999, background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700, color: '#FFFFFF', cursor: 'pointer' }}>Descargar reporte</button>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 20, padding: 13, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#8A8570' }}>LICENCIAS PLAN PLUS</div>
            <div onClick={() => setActiveTab('licencias')} style={{ fontSize: 11.5, fontWeight: 700, color: '#D14863', cursor: 'pointer' }}>Gestionar</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <div className="heading-font" style={{ fontSize: 28, fontWeight: 800, color: '#1C1C22' }}>180</div>
            <div style={{ fontSize: 12.5, color: '#6B6A57' }}>de 250 asignadas</div>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: '#F1EAD9', overflow: 'hidden' }}>
            <div style={{ width: '72%', height: '100%', background: '#EA6079' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {students.map((s) => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#FBF1DE', borderRadius: 14, padding: '8px 11px' }}>
                <div style={{ width: 28, height: 28, flex: 'none', borderRadius: 999, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: s.color }}>{s.initials}</div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1C1C22' }}>{s.name}</div>
                  <div style={{ fontSize: 10.5, color: '#8A8570' }}>{s.meta}</div>
                </div>
                <div style={{ height: 26, padding: '0 10px', borderRadius: 999, background: s.statusBg, display: 'flex', alignItems: 'center', fontSize: 10.5, fontWeight: 700, color: s.statusColor }}>{s.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 20, padding: 13, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 6 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#8A8570' }}>REPORTES DESCARGABLES</div>
          {reports.map((r) => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <div style={{ width: 32, height: 32, borderRadius: 11, background: r.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{r.icon}</div>
              <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600, color: '#1C1C22' }}>{r.label}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#D14863' }}>↓</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 'none', padding: '0 16px 18px' }}>
        <div style={{ height: 64, borderRadius: 999, background: '#1C1C22', boxShadow: '0 14px 30px rgba(28,28,34,0.35)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center', padding: '0 6px' }}>
          {TABS.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'none', border: 'none', cursor: 'pointer' }}>
                <div style={{ fontSize: 18, opacity: isActive ? 1 : 0.5 }}>{t.icon}</div>
                <div style={{ fontSize: 9.5, fontWeight: isActive ? 700 : 600, color: isActive ? '#F2A93E' : 'rgba(255,255,255,0.55)' }}>{t.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
