// "Tame Garage" — Tame Impala x UKG/House hybrid
// composed @by Leone Perdigão
// script @by leoneperdigao
// trippy chords, swirling synths, steady garage beat

setcps(145/60/4) // faster than Tame, closer to UKG pace

// --- BASS (melodic, groovy, like Impala’s Moog) ---
bass: "<0 1 0 2 ~ 1 0 1>/8".pickRestart([
  n("<[7 9] 7 9 [11 10] 9 7 9>*2"),
  n("<7 [9 11] 7 [10 11]>*2")
]).scale('c1:minor')
 .s('sawtooth').att(.01).dec(.25).rel(.3)
 .lpf(280).lpe(.85)
 .clip(.9).gain(.9)
 .room(.2)
 .layer(x=>x.detune(.6).gain(.35))

// --- CHORDS (psychedelic phaser pads) ---
chords: "<0 [1 ~] [2 3] ~ [4 ~] 5 ~>/4"
 .scale('c4:minor')
 .s('gm_pad_warm')
 .att(.4).dec(1.2).rel(1.8)
 .lpf(1800)
 .gain(.8).room(.6)
 .vib(3).vibmod(.2) // slight pitch wander
 .phaser(0.6,0.7,0.3) // psychedelic swirl
 // fake sidechain pump
 .gain("[1 .8 .6 .9]*8")

// --- MELODY LEAD (Tame Impala-esque synth hook) ---
lead: "<0 ~ 1 ~ 2 1 ~ 0>/8".pickRestart([
  n("<[9 11 12] [11 9] 7 [9 11]>"),
  n("<7 9 11 [12 11] [9 7]>*2")
]).scale('c5:minor')
 .s('pulse').att(.02).dec(.25).rel(.35)
 .gain(.5).room(.4)
 .delay(.38).dt(.32).dfb(.7) // spacey repeats
 .phaser(0.4,0.5,0.2)

// --- VOCAL TEXTURE (dreamy washed out vox) ---
vox: "<~ 0 ~ 1 ~ 2 ~ 0>/8".pickRestart([
  n("<[2 3] ~ [4 5] [3 2]>")
]).scale('c3:minor')
 .s('sawtooth').att(.05).dec(.4).rel(.6)
 .gain(.35).room(.7)
 .delay(.45).dt(.35).dfb(.75)
 .clip(.85)
 .layer(x=>x.pan(.3), x=>x.late(.02).pan(.7))

// --- DRUMS (UKG/House fusion) ---
kick: "0 ~ 0 ~ 0 ~ 0 ~"
  .s('linndrum_bd').gain(.8).room(.2)

clap: "<~ ~ 0 ~ ~ ~ 0 ~>/8"
  .s('linndrum_sd').gain(.65).room(.3)

hats: "<0 0 ~ 0 0 ~ 0 0>/8"
  .s('square').n("c7").att(0).dec(.1).rel(.08)
  .gain(.12).late(.02).pan("[.35 .65]*8")

perc: "<~ 0 ~ 0 0 ~ 0 ~>/8"
  .s('square').n("c6").att(0).dec(.08).rel(.1)
  .gain(.1).pan("[.4 .6]*8").late(.015)

// --- ALL ---
all(x=>x)
