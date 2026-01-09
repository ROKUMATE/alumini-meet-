import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  duration?: number;
  delay?: number;
  yStart?: number;
  opacityStart?: number;
  ease?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    yStart = 100,
    opacityStart = 0,
    ease = 'power3.out'
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Initial state
    gsap.set(element, {
      y: yStart,
      opacity: opacityStart
    });

    // Animation on scroll
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [duration, delay, yStart, opacityStart, ease]);

  return ref;
};

export const useStaggerAnimation = (options: ScrollAnimationOptions & { stagger?: number } = {}) => {
  const {
    stagger = 0.2,
    ...rest
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.querySelectorAll('[data-animate]');
    if (children.length === 0) return;

    // Initial state
    gsap.set(children, {
      y: rest.yStart || 100,
      opacity: rest.opacityStart || 0
    });

    // Staggered animation
    gsap.to(children, {
      y: 0,
      opacity: 1,
      duration: rest.duration || 0.8,
      stagger: stagger,
      ease: rest.ease || 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [rest, stagger]);

  return ref;
};

interface TimelineAnimationOptions {
  entrance?: {
    duration?: number;
    ease?: string;
  };
  exit?: {
    duration?: number;
    ease?: string;
  };
  toggleActions?: string;
}

export const useTimelineAnimation = (options: TimelineAnimationOptions = {}) => {
  const {
    entrance = { duration: 0.8, ease: 'power3.out' },
    exit = { duration: 0.6, ease: 'power2.in' },
    toggleActions = 'play none none reverse'
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: toggleActions,
          markers: false
        }
      });

      // Entrance animation sequence
      tl.fromTo(element, 
        {
          opacity: 0,
          y: 100,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: entrance.duration,
          ease: entrance.ease
        }
      );

      // Optional: Add exit animation
      if (toggleActions.includes('reverse')) {
        tl.to(element, {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: exit.duration,
          ease: exit.ease
        }, '+=0');
      }
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [entrance, exit, toggleActions]);

  return ref;
};

interface SequenceAnimationOptions {
  sequence?: Array<{
    selector: string;
    from?: gsap.TweenVars;
    to: gsap.TweenVars;
    delay?: number;
  }>;
  stagger?: number;
}

export const useSequenceAnimation = (options: SequenceAnimationOptions = {}) => {
  const { sequence = [], stagger = 0.15 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || sequence.length === 0) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Add each animation to the timeline
      sequence.forEach((anim, index) => {
        const targets = element.querySelectorAll(anim.selector);
        if (targets.length > 0) {
          tl.fromTo(
            targets,
            anim.from || { opacity: 0, y: 50 },
            {
              ...anim.to,
              stagger: stagger
            },
            index === 0 ? 0 : `-=${0.4}` // Overlap animations slightly
          );
        }
      });
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [sequence, stagger]);

  return ref;
};
