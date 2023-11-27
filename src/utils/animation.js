export class Animation {
  constructor(gsap) {
    this.gsap = gsap;
  }

  handleHorizontalScroll(scrollContainer) {
    // Handle overall horizontal scroll
    let sections = this.gsap.utils.toArray(".section");
    this.gsap.to(sections, {
      x: () =>
        -(
          scrollContainer.current.scrollWidth -
          document.documentElement.clientWidth
        ) + "px",
      ease: "sine",
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 1,
        end: () =>
          scrollContainer.current.scrollWidth -
          document.documentElement.clientWidth,
      },
    });

    // Handle gallery image load effect on scroll
    const staggerParams = {
      each: 0.1,
      from: "edges",
      grid: "auto",
      ease: "sine.in",
    };

    let timeline = this.gsap.timeline({
      scrollTrigger: {
        start: "400px",
        trigger: "gallery__image-container",
      },
    });

    timeline
      .from(".gallery__image-container", {
        scale: 0.97,
        duration: 0.75,
        ease: "sine.in",
        stagger: staggerParams,
      })
      .from(
        ".gallery__image-container",
        {
          opacity: 0,
          duration: 1,
          ease: "sine.in",
          stagger: staggerParams,
        },
        "<",
      );
  }

  handleImageEnter(event, index, imgStateArr, btnText, updateBtnText) {
    imgStateArr[index].current.play();

    if (event.target.dataset.isactive === "true" && btnText != "pause") {
      updateBtnText("pause");
    }

    if (event.target.dataset.isactive === "false" && btnText != "play") {
      updateBtnText("play");
    }
    const timeline = this.gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        fontSize: 18,
        duration: 0.175,
        ease: "sine.in",
      })
      .to(
        ".inner-cursor__background",
        {
          width: 80,
          height: 80,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      )
      .to(
        ".outer-cursor",
        {
          opacity: 0,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      );
  }

  handleImageLeave(event, index, imgStateArr) {
    imgStateArr[index].current.reverse();

    const timeline = this.gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        fontSize: 0,
        duration: 0.175,
        ease: "sine.in",
      })
      .to(
        ".inner-cursor__background",
        {
          width: 6,
          height: 6,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      )
      .to(
        ".outer-cursor",
        {
          opacity: 1,
          duration: 0.175,
          ease: "sine.in",
        },
        "<",
      );
  }

  handleButtonTransition() {
    const timeline = this.gsap.timeline();
    timeline
      .to(".inner-cursor__text", {
        opacity: "0",
        duration: 0.001,
        ease: "sine.in",
      })
      .to(".inner-cursor__background", {
        rotationY: "+=180",
        duration: 0.5,
        ease: "sine.in",
      })
      .to(".inner-cursor__text", {
        opacity: "1",
        duration: 0.15,
        ease: "sine.in",
      });
  }

  handleStickyCursor() {
    this.gsap.set(".outer-cursor", { xPercent: -50, yPercent: -50 });
    this.gsap.set(".inner-cursor", { xPercent: -50, yPercent: -50 });

    let xTo = this.gsap.quickTo(".outer-cursor", "x", {
      duration: 0.025,
      ease: "sine.in",
    });
    let yTo = this.gsap.quickTo(".outer-cursor", "y", {
      duration: 0.025,
      ease: "sine.in",
    });
    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    let xToInner = this.gsap.quickTo(".inner-cursor", "x", {
      duration: 0.001,
      ease: "sine.in",
    });
    let yToInner = this.gsap.quickTo(".inner-cursor", "y", {
      duration: 0.001,
      ease: "sine.in",
    });
    window.addEventListener("mousemove", (e) => {
      xToInner(e.clientX);
      yToInner(e.clientY);
    });
  }

  initImageEffects(galleryRef, imgStateArr) {
    const elements = this.gsap.utils.toArray(
      galleryRef.current.querySelectorAll(".gallery__image"),
    );

    // TODO: refactor - https://chat.openai.com/c/b70b60ad-2011-40c1-ad9f-2ee7bd64ecbe
    // Handle image hover animation
    elements.forEach((e, i) => {
      imgStateArr[i].current = this.gsap.to(e, {
        duration: 0.15,
        y: 4,
        x: -4,
        scale: 1.025,
        ease: "sine.in",
        paused: true,
      });
    });
  }

  static init(gsap) {
    return new Animation(gsap);
  }
}
