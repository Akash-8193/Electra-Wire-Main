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
    if (!root || !carouselTitle) return undefined;

    const section = findSectionByHeading(root, carouselTitle);
    if (!section) return undefined;

    const region = section.querySelector('[role="region"][aria-roledescription="carousel"]');
    const track = getCarouselTrack(section);
    if (!region || !track) return undefined;

    const slides = getCarouselSlides(track);
    const prevButtons = Array.from(section.querySelectorAll('button[aria-label="Previous"]'));
    const nextButtons = Array.from(section.querySelectorAll('button[aria-label="Next"]'));

    // Ensure track has smooth scrolling
    track.style.scrollBehavior = 'smooth';

    const getStep = () => {
      const firstSlide = slides[0];
      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      return firstSlide ? firstSlide.getBoundingClientRect().width + gap : 0;
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const currentScroll = track.scrollLeft;
      
      const isStart = currentScroll <= 10;
      const isEnd = currentScroll >= maxScroll - 10;

      prevButtons.forEach((button) => {
        button.disabled = isStart;
        button.setAttribute('aria-disabled', String(isStart));
      });

      nextButtons.forEach((button) => {
        button.disabled = isEnd;
        button.setAttribute('aria-disabled', String(isEnd));
      });
    };

    const onPrev = () => {
      track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    };

    const onNext = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 10) {
         track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
         track.scrollBy({ left: getStep(), behavior: 'smooth' });
      }
    };

    const autoSlideInterval = setInterval(onNext, 5000);

    prevButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        onPrev();
      });
    });

    nextButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        onNext();
      });
    });

    track.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();

    return () => {
      clearInterval(autoSlideInterval);
      track.removeEventListener('scroll', updateButtons);
      prevButtons.forEach((button) => button.removeEventListener('click', onPrev));
      nextButtons.forEach((button) => button.removeEventListener('click', onNext));
    };
  }, [carouselTitle, rootRef]);

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
