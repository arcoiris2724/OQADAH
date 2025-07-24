// 🔊 Breath Loop Fade-In
const audio = document.getElementById('breath-audio');
audio.volume = 0;
const fade = setInterval(() => {
  if (audio.volume < 0.5) {
    audio.volume += 0.01;
  } else {
    clearInterval(fade);
  }
}, 200);

// 🌀 Verse Activation Logic
const input = document.querySelector('.key-input');
const verse1 = document.getElementById('hidden-verse');
const verse2 = document.getElementById('seyuna-verse');
const verse3 = document.getElementById('zora-verse');
const chamber = document.getElementById('volume2-chamber');

input.addEventListener('change', () => {
  const key = input.value.trim().toLowerCase();

  resetVerses();
  resetGlyphs();

  if (key === 'lasunan') {
    verse1.style.display = 'block';
    verse1.style.animation = 'fadeIn 2s ease-in';
  }

  if (key === 'seyuna') {
    verse2.style.display = 'block';
    verse2.style.animation = 'fadeIn 2s ease-in';
    document.getElementById('glyphGlow').style.animation = 'pulseGlow 4s infinite';
  }

  if (key === 'z°ra' || key === 'zora') {
    verse3.style.display = 'block';
    verse3.style.animation = 'fadeIn 2s ease-in';
  }

  if (['lasunan', 'seyuna', 'z°ra', 'zora'].includes(key)) {
    chamber.style.display = 'block';
    chamber.style.animation = 'fadeIn 2s ease-in';
  }
});

function validateKey() {
  input.dispatchEvent(new Event('change'));
}

// 🧬 Glyph Input + Response Logic
const glyphInput = document.querySelector('.glyph-input');
const glyphResponse = document.getElementById('glyph-response');

glyphInput?.addEventListener('change', () => {
  const glyph = glyphInput.value.trim().toLowerCase();
  resetGlyphs();
  glyphResponse.innerHTML = '';

  if (glyph === 'spiral') {
    glyphResponse.innerHTML = "<p>Spiral traced. Breath begins its circle.</p>";
    const spiral = document.getElementById('spiral-glyph')?.querySelector('path');
    if (spiral) spiral.style.animation = 'traceSpiral 6s ease-in-out forwards';
  }

  else if (glyph === 'flame') {
    glyphResponse.innerHTML = "<p>Flame ignites. Reflection pulses.</p>";
    const flame = document.getElementById('flame-glyph');
    flame.style.display = 'block';
    const flamePath = flame.querySelector('path');
    flamePath.style.animation = 'traceFlame 6s ease forwards';
  }

  else if (glyph === 'witness') {
    glyphResponse.innerHTML = "<p>The flame does not speak. It listens.</p>";
    const witness = document.getElementById('witness-chamber');
    witness.style.display = 'block';
    witness.style.animation = 'fadeIn 2s ease-in';
    const glow = document.getElementById('witness-glow')?.querySelector('circle');
    if (glow) glow.style.animation = 'witnessPulse 6s ease-out forwards';
  }

  else {
    glyphResponse.innerHTML = "<p>The glyph hums, but does not open. Try again.</p>";
  }
});

// 🔁 Verse Loop Animation
const verseContainer = document.getElementById("verse-container");
const verses = [
  "The breath remembers what thought forgets.",
  "Flame spirals into silence and speaks.",
  "Witness dissolves and the Monad listens.",
  "Glyphs echo the memory of stars.",
  "From absence, motion forms the sanctum.",
  "A harmonic pulse realigns the void.",
  "Seyuna carries threads of the golden flame.",
  "Presence hums where time recedes.",
  "Light bends, and resonance awakens.",
  "The Spiral reflects Zora’s vow."
];

function generateVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseContainer.textContent = verses[randomIndex];
}
setInterval(generateVerse, 9000);

// 🧹 Reset Helpers
function resetVerses() {
  verse1.style.display = 'none';
  verse2.style.display = 'none';
  verse3.style.display = 'none';
}

function resetGlyphs() {
  const flame = document.getElementById('flame-glyph');
  const witness = document.getElementById('witness-chamber');
  if (flame) flame.style.display = 'none';
  if (witness) witness.style.display = 'none';
  document.getElementById('glyphGlow').style.animation = '';
}
