// "Digital Forest" - Modern Forest Psy in Strudel
// Dark, organic, and hypnotic

// Set tempo to 147 BPM (modern forest psy)
setcps(147/60/4)

// Load sample library
samples('github:tidalcycles/dirt-samples')

// === FOREST DRUMS ===
const forestDrums = stack(
  // Punchy kick with subtle variations
  s("bd*4").bank("RolandTR909")
    .n(choose([0,1,2]).slow(4))
    .shape(sine.range(0.1, 0.3).slow(16))
    .gain(1.25),

  // Organic hi-hats
  s("hh*16").bank("RolandTR909")
    .cutoff(rand.range(8000, 14000))
    .resonance(0.1)
    .gain(perlin.range(0.2, 0.6).slow(8))
    .pan(perlin.range(-0.3, 0.3).slow(3)),

  // Scattered percussion
  s("~ ~ cp ~").n(choose([0,1])).gain(0.7),
  
  // Nature samples
  s("birds*4").slow(8).n(irand(5)).gain(0.15).room(0.8)
)

// === DEEP FOREST BASS ===
const deepBass = note("<f1 ~ ab1 ~ bb1 ~ c2 ~ eb2 ~ c2 ~ bb1 ~ ab1 ~>@2")
  .sound("sawtooth")
  .decay(0.12).sustain(0).release(0.06)
  .cutoff(saw.range(120, 600).slow(64))
  .resonance(14)
  .shape(0.35)
  .gain(1.1)

// === ORGANIC LEAD ===
const organicLead = note("f3 ab3 bb3 c4 eb4 c4 bb3 ab3 f3 eb3 c3 bb2")
  .slow(3)
  .sound("triangle")
  .cutoff(perlin.range(600, 2800).slow(12))
  .resonance(18)
  .vib(3).vibmod(sine.range(0.05, 0.2).slow(7))
  .delay(0.35).delaytime(0.33).delayfeedback(0.45)
  .room(0.5).roomsize(6)
  .gain(0.65)

// === HYPNOTIC SEQUENCES ===
const hypnoSeq = note("f4 ab4 bb4 c5 eb5 c5 bb4 ab4")
  .fast(sine.range(1, 4).slow(16))
  .sound("square")
  .cutoff(sine.range(1200, 4500).fast(2/3))
  .resonance(25)
  .attack(0.02)
  .gain(0.45)
  .pan(cosine.range(-0.7, 0.7).slow(7))

// === FOREST ATMOSPHERE ===
const atmosphere = stack(
  // Wind and nature sounds
  sound("wind*2").slow(4).gain(0.08).room(1.0),
  
  // Deep pad
  note("<f2 ab2 bb2> <bb2 c3 eb3>").slow(32)
    .sound("sine")
    .attack(8).release(12)
    .cutoff(400)
    .room(0.9).roomsize(12)
    .gain(0.2),
    
  // Tribal elements
  s("tabla*3").slow(2).n(choose([0,2,4,6])).gain(0.3).room(0.4)
)

// === GLITCHY TEXTURES ===
const glitchLayer = stack(
  sound("white*32").decay(0.005).sustain(0)
    .hcutoff(perlin.range(4000, 12000).fast(4))
    .gain(0.08),
    
  s("glitch*8").slow(2).n(irand(8))
    .speed(choose([0.5, 1, 2]))
    .gain(0.2).pan(rand)
)

// === BREAKDOWN SECTION ===
const breakdown = stack(
  deepBass.gain(0.5).cutoff(300),
  atmosphere.gain(0.8),
  organicLead.gain(0.3).cutoff(sine.range(200, 600).slow(8)),
  s("bd ~ ~ ~ ~ ~ ~ ~").slow(2).gain(0.6),
  glitchLayer.gain(0.5)
)

// === FOREST BUILDUP ===
const buildup = stack(
  forestDrums.gain(sine.range(0.5, 1.2).slow(8)),
  deepBass.gain(sine.range(0.6, 1.0).slow(4)),
  hypnoSeq.gain(sine.range(0.2, 0.8).slow(6)),
  atmosphere.gain(0.4),
  // Rising sweep
  sound("white*64").decay(0.003)
    .hcutoff(sine.range(1000, 8000).slow(8))
    .gain(0.15)
)

// === MAIN ARRANGEMENT ===
timeCat(
  // Forest intro - organic and atmospheric (32 bars)
  [16, stack(atmosphere, s("bd ~ ~ ~").slow(2).gain(0.4))],
  
  // Add bass and subtle drums (16 bars)
  [8, stack(forestDrums.gain(0.6), deepBass.gain(0.7), atmosphere)],
  
  // Organic lead enters (32 bars)
  [16, stack(forestDrums.gain(0.8), deepBass, organicLead.gain(0.5), atmosphere.gain(0.6))],
  
  // Hypnotic sequences layer (32 bars)
  [16, stack(forestDrums, deepBass, organicLead, hypnoSeq.gain(0.4), atmosphere.gain(0.4), glitchLayer.gain(0.3))],
  
  // Breakdown into forest atmosphere (16 bars)
  [8, breakdown],
  
  // Buildup with rising energy (16 bars)
  [8, buildup],
  
  // Full forest power (64 bars)
  [32, stack(
    forestDrums.gain(1.1),
    deepBass.gain(1.0),
    organicLead.gain(0.8),
    hypnoSeq.gain(0.6),
    atmosphere.gain(0.3),
    glitchLayer.gain(0.4)
  )],
  
  // Return to the forest (32 bars)
  [16, stack(atmosphere.gain(0.8), organicLead.gain(0.2), s("bd ~ ~ ~").slow(4).gain(0.3))]
)
