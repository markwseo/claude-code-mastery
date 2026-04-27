/* 웹 포트폴리오 메인 JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // ========== 모바일 메뉴 토글 ==========
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ========== 스크롤 시 네비게이션 배경 변경 ==========
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ========== 활성 메뉴 링크 하이라이트 (IntersectionObserver) ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50% 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('text-violet-400', 'border-b-2', 'border-violet-400');
          if (link.getAttribute('href') === '#' + activeId) {
            link.classList.add('text-violet-400', 'border-b-2', 'border-violet-400');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ========== 페이드인 업 애니메이션 (스크롤 시) ==========
  const fadeElements = document.querySelectorAll('.fade-in-up');

  const fadeObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, fadeObserverOptions);

  fadeElements.forEach(element => fadeObserver.observe(element));

  // ========== 프로젝트 모달 ==========
  const projectCards = document.querySelectorAll('.project-card');
  const modals = document.querySelectorAll('.project-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal');

  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const modal = document.getElementById('modal-' + projectId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.project-modal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // 모달 오버레이 클릭 시 닫기
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // ========== 스킬 프로그레스 바 애니메이션 ==========
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserverOptions = {
    threshold: 0.3
  };

  const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, skillObserverOptions);

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ========== CV 다운로드 ==========
  const cvDownloadBtn = document.getElementById('cv-download');
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function() {
      // assets/cv.pdf 파일 다운로드 (파일이 있을 경우)
      const link = document.createElement('a');
      link.href = 'assets/cv.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // ========== 이메일 링크 ==========
  const emailLink = document.getElementById('email-link');
  const emailLinkSocial = document.getElementById('email-link-social');

  const handleEmailClick = function(e) {
    e.preventDefault();
    window.location.href = 'mailto:example@example.com';
  };

  if (emailLink) {
    emailLink.addEventListener('click', handleEmailClick);
  }
  if (emailLinkSocial) {
    emailLinkSocial.addEventListener('click', handleEmailClick);
  }

  console.log('✅ 포트폴리오 스크립트 로드 완료!');
});
