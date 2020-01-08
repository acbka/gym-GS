var tl = new TimelineMax();



tl  .from(".logo", 1.5, {alpha: 0, ease: Back.easeInOut, y: -10}, "-=1.5")
    .from(".body", 2.5, {alpha: 0, opacity: 1}, "-=1.5")
    .from(".phone", .5, {alpha: 0, ease: Back.easeInOut, x: -50}, "-=1.3")
    .from(".shape", 2, {alpha: 0, opacity: 1}, "-=1")
    .from(".days", 2, {alpha: 0, opacity: 1}, "-=2")
    .from(".d20", 2.5, {alpha: 0, ease: Power4.easeInOut, x: 100, y: 100 }, "-=2.5")
    .from(".button", 1, {alpha: 0, opacity: 1}, "-=1")
    .to(".button", .5, {scale: 1.3, x: "+=20", y: "-=20", delay:.3, repeat: 1, yoyo: true}, "-=.8")


