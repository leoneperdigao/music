// Psy Trance Pattern Library for Strudel
// Collection of reusable patterns for Goa/Psy trance production
// Using proper Strudel JavaScript syntax

// === BASSLINE PATTERNS ===

// Classic Goa bassline - simple and hypnotic
export const goaBasicBass = note("c2 ~ c2 eb2 ~ f2 ~ g2")
  .slow(2)
  .sound("sawtooth")
  .cutoff(400)
  .resonance(8)
  .gain(0.8);

// Complex rolling bass pattern
export const psyRollingBass = stack(
  note("c2*8").sound("square"),
  note("c2*16").add(sequence([0, 3, 5, 7]).slow(2)).sound("square")
).cutoff(300)
.gain(0.6);

// Talamasca-style modulated bass
export const talamasca303 = note("c2 ~ eb2 ~ f2 ~ g2 ~")
  .sound("sawtooth")
  .cutoff(sine.range(200, 1000).slow(16))
  .resonance(12)
  .shape(0.3)
  .gain(0.9);

// === KICK PATTERNS ===

// Standard 4/4 psy kick
export const psyKick = s("bd*4")
  .n("3")
  .gain(1.2);

// Offbeat kick variation
export const offbeatKick = s("bd ~ bd ~ bd ~ bd bd")
  .n(sequence([5, 2, 5, 3]))
  .gain(1.1);

// === HIHAT PATTERNS ===

// Classic Goa hat pattern
export const goaHats = s("[hh hh] [hh hh] [hh hh] [hh ~]")
  .n(sequence([0, 2, 0, 3]))
  .gain(0.4)
  .hcutoff(8000);

// Evolving hat pattern
export const evolutiveHats = stack(
  s("hh*16").gain(sine.range(0.1, 0.5).slow(8)),
  s("oh ~ oh ~ oh ~ oh ~"),
  s("~ hh ~ hh ~ hh ~ ~").n(sequence([2, 3]))
).hcutoff(6000);

// === LEAD PATTERNS ===

// Acid lead sequence
export const acidLead303 = note("c4 eb4 g4 bb4 c5 bb4 g4 eb4")
  .slow(4)
  .sound("sawtooth") 
  .cutoff(sine.range(500, 2500).slow(8))
  .resonance(15)
  .delay(0.3);

// Melodic Goa lead
export const goaMelody = stack(
  note("c5 d5 eb5 f5").slow(8),
  note("g5 f5 eb5 d5").slow(8),
  note("c5 eb5 g5 bb5").slow(8), 
  note("c6 bb5 g5 eb5").slow(8)
).sound("triangle")
.cutoff(3000)
.delay(0.25);

// === ARPEGGIO PATTERNS ===

// Fast 16th note arpeggio
export const fastArp = note("c4 eb4 g4 bb4 c5 bb4 g4 eb4")
  .fast(2)
  .sound("sine")
  .cutoff(sine.range(800, 2000).fast(1))
  .gain(0.4);

// Pentatonic arp pattern
export const pentatonicArp = note("c4 d4 f4 g4 a4 g4 f4 d4")
  .sound("triangle")
  .cutoff(1500)
  .pan(sine.range(-0.5, 0.5).slow(4));

// === ATMOSPHERIC PADS ===

// Deep space pads
export const spacePads = stack(
  note("c3 eb3 g3").slow(16),
  note("eb3 g3 bb3").slow(16)
).sound("sine")
.attack(4)
.release(8)
.gain(0.3)
.room(0.9);

// Bright ethereal pads
export const etherealPads = note("c4 eb4 g4 bb4")
  .slow(8)
  .sound("sawtooth")
  .cutoff(1200)
  .attack(2)
  .release(6)
  .room(0.8)
  .gain(0.4);

// === PERCUSSION PATTERNS ===

// Indian/Eastern percussion
export const indianPerc = stack(
  s("tabla*4").n("0 ~ 2 4"),
  s("~ tabla ~ tabla").n("6 1"),
  s("~ ~ sitar ~ ~ sitar ~ ~").n("0 2")
).gain(0.5);

// Rim and clap accents
export const accentPerc = stack(
  s("rim ~ ~ rim ~ rim ~ ~"),
  s("~ ~ cp ~ ~ ~ cp ~"),
  s("~ ~ ~ ~ rim ~ ~ rim")
).gain(0.6);

// === EFFECT PATTERNS ===

// Reverse cymbal sweeps (using white noise as substitute)
export const reverseCymbal = s("white ~ ~ ~ white ~ ~ ~")
  .decay(2).attack(1)
  .gain(0.7)
  .room(0.8);

// Vocal stabs (using sample variations)
export const vocalStabs = s("~ vocal ~ ~ vocal ~ vocal ~")
  .n(sequence([0, 1, 2]))
  .gain(0.8)
  .delay(0.2);

// === FILTER SWEEPS ===

// LPF sweep automation (using cutoff instead of lpf)
export const lpfSweep = (pattern) => 
  pattern.cutoff(sine.range(200, 3000).slow(32));

// HPF sweep automation (using hcutoff instead of hpf)
export const hpfSweep = (pattern) =>
  pattern.hcutoff(sine.range(20, 1000).slow(16));

// === TEMPO VARIATIONS ===

// Half-time feel
export const halftime = (pattern) => pattern.slow(2);

// Double-time feel
export const doubletime = (pattern) => pattern.fast(2);

// === COMMON CHORD PROGRESSIONS ===

// Minor key Goa progression
export const goaMinorChords = stack(
  note("c3 eb3 g3").slow(16),   // Cm
  note("d3 f3 ab3").slow(16),   // Dm7b5  
  note("eb3 g3 bb3").slow(16),  // Eb
  note("f3 ab3 c4").slow(16)    // Fm
);

// Phrygian mode progression
export const phrygianChords = stack(
  note("c3 db3 f3").slow(12),   // C phrygian
  note("db3 f3 ab3").slow(12),  // Db
  note("eb3 g3 bb3").slow(12),  // Eb  
  note("f3 ab3 c4").slow(12)    // Fm
);
