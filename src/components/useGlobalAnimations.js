import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const wrapTextInSpans = (el) => {
    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.nodeValue.trim() !== '' && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
            textNodes.push(node);
        }
    }
    
    const chars = [];
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === ' ' || char === '\n' || char === '\t') {
                fragment.appendChild(document.createTextNode(char));
            } else {
                const span = document.createElement('span');
                span.textContent = char;
                fragment.appendChild(span);
                chars.push(span);
            }
        }
        textNode.parentNode.replaceChild(fragment, textNode);
    });
    return chars;
};

const wrapNumbersInSpans = (el) => {
    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.nodeValue.trim() !== '' && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
            if (/\b\d+\b/.test(node.nodeValue)) {
                textNodes.push(node);
            }
        }
    }
    
    const numberSpans = [];
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const fragment = document.createDocumentFragment();
        
        const parts = text.split(/(\b\d+\b)/);
        parts.forEach(part => {
            if (/\b\d+\b/.test(part)) {
                const span = document.createElement('span');
                span.textContent = part;
                span.className = 'gsap-stat-number-dynamic';
                span.style.fontVariantNumeric = 'tabular-nums';
                fragment.appendChild(span);
                numberSpans.push(span);
            } else if (part !== '') {
                fragment.appendChild(document.createTextNode(part));
            }
        });
        textNode.parentNode.replaceChild(fragment, textNode);
    });
    return numberSpans;
};

/**
 * useGlobalAnimations
 * Premium minimal animations inspired by modern e-commerce (TwoLeavesTea.com style).
 */
