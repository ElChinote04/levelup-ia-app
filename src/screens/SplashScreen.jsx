import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import GradientButton from '../components/GradientButton.jsx';

const chips = ['⚡ Micro-lecciones', '🏆 Gamificación', '🤖 Mentor IA', '🎓 Certificados'];

export default function SplashScreen() {
  const navigate = useNavigate();
  return (
    <Screen background="#F7F7FB">
      <div style={{ padding: '20px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 11, background: 'linear-gradient(135deg, #4C6FFF, #B721D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>⚡</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className="heading-font" style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: '#16151F' }}>LEVELUP IA</div>
            <div style={{ fontSize: 10.5, color: '#8A889A' }}>Micro-learning para founders</div>
          </div>
        </div>
        <div style={{ height: 32, padding: '0 13px', borderRadius: 999, background: '#FFFFFF', border: '1px solid #E3E2EC', display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 600, color: '#4A4857' }}>Universidades</div>
      </div>
      <div style={{ flex: 1, padding: '8px 20px 32px', display: 'flex', alignItems: 'center' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #EDEBF4', borderRadius: 30, boxShadow: '0 18px 44px rgba(28,26,74,0.09)', padding: '26px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
          <div style={{ width: 74, height: 74, borderRadius: 22, background: 'linear-gradient(135deg, #F5C744, #D9A61E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, boxShadow: '0 12px 26px rgba(217,166,30,0.34)' }}>🤖</div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#4C6FFF' }}>NOVA TE SALUDA</div>
          <div className="heading-font" style={{ fontSize: 34, fontWeight: 800, color: '#16151F', letterSpacing: '-0.025em' }}>LevelUp IA</div>
          <div className="heading-font" style={{ fontSize: 19, fontWeight: 600, color: '#16151F', textAlign: 'center', lineHeight: 1.4 }}>
            Hoy <span style={{ color: '#4C6FFF' }}>aprendes</span>. Mañana <span style={{ color: '#E8730C' }}>vendes</span>.<br />El futuro de tu negocio comienza aquí.
          </div>
          <div style={{ background: '#F3EFFC', borderRadius: 18, padding: '14px 16px', fontSize: 13.5, color: '#3B3949', lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700, color: '#16151F' }}>Nova dice:</span> ¡Excelente trabajo por llegar hasta aquí! Vamos por el siguiente nivel.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center' }}>
            {chips.map((c) => (
              <div key={c} style={{ height: 30, padding: '0 11px', borderRadius: 999, background: '#F7F7FB', border: '1px solid #EDEBF4', display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 600, color: '#4A4857' }}>{c}</div>
            ))}
          </div>
          <div style={{ width: '100%', marginTop: 4 }}>
            <GradientButton fontSize={17} onClick={() => navigate('/signup')}>Comenzar</GradientButton>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
            <button onClick={() => navigate('/dashboard')} style={{ height: 44, borderRadius: 14, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13.5, fontWeight: 600, color: '#4A4857', cursor: 'pointer' }}>Entrar Demo</button>
            <button onClick={() => navigate('/admin')} style={{ height: 44, borderRadius: 14, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13.5, fontWeight: 600, color: '#4A4857', cursor: 'pointer' }}>Admin Demo</button>
          </div>
        </div>
      </div>
    </Screen>
  );
}
