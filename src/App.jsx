import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import OnboardingScreen from './screens/OnboardingScreen.jsx';
import DashboardScreen from './screens/DashboardScreen.jsx';
import WorldsScreen from './screens/WorldsScreen.jsx';
import LessonScreen from './screens/LessonScreen.jsx';
import ChatScreen from './screens/ChatScreen.jsx';
import PaywallScreen from './screens/PaywallScreen.jsx';
import AdminScreen from './screens/AdminScreen.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/mundos" element={<WorldsScreen />} />
        <Route path="/leccion" element={<LessonScreen />} />
        <Route path="/nova" element={<ChatScreen />} />
        <Route path="/paywall" element={<PaywallScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
