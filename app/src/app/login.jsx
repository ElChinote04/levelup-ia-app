import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Screen, PrimaryButton } from '../components/ui';
import { colors, fonts } from '../theme';

export default function LoginScreen() {
  return (
    <Screen>
      <Text style={styles.eyebrow}>LOGIN</Text>
      <View style={styles.center}>
        <View style={styles.ring}>
          <Image source={require('../../assets/logo-fox.png')} style={styles.logo} resizeMode="contain" />
        </View>
        <Text style={styles.title}>Sign in</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Correo"
            placeholderTextColor="#7B81B4"
            style={styles.input}
          />
          <View style={styles.input}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#7B81B4"
              secureTextEntry
              style={styles.passwordField}
            />
            <Text style={styles.verLabel}>ver</Text>
          </View>
        </View>

        <PrimaryButton label="Entrar" onPress={() => router.push('/dashboard')} style={{ width: '100%' }} />

        <Text style={styles.footerText}>
          ¿No tienes cuenta?{' '}
          <Text style={styles.footerLink} onPress={() => router.push('/signup')}>
            Crea una
          </Text>
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    paddingHorizontal: 28,
    paddingTop: 24,
    fontFamily: fonts.caption,
    fontSize: 13,
    letterSpacing: 3,
    color: colors.textOnDarkMuted,
  },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24, paddingHorizontal: 28 },
  ring: {
    width: 104, height: 104, borderRadius: 52,
    borderWidth: 3, borderColor: colors.border, borderTopColor: colors.cyan,
    alignItems: 'center', justifyContent: 'center',
  },
  logo: { width: 56, height: 62 },
  title: { fontFamily: fonts.displayBold, fontSize: 30, color: '#FFFFFF' },
  form: { width: '100%', gap: 12 },
  input: {
    height: 54, borderRadius: 14, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: 18, justifyContent: 'center',
    flexDirection: 'row', alignItems: 'center',
  },
  passwordField: { flex: 1, fontFamily: fonts.body, fontSize: 15, color: colors.textDark, height: '100%' },
  verLabel: { fontFamily: fonts.caption, fontSize: 12, color: '#7B81B4' },
  footerText: { fontFamily: fonts.body, fontSize: 14, color: colors.textOnDarkMuted },
  footerLink: { fontFamily: fonts.emphasis, color: '#FFFFFF', textDecorationLine: 'underline' },
});
