

const WORKLET = "houdini-mix";

class HoudiniMix {

    static get inputProperties() {
        return [
            `--${WORKLET}-min-snow`,
            `--${WORKLET}-max-snow`,
            `--${WORKLET}-min-triangle`,
            `--${WORKLET}-max-triangle`,
            `--${WORKLET}-fill`,
            `--${WORKLET}-flakes`,
            `--${WORKLET}-triangles`,
            `--${WORKLET}-snow-hue`,
            `--${WORKLET}-triangle-hue`,

        ];
    }

    paint(ctx, size, properties) {
        const { width, height } = size;
        const minSnow = parseInt(properties.get(`--${WORKLET}-min-snow`)) || 2;
        const maxSnow = parseInt(properties.get(`--${WORKLET}-max-snow`)) || 7;
        const minTriangle = parseInt(properties.get(`--${WORKLET}-min-triangle`)) || 20;
        const maxTriangle = parseInt(properties.get(`--${WORKLET}-max-triangle`)) || 40;
        // fill: "all" | "top" | "bottom"
        const fill = properties.get(`--${WORKLET}-fill`).toString().trim() || "all";
        const flakes = parseInt(properties.get(`--${WORKLET}-flakes`)) || 1000;
        const triangles = parseInt(properties.get(`--${WORKLET}-triangles`)) || 1000;
        const random = mulberry32(flakes);
        const snowHue = parseInt(properties.get(`--${WORKLET}-snow-hue`)) || 0;
        const triangleHue = parseInt(properties.get(`--${WORKLET}-triangle-hue`)) || 0;

        // console.log(random());
        const startPos = fill === "bottom" ? height / 2 : 0;
        const endPos = fill === "top" ? height / 2 : height;

        const snowflakeArr = [...Array(flakes)].map(() => {
          return {
            x: lerp(0, width, random()),
            y: lerp(startPos, endPos, random(), fill),
          };
        });
        

        snowflakeArr.forEach((point) => {
          ctx.fillStyle = `hsla(${snowHue} 70% 45% / ${lerp(0.4, 0.8, random())})`;
          // ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.arc(point.x, point.y, lerp(minSnow, maxSnow, random()), 0, Math.PI * 2);
          ctx.moveTo(point.x, point.y);
          ctx.fill();
        });

        const trianglesArr = [...Array(triangles)].map(() => {
          return {
            x: lerp(0, width, random()),
            y: lerp(startPos, endPos, random(), fill),
          };
        });
        

        trianglesArr.forEach((triangle) => {
          // ctx.fillStyle = `hsla(0 0% 100% / ${lerp(0.4, 1, random())})`;
          ctx.fillStyle = `hsla(${triangleHue} 50% 70% / ${lerp(0.3, 0.7, random())})`;
          ctx.beginPath();
          ctx.moveTo(triangle.x, triangle.y);
          ctx.lineTo(triangle.x + lerp(minTriangle, maxTriangle, random()), triangle.y);
          ctx.lineTo(triangle.x + lerp(minTriangle, maxTriangle, random()), triangle.y + lerp(minTriangle, maxTriangle, random()));
          ctx.closePath();
          ctx.fill();
        });
    }
}

registerPaint(WORKLET, HoudiniMix);


// Add randomness responsibly with a PRNG. pseudorandom number generators (PRNG) /  from George Francis
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function lerp(start, end, amt, fill) {
  if (fill === "bottom") {
    return end - (start * amt);
  } else {
    return (end - start) * amt;
  }
  
}
