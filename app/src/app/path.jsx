import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { router } from 'expo-router';
import { Screen, BackChip, BottomNavGalaxy } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';
import { CAMINO_AMERICAS_SVG } from '../assets/caminoAmericasSvg';

// Pantalla estática (sin scroll): el camino sobre el mapa real de América,
// tal cual la propuesta "Sellyn - Pantallas v3" de Claude Design. El fondo es
// el SVG del mapa (assets/camino-americas.svg) a escala 1:1 con el lienzo de
// 390x844 del dispositivo; las paradas van superpuestas encima con las mismas
// coordenadas del diseño.
const TOTAL_STOPS = 5;
const DONE_STOPS = 2;

export default function PathScreen() {
  const { diamonds } = useAppState();
  const [madridVisible, setMadridVisible] = useState(false);

  return (
    <Screen bg={colors.bgPath} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={() => router.back()} />
          <View>
            <Text style={styles.planetTitle}>Planeta Tierra</Text>
            <Text style={styles.planetSubtitle}>tema visual: lugares del mundo real</Text>
          </View>
        </View>
        <View style={styles.diamondChip}>
          <View style={styles.diamondShape} />
          <Text style={styles.diamondText}>{diamonds}</Text>
        </View>
      </View>

      <View style={styles.mapArea}>
        {/* El SVG está autorado sobre un lienzo de 390x844 que incluye el header;
            se sube 110px (alto del header en el diseño) para que sus caminos y
            etiquetas de país queden alineados con las paradas de abajo. */}
        <SvgXml xml={CAMINO_AMERICAS_SVG} width={390} height={844} style={styles.mapSvg} />
        <LinearGradient colors={[colors.bgPath, 'rgba(14,22,102,0)']} style={styles.mapTopFade} pointerEvents="none" />

        <Pressable style={styles.hintPill} onPress={() => setMadridVisible(true)}>
          <Text style={styles.hintPillText}>sigue hacia Madrid</Text>
          <Text style={styles.hintPillArrow}>↗</Text>
        </Pressable>

        {/* Buenos Aires — completada */}
        <View style={[styles.doneNode, { left: 346, top: 535 }]}>
          <Text style={styles.doneCheck}>✓</Text>
        </View>
        <Text style={[styles.doneLabel, { left: 230, top: 494, width: 70 }]}>Buenos Aires</Text>

        {/* Santiago — completada */}
        <View style={[styles.doneNode, { left: 255, top: 525 }]}>
          <Text style={styles.doneCheck}>✓</Text>
        </View>
        <Text style={[styles.doneLabel, { left: 90, top: 517, width: 70 }]}>Santiago</Text>

        {/* Lima — parada actual */}
        <View style={[styles.currentGlow, { left: 208, top: 352 }]} pointerEvents="none" />
        <Pressable style={[styles.currentNode, { left: 208, top: 352 }]} onPress={() => router.push('/lesson-video')}>
          <Text style={styles.currentPlay}>▶</Text>
        </Pressable>
        <View style={[styles.hereCard, { left: 260, top: 326 }]}>
          <Text style={styles.hereEyebrow}>ESTÁS AQUÍ</Text>
          <Text style={styles.hereTitle}>Lima</Text>
          <Text style={styles.hereSub}>Lección 1 · E-commerce</Text>
        </View>

        {/* Bogotá — bloqueada, próxima parada */}
        <View style={[styles.lockedNode, { left: 230, top: 227 }]}>
          <Text style={styles.lockedNumber}>4</Text>
        </View>
        <Text style={[styles.lockedLabel, { left: 258, top: 218 }]}>Bogotá</Text>

        {/* Ciudad de México — parada principal, bloqueada */}
        <View style={[styles.mainNode, { left: 44, top: 115 }]}>
          <Text style={styles.mainEyebrow}>PARADA</Text>
          <Text style={styles.mainLabel}>PRINCIPAL</Text>
        </View>
        <View style={[styles.mainCaption, { left: 86, top: 100 }]}>
          <Text style={styles.mainCity}>Ciudad de México</Text>
          <Text style={styles.mainUnlock}>se desbloquea en la parada 5</Text>
        </View>

        <View style={styles.locateButton}>
          <View style={styles.locateRing}>
            <View style={styles.locateDot} />
          </View>
        </View>

        <View style={styles.progressPill}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${(DONE_STOPS / TOTAL_STOPS) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{DONE_STOPS} / {TOTAL_STOPS} paradas</Text>
        </View>
      </View>

      <BottomNavGalaxy
        onMenu={() => router.push('/dashboard')}
        onWorld={() => router.push('/galaxy')}
        onChat={() => router.push('/chat')}
        borderColor={colors.border}
        bg="rgba(12,18,80,0.94)"
        iconColor="#A7B0FF"
      />

      <Modal visible={madridVisible} transparent animationType="fade" onRequestClose={() => setMadridVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalIcon}>
              <Text style={{ fontSize: 28 }}>🔒</Text>
            </View>
            <Text style={styles.modalText}>Aún no puedes viajar a este lugar</Text>
            <Pressable style={styles.modalButton} onPress={() => setMadridVisible(false)}>
              <Text style={styles.modalButtonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  planetTitle: { fontFamily: fonts.displayBold, fontSize: 18, color: '#FFFFFF', letterSpacing: -0.2 },
  planetSubtitle: { fontFamily: fonts.caption, fontSize: 10, color: '#C3C9F5' },
  diamondChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: colors.border },
  diamondShape: { width: 12, height: 12, backgroundColor: colors.cyan, borderRadius: 2, transform: [{ rotate: '45deg' }] },
  diamondText: { fontFamily: fonts.emphasis, fontSize: 13, color: '#FFFFFF' },

  mapArea: { flex: 1, position: 'relative', overflow: 'hidden' },
  mapSvg: { position: 'absolute', left: 0, top: -110 },
  mapTopFade: { position: 'absolute', left: 0, right: 0, top: 0, height: 36 },

  hintPill: {
    position: 'absolute', right: 16, top: 14, flexDirection: 'row', alignItems: 'center', gap: 8,
    paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999,
    backgroundColor: 'rgba(12,18,80,0.75)', borderWidth: 1, borderColor: colors.border,
  },
  hintPillText: { fontFamily: fonts.caption, fontSize: 10, color: '#C3C9F5' },
  hintPillArrow: { fontSize: 11, color: colors.cyan },

  doneNode: {
    position: 'absolute', width: 40, height: 40, borderRadius: 20, marginLeft: -20, marginTop: -20,
    backgroundColor: colors.cyan, borderWidth: 3, borderColor: colors.bgPath,
    alignItems: 'center', justifyContent: 'center',
  },
  doneCheck: { fontFamily: fonts.displayBold, fontSize: 16, color: colors.bgPath },
  doneLabel: {
    position: 'absolute', fontFamily: fonts.cardTitle, fontSize: 11, color: '#FFFFFF', textAlign: 'right',
  },

  currentGlow: {
    position: 'absolute', width: 92, height: 92, borderRadius: 46, marginLeft: -46, marginTop: -46,
    backgroundColor: 'rgba(255,122,30,0.22)',
  },
  currentNode: {
    position: 'absolute', width: 62, height: 62, borderRadius: 31, marginLeft: -31, marginTop: -31,
    backgroundColor: '#FFFFFF', borderWidth: 3, borderColor: colors.orange,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.35, shadowRadius: 14, shadowOffset: { width: 0, height: 8 }, elevation: 10,
  },
  currentPlay: { color: colors.bgPath, fontSize: 20, marginLeft: 3 },
  hereCard: {
    position: 'absolute', gap: 3, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 8,
  },
  hereEyebrow: { fontFamily: fonts.caption, fontSize: 9, letterSpacing: 1.2, color: '#FF5A1E' },
  hereTitle: { fontFamily: fonts.displayBold, fontSize: 14, color: colors.bgPath },
  hereSub: { fontFamily: fonts.cardTitle, fontSize: 11, color: colors.accent },

  lockedNode: {
    position: 'absolute', width: 44, height: 44, borderRadius: 22, marginLeft: -22, marginTop: -22,
    backgroundColor: 'rgba(12,18,80,0.8)', borderWidth: 2, borderColor: colors.cyan, borderStyle: 'dashed',
    alignItems: 'center', justifyContent: 'center',
  },
  lockedNumber: { fontFamily: fonts.emphasis, fontSize: 12, color: colors.cyan },
  lockedLabel: { position: 'absolute', fontFamily: fonts.cardTitle, fontSize: 11, color: '#E6E9FF' },

  mainNode: {
    position: 'absolute', width: 70, height: 70, borderRadius: 22, marginLeft: -35, marginTop: -35,
    backgroundColor: colors.novaEnd, borderWidth: 3, borderColor: '#FFFFFF', opacity: 0.9,
    alignItems: 'center', justifyContent: 'center', gap: 1,
    shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 14, shadowOffset: { width: 0, height: 8 }, elevation: 10,
  },
  mainEyebrow: { fontFamily: fonts.caption, fontSize: 8, letterSpacing: 1, color: '#5A3C05' },
  mainLabel: { fontFamily: fonts.emphasis, fontSize: 11, color: '#3A2606' },
  mainCaption: { position: 'absolute', gap: 2 },
  mainCity: { fontFamily: fonts.cardTitle, fontSize: 12, color: '#FFFFFF' },
  mainUnlock: { fontFamily: fonts.caption, fontSize: 9, color: '#C3C9F5' },

  locateButton: {
    position: 'absolute', right: 16, bottom: 18, width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 8,
  },
  locateRing: { width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  locateDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.accent },

  progressPill: {
    position: 'absolute', left: 16, bottom: 18, flexDirection: 'row', alignItems: 'center', gap: 8,
    paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14,
    backgroundColor: 'rgba(12,18,80,0.8)', borderWidth: 1, borderColor: colors.border,
  },
  progressTrack: { width: 40, height: 6, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.18)', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.orange, borderRadius: 4 },
  progressText: { fontFamily: fonts.caption, fontSize: 10, color: '#E6E9FF' },

  modalBackdrop: { flex: 1, backgroundColor: 'rgba(6,8,30,0.72)', alignItems: 'center', justifyContent: 'center', padding: 32 },
  modalCard: { width: '100%', maxWidth: 320, backgroundColor: colors.card, borderRadius: 22, padding: 26, alignItems: 'center', gap: 16 },
  modalIcon: { width: 56, height: 56, borderRadius: 16, backgroundColor: colors.cardAlt, alignItems: 'center', justifyContent: 'center' },
  modalText: { fontFamily: fonts.cardTitle, fontSize: 17, color: colors.textDark, textAlign: 'center', lineHeight: 24 },
  modalButton: { alignSelf: 'stretch', height: 50, borderRadius: 14, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  modalButtonText: { fontFamily: fonts.emphasis, color: '#FFFFFF', fontSize: 15 },
});
