// "Bennington – UKG/House"
// structure preserved: bass, gneeow, dindin, pads, voice, drums (+ anchor kick)
// composed @by Leone Perdigão
// script @by leoneperdigao
// BPM: 142, with constant drive and no long silent branches

setcps(142 / 60 / 4)

// ========== RHYTHM ANCHOR (always on) ==========
kick4: "<0 ~ 0 ~ 0 ~ 0 ~>/8"
  .s('linndrum_bd').lpf(3200).att(0).dec(.22).rel(.28)
  .gain(.8).room(.15)

// ========== BASS (continuous, Reese sub layer) ==========
bass: "<0 1 0 1 0 [1 ~] 0 1>/8".pickRestart([
  n("<7!2 [6 7] 9!2 [7 9] 11!2 [9 11] 10 11>*2"),
  n("<[7 9] 7 7 [9 11] 10 11 7 9>*2")
]).scale('c1:minor')
 .s('sawtooth')
 .att(.008).dec(.22).rel(.32)
 .lpf(300).lpe(.8)
 .clip(.95).gain(.95).room(.2)
 .layer(
   x=>x.s('square').lpf(160).gain(.45),     // sub mono
   x=>x.detune(.6).gain(.22)                 // mild Reese width
 )

// ========== GNEEOW (kept role, trimmed rests) ==========
gneeow: "<0 ~ 0 ~ 0 0 ~ 1>/8".pickRestart([
  n("<[4,7,9] [~ 4,7,10] [4,7,9] ~>*2"),
  n("<[4,7,10] ~ [4,7,9] [4,7,10]>*2")
]).scale('c5:minor')
 .s('sawtooth').vib(4.5).vibmod(.35)
 .att(.012).dec(.25).rel(.45)
 .lpf(1500).lpe(.6).gain(.8).room(.7)
 .delay(.34).dt(.26).dfb(.58)

// ========== DINDIN (hat/rim ticks; micro-swing) ==========
dindin: "<0 0 ~ 0 0 ~ 0 ~>/8".pickRestart([
  n("[1 2]*4").pan("[.45 .55]*4")
]).scale('c6:minor')
 .s('square').att(0).dec(.11).rel(.09)
 .gain(.14).late(.02)

// ========== PADS (same harmonic palette, no silent variant) ==========
pads: "<5 ~ 0 1 ~ 2 ~ 3>/8".pickRestart([
  n("<[2,4,6] [-3,-1,1]>/2").lpf(1600).att(.4).rel(.6).gain(.8),
  n("<~ 11 [9 10] 8 -1 [0 ~] ~ 11 [9 10] 8 13 >*2")
    .lpf(1500).att(.35).rel(.7).gain(1.0),
  n("<[-3,0,2] [-3,-1,1]>/2").lpf(1500).gain(.6),
  n("<[5,7,9] [5,7,10] [[4,7,9] [4,7,8] [4,6]]>*2").gain(.95),
  n("<[6,8,10]@3 ~@2>*2").gain(.9)
]).scale('c4:minor')
 .s('gm_pad_warm').room(.45)
 // faux sidechain: breathe with the kick
 .gain("[1 .82 .65 .9]*8")

// ========== VOICE (kept motifs; tighter envelopes + pump) ==========
voice: "<~ 0 1 2 ~ 2 0 1>/8".pickRestart([
  n("<~@2 [2 2@3] 3 4 [5 6@3] 7 [8 6] [~ 4@2] ~ [4 3@2] 4 3 4 [5 6@2] [7 8@2] ~>*4").gain(.45),
  n("<~@3 4 [4 ~] [3 ~] [4 6@2 4@3] ~ [2 2@2] 3 4 [5 6@2] ~>*4").gain(.45),
  n("<9 ~ 7 ~ 11 8 ~ ~ [9 10 9] 7 ~ 11 8 ~>*2").gain(.7).delay(.38).dt(.3).dfb(.72)
]).scale('c3:minor')
 .s('pulse').att(.01).dec(.2).rel(.33).clip(.9)
 .layer(x=>x.pan(.2), x=>x.late(.018).pan(.8))
 .room(.5)
 // gentle pump with the kick
 .gain("[.95 .8 .65 .9]*8")

// ========== DRUMS (your original pickOut, but no near-silent branches) ==========
drums: "<[0,1,2] 2 [0,2] [0,1,2] [0,2] 2 [2,1] 2 [0,1,2] 2>/8".pickRestart([
  "<bd sd>*4",                  // driving pattern as default
  "<~ <cp ~> ~>*4"              // clap groove (no long @6 rests)
]).pickOut({
  bd:s('linndrum_bd').lpf(3000).room(.2).gain(.75),
  sd:s('linndrum_sd').room(.2).gain(.6),
  cp:s('cp').velocity(1.8).room(.9)
})

// ========== MASTER ==========
all(x=>x) // keep headroom; add your limiter/FX here if you like