export const useGlobalAnimations = (rootRef) => {
    const location = useLocation();

    useEffect(() => {
        if (!rootRef.current) return;

        const ctx = gsap.context((self) => {
            const q = gsap.utils.selector(rootRef);
            const scrollerEl = rootRef.current;

            // 1. NAVBAR BEHAVIOR


            // 2. HERO SECTION ENTRANCE
            const sections = q("section");
            const heroSection = sections.find(s => s.id === "हीरो सेक्शन" || s.parentElement?.id === "हीरो सेक्शन" || s.classList.contains('min-h-screen'));

            if (heroSection) {
                // Smooth section entrance on load - no scale to prevent layout shift
                gsap.fromTo(heroSection,
                    { opacity: 0 },
                    { 
                        opacity: 1, 
                        duration: 1, 
                        ease: "power2.out", 
                        immediateRender: false,
                        clearProps: "opacity",
                        onComplete: () => gsap.set(heroSection, { opacity: 1, visibility: "visible" })
                    }
                );

                const headline = heroSection.querySelector("h1");
                const subtext = heroSection.querySelector("p");
                const ctas = heroSection.querySelectorAll("a[data-slot='button'], button[data-slot='button']");

                if (headline) {
                    gsap.fromTo(headline, 
                        { y: 20, opacity: 0 },
                        { 
                            y: 0, 
                            opacity: 1, 
                            duration: 0.8, 
                            delay: 0.2, 
                            ease: "power2.out", 
                            immediateRender: false,
                            clearProps: "opacity,transform",
                            onComplete: () => gsap.set(headline, { opacity: 1, visibility: "visible" })
                        }
                    );
                }

                if (subtext) {
                    gsap.fromTo(subtext, 
                        { y: 15, opacity: 0 },
                        { 
                            y: 0, 
                            opacity: 1, 
                            duration: 0.8, 
                            delay: 0.4, 
                            ease: "power2.out", 
                            immediateRender: false,
                            clearProps: "opacity,transform",
                            onComplete: () => gsap.set(subtext, { opacity: 1, visibility: "visible" })
                        }
                    );
                }

                if (ctas.length > 0) {
                    gsap.fromTo(ctas, 
                        { y: 10, opacity: 0 },
                        { 
                            y: 0, 
                            opacity: 1, 
                            duration: 0.6, 
                            delay: 0.6, 
                            stagger: 0.1, 
                            ease: "power2.out",
                            immediateRender: false,
                            clearProps: "opacity,transform",
                            onComplete: () => gsap.set(ctas, { opacity: 1, visibility: "visible" })
                        }
                    );
                }
            }

            // 3. GLOBAL SCROLL REVEAL: SECTIONS
            // Sections fade in and move slightly upward
            sections.forEach(section => {
                if (section === heroSection) return;

                gsap.fromTo(section, 
                    { y: 40, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: section,
                            scroller: scrollerEl,
                            start: "top 90%",
                            toggleActions: "play none none none",
                            once: true
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        immediateRender: false,
                        clearProps: "opacity,transform",
                        onComplete: () => gsap.set(section, { opacity: 1, visibility: "visible" })
                    }
                );
            });

            // 4. TEXT REVEAL (PREMIUM STAGGER)
            // H3 headings upward fade
            q("h3").forEach(el => {
                if (el.dataset.animated === 'true') return;
                el.dataset.animated = 'true';

                gsap.fromTo(el, 
                    { y: 20, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: el,
                            scroller: scrollerEl,
                            start: "top 90%",
                            once: true
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        immediateRender: false,
                        clearProps: "opacity,transform",
                        onComplete: () => gsap.set(el, { opacity: 1, visibility: "visible" })
                    }
                );
            });

            // 4b. H2 HEADINGS SLIDE-IN FROM RIGHT
            q("h2").forEach(el => {
                if (el.dataset.animatedH2 === 'true') return;
                el.dataset.animatedH2 = 'true';

                gsap.fromTo(el, 
                    { x: 40, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: el,
                            scroller: scrollerEl,
                            start: "top 90%",
                            once: true
                        },
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        immediateRender: false,
                        clearProps: "opacity,transform",
                        onComplete: () => gsap.set(el, { opacity: 1, visibility: "visible" })
                    }
                );
            });

            // 5. CARD / PRODUCT GRID
            // Staggered upward fade on scroll + hover transforms
            const grids = q(".grid");
            grids.forEach(grid => {
                if (grid.closest('header') || grid.closest('footer')) return;

                const cards = Array.from(grid.children).filter(el =>
                    el.tagName === 'DIV' && el.children.length > 0
                );

                if (cards.length > 0 && cards.length < 30) {
                    gsap.fromTo(cards, 
                        { y: 30, opacity: 0 },
                        {
                            scrollTrigger: {
                                trigger: grid,
                                scroller: scrollerEl,
                                start: "top 88%",
                                once: true
                            },
                            y: 0,
                            opacity: 1,
                            stagger: 0.1,
                            duration: 0.8,
                            ease: "power2.out",
                            immediateRender: false,
                            clearProps: "opacity,transform",
                            onComplete: () => gsap.set(cards, { opacity: 1, visibility: "visible" })
                        }
                    );
                }
            });

            // Interactive Card Hover Effects
            const hoverCards = q(".gsap-card, .grid > div").filter(el =>
                !el.closest('header') && !el.closest('footer') && el.children.length > 0
            );

            hoverCards.forEach(card => {
                card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

                const onEnter = () => {
                    gsap.to(card, {
                        scale: 1.04,
                        y: -4,
                        boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                const onLeave = () => {
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };

                card.addEventListener('mouseenter', onEnter);
                card.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    card.removeEventListener('mouseenter', onEnter);
                    card.removeEventListener('mouseleave', onLeave);
                });
            });

            // 6. IMAGE ANIMATIONS
            // Subtle fade reveal on scroll (NO SCALE to prevent resizing jumps)
            q("img").forEach(img => {
                if (img.dataset.animatedImg === 'true') return;
                if (img.closest('header')) return;
                img.dataset.animatedImg = 'true';

                gsap.fromTo(img,
                    { opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: img,
                            scroller: scrollerEl,
                            start: "top 95%",
                            once: true
                        },
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        immediateRender: false,
                        clearProps: "opacity",
                        onComplete: () => gsap.set(img, { opacity: 1, visibility: "visible" })
                    }
                );
            });

            // 7. BUTTON INTERACTIONS
            // CTA Button Hover Effects - Enhanced Interactivity
            q("a[data-slot='button'], button[data-slot='button']").forEach(btn => {
                // Ensure initial visibility if not already set by entrance animations
                gsap.set(btn, { opacity: 1, visibility: 'visible' });

                const onEnter = () => {
                    gsap.to(btn, { 
                        scale: 1.03, 
                        y: -2,
                        boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)",
                        duration: 0.3, 
                        ease: "power2.out" 
                    });
                };
                const onLeave = () => {
                    gsap.to(btn, { 
                        scale: 1, 
                        y: 0,
                        boxShadow: "none",
                        duration: 0.3, 
                        ease: "power2.out" 
                    });
                };
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    btn.removeEventListener('mouseenter', onEnter);
                    btn.removeEventListener('mouseleave', onLeave);
                });
            });

            // 8. WHATSAPP BUTTON ANIMATION
            q(".whatsapp-float").forEach(btn => {
                // Continuous slow floating animation
                gsap.to(btn, {
                    y: -20,
                    duration: 2,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });

                // Custom hover for the WhatsApp button
                const onEnter = () => {
                    gsap.to(btn, { scale: 1.1, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)", duration: 0.3, ease: "power2.out", overwrite: "auto" });
                };
                const onLeave = () => {
                    gsap.to(btn, { scale: 1, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out", overwrite: "auto" });
                };
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    btn.removeEventListener('mouseenter', onEnter);
                    btn.removeEventListener('mouseleave', onLeave);
                });
            });

            // 9. TYPEWRITER PARAGRAPHS
            const paragraphs = q("p");
            paragraphs.forEach(p => {
                if (p.dataset.animatedTyping === 'true') return;
                if (p.closest('header')) return; 
                
                p.dataset.originalHtml = p.innerHTML;
                p.dataset.animatedTyping = 'true';

                const chars = wrapTextInSpans(p);
                
                if (chars.length > 0) {
                    gsap.fromTo(chars, 
                        { opacity: 0 },
                        {
                            scrollTrigger: {
                                trigger: p,
                                scroller: scrollerEl,
                                start: "top 90%",
                                once: true
                            },
                            opacity: 1,
                            duration: 0.1,
                            stagger: 0.015,
                            ease: "power1.inOut",
                            immediateRender: false,
                            onComplete: () => gsap.set(chars, { opacity: 1, visibility: "visible", clearProps: "all" })
                        }
                    );
                }
            });

            // 10. COUNT-UP STATS
            const statElements = q("h1, h2, h3");
            statElements.forEach(el => {
                if (el.dataset.animatedCount === 'true') return;
                
                el.dataset.originalHtmlCount = el.innerHTML;
                el.dataset.animatedCount = 'true';

                const numSpans = wrapNumbersInSpans(el);
                
                numSpans.forEach(span => {
                    const targetNum = parseInt(span.textContent, 10);
                    if (isNaN(targetNum)) return;
                    
                    const obj = { val: 0 };
                    gsap.to(obj, {
                        scrollTrigger: {
                            trigger: el,
                            scroller: scrollerEl,
                            start: "top 90%",
                            once: true
                        },
                        val: targetNum,
                        duration: 2.5,
                        ease: "power2.out",
                        onUpdate: () => {
                            span.textContent = Math.floor(obj.val);
                        },
                        onComplete: () => {
                            span.textContent = targetNum;
                        }
                    });
                });
            });

        }, rootRef);

        return () => {
            ctx.revert();
            if (rootRef.current) {
                const animatedParagraphs = rootRef.current.querySelectorAll("p[data-animated-typing='true']");
                animatedParagraphs.forEach(p => {
                    if (p.dataset.originalHtml) {
                        p.innerHTML = p.dataset.originalHtml;
                        p.dataset.animatedTyping = 'false';
                    }
                });
                
                const animatedCounts = rootRef.current.querySelectorAll("[data-animated-count='true']");
                animatedCounts.forEach(el => {
                    if (el.dataset.originalHtmlCount) {
                        el.innerHTML = el.dataset.originalHtmlCount;
                        el.dataset.animatedCount = 'false';
                    }
                });
            }
            ScrollTrigger.refresh();
        };
    }, [location, rootRef]);
};
