(() => {
  'use strict';

  // 1. Mobile nav drawer
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (menuToggle && mobileDrawer) {
    const closeMenu = () => {
      mobileDrawer.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', () => {
      const open = mobileDrawer.hidden;
      mobileDrawer.hidden = !open;
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileDrawer.querySelectorAll('a, button').forEach((el) => el.addEventListener('click', closeMenu));
  }

  // 2. M07 Partners Carousel Arrows
  const partnersTrack = document.getElementById('partnersTrack');
  const partnerPrev = document.getElementById('partnerPrev');
  const partnerNext = document.getElementById('partnerNext');
  if (partnersTrack && partnerPrev && partnerNext) {
    const scrollByCard = (dir) => {
      const slide = partnersTrack.querySelector('.partner-slide');
      const step = slide ? slide.getBoundingClientRect().width + 20 : 420;
      partnersTrack.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    partnerPrev.addEventListener('click', () => scrollByCard(-1));
    partnerNext.addEventListener('click', () => scrollByCard(1));
  }

  // 3. G3 Sticky Bar (visible after Hero CTA scrolls out)
  const stickyBar = document.getElementById('stickyBar');
  const heroCtaAnchor = document.getElementById('heroCtaAnchor');
  if (stickyBar && heroCtaAnchor && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const show = entries[0].boundingClientRect.bottom <= 0;
        stickyBar.inert = !show;
        stickyBar.classList.toggle('is-visible', show);
        stickyBar.setAttribute('aria-hidden', String(!show));
      },
      { threshold: 0.1 }
    );
    observer.observe(heroCtaAnchor);
  }

  // 4. G4 Register Modal
  const modal = document.getElementById('registerModal');
  const modalClose = document.getElementById('modalClose');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const modalContext = document.getElementById('modalContext');
  const modalFormView = document.getElementById('modalFormView');
  const modalSuccessView = document.getElementById('modalSuccessView');
  const modalSuccessText = document.getElementById('modalSuccessText');
  const registerForm = document.getElementById('registerForm');

  let lastTrigger = null;

  function openModal(triggerEl) {
    if (!modal) return;
    lastTrigger = triggerEl || null;
    if (modalFormView) modalFormView.hidden = false;
    if (modalSuccessView) modalSuccessView.hidden = true;
    if (modalContext) {
      modalContext.textContent = '此表单仅供体验。请使用示例资料，信息仅在本页验证。';
    }
    modal.hidden = false;
    for (const child of document.body.children) {
      if (child !== modal && child.tagName !== 'SCRIPT') child.inert = true;
    }
    document.body.classList.add('is-modal-open');
    const firstInput = document.getElementById('regName');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    for (const child of document.body.children) child.inert = false;
    if (stickyBar) stickyBar.inert = !stickyBar.classList.contains('is-visible');
    document.body.classList.remove('is-modal-open');
    if (lastTrigger?.closest('[hidden]')) lastTrigger = menuToggle;
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      ['errName', 'errEmail', 'errPhone', 'errRisk'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
      });

      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const phone = document.getElementById('regPhone').value.trim();
      const risk = document.getElementById('regRisk').checked;

      let ok = true;
      if (!name) {
        document.getElementById('errName').textContent = '请填写称呼';
        ok = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('errEmail').textContent = '请输入有效邮箱';
        ok = false;
      }
      if (!/^\d{6,15}$/.test(phone.replace(/[ -]/g, ''))) {
        document.getElementById('errPhone').textContent = '请输入有效手机号';
        ok = false;
      }
      if (!risk) {
        document.getElementById('errRisk').textContent = '请先勾选风险确认';
        ok = false;
      }
      if (!ok) return;

      if (modalSuccessText) modalSuccessText.textContent = '示例资料已通过本页校验。未创建账户或发送个人信息。';
      if (modalFormView) modalFormView.hidden = true;
      if (modalSuccessView) modalSuccessView.hidden = false;
      modalDoneBtn.focus();
      registerForm.reset();
    });
  }
})();
