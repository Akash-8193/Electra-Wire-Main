import { useEffect, useState } from 'react';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const normalize = (value) => value.replace(/\s+/g, ' ').trim();

const findSectionByHeading = (root, headingText) => {
  const headings = Array.from(root.querySelectorAll('h1, h2, h3'));
  const heading = headings.find((element) => normalize(element.textContent || '') === headingText);
  return heading?.closest('section') ?? null;
};

const getCarouselTrack = (section) =>
  section?.querySelector('[role="region"][aria-roledescription="carousel"] .flex.-ml-3, [role="region"][aria-roledescription="carousel"] .flex.-ml-4') ?? null;

const getCarouselSlides = (track) =>
  Array.from(track.querySelectorAll('[role="group"][aria-roledescription="slide"]'));

export const usePageInteractions = ({ rootRef, carouselTitle, faqTitle }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState(null);

  useEffect(() => {
    setCarouselIndex(0);
  }, [carouselTitle]);

  useEffect(() => {
    setFaqIndex(null);
  }, [faqTitle]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !carouselTitle) {
      return undefined;
    }

    const section = findSectionByHeading(root, carouselTitle);
    if (!section) {
      return undefined;
    }

    const region = section.querySelector('[role="region"][aria-roledescription="carousel"]');
    const track = getCarouselTrack(section);
    if (!region || !track) {
      return undefined;
    }

    const slides = getCarouselSlides(track);
    const prevButtons = Array.from(section.querySelectorAll('button[aria-label="Previous"]'));
    const nextButtons = Array.from(section.querySelectorAll('button[aria-label="Next"]'));

    const applyTransform = () => {
      const firstSlide = slides[0];
      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      const step = firstSlide ? firstSlide.getBoundingClientRect().width + gap : 0;
      const maxIndex = Math.max(0, slides.length - 1);
      const nextIndex = clamp(carouselIndex, 0, maxIndex);

      region.style.overflow = 'hidden';
      region.style.position = 'relative';
      track.style.transition = 'transform 320ms ease';
      track.style.willChange = 'transform';
      track.style.transform = `translate3d(${-nextIndex * step}px, 0, 0)`;

      prevButtons.forEach((button) => {
        button.disabled = nextIndex === 0;
        button.setAttribute('aria-disabled', String(nextIndex === 0));
      });

      nextButtons.forEach((button) => {
        button.disabled = nextIndex === maxIndex;
        button.setAttribute('aria-disabled', String(nextIndex === maxIndex));
      });
    };

    const onPrev = () => setCarouselIndex((current) => clamp(current - 1, 0, slides.length - 1));
    const onNext = () => setCarouselIndex((current) => {
      const next = current + 1;
      return next >= slides.length ? 0 : next; // Loop back to start
    });

    // Auto-slide logic
    const autoSlideInterval = setInterval(onNext, 5000); // Advance every 5 seconds

    prevButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on interaction
        onPrev();
      });
    });

    nextButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on interaction
        onNext();
      });
    });

    const handleResize = () => applyTransform();
    applyTransform();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(autoSlideInterval);
      prevButtons.forEach((button) => {
        button.removeEventListener('click', onPrev);
      });

      nextButtons.forEach((button) => {
        button.removeEventListener('click', onNext);
      });

      window.removeEventListener('resize', handleResize);
    };
  }, [carouselIndex, carouselTitle, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !faqTitle) {
      return undefined;
    }

    const section = findSectionByHeading(root, faqTitle);
    if (!section) {
      return undefined;
    }

    const buttons = Array.from(section.querySelectorAll('h3 > button[type="button"]'));
    const items = buttons
      .map((button) => button.closest('div[data-state]'))
      .filter(Boolean);

    const applyState = () => {
      buttons.forEach((button, index) => {
        const isOpen = faqIndex === index;
        const item = items[index];
        const content = item?.querySelector('[role="region"]');
        const heading = button.parentElement;
        const icon = button.querySelector('svg');

        button.setAttribute('aria-expanded', String(isOpen));
        button.dataset.state = isOpen ? 'open' : 'closed';
        heading?.setAttribute('data-state', isOpen ? 'open' : 'closed');
        item?.setAttribute('data-state', isOpen ? 'open' : 'closed');

        if (content) {
          content.dataset.state = isOpen ? 'open' : 'closed';
          content.hidden = !isOpen;
        }

        if (icon) {
          icon.style.transform = isOpen ? 'rotate(180deg)' : '';
        }
      });
    };

    const handlers = buttons.map((button, index) => {
      const onClick = () => setFaqIndex((current) => (current === index ? null : index));
      button.addEventListener('click', onClick);
      button.setAttribute('aria-expanded', String(faqIndex === index));
      return { button, onClick };
    });

    applyState();

    return () => {
      handlers.forEach(({ button, onClick }) => {
        button.removeEventListener('click', onClick);
      });
    };
  }, [faqIndex, faqTitle, rootRef]);
};
