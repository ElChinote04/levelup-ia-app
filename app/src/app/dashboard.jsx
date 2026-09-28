import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Screen, DiamondPill, BottomNavLight } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

const MASCOT_PHRASES = [
  'Hoy es un gran día para aprender algo nuevo 🚀',
  'Cada lección te acerca a tu próximo gran logro 💪',
  'Vamos con todo, tú puedes con esta racha 🔥',
  'Pequeños pasos, grandes negocios. ¡Sigamos! ✨',
];

const NEWS = [
  {
    emoji: '👟',
    thumb: ['#D9EEF7', '#C6E4F2'],
    title: 'Los envíos en 24h ya definen la conversión en tiendas pequeñas',
    url: 'https://example.com',
  },
  {
    emoji: '📱',
    thumb: ['#E4DFF6', '#D6CFF0'],
    title: 'Cómo tres marcas locales duplicaron ventas con contenido propio',
    url: 'https://example.com',
  },
];

export default function DashboardScreen() {
  const { diamonds } = useAppState();
  const [phrase] = useState(() => MASCOT_PHRASES[Math.floor(Math.random() * MASCOT_PHRASES.length)]);

  return (
    <Screen edges={['top']}>
      <View style={styles.header}>
        <View style={styles.novaRow}>
          <View style={styles.mascotAvatar}>
            <Image source={require('../../assets/logo-fox.png')} style={styles.mascotImage} resizeMode="contain" />
          </View>
          <View style={styles.novaBubble}>
            <Text style={styles.novaBubbleText}>{phrase}</Text>
          </View>
        </View>
        <DiamondPill value={diamonds} />
      </View>

      <View style={styles.tiles}>
        <View style={[styles.tile, { backgroundColor: colors.card }]}>
          <Text style={styles.tileEmoji}>👥</Text>
          <Text style={styles.tileLabelDark}>Amigos</Text>
        </View>
        <Pressable style={[styles.tile, { backgroundColor: colors.accent }]} onPress={() => router.push('/achievements')}>
          <Text style={styles.tileEmoji}>🏆</Text>
          <Text style={styles.tileLabelLight}>Logros</Text>
        </Pressable>
        <View style={[styles.tile, { backgroundColor: colors.card }]}>
          <Text style={styles.tileEmoji}>🛒</Text>
          <Text style={styles.tileLabelDark}>Tienda</Text>
        </View>
      </View>

      <View style={styles.iconRow}>
        <View style={styles.iconCol}>
          <View style={styles.iconCircle}><Text style={{ fontSize: 22 }}>🔥</Text></View>
          <Text style={styles.iconLabel}>RACHA</Text>
        </View>
        <View style={styles.iconCol}>
          <View style={styles.iconCircle}><Text style={{ fontSize: 22 }}>🎯</Text></View>
          <Text style={styles.iconLabel}>RETO</Text>
        </View>
        <View style={styles.iconCol}>
          <View style={styles.iconCircle}><Text style={{ fontSize: 22 }}>🏅</Text></View>
          <Text style={styles.iconLabel}>RANKING</Text>
        </View>
        <Pressable style={styles.iconCol} onPress={() => router.push('/chat')}>
          <LinearGradient colors={[colors.novaStart, colors.novaEnd]} style={styles.iconCircle}>
            <Text style={{ fontSize: 22 }}>🤖</Text>
          </LinearGradient>
          <Text style={styles.iconLabel}>NOVA</Text>
        </Pressable>
      </View>

      <View style={styles.newsHeader}>
        <Text style={styles.newsTitle}>Noticias de tu rubro</Text>
        <Text style={styles.newsTag}>E-commerce</Text>
      </View>

      <ScrollView style={styles.newsList} contentContainerStyle={{ gap: 12, paddingBottom: 12 }}>
        {NEWS.map((item, i) => (
          <Pressable key={i} style={styles.newsCard} onPress={() => Linking.openURL(item.url)}>
            <LinearGradient colors={item.thumb} style={styles.newsThumb}>
              <Text style={{ fontSize: 26 }}>{item.emoji}</Text>
            </LinearGradient>
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={styles.newsHeadline}>{item.title}</Text>
              <Text style={styles.newsLink}>leer la noticia ↗</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <BottomNavLight
        onMenu={() => router.push('/dashboard')}
        onWorld={() => router.push('/galaxy')}
        onChat={() => router.push('/chat')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  novaRow: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  mascotAvatar: { width: 46, height: 46, borderRadius: 16, backgroundColor: colors.card, borderWidth: 2, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  mascotImage: { width: 32, height: 35 },
  novaBubble: { flex: 1, backgroundColor: colors.card, borderRadius: 16, borderBottomLeftRadius: 4, paddingHorizontal: 14, paddingVertical: 10 },
  novaBubbleText: { fontFamily: fonts.body, fontSize: 13, lineHeight: 18, color: colors.textDark },
  tiles: { flexDirection: 'row', paddingHorizontal: 24, gap: 10 },
  tile: { flex: 1, height: 96, borderRadius: 18, alignItems: 'center', justifyContent: 'center', gap: 8 },
  tileEmoji: { fontSize: 24 },
  tileLabelDark: { fontFamily: fonts.cardTitle, fontSize: 13, color: colors.textDark },
  tileLabelLight: { fontFamily: fonts.cardTitle, fontSize: 13, color: '#FFFFFF' },
  iconRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 18, paddingBottom: 6 },
  iconCol: { alignItems: 'center', gap: 6 },
  iconCircle: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  iconLabel: { fontFamily: fonts.caption, fontSize: 9, color: colors.textOnDarkMuted },
  newsHeader: { paddingHorizontal: 24, paddingTop: 6, flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' },
  newsTitle: { fontFamily: fonts.displayBold, fontSize: 17, color: '#FFFFFF' },
  newsTag: { fontFamily: fonts.caption, fontSize: 11, color: colors.textOnDarkMuted },
  newsList: { flex: 1, paddingHorizontal: 24, paddingTop: 12 },
  newsCard: { flexDirection: 'row', gap: 14, backgroundColor: colors.cardSoft, borderRadius: 18, padding: 12 },
  newsThumb: { width: 88, height: 74, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  newsHeadline: { fontFamily: fonts.cardTitle, fontSize: 14, lineHeight: 19, color: colors.textDark },
  newsLink: { fontFamily: fonts.caption, fontSize: 10, color: colors.textMuted, textDecorationLine: 'underline' },
});
