import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgGradient, Stop, ClipPath, Circle, Path, G } from 'react-native-svg';
import { router } from 'expo-router';
import { Screen, DiamondPill, BottomNavGalaxy, Starfield } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts, PLANETS } from '../theme';

const STARS = [
  { x: 40, y: 70, r: 1.2 }, { x: 260, y: 40, r: 1.5 }, { x: 130, y: 160, r: 1.8 },
  { x: 340, y: 150, r: 1.2 }, { x: 80, y: 300, r: 1.2 }, { x: 290, y: 340, r: 1.6 },
  { x: 190, y: 420, r: 1.2 },
];

// Todos entran a la galaxia por Tierra, sin importar el rubro elegido — los demás
// planetas (temáticos por rubro) se desbloquean más adelante, por eso esta pantalla
// no deja navegar entre ellos todavía.
const planet = PLANETS[0];

// Globo terráqueo estilizado (océano + continentes) en vez del degradado genérico,
// recortado en un círculo para que se lea como un planeta real y no como un ícono plano.
function EarthGlobe({ size }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 238 238">
      <Defs>
        <SvgGradient id="ocean" x1="0.15" y1="0.1" x2="1" y2="1">
          <Stop offset="0" stopColor="#BFF3E6" />
          <Stop offset="0.5" stopColor="#4FB8D6" />
          <Stop offset="1" stopColor="#2453C9" />
        </SvgGradient>
        <SvgGradient id="land" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#9AE8B0" />
          <Stop offset="1" stopColor="#3FAE6C" />
        </SvgGradient>
        <ClipPath id="sphereClip">
          <Circle cx="119" cy="119" r="119" />
        </ClipPath>
      </Defs>

      <Circle cx="119" cy="119" r="119" fill="url(#ocean)" />

      <G clipPath="url(#sphereClip)">
        <Path
          d="M26,44 C44,24 78,18 100,32 C114,40 112,58 98,64 C108,74 98,90 80,86 C84,98 66,108 52,96 C34,100 16,84 22,64 C10,58 14,46 26,44 Z"
          fill="url(#land)"
        />
        <Path d="M78,86 C88,90 94,100 88,110 C80,108 74,98 78,86 Z" fill="url(#land)" />
        <Path
          d="M90,106 C110,100 132,110 134,130 C136,150 124,164 128,184 C130,200 116,220 102,212 C94,228 74,220 76,202 C64,196 66,176 76,162 C68,146 78,126 90,106 Z"
          fill="url(#land)"
        />
        <Circle cx="104" cy="96" r="4.5" fill="url(#land)" />
        <Circle cx="115" cy="102" r="3" fill="url(#land)" />
        <Path
          d="M208,48 C226,42 240,56 236,78 C242,96 226,112 212,102 C198,114 186,98 194,80 C182,68 196,52 208,48 Z"
          fill="url(#land)"
          opacity={0.92}
        />
      </G>

      <Circle cx="88" cy="78" r="58" fill="#FFFFFF" opacity={0.12} />
    </Svg>
  );
}

