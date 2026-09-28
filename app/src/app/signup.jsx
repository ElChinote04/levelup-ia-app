import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Screen, PrimaryButton, GoogleIcon, AppleIcon } from '../components/ui';
import { colors, fonts } from '../theme';

export default function SignupScreen() {
  const goNext = () => router.push('/business');
  return (
    <Screen>
      <View style={styles.header}>
        <Image source={require('../../assets/logo-fox.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>
          Crea tu{'\n'}
          <Text style={styles.titleHighlight}>cuenta</Text>
        </Text>
      </View>

      <View style={styles.body}>
        <Pressable style={styles.oauthButtonWhite} onPress={goNext}>
          <GoogleIcon />
          <Text style={styles.oauthTextDark}>Continuar con Google</Text>
        </Pressable>

        <Pressable style={styles.oauthButtonBlack} onPress={goNext}>
          <AppleIcon />
          <Text style={styles.oauthTextLight}>Continuar con Apple</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>o con tu correo</Text>
          <View style={styles.dividerLine} />
        </View>

        <TextInput placeholder="Nombre" placeholderTextColor="#7B81B4" style={styles.input} />
        <TextInput placeholder="Correo" placeholderTextColor="#7B81B4" style={styles.input} />
        <TextInput placeholder="Contraseña" placeholderTextColor="#7B81B4" secureTextEntry style={styles.input} />

        <PrimaryButton label="Continuar" onPress={goNext} style={{ marginTop: 8 }} />

        <Text style={styles.terms}>Al continuar aceptas los términos y la política de privacidad.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 28, paddingTop: 36, gap: 20 },
  logo: { width: 60, height: 66 },
  title: { fontFamily: fonts.displayBold, fontSize: 34, color: '#FFFFFF', lineHeight: 38 },
  titleHighlight: { backgroundColor: colors.checkFill, color: '#FFFFFF', paddingHorizontal: 6, borderRadius: 5, overflow: 'hidden' },
  body: { padding: 28, gap: 12 },
  oauthButtonWhite: {
    height: 56, borderRadius: 14, backgroundColor: '#FFFFFF',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  oauthTextDark: { fontFamily: fonts.emphasis, fontSize: 16, color: '#14142B' },
  oauthButtonBlack: {
    height: 56, borderRadius: 14, backgroundColor: '#070B33',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  oauthTextLight: { fontFamily: fonts.emphasis, fontSize: 16, color: '#FFFFFF' },
  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#2B35A2' },
  dividerText: { fontFamily: fonts.caption, fontSize: 11, color: colors.textOnDarkMuted },
  input: {
    height: 54, borderRadius: 14, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: 18, fontFamily: fonts.body, fontSize: 15, color: colors.textDark,
  },
  terms: { fontFamily: fonts.body, fontSize: 12, lineHeight: 18, color: colors.textOnDarkMuted, textAlign: 'center', paddingHorizontal: 12 },
});
