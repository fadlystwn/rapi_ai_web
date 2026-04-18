const modal = document.getElementById('modal');
const emailInput = document.getElementById('emailInput');
const earlyAccessBtn = document.getElementById('earlyAccessBtn');
const startBtn = document.getElementById('startBtn');
const demoBtn = document.getElementById('demoBtn');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalSubmitBtn = document.getElementById('modalSubmitBtn');

const openModal = () => {
  modal?.classList.add('active');
  emailInput?.focus();
};

const closeModal = () => {
  modal?.classList.remove('active');
};

const isValidEmail = (value) => {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const submitWaitlist = () => {
  const email = emailInput?.value.trim() ?? '';
  if (isValidEmail(email)) {
    alert(`Berhasil! ${email} akan menerima update awal RAPI.`);
    closeModal();
    if (emailInput) emailInput.value = '';
  } else {
    alert('Masukkan alamat email yang valid ya.');
    emailInput?.focus();
  }
};

const showDemo = () => {
  alert("✨ Demo RAPI\n\nContoh konteks: Staff · Corporate · Tim pasif\n\n▸ Opsi A: Tunggu dulu, risiko rendah tapi lambat.\n▸ Opsi B: Propose mini retro, assertive tapi constructive.\n\n🎯 Rekomendasi: Opsi B dengan wording:\n\"Gue lihat ada gap momentum. Sync 15 menit buat unlock 2 quick win minggu ini?\"");
};

earlyAccessBtn?.addEventListener('click', openModal);
startBtn?.addEventListener('click', openModal);
demoBtn?.addEventListener('click', showDemo);
modalCancelBtn?.addEventListener('click', closeModal);
modalSubmitBtn?.addEventListener('click', submitWaitlist);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
