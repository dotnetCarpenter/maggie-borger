"use strict";

const images = [],
  xfade = [{ opacity: 0 }, { opacity: 1 }];

let counter = 0,
  oldAnimation;

function slide(img) {
  images.push(img);
  firstShow();
}

function firstShow() {
  if (oldAnimation) return;
  playShow();
}

function playShow() {
  const numberOfImages = images.length;
  const currentImage = images.at(counter++ % numberOfImages);

  if (oldAnimation) {
    // console.debug("hide previous image");
    oldAnimation.reverse();
  }

  // console.debug("Show image", currentImage.src.slice(116, 140));
  oldAnimation = currentImage.animate(xfade, {
    duration: 2000,
    fill: "forwards",
  });

  setTimeout(playShow, 6000);
}
