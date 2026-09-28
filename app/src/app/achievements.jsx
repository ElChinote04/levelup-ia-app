import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen, BackChip, BottomNavLight } from '../components/ui';
import { colors, fonts } from '../theme';

const BADGES = [
  { key: 'despegue', label: 'Despegue', unlocked: true, icon: '🚀', tint: ['#FF7A1E', '#FF3D00'] },
  { key: '7dias', label: '7 días', unlocked: true, diamond: true },
  { key: 'l1', label: 'bloqueada', unlocked: false },
  { key: 'l2', label: 'bloqueada', unlocked: false },
  { key: 'l3', label: 'bloqueada', unlocked: false },
  { key: 'l4', label: 'bloqueada', unlocked: false },
];

export default function AchievementsScreen() {
  return (
    <Screen edges={['top']}>
      <View style={styles.header}>
        <BackChip onPress={() => router.back()} />
        <Text style={styles.title}>Logros</Text>
      </View>

      <View style={styles.cards}>
        <View style={[styles.card, { backgroundColor: colors.cyan }]}>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitleDark}>Explorador constante</Text>
            <View style={styles.diamondRow}>
              <View style={styles.orangeDiamond} />
              <Text style={styles.cardTitleDark}>+40</Text>
            </View>
          </View>
          <View style={styles.trackWhite}>
            <View style={[styles.trackFill, { width: '68%', backgroundColor: colors.orange }]} />
          </View>
          <Text style={styles.cardSubDark}>17 / 25 lecciones</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitleDark}>Primer planeta completo</Text>
            <Text style={styles.cardMuted}>listo</Text>
          </View>
          <View style={styles.trackCream}>
            <View style={[styles.trackFill, { width: '100%', backgroundColor: colors.gold }]} />
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Insignias</Text>
      <View style={styles.grid}>
        {BADGES.map((b) => (
          <View
            key={b.key}
            style={[
              styles.badge,
              b.unlocked
                ? { backgroundColor: colors.card }
                : { backgroundColor: colors.bgDeep, borderWidth: 1, borderColor: colors.borderSoft, borderStyle: 'dashed' },
            ]}
          >
            {b.unlocked ? (
              b.diamond ? (
                <View style={styles.purpleDiamond} />
              ) : (
                <View style={[styles.badgeIconCircle, { backgroundColor: '#FF5A1E' }]}>
                  <Text style={{ fontSize: 19 }}>{b.icon}</Text>
                </View>
              )
            ) : (
              <View style={styles.lockedCircle}>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>🔒</Text>
              </View>
            )}
            <Text style={b.unlocked ? styles.badgeLabelDark : styles.badgeLabelLocked}>{b.label}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <BottomNavLight
        onMenu={() => router.push('/dashboard')}
        onWorld={() => router.push('/galaxy')}
        onChat={() => router.push('/chat')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 8, flexDirection: 'row', alignItems: 'center', gap: 14 },
  title: { fontFamily: fonts.displayBold, fontSize: 22, color: '#FFFFFF' },
  cards: { paddingHorizontal: 24, gap: 10 },
  card: { borderRadius: 20, padding: 18, gap: 12 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitleDark: { fontFamily: fonts.cardTitle, fontSize: 15, color: colors.textDark },
  diamondRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  orangeDiamond: { width: 13, height: 13, backgroundColor: colors.orange, borderRadius: 3, transform: [{ rotate: '45deg' }] },
  purpleDiamond: { width: 24, height: 24, backgroundColor: colors.violet, borderRadius: 6, transform: [{ rotate: '45deg' }] },
  trackWhite: { height: 8, borderRadius: 5, backgroundColor: '#FFFFFF', overflow: 'hidden' },
  trackCream: { height: 8, borderRadius: 5, backgroundColor: colors.borderSoft + '55', overflow: 'hidden', opacity: 0.9 },
  trackFill: { height: '100%', borderRadius: 5 },
  cardMuted: { fontFamily: fonts.caption, fontSize: 11, color: colors.textMuted },
  cardSubDark: { fontFamily: fonts.caption, fontSize: 11, color: '#2B3050' },
  sectionTitle: { paddingHorizontal: 24, paddingTop: 22, paddingBottom: 12, fontFamily: fonts.displayBold, fontSize: 17, color: '#FFFFFF' },
  grid: { paddingHorizontal: 24, flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  badge: { width: '30.5%', aspectRatio: 1, borderRadius: 18, alignItems: 'center', justifyContent: 'center', gap: 8 },
  badgeIconCircle: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  lockedCircle: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center' },
  badgeLabelDark: { fontFamily: fonts.cardTitle, fontSize: 10, color: colors.textDark },
  badgeLabelLocked: { fontFamily: fonts.caption, fontSize: 9, color: colors.textOnDarkFaint },
});
