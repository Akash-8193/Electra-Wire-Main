import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const wrapWordsInSpans = (el) => {
    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.nodeValue.trim() !== '' && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
            textNodes.push(node);
        }
    }
    
    const wordsSpans = [];
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const fragment = document.createDocumentFragment();
        
        const parts = text.split(/(\s+)/);
        parts.forEach(part => {
            if (part.trim() === '') {
                fragment.appendChild(document.createTextNode(part));
            } else {
                const span = document.createElement('span');
                span.textContent = part;
                span.style.display = 'inline-block';
                fragment.appendChild(span);
                wordsSpans.push(span);
            }
        });
        textNode.parentNode.replaceChild(fragment, textNode);
    });
    return wordsSpans;
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

export const useGlobalAnimations = (rootRef) => {
    const location = useLocation();

    useEffect(() => {
        if (!rootRef.current) return;

        const ctx = gsap.context((self) => {
            const q = gsap.utils.selector(rootRef);
            const scrollerEl = rootRef.current;

            const sections = q("section");
            const heroSection = sections.find(s => s.id === "हीरो सेक्शन" || s.parentElement?.id === "हीरो सेक्शन" || s.classList.contains('min-h-screen'));

            if (heroSection) {
                gsap.fromTo(heroSection,
                    { opacity: 0 },
                    { 
                        opacity: 1, 
                        duration: 1, 
                        ease: "power2.out", 
                        immediateRender: false,
                        clearProps: "opacity",
                        force3D: true,
                        onComplete: () => gsap.set(heroSection, { opacity: 1, visibility: "visible" })
                    }
                );

                const headline = heroSection.querySelector("h1");
                const subtext = heroSection.querySelector("p");
                const ctas = heroSection.querySelectorAll("a[data-slot='button'], button[data-slot='button']");

                if (headline) {
                    gsap.fromTo(headline, 
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(headline, { opacity: 1, visibility: "visible" }) }
                    );
                }

                if (subtext) {
                    gsap.fromTo(subtext, 
                        { y: 15, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(subtext, { opacity: 1, visibility: "visible" }) }
                    );
                }

                if (ctas.length > 0) {
                    gsap.fromTo(ctas, 
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, delay: 0.6, stagger: 0.1, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(ctas, { opacity: 1, visibility: "visible" }) }
                    );
                }
            }

            sections.forEach(section => {
                if (section === heroSection) return;
                gsap.fromTo(section, 
                    { y: 40, opacity: 0 },
                    { scrollTrigger: { trigger: section, scroller: scrollerEl, start: "top 90%", toggleActions: "play none none none", once: true, fastScrollEnd: true }, y: 0, opacity: 1, duration: 1, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(section, { opacity: 1, visibility: "visible" }) }
                );
            });

            q("h3").forEach(el => {
                if (el.dataset.animated === 'true') return;
                el.dataset.animated = 'true';
                gsap.fromTo(el, 
                    { y: 20, opacity: 0 },
                    { scrollTrigger: { trigger: el, scroller: scrollerEl, start: "top 90%", once: true, fastScrollEnd: true }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(el, { opacity: 1, visibility: "visible" }) }
                );
            });

            q("h2").forEach(el => {
                if (el.dataset.animatedH2 === 'true') return;
                el.dataset.animatedH2 = 'true';
                gsap.fromTo(el, 
                    { x: 40, opacity: 0 },
                    { scrollTrigger: { trigger: el, scroller: scrollerEl, start: "top 90%", once: true, fastScrollEnd: true }, x: 0, opacity: 1, duration: 1, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(el, { opacity: 1, visibility: "visible" }) }
                );
            });

            const grids = q(".grid");
            grids.forEach(grid => {
                if (grid.closest('header') || grid.closest('footer')) return;
                const cards = Array.from(grid.children).filter(el => el.tagName === 'DIV' && el.children.length > 0);
                if (cards.length > 0 && cards.length < 30) {
                    gsap.fromTo(cards, 
                        { y: 30, opacity: 0 },
                        { scrollTrigger: { trigger: grid, scroller: scrollerEl, start: "top 88%", once: true, fastScrollEnd: true }, y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out", immediateRender: false, clearProps: "opacity,transform", force3D: true, onComplete: () => gsap.set(cards, { opacity: 1, visibility: "visible" }) }
                    );
                }
            });

            const hoverCards = q(".gsap-card, .grid > div").filter(el => !el.closest('header') && !el.closest('footer') && el.children.length > 0);
            hoverCards.forEach(card => {
                card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
                card.style.willChange = 'transform, box-shadow';
                const onEnter = () => gsap.to(card, { scale: 1.04, y: -4, boxShadow: "0 12px 25px rgba(0,0,0,0.08)", duration: 0.4, ease: "power2.out", force3D: true });
                const onLeave = () => gsap.to(card, { scale: 1, y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.4, ease: "power2.out", force3D: true });
                card.addEventListener('mouseenter', onEnter);
                card.addEventListener('mouseleave', onLeave);
                self.add(() => { card.removeEventListener('mouseenter', onEnter); card.removeEventListener('mouseleave', onLeave); });
            });

            q("img").forEach(img => {
                if (img.dataset.animatedImg === 'true' || img.closest('header')) return;
                img.dataset.animatedImg = 'true';
                gsap.fromTo(img,
                    { opacity: 0 },
                    { scrollTrigger: { trigger: img, scroller: scrollerEl, start: "top 95%", once: true, fastScrollEnd: true }, opacity: 1, duration: 1, ease: "power2.out", immediateRender: false, clearProps: "opacity", force3D: true, onComplete: () => gsap.set(img, { opacity: 1, visibility: "visible" }) }
                );
            });

            q("a[data-slot='button'], button[data-slot='button']").forEach(btn => {
                gsap.set(btn, { opacity: 1, visibility: 'visible' });
                btn.style.willChange = 'transform, box-shadow';
                const onEnter = () => gsap.to(btn, { scale: 1.03, y: -2, boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out", force3D: true });
                const onLeave = () => gsap.to(btn, { scale: 1, y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out", force3D: true });
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => { btn.removeEventListener('mouseenter', onEnter); btn.removeEventListener('mouseleave', onLeave); });
            });

            q(".whatsapp-float").forEach(btn => {
                btn.style.willChange = 'transform, box-shadow';
                gsap.to(btn, { y: -20, duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1, force3D: true });
                const onEnter = () => gsap.to(btn, { scale: 1.1, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)", duration: 0.3, ease: "power2.out", overwrite: "auto", force3D: true });
                const onLeave = () => gsap.to(btn, { scale: 1, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out", overwrite: "auto", force3D: true });
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => { btn.removeEventListener('mouseenter', onEnter); btn.removeEventListener('mouseleave', onLeave); });
            });

            const paragraphs = q("p");
            paragraphs.forEach(p => {
                if (
                    p.dataset.animatedTyping === 'true' || 
                    p.closest('header') || 
                    p.closest('.hero-section') ||
                    p.closest('#customer-reviews') ||
                    p.closest('#client-testimonials') ||
                    p.closest('.gsap-card')
                ) return; 
                
                p.dataset.originalHtml = p.innerHTML;
                p.dataset.animatedTyping = 'true';

                const words = wrapWordsInSpans(p);
                
                if (words.length > 0) {
                    words.forEach((w, i) => {
                        w.style.opacity = '0';
                        w.style.transition = 'opacity 0.2s ease-out';
                        w.style.transitionDelay = `${(i * 0.025).toFixed(3)}s`;
                    });

                    ScrollTrigger.create({
                        trigger: p,
                        scroller: scrollerEl,
                        start: "top 90%",
                        once: true,
                        onEnter: () => {
                            words.forEach(w => {
                                w.style.opacity = '1';
                            });
                            
                            setTimeout(() => {
                                if (p.dataset.animatedTyping === 'true') {
                                    words.forEach(w => {
                                        w.style.transition = 'none';
                                        w.style.transitionDelay = '0s';
                                    });
                                }
                            }, (words.length * 0.025 + 0.3) * 1000);
                        }
                    });
                }
            });

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
                        scrollTrigger: { trigger: el, scroller: scrollerEl, start: "top 90%", once: true, fastScrollEnd: true },
                        val: targetNum, duration: 2.5, ease: "power2.out",
                        onUpdate: () => { span.textContent = Math.floor(obj.val); },
                        onComplete: () => { span.textContent = targetNum; }
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
