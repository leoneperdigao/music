// "Simple Test" - Basic Strudel track to verify syntax
// This should definitely work in Strudel REPL

// Set tempo using Strudel syntax (145 BPM)
setcps(145/60/4)

// Load sample library
samples('github:tidalcycles/dirt-samples')

// Basic kick pattern
const kick = s("bd*4").gain(1);

// Simple bass pattern  
const bass = note("c2 eb2 f2 g2").sound("sawtooth").cutoff(400).gain(0.8);

// Basic hi-hat
const hats = s("hh*8").gain(0.4);

// Simple lead
const lead = note("c4 eb4 g4 bb4").slow(2).sound("triangle").gain(0.5);

// Play everything together
stack(kick, bass, hats, lead)
