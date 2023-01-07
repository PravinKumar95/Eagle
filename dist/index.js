function $bc88c13d0a26fee7$export$889ea624f2cb2c57(cbk) {
    let previousTime = 0;
    let deltaTime = 0;
    function step(timeElapsed) {
        // perform some computation
        cbk(deltaTime);
        deltaTime = timeElapsed - previousTime;
        previousTime = timeElapsed;
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}






export {$bc88c13d0a26fee7$export$889ea624f2cb2c57 as run};
//# sourceMappingURL=index.js.map
