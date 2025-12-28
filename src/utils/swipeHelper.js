export function handleSwipe({
  startX,
  startY,
  event,
  onNext,
  onPrev,
  threshold = 50,
}) {
  
  const endY = event.changedTouches[0].clientY;
  const endX = event.changedTouches[0].clientX;

  const diffY = startY.current - endY;
  const diffX = startX.current - endX;

  // Vertical swipe
  if (Math.abs(diffY) > Math.abs(diffX)) {
    if (diffY > threshold) onNext();
    else if (diffY < -threshold) onPrev();
  }
  // Horizontal swipe
  else {
    if (diffX > threshold) onNext();
    else if (diffX < -threshold) onPrev();
  }
}
