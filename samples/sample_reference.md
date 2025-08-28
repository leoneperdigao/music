# Psy Trance Sample Reference

This document lists sample sources and information for creating authentic psy/goa trance tracks.

## Classic Psy Trance Artists Sample References

### Talamasca
- Known for: Deep rolling basslines, ethnic elements, melodic leads
- Signature sounds: TB-303 acid bass, Indian instruments, spiritual vocals
- Key tracks to study: "1200 Micrograms", "Psychedelic Trance", "Made in India"

### Astral Projection  
- Known for: Uplifting melodies, orchestral elements, emotional builds
- Signature sounds: Soaring leads, ethnic percussion, cinematic pads
- Key tracks: "Mahadeva", "People Can Fly", "Dancing Galaxy"

### Hallucinogen
- Known for: Complex arrangements, psychedelic textures, innovative sound design
- Signature sounds: Warped vocals, evolving pads, intricate percussion
- Key tracks: "LSD", "Shamanix", "Gamma Goblins"

### Goa Gil
- Known for: Traditional Goa sound, repetitive hypnotic patterns
- Signature sounds: Simple but effective basslines, raw analog sounds
- Focus: Minimalist approach with maximum impact

## Sample Sources

### Free/Creative Commons Sources

1. **Freesound.org**
   - Search terms: "tabla", "sitar", "psytrance", "acid", "303"
   - Ethnic instruments: Indian percussion, Middle Eastern elements
   - Electronic sounds: Analog synths, drum machines

2. **Dirt-Samples (TidalCycles)**
   - Bass samples: bass1, bass2, bass3 collections
   - Percussion: 808 collection, tabla2 collection
   - Ethnic: Various world music samples

3. **Sample Libraries**
   - Look for: Goa trance sample packs
   - Keywords: psychedelic, trance, 303, acid, ethnic

### Synthesized Elements (Strudel Built-ins)

#### Bass Sounds
- `sawtooth` - Classic analog bass sound
- `square` - Harsh, digital bass
- `sine` - Sub bass frequencies

#### Lead Sounds  
- `sawtooth` + filter sweeps - Classic 303 acid sound
- `triangle` - Smooth melodic leads
- `sine` - Ethereal, atmospheric leads

#### Percussion
- Built-in samples: `bd`, `hh`, `oh`, `cp`, `rim`
- Ethnic: `tabla`, `sitar` (if available)

## Sound Design Techniques

### TB-303 Style Acid Bass
```javascript
"c2 eb2 f2 g2"
  .sound("sawtooth")
  .lpf(sine.range(200, 1000).slow(16))
  .resonance(15)
  .distortion(0.3)
```

### Ethnic Percussion Layer
```javascript
stack(
  "tabla:0 . tabla:2 tabla:4",
  ". tabla:6 . tabla:1", 
  "sitar:0 . . sitar:2"
).gain(0.5)
```

### Atmospheric Pads
```javascript
"c3 eb3 g3 bb3"
  .slow(8)
  .sound("sine")
  .attack(3)
  .release(6)
  .room(0.9)
  .gain(0.4)
```

### Filter Automation
```javascript
// LPF sweep
.lpf(sine.range(400, 2000).slow(32))

// HPF sweep  
.hpf(cosine.range(20, 500).slow(16))
```

## Typical Psy Trance Arrangement

1. **Intro (32-64 bars)**
   - Atmospheric elements
   - Minimal percussion
   - Building tension

2. **Build Up (16-32 bars)**
   - Add bassline
   - Introduce kick
   - Layer elements gradually

3. **Main Section (64-128 bars)**
   - Full arrangement
   - All elements playing
   - Peak energy

4. **Breakdown (32-64 bars)**
   - Strip back to minimal elements
   - Keep tension
   - Prepare for next section

5. **Second Drop/Climax (64-128 bars)**
   - Return to full energy
   - Add variations
   - Peak moment of track

6. **Outro (32-64 bars)**
   - Gradual fade out
   - Atmospheric elements
   - Peaceful resolution

## BPM Guidelines

- **Classic Goa Trance**: 140-150 BPM
- **Full-On Psy**: 145-148 BPM  
- **Dark Psy**: 148-152 BPM
- **Forest Psy**: 148-150 BPM
- **Progressive Psy**: 128-138 BPM

## Key Signatures

Most psy trance uses minor keys or modal scales:
- **C minor** (C, D, Eb, F, G, Ab, Bb)
- **A minor** (A, B, C, D, E, F, G)
- **Phrygian mode** for darker sounds
- **Harmonic minor** for mystical feel

## Essential Effects

1. **Low-pass filter** with resonance - For that classic acid sound
2. **Delay** - 1/8 or 1/16 note delays for rhythmic interest  
3. **Reverb** - Large spaces, halls for atmosphere
4. **Distortion** - Analog warmth and grit
5. **Compression** - Glue the mix together
6. **Chorus/Flanger** - Movement and width

## Mixing Tips

- **Kick**: Should be punchy and clear, around 60-80Hz
- **Bass**: Fill 80-250Hz range, use sidechain compression
- **Leads**: Cut through mix around 1-3kHz
- **Hi-hats**: Bright and crisp, 8kHz+
- **Overall**: Leave headroom, don't over-compress

## Cultural Sensitivity Note

When using ethnic samples (Indian, Middle Eastern, etc.):
- Respect the cultural origins
- Give credit where possible
- Understand the context and meaning
- Avoid stereotypical or offensive usage
