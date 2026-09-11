import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import Highlight from '../components/Highlight.jsx';

const benefits = [
  <>Acceso ilimitado a los <span style={{ fontWeight: 700 }}>7 mundos</span></>,
  'Mentor Nova sin límite de mensajes',
  'Simulaciones de negocio con casos reales',
  'Certificaciones digitales descargables',
  'Sin anuncios y descarga offline',
];

export default function PaywallScreen() {
  const navigate = useNavigate();
  return (
    <Screen background="#FBF1DE">
      <div style={{ flex: 1, padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div onClick={() => navigate(-1)} style={{ width: 34, height: 34, borderRadius: 12, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#6B6A57', cursor: 'pointer' }}>✕</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 64, height: 64, borderRadius: 22, background: '#7B6FE3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 31, boxShadow: '0 14px 30px rgba(123,111,227,0.34)' }}>⭐</div>
          <div className="heading-font" style={{ fontSize: 30, fontWeight: 800, color: '#1C1C22', letterSpacing: '-0.025em', textAlign: 'center' }}>Plan <Highlight>Plus</Highlight></div>
          <div style={{ fontSize: 13.5, color: '#6B6A57', textAlign: 'center', lineHeight: 1.5, maxWidth: 290 }}>Todos los mundos abiertos y Nova sin límites para llegar a tus primeras ventas.</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <div className="heading-font" style={{ fontSize: 46, fontWeight: 800, color: '#1C1C22', letterSpacing: '-0.03em' }}>S/19.90</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#8A8570' }}>/ mes</div>
          </div>
          <div style={{ height: 28, padding: '0 12px', borderRadius: 999, background: '#E3F1EC', display: 'flex', alignItems: 'center', fontSize: 11.5, fontWeight: 700, color: '#235847' }}>Cancela cuando quieras</div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 24, padding: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
              <div style={{ width: 22, height: 22, flex: 'none', borderRadius: 999, background: '#E3F1EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#2C6B58' }}>✓</div>
              <div style={{ fontSize: 13.5, color: '#1C1C22', lineHeight: 1.4 }}>{b}</div>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: 24, background: '#7B6FE3', padding: 16, display: 'flex', gap: 11, alignItems: 'flex-start' }}>
          <div style={{ width: 36, height: 36, flex: 'none', borderRadius: 12, background: 'linear-gradient(135deg, #F5C744, #D9A61E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div className="heading-font" style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Nova dice</div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>Con Plus puedo revisar tus anuncios, precios y respuestas a clientes todas las veces que necesites.</div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimaryButton height={56} fontSize={17} onClick={() => navigate('/dashboard')}>Activar Premium</PrimaryButton>
          <div onClick={() => navigate('/dashboard')} style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#8A8570', cursor: 'pointer' }}>Ahora no</div>
        </div>
      </div>
    </Screen>
  );
}
