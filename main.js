// Vidria - interacciones
document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll (con red de seguridad por si el observer no dispara)
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
  // Red de seguridad: pase lo que pase, todo visible a los 3 s
  setTimeout(() => document.querySelectorAll('.rv:not(.in)').forEach(el => el.classList.add('in')), 3000);

  // Modal pago
  const modal = document.getElementById('modal-pago');
  if (!modal) return;
  document.querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', (ev) => {
    ev.preventDefault();
    const pack = b.getAttribute('data-buy');
    document.getElementById('modal-pack').textContent = pack;
    modal.classList.add('open');
  }));
  modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.classList.remove('open'); });
  document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('open'));
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') modal.classList.remove('open'); });
});
