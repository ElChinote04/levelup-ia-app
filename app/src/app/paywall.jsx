import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Screen, PrimaryButton, NovaAvatar } from '../components/ui';
import { colors, fonts } from '../theme';

export default function PaywallScreen() {
  return (
    <Screen>
      <View style={styles.dimmedHeader}>
        <NovaAvatar />
        <Text style={styles.novaName}>Nova</Text>
      </View>

      <View style={styles.dimmedBody}>
        <View style={styles.novaBubble}>
          <Text style={styles.novaBubbleText}>Empecemos por tus tres publicaciones…</Text>
        </View>
        <View style={styles.userBubble}>
          <Text style={styles.userBubbleText}>Listo, ¿y después?</Text>
        </View>
      </View>

      <View style={styles.sheet}>
        <Pressable onPress={() => router.back()} style={styles.handle} />

        <View style={styles.sheetContent}>
          <View style={styles.diamondBox}>
            <Text style={{ fontSize: 26, opacity: 0.55 }}>💎</Text>
          </View>
          <Text style={styles.headline}>Te quedaste sin diamantes</Text>
          <Text style={styles.body}>
            Gana más completando lecciones y planetas, o pasa a Premium y recibe diamantes cada
            semana.
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <PrimaryButton label="Ver beneficios Premium →" onPress={() => router.push('/premium')} />
          <Pressable style={styles.secondaryButton} onPress={() => router.dismissTo('/path')}>
            <Text style={styles.secondaryText}>Seguir una lección y ganar 💠</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  dimmedHeader: { opacity: 0.5, paddingHorizontal: 24, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.accentSoft, borderBottomWidth: 1, borderBottomColor: colors.border },
  novaName: { fontFamily: fonts.displayBold, fontSize: 17, color: '#FFFFFF' },
  dimmedBody: { opacity: 0.35, flex: 1, paddingHorizontal: 24, paddingTop: 18, gap: 12 },
  novaBubble: { backgroundColor: colors.card, borderRadius: 18, borderBottomLeftRadius: 5, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '78%' },
  novaBubbleText: { fontFamily: fonts.body, fontSize: 14, color: colors.textDark },
  userBubble: { alignSelf: 'flex-end', backgroundColor: colors.accent, borderRadius: 18, borderBottomRightRadius: 5, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '72%' },
  userBubbleText: { fontFamily: fonts.body, color: '#FFFFFF', fontSize: 14 },
  sheet: { backgroundColor: colors.card, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, paddingTop: 14, gap: 18 },
  handle: { width: 44, height: 4, borderRadius: 3, backgroundColor: '#D8D4C5', alignSelf: 'center' },
  sheetContent: { alignItems: 'center', gap: 12 },
  diamondBox: { width: 62, height: 62, borderRadius: 18, backgroundColor: colors.cardAlt, alignItems: 'center', justifyContent: 'center' },
  headline: { fontFamily: fonts.displayBold, fontSize: 24, color: colors.textDark, textAlign: 'center' },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.textMuted, textAlign: 'center', maxWidth: 280 },
  secondaryButton: { height: 56, borderRadius: 16, backgroundColor: colors.cardAlt, alignItems: 'center', justifyContent: 'center' },
  secondaryText: { fontFamily: fonts.emphasis, fontSize: 16, color: colors.textBody },
});
