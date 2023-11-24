<template>
  <div>
    <div class="bg-gray-900 h-screen relative">
      <div class="absolute blur-sm brightness-50">
        <canvas ref="particleCanvas" class="w-full h-full"></canvas>
      </div>
      <div class="p-16 absolute h-screen w-full pointer-events-none">
        <div
          class="
            h-full
            flex
            items-center
            justify-center
            text-center
            border border-gray-800
            rounded-md
          "
        >
          <div
            class="
              backdrop-blur-sm
              bg-white/10
              p-16
              rounded-md
              pointer-events-auto
            "
          >
            <h2 class="text-8xl text-white text-center">
              Hi there, <br />
              I'm Boris.
            </h2>
            <p class="mt-8 font-bold text-xl text-gray-100">
              "In the end we are all stories. <br />
              So lets make this a good one!"
            </p>
            <ul class="text-center">
              <li class="mt-8 text-gray-100">
                <a
                  href="https://zuckersalzundpferffer.de"
                  target="_blank"
                  class="
                    text-gray-100
                    hover:text-gray-300
                    flex
                    items-center
                    space-x-2
                    w-full
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    style="fill: currentColor; margin-top: 0px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                    />
                  </svg>
                  <span> zuckersalzundpfeffer.de</span></a
                >
              </li>
              <li class="mt-8 text-gray-100">
                <a
                  href="https://github.com/borisbrue"
                  target="_blank"
                  class="
                    text-gray-100
                    hover:text-gray-300
                    flex
                    items-center
                    space-x-2
                    w-full
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 496 512"
                    style="fill: currentColor; margin-top: 0px"
                  >
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                  <span> github.com/borisbrue </span></a
                >
              </li>
              <li class="mt-8 text-gray-100">
                <a
                  href="mailto:boris@zuckersalzundpfeffer.de"
                  target="_blank"
                  class="
                    text-gray-100
                    hover:text-gray-300
                    flex
                    items-center
                    space-x-2
                    w-full
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    style="fill: currentColor; margin-top: 0px"
                  >
                    <path
                      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    />
                  </svg>
                  <span> boris@zuckersalzundpfeffer.de</span></a
                >
              </li>
              <li class="mt-8 text-gray-100">
                <a
                  href="https://www.linkedin.com/in/boris-bruenen/"
                  target="_blank"
                  class="
                    text-gray-100
                    hover:text-gray-300
                    flex
                    items-center
                    space-x-2
                    w-full
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    style="fill: currentColor; margin-top: 0px"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                  <span> linkedin.com/in/boris-bruenen</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "ParticleBackground",

  setup() {
    const interactionThreshold = 100;
    const mouseInteractionRadius = 100;

    const particleCanvas = ref(null);
    let animationFrameId;
    let particles = [];
    let mouse = {
      x: null,
      y: null,
      lastX: null,
      lastY: null,
      lastMoveTime: Date.now(),
      speed: 0,
      maxRadius: 1200, // Maximum radius value when mouse is stationary
      minRadius: 100, // Minimum radius value when mouse is moving

      updateSpeed() {
        let dx = this.x - this.lastX;
        let dy = this.y - this.lastY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let currentTime = Date.now();
        let timeElapsed = currentTime - this.lastMoveTime;

        if (timeElapsed > 0) {
          this.speed = distance / timeElapsed;
          this.lastMoveTime = currentTime;
          this.lastX = this.x;
          this.lastY = this.y;
        }
      },
      updateRadius() {
        // Expand radius when mouse is stationary
        if (this.stationaryTime > 1000) {
          // 1000 milliseconds threshold
          this.interactionRadius += 1; // Gradually increase radius
          if (this.interactionRadius > this.maxRadius) {
            this.interactionRadius = this.maxRadius;
          }
        } else {
          // Shrink radius when mouse moves
          this.interactionRadius -= 5; // Rapid decrease
          if (this.interactionRadius < this.minRadius) {
            this.interactionRadius = this.minRadius;
          }
        }
      },
    };

    const handleMouseMove = (event) => {
      if (mouse.x !== event.x || mouse.y !== event.y) {
        mouse.stationaryTime = 0; // Reset if mouse moves
      } else {
        // Increment stationary time if the mouse hasn't moved
        mouse.stationaryTime += 10; // Adjust this interval as needed
      }
      mouse.x = event.x;
      mouse.y = event.y;
      mouse.updateSpeed();
      mouse.updateRadius(); // Update the interaction radius
    };

    class Particle {
      constructor() {
        // Initial position and velocity
        this.x = Math.random() * particleCanvas.value.width;
        this.y = Math.random() * particleCanvas.value.height;
        this.velocity = {
          x: Math.random() - 0.5,
          y: Math.random() - 0.5,
        };
        this.size = Math.random() * 20 + 5;
        this.color = "hsl(" + Math.random() * 360 + ", 100%, 70%)"; // Aurora color scheme
      }
      moveToMouse() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // Increase force based on stationary time
        let stationaryFactor = mouse.stationaryTime / 1000; // Increase over time
        let force = ((100 - distance) / 100) * stationaryFactor;
        force = Math.max(force, 0); // Ensure force is not negative

        let directionX = forceDirectionX * force * this.size * 2; // Amplify force
        let directionY = forceDirectionY * force * this.size * 2; // Amplify force

        if (force > 0) {
          this.x += directionX;
          this.y += directionY;
        }
      }

      update() {
        // Ease in: Gradually increase velocity
        this.velocity.x *= 1.05; // Adjust these factors to control the rate of speed increase
        this.velocity.y *= 1.05;

        // Update position
        this.x += this.velocity.x * 0.1; // Slower movement
        this.y += this.velocity.y * 0.1;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseInteractionRadius) {
            // Define this radius as needed
            let force =
              (mouseInteractionRadius - distance) / mouseInteractionRadius;
            let stationaryFactor = Math.min(mouse.stationaryTime / 1000, 1);
            force *= stationaryFactor; // Increase force when mouse is stationary

            this.velocity.x -= (dx / distance) * force * 0.3;
            this.velocity.y -= (dy / distance) * force * 0.3;
          }
        }

        // Check horizontal boundaries
        if (this.x > particleCanvas.value.width) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = particleCanvas.value.width;
        }

        // Check vertical boundaries
        if (this.y > particleCanvas.value.height) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = particleCanvas.value.height;
        }
        // Ease out: Gradually decrease velocity
        this.velocity.x *= 0.95; // Adjust these factors to control the rate of speed decrease
        this.velocity.y *= 0.95;

        // Optional: Implement boundaries or other logic
      }

      attract(otherParticle) {
        let dx = this.x - otherParticle.x;
        let dy = this.y - otherParticle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === 0) distance = 0.01; // Avoid division by zero

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // Gravitational force proportional to the size of this particle
        let force = (this.size / distance) * 0.05; // Adjust 0.05 to scale the effect

        let directionX = forceDirectionX * force;
        let directionY = forceDirectionY * force;

        otherParticle.velocity.x += directionX;
        otherParticle.velocity.y += directionY;
      }

      draw(ctx) {
        ctx.globalCompositeOperation = "lighter"; // Set blend mode

        // Add a blur effect
        // ctx.shadowBlur = 15; // Adjust this value to control the amount of blur
        // ctx.shadowColor = this.color;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadowBlur to avoid affecting other canvas elements
        ctx.shadowBlur = 0;
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }
    function interact(particle1, particle2) {
      let dx = particle1.x - particle2.x;
      let dy = particle1.y - particle2.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < interactionThreshold && distance > 0) {
        // Quadratic ease-in-ease-out calculation
        let force = Math.pow(
          (interactionThreshold - distance) / interactionThreshold,
          2
        );

        let forceDirectionX = (dx / distance) * force;
        let forceDirectionY = (dy / distance) * force;

        particle1.velocity.x -= forceDirectionX * force * particle1.size * 0.1; // Reduced impact
        particle1.velocity.y -= forceDirectionY * force * particle1.size * 0.1;
        particle2.velocity.x += forceDirectionX * force * particle2.size * 0.1;
        particle2.velocity.y += forceDirectionY * force * particle2.size * 0.1;
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      const ctx = particleCanvas.value.getContext("2d");
      ctx.clearRect(
        0,
        0,
        particleCanvas.value.width,
        particleCanvas.value.height
      );

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          interact(particles[i], particles[j]);
        }

        particles[i].update();
        particles[i].draw(ctx);
      }
    }

    function resizeCanvas() {
      particleCanvas.value.width = window.innerWidth;
      particleCanvas.value.height = window.innerHeight;
    }
    function checkMouseStationary() {
      if (mouse.x === mouse.lastX && mouse.y === mouse.lastY) {
        mouse.stationaryTime += 10; // incrementing by the interval delay
      } else {
        mouse.stationaryTime = 0;
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
      }
    }

    function pushParticle(particle, event) {
      let dx = particle.x - event.clientX;
      let dy = particle.y - event.clientY;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance === 0) distance = 0.01; // Avoid division by zero

      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;

      let force = 5; // Adjust this value to change the strength of the push

      particle.velocity.x += forceDirectionX * force;
      particle.velocity.y += forceDirectionY * force;
    }

    const handleClick = (event) => {
      particles.forEach((particle) => {
        pushParticle(particle, event);
      });
    };

    let stationaryCheckInterval = setInterval(checkMouseStationary, 10);

    onMounted(() => {
      resizeCanvas();
      init();
      animate();
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("mousemove", handleMouseMove);
      particleCanvas.value.addEventListener("click", handleClick);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      particleCanvas.value.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
      clearInterval(stationaryCheckInterval);
    });

    return {
      particleCanvas,
    };
  },
};
</script>

<style lang="postcss">
@font-face {
  font-family: "Source Code Pro";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(~/assets/fonts/Source_Code_Pro/static/SourceCodePro-Medium.ttf)
    format("ttf");
  unicode-range: U+1F00-1FFF;
}
a {
  @apply underline text-center cursor-pointer;
}
</style>
