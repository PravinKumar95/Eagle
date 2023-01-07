export function run(cbk: (deltaTime) => void) {
  let previousTime: number = 0;
  let deltaTime: number = 0;
  function step(timeElapsed: DOMHighResTimeStamp) {
    // perform some computation
    cbk(deltaTime);
    deltaTime = timeElapsed - previousTime;
    previousTime = timeElapsed;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
