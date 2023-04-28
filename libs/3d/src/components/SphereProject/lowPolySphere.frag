precision mediump float;

uniform sampler2D images[6];

varying vec3 vNormal;

void main() {
  vec3 normal = normalize(vNormal);

  vec4 color = vec4(0.0);
  for (int i = 0; i < 6; i++) {
    float weight = max(0.0, dot(normal, vec3(0, 0, 1))); // Adjust the direction
    color = mix(color, texture2D(images[i], vNormal.xy), weight);
  }

  gl_FragColor = color;
}
