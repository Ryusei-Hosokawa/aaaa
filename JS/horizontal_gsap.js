// Processing for horizontal scroll //
const wrapper = document.querySelector('#js-wrapper');

if(wrapper) {
    const item = document.querySelectorAll('#js-item');
    const wrapperLeft = wrapper.offsetLeft;
    
    gsap.to( item, {
        xPercent: -100,
        smooth: 6,
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            pin: true,
            ease: true,
            scrub: 1.5,
            },
            end: () => "+=" + wrapperLeft
        });
};

// Fade out and in the scroll //
// herovideo 
const heroVideo = document.querySelector(".top_video");

gsap.to( heroVideo,{
    scrollTrigger: {
        trigger: '#horizontal-area',
        pin: false,
        ease: "power3.inOut",
        scrub: true,
        start: 'top top',
        end: '4% top',
        scrub: 1.5,
    },
    autoAlpha: 0,
    x: 180,
    ease: "none",
});

// About title
const aboutTitle = document.querySelector("#about-link h1");

gsap.from( aboutTitle, .5, {
    scrollTrigger: {
        trigger: '#about-link',
        start: '15% top',
        end: '25% top',
        scrub: 1.5,
    },
    opacity: 0,
    ease: "power3.inOut",
    y: 40,
});
gsap.to( aboutTitle, {
    scrollTrigger: {
        trigger: '#about-link',
        start: '20% top',
        end: 'bottom top',
        scrub: 1.5,
    },
    x: 130,
});

// About text
const aboutText = document.querySelector("#about-link div");

gsap.from( aboutText, 5, {
    scrollTrigger: {
        trigger: '#about-link',
        start: '23% top',
        end: '33% top',
        scrub: 1.5,
    },
    opacity: 0,
    ease: "power3.inOut",
    y: 40,
});
gsap.to( aboutText, {
    scrollTrigger: {
        trigger: '#about-link',
        start: '20% top',
        end: 'bottom top',
        scrub: 1.5,
    },
    x: 130,
});

// Interest title
const interestTitle = document.querySelector("#interest-link h1");

gsap.from( interestTitle, .5, {
    scrollTrigger: {
        trigger: '#interest-link',
        start: '35% top',
        end: '45% top',
        scrub: 1.5,
    },
    opacity: 0,
    ease: "power3.inOut",
    y: 40,
});
gsap.to( interestTitle, {
    scrollTrigger: {
        trigger: '#interest-link',
        start: '50% top',
        end: 'bottom top',
        scrub: 1.5,
    },
    x: -100,
});

// Interest text
const interestText = document.querySelector("#interest-link div");

gsap.from( interestText, .5, {
    scrollTrigger: {
        trigger: '#interest-link',
        start: '40% top',
        end: '50% top',
        scrub: 1.5,
    },
    opacity: 0,
    ease: "power3.inOut",
    y: 40,
});
gsap.to( interestText, {
    scrollTrigger: {
        trigger: '#interest-link',
        start: '50% top',
        end: 'bottom top',
        scrub: 1.5,
    },
    x: -100,
});

// Portfolios title
const portfoliosTitle = document.querySelector(".title_wraper h1");

gsap.from( portfoliosTitle, .5, {
    scrollTrigger: {
        trigger: '#portfolio-link',
        start: '60% top',
        end: 'bottom 30%',
        scrub: 1.5,
    },
    opacity: 0,
    ease: "power3.inOut",
    y: 30,
});


// Parallax photo //
// Lemon
const lemonPhoto = document.querySelector(".para_photo_lemon");

gsap.to( lemonPhoto, {
    scrollTrigger: {
        trigger: '.para_photo_lemon',
        start: '-90% top',
        end: 'bottom top',
        scrub: 2,
    },
    x: -500,
});

// Sapporo
const sapporoPhoto = document.querySelector(".para_photo_sapporo");

gsap.to( sapporoPhoto, {
    scrollTrigger: {
        trigger: '.para_photo_sapporo',
        start: '-80% top',
        end: 'bottom top',
        scrub: 2,
    },
    x: -150,
});

// Autumn
const autumnPhoto = document.querySelector(".para_photo_autumn");

gsap.to( autumnPhoto, {
    scrollTrigger: {
        trigger: '.para_photo_autumn',
        start: '-80% top',
        end: 'bottom top',
        scrub: 2,
    },
    x: -300,
});

// Starry
const starryPhoto = document.querySelector(".para_photo_starry");

gsap.to( starryPhoto, {
    scrollTrigger: {
        trigger: '.para_photo_starry',
        start: '56% top',
        end: '200% top',
        scrub: 2,
    },
    x: -600,
});