export default function GalaxyScreen() {
  const { diamonds } = useAppState();
  const [zoomOutVisible, setZoomOutVisible] = useState(false);

  return (
    <Screen bg={colors.bgDeep} edges={['top']}>
      <View style={StyleSheet.absoluteFill}>
        <Starfield width={390} height={844} stars={STARS} />
      </View>

      <View style={styles.header}>
        <View style={styles.pillChip}>
          <View style={{ gap: 4 }}>
            <View style={styles.hamLine} />
            <View style={styles.hamLine} />
            <View style={styles.hamLine} />
          </View>
        </View>
        <Pressable style={styles.zoomOutPill} onPress={() => setZoomOutVisible(true)}>
          <Text style={styles.zoomOutIcon}>⤡</Text>
          <Text style={styles.zoomOutText}>Zoom out</Text>
        </Pressable>
        <DiamondPill value={diamonds} />
      </View>

      <View style={styles.stage}>
        <View style={[styles.shadowBlob, { left: -104, top: '32%' }]} />
        <View style={[styles.shadowBlob, { right: -116, top: '30%' }]} />

        <View style={styles.planetWrap}>
          <View style={styles.planet}>
            <View style={styles.planetClip}>
              {planet.name === 'Tierra' ? (
                <EarthGlobe size={238} />
              ) : (
                <LinearGradient
                  colors={[planet.from, planet.to]}
                  start={{ x: 0.32, y: 0.28 }}
                  end={{ x: 1, y: 1 }}
                  style={StyleSheet.absoluteFill}
                />
              )}
            </View>
            <View style={styles.ring} />
          </View>

          <View style={styles.info}>
            <Text style={styles.activeLabel}>PLANETA DE INTRODUCCIÓN</Text>
            <Text style={styles.planetName}>{planet.name}</Text>
            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${Math.round((planet.done / planet.total) * 100)}%` }]} />
              </View>
              <Text style={styles.progressText}>{planet.done} / {planet.total}</Text>
            </View>
          </View>

          <Pressable onPress={() => router.push('/path')}>
            <LinearGradient
              colors={[colors.ctaStart, colors.ctaMid, colors.ctaEnd]}
              locations={[0, 0.55, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.enterButton}
            >
              <Text style={styles.enterButtonText}>Entrar al planeta</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>

      <BottomNavGalaxy
        onMenu={() => {}}
        onWorld={() => {}}
        onChat={() => router.push('/chat')}
        borderColor="#2B35A2"
        bg="rgba(11,16,67,0.92)"
        iconColor="#8E97F0"
      />

      <Modal visible={zoomOutVisible} transparent animationType="fade" onRequestClose={() => setZoomOutVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalIcon}>
              <Text style={{ fontSize: 28 }}>🔒</Text>
            </View>
            <Text style={styles.modalText}>Todavía no estás preparado para conquistar otros planetas</Text>
            <Pressable style={styles.modalButton} onPress={() => setZoomOutVisible(false)}>
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
  pillChip: {
    width: 42, height: 42, borderRadius: 13, backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1, borderColor: '#3A45BA', alignItems: 'center', justifyContent: 'center',
  },
  hamLine: { width: 18, height: 2, backgroundColor: '#C9CFFF' },
  zoomOutPill: {
    flexDirection: 'row', alignItems: 'center', gap: 7,
    paddingHorizontal: 16, paddingVertical: 9, borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: '#3A45BA',
  },
  zoomOutIcon: { fontSize: 13, color: '#E6E9FF' },
  zoomOutText: { fontFamily: fonts.caption, fontSize: 11, color: '#E6E9FF', letterSpacing: 0.5 },
  stage: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  shadowBlob: { position: 'absolute', width: 190, height: 190, borderRadius: 95, backgroundColor: '#2A34A0', opacity: 0.4 },
  planetWrap: { alignItems: 'center', gap: 22, paddingHorizontal: 28 },
  planet: {
    width: 238, height: 238, borderRadius: 119,
    shadowColor: colors.violet, shadowOpacity: 0.5, shadowRadius: 40, shadowOffset: { width: 0, height: 0 },
    elevation: 20,
  },
  planetClip: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 119,
    overflow: 'hidden',
  },
  ring: {
    position: 'absolute', left: -34, top: 97, width: 306, height: 44, borderRadius: 22,
    borderWidth: 2, borderColor: 'rgba(167,230,242,0.55)', transform: [{ rotate: '-16deg' }],
  },
  info: { alignItems: 'center', gap: 10 },
  activeLabel: { fontFamily: fonts.caption, fontSize: 10, letterSpacing: 2, color: colors.cyan, textAlign: 'center' },
  planetName: { fontFamily: fonts.displayBold, fontSize: 34, color: '#FFFFFF' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  progressTrack: { width: 120, height: 7, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.16)', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.orange, borderRadius: 5 },
  progressText: { fontFamily: fonts.caption, fontSize: 11, color: '#C3C9F5' },
  enterButton: { height: 56, paddingHorizontal: 34, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  enterButtonText: { fontFamily: fonts.emphasis, color: '#FFFFFF', fontSize: 17 },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(6,8,30,0.72)', alignItems: 'center', justifyContent: 'center', padding: 32 },
  modalCard: { width: '100%', maxWidth: 320, backgroundColor: colors.card, borderRadius: 22, padding: 26, alignItems: 'center', gap: 16 },
  modalIcon: { width: 56, height: 56, borderRadius: 16, backgroundColor: colors.cardAlt, alignItems: 'center', justifyContent: 'center' },
  modalText: { fontFamily: fonts.cardTitle, fontSize: 17, color: colors.textDark, textAlign: 'center', lineHeight: 24 },
  modalButton: { alignSelf: 'stretch', height: 50, borderRadius: 14, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  modalButtonText: { fontFamily: fonts.emphasis, color: '#FFFFFF', fontSize: 15 },
});
