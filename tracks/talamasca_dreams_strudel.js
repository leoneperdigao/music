// "Talamasca Dreams" - Strudel Psy Trance inspired by Talamasca's signature sound
// Using proper Strudel JavaScript syntax

// Set tempo to 143 BPM (classic Talamasca tempo)
setcps(143/60/4)

// Load sample library
samples('github:tidalcycles/dirt-samples')

// === TALAMASCA-STYLE DRUMS ===
const mainDrums = stack(
  // Driving kick pattern
  s("bd*4").bank("RolandTR909").n("1@3 0@1")
    .shape(0.25).gain(1.3),

  // Signature hi-hats
  s("hh*16").bank("RolandTR909")
    .cutoff(12000).resonance(0.15)
    .swing(4).gain(sine.range(0.3, 0.5).fast(1/4)),

  // Classic snare
  s("~ ~ cp ~").bank("RolandTR909").gain(0.65),

  // Extra percussion fills
  s("perc*8").n(irand(8)).gain(0.25).pan(rand)
)

// === TALAMASCA TB-303 BASS ===
const tb303Bass = note("<c2 ~ eb2 ~ f2 ~ g2 ~ bb2 ~ g2 ~ f2 ~ eb2 ~>")
  .sound("sawtooth")
  .decay(0.08).sustain(0).release(0.03)
  .cutoff(saw.range(180, 1200).slow(32))
  .resonance(16)
  .shape(0.4)
  .gain(1.0)

// === SIGNATURE LEAD SYNTH ===
const talaLead = note("<c4 eb4 g4 bb4 c5 bb4 g4 eb4 f4 ab4 c5 eb5 c5 ab4 f4 eb4>@4")
  .sound("square")
  .cutoff(saw.range(1000, 4000).slow(16))
  .resonance(20)
  .vib(6).vibmod(0.15)
  .delay(0.4).delaytime(0.375).delayfeedback(0.5)
  .room(0.3).roomsize(4)
  .gain(0.8)

// === PSYCHEDELIC ARPEGGIOS ===
const psyArp = note("c4 eb4 g4 bb4 c5 bb4 g4 eb4 f4 ab4 c5 eb5")
  .fast(3)
  .sound("sawtooth")
  .cutoff(sine.range(800, 3500).fast(3/4))
  .resonance(22)
  .attack(0.01)
  .gain(0.4)
  .pan(sine.range(-0.8, 0.8).slow(5))
  .orbit(2)

// === DARK ATMOSPHERE ===
const darkPads = note("<c3 eb3 g3 bb3> <eb3 g3 bb3 d4>")
  .slow(16)
  .sound("sine")
  .attack(4).release(8)
  .cutoff(800)
  .room(0.9).roomsize(10)
  .gain(0.25)

// === ETHNIC ELEMENTS ===
const ethnicLayer = stack(
  s("tabla*8").n("0 2 4 6 1 3 5 7").gain(0.4),
  s("~ sitar ~ sitar").n(choose([0,1,2])).gain(0.3),
  s("bansuri*2").n(choose([0,1])).slow(2).gain(0.2).room(0.6)
)

// === BREAKDOWN FILTER SWEEP ===
const breakdown = stack(
  tb303Bass.gain(0.4).cutoff(400),
  darkPads.gain(0.6),
  talaLead.gain(0.2).cutoff(sine.range(200, 800).slow(4)),
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.9),
  s("white*32").decay(0.01).hcutoff(sine.range(2000, 8000).slow(8)).gain(0.1)
)

// === CLIMAX SECTION ===
const climax = stack(
  mainDrums.gain(1.2),
  tb303Bass.gain(1.1).resonance(18),
  talaLead.gain(1.0),
  psyArp.gain(0.6),
  darkPads.gain(0.3),
  ethnicLayer.gain(0.8),
  // Extra climax elements
  note("c6 eb6 g6 bb6").fast(4).sound("sine").gain(0.3).attack(0.01).cutoff(8000)
)

// === MAIN ARRANGEMENT ===
timeCat(
  // Dark intro (16 bars)
  [8, stack(darkPads, ethnicLayer.gain(0.2))],
  
  // Build with drums (16 bars)  
  [8, stack(mainDrums.gain(0.8), tb303Bass.gain(0.7), darkPads, ethnicLayer)],
  
  // Add lead melody (32 bars)
  [16, stack(mainDrums, tb303Bass, talaLead.gain(0.6), darkPads.gain(0.3), ethnicLayer.gain(0.6))],
  
  // Full power section (32 bars)
  [16, stack(mainDrums, tb303Bass, talaLead, psyArp, darkPads.gain(0.2), ethnicLayer.gain(0.7))],
  
  // Breakdown and filter sweep (16 bars)
  [8, breakdown],
  
  // Epic climax (64 bars)
  [32, climax],
  
  // Atmospheric outro (16 bars)
  [8, stack(darkPads.gain(0.7), talaLead.gain(0.2).cutoff(300), ethnicLayer.gain(0.3))]
)
