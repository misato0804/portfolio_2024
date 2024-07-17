export const fragmentShader = `uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) {
      discard;
    }
    gl_FragColor = vec4(uColor, 0.9);
  }`;

export const vertexShader = `
varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 7.0; // Adjust size as needed
  }
  `;
