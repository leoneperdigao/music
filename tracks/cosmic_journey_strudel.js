// "Cosmic Journey" - Proper Strudel Psy Trance Track
// Based on working Strudel syntax

// Set tempo to 145 BPM (classic Goa trance)
setcps(145/60/4)

// Load sample library
samples('github:tidalcycles/dirt-samples')

// === DRIVING DRUMS ===
const drums = stack(
  s("bd*4").bank("RolandTR909").n("1@2 0@2")
    .shape(0.2).gain(1.2),

  s("hh*16").bank("RolandTR909")
    .cutoff(11000).resonance(0.2)
    .swing(4).gain(0.4),

  s("~ ~ cp ~").bank("RolandTR909").gain(0.6),

  // Extra percussive elements
  sound("white*16").decay(0.03).sustain(0).gain(0.2).hcutoff(8000)
)

// === PSYCHEDELIC BASS ===
const psychoBass = note("c2 ~ eb2 ~ f2 ~ g2 ~")
  .sound("sawtooth")
  .decay(0.1).sustain(0).release(0.05)
  .cutoff(saw.range(200, 800).slow(16))
  .resonance(12)
  .shape(0.3).gain(0.9)

// === GOA LEAD ===
const goaLead = note("<c4 eb4 g4 bb4 c5 bb4 g4 eb4>@2")
  .sound("square")
  .cutoff(saw.range(800, 3000).slow(8))
  .resonance(15)
  .vib(4).vibmod(0.1)
  .delay(0.3).delaytime(0.25).delayfeedback(0.4).orbit(1)
  .room(0.4).roomsize(3)
  .gain(0.7)

// === ACID ARPEGGIOS ===
const acidArp = note("c4 eb4 g4 bb4 c5 bb4 g4 eb4")
  .fast(2)
  .sound("sawtooth")
  .cutoff(sine.range(600, 2200).fast(1/2))
  .resonance(18)
  .gain(0.5)
  .pan(cosine.range(-0.6, 0.6).slow(3))

// === ATMOSPHERIC PADS ===
const atmospherePads = note("<c3 eb3 g3> <eb3 g3 bb3>")
  .slow(8)
  .sound("sine")
  .attack(3).release(6)
  .cutoff(1200)
  .room(0.8).roomsize(8)
  .gain(0.3)

// === ETHNIC PERCUSSION ===
const ethnicPerc = stack(
  s("tabla*4").n("0 2 4 1").gain(0.5),
  s("~ shaker ~ shaker").gain(0.3),
  sound("pink*8").decay(0.02).sustain(0).hcutoff(4000).gain(0.15)
)

// === BREAKDOWN SECTION ===
const breakdown = stack(
  psychoBass.gain(0.3),
  atmospherePads.gain(0.7),
  goaLead.gain(0.2).cutoff(500),
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.8)
)

// === MAIN ARRANGEMENT ===
timeCat(
  // Intro - atmospheric buildup (16 bars)
  [8, stack(atmospherePads, ethnicPerc.gain(0.3))],
  
  // Add drums and bass (16 bars)
  [8, stack(drums.gain(0.7), psychoBass.gain(0.6), atmospherePads, ethnicPerc)],
  
  // Main section - full energy (32 bars)
  [16, stack(drums, psychoBass, goaLead, acidArp, atmospherePads.gain(0.4), ethnicPerc.gain(0.7))],
  
  // Breakdown (16 bars)
  [8, breakdown],
  
  // Final climax (32 bars)
  [16, stack(
    drums.gain(1.1), 
    psychoBass.gain(1.0), 
    goaLead.gain(0.9), 
    acidArp.gain(0.7),
    atmospherePads.gain(0.2),
    ethnicPerc.gain(0.8)
  )],
  
  // Outro (16 bars)
  [8, stack(atmospherePads.gain(0.6), goaLead.gain(0.3).cutoff(300))]
)
