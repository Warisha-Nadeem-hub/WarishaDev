const projectCards = [...document.querySelectorAll('.project-card')];
const detail = document.getElementById('projectDetail');
let selectedProject = null;
let activeFilter = 'all';
const byId = id => document.getElementById(id);

function openProject(card, shouldScroll = false) {
  if (!projectCards.includes(card)) return;
  selectedProject = card;
  projectCards.forEach(projectCard => {
    const selected = projectCard === card;
    projectCard.classList.toggle('selected', selected);
    projectCard.setAttribute('aria-expanded', String(selected));
  });
  byId('detailTitle').textContent = card.querySelector('.project-title').textContent;
  const status = card.querySelector('.status');
  byId('detailStatus').className = status.className;
  byId('detailStatus').textContent = status.textContent;
  byId('detailTags').textContent = [...card.querySelectorAll('.project-tags i')].map(tag => tag.textContent).join(' · ');
  byId('detailIntro').textContent = card.querySelector('.project-description').textContent;
  byId('detailProblem').textContent = card.dataset.problem;
  byId('detailSolution').textContent = card.dataset.solution;
  const hasImage = Boolean(card.dataset.image);
  const workflowImage = byId('workflowCanvas');
  workflowImage.src = card.dataset.image || '';
  workflowImage.alt = hasImage
    ? 'n8n workflow connecting a webhook, company research, an AI agent, and response and file outputs'
    : '';
  byId('detailVisual').hidden = !hasImage;
  detail.classList.toggle('text-only', !hasImage);
  byId('workflowCaption').textContent = card.dataset.caption;
  byId('notesList').replaceChildren(...[card.dataset.noteOne, card.dataset.noteTwo].map(note => {
    const item = document.createElement('li');
    item.textContent = note;
    return item;
  }));
  byId('buildNotes').hidden = true;
  byId('showNotes').setAttribute('aria-expanded', 'false');
  byId('showNotes').querySelector('.button-label').textContent = 'See build notes';
  detail.hidden = false;
  detail.classList.remove('replay');
  void detail.offsetWidth;
  detail.classList.add('replay');
  if (shouldScroll && window.matchMedia('(max-width: 680px)').matches) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
projectCards.forEach(card => card.addEventListener('click', () => {
  if (selectedProject === card && !detail.hidden) {
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else openProject(card, true);
}));

const filterButtons = [...document.querySelectorAll('.filter-button')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  const visibleCards = projectCards.filter(card => {
    const visible = activeFilter === 'all' || card.dataset.status === activeFilter;
    card.hidden = !visible;
    return visible;
  });
  if (visibleCards.length && selectedProject?.hidden) openProject(visibleCards[0], false);
  document.querySelector('[data-filter="all"] span').textContent = String(projectCards.length);
}));

byId('closeDetail').addEventListener('click', () => {
  const cardToRefocus = selectedProject;
  detail.hidden = true;
  projectCards.forEach(card => card.setAttribute('aria-expanded', 'false'));
  projectCards.forEach(card => card.classList.remove('selected'));
  selectedProject = null;
  cardToRefocus?.focus();
});
byId('showNotes').addEventListener('click', () => {
  const notes = byId('buildNotes');
  notes.hidden = !notes.hidden;
  byId('showNotes').setAttribute('aria-expanded', String(!notes.hidden));
  byId('showNotes').querySelector('.button-label').textContent = notes.hidden ? 'See build notes' : 'Hide build notes';
});

const modal = byId('imageModal');
const modalClose = byId('modalClose');
const workflowButton = byId('workflowImageButton');
let modalTrigger = null;
function openImageModal() {
  const canvas = byId('workflowCanvas').cloneNode(true);
  canvas.removeAttribute('id');
  const gridPattern = canvas.querySelector('#gridDots');
  if (gridPattern) {
    gridPattern.id = 'modalGridDots';
    canvas.querySelectorAll('[fill="url(#gridDots)"]').forEach(shape => shape.setAttribute('fill', 'url(#modalGridDots)'));
  }
  canvas.querySelector('.placeholder-stamp')?.remove();
  byId('modalContent').replaceChildren(canvas);
  modalTrigger = workflowButton;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeImageModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  modalTrigger?.focus();
}
workflowButton.addEventListener('click', openImageModal);
modalClose.addEventListener('click', closeImageModal);
modal.addEventListener('click', e => { if (e.target === modal) closeImageModal(); });
modal.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeImageModal();
    return;
  }
  if (event.key !== 'Tab') return;
  event.preventDefault();
  modalClose.focus();
});

const themeToggle = byId('themeToggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
function setTheme(theme, persist = true) {
  const dark = theme === 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.classList.toggle('dark-mode', dark);
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeColor.content = dark ? '#0A0E1A' : '#FAFBFC';
  if (persist) localStorage.setItem('portfolio-theme', theme);
}
const savedTheme = localStorage.getItem('portfolio-theme');
const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
  ? savedTheme
  : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(initialTheme, false);
themeToggle.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
});

const scrollTop = byId('scrollTop');
function updateScrollTopVisibility() {
  scrollTop.classList.toggle('is-visible', window.scrollY > 400);
}
window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateScrollTopVisibility();

const menuToggle = byId('menuToggle');
const nav = document.querySelector('.nav-links');
function closeMenu() {
  nav.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeImageModal();
  if (event.key === 'Escape' && nav.classList.contains('active')) {
    closeMenu();
    menuToggle.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) closeMenu();
});

// Highlight the current section in the navigation while scrolling.
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = ['home', 'journey', 'projects'].map(id => document.getElementById(id));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

