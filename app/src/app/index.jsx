import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen, PrimaryButton, SecondaryButton, Starfield } from '../components/ui';
import { colors, fonts, APP_NAME } from '../theme';

const STARS = [
  { x: 30, y: 60, r: 1.4, color: '#8E97F0' },
  { x: 160, y: 40, r: 1.2, color: '#C9CFFF' },
  { x: 250, y: 90, r: 1.8, color: '#E6E9FF' },
  { x: 340, y: 220, r: 1.2, color: '#8E97F0' },
  { x: 60, y: 340, r: 1.4, color: '#A7B0FF' },
  { x: 220, y: 420, r: 1.8, color: '#7C86E8' },
  { x: 300, y: 520, r: 1.2, color: '#8E97F0' },
];

export default function OpeningScreen() {
  return (
    <Screen bg={colors.bgDeep} edges={['top', 'bottom']}>
      <View style={StyleSheet.absoluteFill}>
        <Starfield width={390} height={844} stars={STARS} />
        <View style={[styles.blob, styles.blobPurple]} />
        <View style={[styles.blob, styles.blobOrange]} />
        <View style={[styles.blob, styles.blobCyan]} />
        <View style={styles.dot} />
        <View style={styles.orbit} />
        <Text style={[styles.spark, { top: '11%', right: 18 }]}>✦</Text>
        <Text style={[styles.spark, { bottom: '30%', left: 40, fontSize: 9 }]}>✦</Text>
      </View>

      <View style={styles.center}>
        <Image source={require('../../assets/logo-fox.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brand}>{APP_NAME.toUpperCase()}</Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="Sign in" onPress={() => router.push('/signup')} />
        <SecondaryButton
          label="Log in"
          onPress={() => router.push('/login')}
          style={styles.logInButton}
          textStyle={{ color: '#E6E9FF' }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  blob: { position: 'absolute', borderRadius: 999 },
  blobPurple: {
    left: -78, top: -40, width: 230, height: 230,
    backgroundColor: '#6C4CF5', opacity: 0.55,
  },
  blobOrange: {
    right: -96, bottom: 150, width: 270, height: 270,
    backgroundColor: '#FF5A1E', opacity: 0.5,
  },
  blobCyan: {
    left: -66, bottom: -30, width: 180, height: 180,
    backgroundColor: '#4FB8D6', opacity: 0.4,
  },
  dot: {
    position: 'absolute', left: 52, top: 160,
    width: 13, height: 13, borderRadius: 7, backgroundColor: '#FFC42E',
    shadowColor: '#FFC42E', shadowOpacity: 0.6, shadowRadius: 10, shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  orbit: {
    position: 'absolute', left: 14, top: 206,
    width: 150, height: 150, borderRadius: 75,
    borderWidth: 1, borderColor: 'rgba(230,233,255,0.28)',
    transform: [{ rotate: '-20deg' }],
  },
  spark: { position: 'absolute', fontSize: 13, color: 'rgba(230,233,255,0.75)' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 28 },
  logo: {
    width: 148, height: 164,
  },
  brand: {
    fontFamily: fonts.emphasis,
    fontSize: 11, letterSpacing: 2.2, color: colors.textOnDarkMuted, textAlign: 'center',
  },
  footer: { paddingHorizontal: 28, paddingBottom: 24, gap: 12 },
  logInButton: { borderColor: '#4A55C8', backgroundColor: 'transparent', borderWidth: 1 },
});
