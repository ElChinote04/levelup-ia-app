import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radii, fonts } from '../theme';

// ---------------------------------------------------------------------
// Screen wrapper
// ---------------------------------------------------------------------
export function Screen({ children, bg = colors.bg, edges = ['top', 'bottom'], style }) {
  return (
    <View style={[styles.screen, { backgroundColor: bg }, style]}>
      <SafeAreaView style={styles.safeArea} edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
}

// ---------------------------------------------------------------------
// Buttons / chips
// ---------------------------------------------------------------------
export function PrimaryButton({ label, onPress, style, textStyle, icon }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }, style]}>
      <LinearGradient
        colors={[colors.ctaStart, colors.ctaMid, colors.ctaEnd]}
        locations={[0, 0.55, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.primaryButton}
      >
        {icon}
        <Text style={[styles.primaryButtonText, textStyle]}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export function SecondaryButton({ label, onPress, style, textStyle, tone = 'dark' }) {
  const bg = tone === 'dark' ? colors.accentSoft : colors.card;
  const border = tone === 'dark' ? colors.border : 'transparent';
  const txt = tone === 'dark' ? colors.textOnDarkFaint : colors.textMuted;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.secondaryButton,
        { backgroundColor: bg, borderColor: border, opacity: pressed ? 0.8 : 1 },
        style,
      ]}
    >
      <Text style={[styles.secondaryButtonText, { color: txt }, textStyle]}>{label}</Text>
    </Pressable>
  );
}

export function BackChip({ onPress, icon = '←' }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.chip, { opacity: pressed ? 0.7 : 1 }]}>
      <Text style={styles.chipIcon}>{icon}</Text>
    </Pressable>
  );
}

export function DiamondPill({ value, onPress }) {
  const Wrapper = onPress ? Pressable : View;
  return (
    <Wrapper onPress={onPress} style={styles.diamondPill}>
      <Text style={styles.diamondEmoji}>💎</Text>
      <Text style={styles.diamondValue}>{value}</Text>
    </Wrapper>
  );
}

// ---------------------------------------------------------------------
// Cards
// ---------------------------------------------------------------------
export function Card({ children, style, tone = 'light' }) {
  const bg = tone === 'light' ? colors.card : tone === 'accent' ? colors.accent : colors.cardSoft;
  return <View style={[styles.card, { backgroundColor: bg }, style]}>{children}</View>;
}

// ---------------------------------------------------------------------
// Bottom nav bars
// ---------------------------------------------------------------------
export function BottomNavLight({ onMenu, onWorld, onChat }) {
  return (
    <View style={[styles.navBar, { backgroundColor: colors.accentSoft, borderTopColor: colors.border }]}>
      <Pressable onPress={onMenu} style={styles.navSlot}>
        <View style={styles.hamburger}>
          <View style={[styles.hamburgerLine, { backgroundColor: '#8E97F0' }]} />
          <View style={[styles.hamburgerLine, { backgroundColor: '#8E97F0' }]} />
          <View style={[styles.hamburgerLine, { backgroundColor: '#8E97F0' }]} />
        </View>
      </Pressable>
      <Pressable onPress={onWorld} style={styles.navWorldButton}>
        <LinearGradient
          colors={[colors.violet, colors.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.navWorldGradient}
        >
          <PlanetGlyph color="#FFFFFF" />
        </LinearGradient>
      </Pressable>
      <Pressable onPress={onChat} style={styles.navSlot}>
        <View style={[styles.chatBubble, { borderColor: '#8E97F0' }]} />
      </Pressable>
    </View>
  );
}

export function BottomNavGalaxy({ onMenu, onWorld, onChat, borderColor, bg, iconColor }) {
  return (
    <View style={[styles.navBar, { backgroundColor: bg, borderTopColor: borderColor }]}>
      <Pressable onPress={onMenu} style={styles.navSlot}>
        <View style={styles.hamburger}>
          <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
          <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
          <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
        </View>
      </Pressable>
      <Pressable onPress={onWorld} style={styles.navWorldButton}>
        <LinearGradient
          colors={[colors.violet, colors.ctaMid]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.navWorldGradient}
        >
          <PlanetGlyph color={colors.bgPath} />
        </LinearGradient>
      </Pressable>
      <Pressable onPress={onChat} style={styles.navSlot}>
        <View style={[styles.chatBubble, { borderColor: iconColor }]} />
      </Pressable>
    </View>
  );
}

function PlanetGlyph({ color }) {
  return (
    <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: color }}>
      <View
        style={{
          position: 'absolute',
          left: -7,
          top: 8,
          width: 36,
          height: 6,
          borderRadius: 3,
          borderWidth: 1.5,
          borderColor: color,
          transform: [{ rotate: '-18deg' }],
        }}
      />
    </View>
  );
}

// ---------------------------------------------------------------------
// Brand icons (SVG)
// ---------------------------------------------------------------------
export function GoogleIcon({ size = 18 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18">
      <Path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <Path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <Path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <Path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </Svg>
  );
}

export function AppleIcon({ size = 16, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size * (512 / 384)} viewBox="0 0 384 512">
      <Path
        fill={color}
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </Svg>
  );
}

// ---------------------------------------------------------------------
// Nova avatar (amber gradient tile with 🤖)
// ---------------------------------------------------------------------
export function NovaAvatar({ size = 44, radius = 14, emojiSize = 22 }) {
  return (
    <LinearGradient
      colors={[colors.novaStart, colors.novaEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: emojiSize }}>🤖</Text>
    </LinearGradient>
  );
}

// ---------------------------------------------------------------------
// Small starfield decoration for the "space" screens
// ---------------------------------------------------------------------
export function Starfield({ width, height, stars }) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      style={StyleSheet.absoluteFill}
      preserveAspectRatio="none"
    >
      {stars.map((s, i) => (
        <Circle key={i} cx={s.x} cy={s.y} r={s.r} fill={s.color || '#8E97F0'} />
      ))}
    </Svg>
  );
}

// ---------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  primaryButton: {
    height: 56,
    borderRadius: radii.md + 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: fonts.emphasis,
  },
  secondaryButton: {
    height: 56,
    borderRadius: radii.md + 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontFamily: fonts.emphasis,
  },
  chip: {
    width: 38,
    height: 38,
    borderRadius: radii.sm,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipIcon: {
    color: colors.textOnDarkFaint,
    fontSize: 16,
  },
  diamondPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: radii.pill,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  diamondEmoji: {
    fontSize: 16,
  },
  diamondValue: {
    fontSize: 15,
    fontFamily: fonts.emphasis,
    color: colors.textOnDark,
  },
  card: {
    borderRadius: radii.lg,
    padding: 14,
  },
  navBar: {
    height: Platform.select({ ios: 82, android: 74, default: 74 }),
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: Platform.select({ ios: 14, default: 8 }),
  },
  navSlot: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: {
    width: 20,
    gap: 4,
  },
  hamburgerLine: {
    height: 2,
    borderRadius: 1,
  },
  navWorldButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  navWorldGradient: {
    flex: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBubble: {
    width: 24,
    height: 20,
    borderWidth: 2,
    borderRadius: 8,
  },
});
