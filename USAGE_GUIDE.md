# How to Use These Psy Trance Tracks in Strudel

## Getting Started

1. **Open Strudel REPL**
   - Go to https://strudel.cc/
   - Or visit https://strudel.tidalcycles.org/

2. **Load a Track**
   - Copy the contents of any track file (e.g., `cosmic_journey_strudel.js`)
   - Paste it into the Strudel editor
   - Press Ctrl+Enter (or Cmd+Enter on Mac) to play

3. **Stop/Start**
   - Press Ctrl+. (or Cmd+.) to stop
   - Press Ctrl+Enter again to restart

## Track Descriptions

### cosmic_journey_strudel.js
- **Style**: Classic Goa Trance
- **BPM**: 145
- **Difficulty**: Beginner-friendly
- **Features**: Simple structure, traditional elements
- **Best for**: Learning basic Goa trance patterns

### talamasca_dreams_strudel.js  
- **Style**: Talamasca-inspired Psy Trance
- **BPM**: 143
- **Difficulty**: Intermediate
- **Features**: Complex basslines, ethnic elements, breakdowns
- **Best for**: Understanding modern psy trance structure

### digital_forest_strudel.js
- **Style**: Dark Forest Psy
- **BPM**: 147  
- **Difficulty**: Intermediate-Advanced
- **Features**: Dark atmosphere, organic textures, hypnotic sequences
- **Best for**: Exploring modern forest psy trance sounds

### simple_test.js
- **Style**: Basic Test Track
- **BPM**: 145
- **Difficulty**: Beginner
- **Features**: Simple patterns for testing Strudel syntax
- **Best for**: Learning Strudel basics

## Customization Tips

### Changing Tempo
```javascript
// Change the BPM at the top of any track
setcps(140/60/4); // Slower, more hypnotic (140 BPM)
setcps(150/60/4); // Faster, more energetic (150 BPM)
```

### Modifying Patterns
```javascript
// Original
const goaBass = note("c2 ~ c2 eb2 ~ f2 ~ g2");

// Your variation
const goaBass = note("c2 ~ d2 eb2 ~ f2 g2 ab2"); // Added notes
const goaBass = note("c2 ~ c2 eb2 ~ f2 ~ g2").slow(4); // Slower
const goaBass = note("c2 ~ c2 eb2 ~ f2 ~ g2").fast(2); // Faster
```

### Changing Sounds
```javascript
// Original sawtooth bass
.sound("sawtooth")

// Try different sounds
.sound("square")     // Harsher, more digital
.sound("sine")       // Smoother, rounder
.sound("triangle")   // Somewhere in between
```

### Adding Your Own Elements
```javascript
// Add this to any track's main stack
const myLead = "c5 d5 eb5 f5 g5 f5 eb5 d5"
  .sound("triangle")
  .lpf(2000)
  .gain(0.5);

// Then include it in the main stack
stack(
  // ... existing elements ...
  myLead
)
```

## Pattern Library Usage

Import patterns from `patterns/psy_patterns.js`:

```javascript
// Copy patterns you want to use
const myBass = goaBasicBass;
const myHats = evolutiveHats;
const myLead = acidLead303;

// Use them in your composition
stack(
  myBass,
  psyKick,
  myHats,
  myLead
)
```

## Creating Your Own Track

### Step 1: Set Up Basic Structure
```javascript
setcps(145/60/4); // Choose your BPM (145 BPM in this case)

// Basic elements
const kick = s("bd*4").gain(1.2);
const bass = note("c2 ~ eb2 ~ f2 ~ g2 ~").sound("sawtooth").cutoff(400);
const hats = s("hh*8").gain(0.4);
```

### Step 2: Add Layers Gradually
```javascript
const lead = note("c5 eb5 g5 bb5").slow(4).sound("triangle").cutoff(2000);
const pads = note("c3 eb3 g3").slow(8).sound("sine").attack(2).gain(0.3);
```

### Step 3: Create Structure with timeCat
```javascript
timeCat(
  // Intro (16 bars)
  [8, stack(pads, hats.gain(0.2))],
  
  // Build (16 bars)
  [8, stack(bass.gain(0.6), kick.gain(0.8), hats)],
  
  // Main (32 bars)
  [16, stack(bass, kick, hats, lead, pads)],
  
  // Breakdown (16 bars)
  [8, stack(bass.gain(0.3), pads.gain(0.8), lead.gain(0.2))],
  
  // Main return (32 bars)
  [16, stack(bass, kick, hats, lead.gain(0.9), pads.gain(0.2))]
)
```

## Sound Design Tips

### Making TB-303 Style Bass
```javascript
const acidBass = "c2 eb2 f2 g2"
  .sound("sawtooth")
  .lpf(sine.range(200, 1000).slow(16))  // Sweeping filter
  .resonance(12)                        // High resonance
  .distortion(0.3)                      // Add grit
  .gain(0.8);
```

### Creating Atmospheric Pads
```javascript
const atmospherePads = "c3 eb3 g3 bb3"
  .slow(8)
  .sound("sine")
  .attack(3)      // Slow attack
  .release(6)     // Long release
  .room(0.9)      // Lots of reverb
  .size(0.95)     // Large reverb space
  .gain(0.4);
```

### Building Tension with Filters
```javascript
const tensionLead = "c5*16"
  .sound("sawtooth")
  .lpf(sine.range(400, 3000).slow(8))   // Slow sweep up
  .resonance(15)
  .gain(0.6);
```

## Performance Tips

### Live Coding
- Start with simple patterns and build complexity
- Use `.slow()` and `.fast()` to change pattern timing
- Modify `.gain()` values to bring elements in and out
- Change filter frequencies in real-time

### CPU Optimization
- If Strudel is struggling, try:
  - Reducing the number of simultaneous patterns
  - Using simpler sound sources
  - Reducing delay and reverb amounts
  - Simplifying filter modulations

## Troubleshooting

### No Sound
- Check your browser audio permissions
- Make sure Strudel is started (Ctrl+Enter)
- Try refreshing the page

### Patterns Not Playing  
- Check for syntax errors (missing commas, brackets)
- Make sure all patterns are properly formatted
- Try playing individual elements to isolate issues

### Performance Issues
- Close other browser tabs
- Reduce pattern complexity
- Use `.slow()` to reduce event density

## Next Steps

1. **Experiment**: Modify existing tracks to understand how they work
2. **Combine**: Mix elements from different tracks
3. **Create**: Build your own tracks from scratch
4. **Share**: Export your creations and share with the community
5. **Learn**: Study real psy trance tracks for inspiration

## Resources

- **Strudel Documentation**: https://strudel.cc/learn/
- **TidalCycles Manual**: https://tidalcycles.org/docs/
- **Psy Trance History**: Research classic Goa trance artists
- **Music Theory**: Learn about scales, chord progressions, and rhythm

Happy coding and may your tracks transport listeners to other dimensions! 🎵🔥✨
