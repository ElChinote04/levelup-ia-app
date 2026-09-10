import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import GradientButton from '../components/GradientButton.jsx';
import Highlight from '../components/Highlight.jsx';

function Field({ label, placeholder, value, onChange, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#4A4857' }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          height: 48,
          borderRadius: 15,
          background: '#F4F3F9',
          border: '1px solid #EDEBF4',
          padding: '0 15px',
          fontSize: type === 'password' ? 16 : 14.5,
          letterSpacing: type === 'password' ? '3px' : 'normal',
          color: '#16151F',
          outline: 'none',
          width: '100%',
        }}
      />
    </div>
  );
}

export default function SignupScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recoverEmail, setRecoverEmail] = useState('');
  const [recoverSent, setRecoverSent] = useState(false);

  return (
    <Screen background="#FFFFFF">
      <div style={{ flex: 1, padding: '28px 22px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 62, height: 62, borderRadius: 18, background: 'linear-gradient(135deg, #4C6FFF, #B721D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, boxShadow: '0 10px 24px rgba(103,63,232,0.32)' }}>🚀</div>
          <div className="heading-font" style={{ fontSize: 30, fontWeight: 800, color: '#16151F', letterSpacing: '-0.02em', textAlign: 'center' }}>
            <Highlight>Crea tu cuenta</Highlight>
          </div>
          <div style={{ fontSize: 13.5, color: '#4A4857', textAlign: 'center', lineHeight: 1.5, maxWidth: 300 }}>
            Transforma <Highlight subtle>tiempos muertos</Highlight> en crecimiento real con Nova.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ height: 46, borderRadius: 14, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#16151F', cursor: 'pointer' }}>Google</div>
          <div style={{ height: 46, borderRadius: 14, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#16151F', cursor: 'pointer' }}>Apple</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          <Field label="Nombre" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <Field label="Correo electrónico" placeholder="tucorreo@universidad.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Field label="Contraseña" placeholder="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <GradientButton height={54} onClick={() => navigate('/onboarding')}>Crear cuenta y continuar</GradientButton>

        <div style={{ background: '#F4F3F9', border: '1px solid #EDEBF4', borderRadius: 18, padding: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: '#4A4857' }}>Recuperar contraseña</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={recoverEmail}
              onChange={(e) => { setRecoverEmail(e.target.value); setRecoverSent(false); }}
              placeholder="Correo registrado"
              style={{ flex: 1, height: 42, borderRadius: 13, background: '#FFFFFF', border: '1px solid #E3E2EC', padding: '0 13px', fontSize: 13, color: '#16151F', outline: 'none' }}
            />
            <button
              onClick={() => recoverEmail && setRecoverSent(true)}
              style={{ height: 42, padding: '0 18px', borderRadius: 13, background: '#16151F', border: 'none', fontSize: 13, fontWeight: 600, color: '#FFFFFF', cursor: 'pointer' }}
            >
              Recuperar
            </button>
          </div>
          {recoverSent && (
            <div style={{ fontSize: 11.5, color: '#1C7A4A', fontWeight: 600 }}>Enlace de recuperación enviado ✓</div>
          )}
        </div>

        <div style={{ textAlign: 'center', fontSize: 13.5, color: '#6B6A7B' }}>
          ¿Ya tienes cuenta? <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} style={{ fontWeight: 600 }}>Inicia sesión</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 'auto' }}>
          <button onClick={() => navigate('/dashboard')} style={{ height: 42, borderRadius: 13, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#4A4857', cursor: 'pointer' }}>Demo Usuario</button>
          <button onClick={() => navigate('/admin')} style={{ height: 42, borderRadius: 13, border: '1px solid #E3E2EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#4A4857', cursor: 'pointer' }}>Demo Admin</button>
        </div>
      </div>
    </Screen>
  );
}
