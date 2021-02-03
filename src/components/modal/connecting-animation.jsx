import React from 'react';

import styles from '../connect.less';

const canvasWidth = 80;
const canvasHeight = canvasWidth;
const padding = canvasWidth / 8;
const width = canvasWidth - (padding * 2);
const radius = width / 2;

const msForBackgroundCircle = 1800;

const initialRotationVelocity = Math.PI / 220;
const rotationAcceleration = Math.PI / 90000;
const friction = 0.973;

/**
 * Animation canvas shown when attempting to connect.
 */
class ConnectingAnimation extends React.Component {
  state = {
    showCanvas: false
  };

  componentDidMount() {
    this.mounted = true;
    this.startAnimation();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  canvasRef = null;
  currentRotation = 0;
  rotationVelocity = 0;
  lastFrame = Date.now();
  expandCircleWidth = 0;

  startAnimation = () => {
    this.lastFrame = Date.now();
    this.currentRotation = 0;
    this.rotationVelocity = initialRotationVelocity;
    this.expandCircleWidth = 0;

    window.requestAnimationFrame(this.drawAnimation);
  }

  /**
   * @param {Object} ctx - The html canvas drawing context.
   */
  drawCompassFace = (ctx) => {
    ctx.fillStyle = '#f5f6f7';
    ctx.shadowColor = '#E4F4E4';
    ctx.shadowBlur = padding * 1.7;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.shadowColor = 'transparent';
  }

  /**
   * @param {Object} ctx - The html canvas drawing context.
   * @param {number} deltaTime - ms that have passed since last drawing.
   */
  drawBackgroundCircle = (ctx, deltaTime) => {
    ctx.strokeStyle = `rgba(0, 0, 0, ${
      (0.3 - (0.3 * (this.expandCircleWidth / msForBackgroundCircle)))
    })`;

    ctx.beginPath();
    ctx.arc(0, 0, radius + (padding * (this.expandCircleWidth / msForBackgroundCircle)), 0, 2 * Math.PI);
    this.expandCircleWidth += deltaTime;

    if (this.expandCircleWidth > msForBackgroundCircle) {
      this.expandCircleWidth = 0.00001;
    }

    ctx.stroke();

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowColor = 'transparent';
  }

  /**
   * @param {Object} ctx - The html canvas drawing context.
   */
  drawCompassHands = (ctx) => {
    const compassHandsWidth = width / 16;
    const compassHandsHeight = radius * 0.85;

    ctx.fillStyle = 'white';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = padding / 2;

    // White base of the compass hands.
    ctx.beginPath();
    ctx.moveTo(-compassHandsWidth, 0);
    ctx.lineTo(0, compassHandsHeight);
    ctx.lineTo(compassHandsWidth, 0);
    ctx.lineTo(0, -compassHandsHeight);
    ctx.moveTo(-compassHandsWidth, 0);

    ctx.fill();
    ctx.stroke();

    ctx.shadowColor = 'transparent';

    // Green top part.
    ctx.fillStyle = '#13AA52';
    ctx.beginPath();
    ctx.moveTo(-compassHandsWidth, 0);
    ctx.lineTo(0, -compassHandsHeight);
    ctx.lineTo(compassHandsWidth, 0);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-compassHandsWidth, 0);
    ctx.lineTo(compassHandsWidth, 0);
    ctx.stroke();

    ctx.fillStyle = 'white';

    // Circle on center.
    ctx.beginPath();
    ctx.arc(0, 0, compassHandsWidth, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fill();
    ctx.stroke();
  }

  drawAnimation = () => {
    if (!this.mounted) {
      return;
    }

    const canvas = this.canvasRef;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.save();
    ctx.translate(padding, padding);

    ctx.translate(radius, radius);

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';

    if (Date.now() - this.lastFrame > 20) {
      // When the user returns from an unfocused view we disregard
      // that last frame time for a frame.
      this.lastFrame = Date.now();
    }

    const deltaTime = Date.now() - this.lastFrame;

    this.drawBackgroundCircle(ctx, deltaTime);
    this.drawCompassFace(ctx);

    ctx.rotate(this.currentRotation);

    this.currentRotation += this.rotationVelocity * deltaTime;
    this.rotationVelocity += rotationAcceleration * (this.currentRotation > 0 ? -1 : 1) * deltaTime;
    this.rotationVelocity *= friction;

    if (
      Math.abs(this.rotationVelocity) < Math.PI / 1100
      && Math.abs(this.currentRotation) < Math.PI / 1100
    ) {
      // When the Compass hands are settled we apply a force so
      // it starts to rotate again.
      // this.rotationVelocity = initialRotationVelocity;
      this.rotationVelocity = (Math.PI / (170 + (Math.random() * 100))) * (Math.random() > 0.5 ? 1 : -1);
    }

    this.drawCompassHands(ctx);

    ctx.restore();

    this.lastFrame = Date.now();

    window.requestAnimationFrame(this.drawAnimation);
  }

  /**
   * Render the component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    const { showCanvas } = this.state;

    return (
      <div
        className={styles['connecting-modal-animation']}
        onClick={() => this.setState({
          showCanvas: !showCanvas
        })}
      >
        <canvas
          ref={ref => {
            this.canvasRef = ref;
          }}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            display: showCanvas ? 'inherit' : 'none',
            margin: '0 auto'
          }}
        />
        {!showCanvas && (
          <svg
            className={styles['connecting-compass-animation-svg']}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.82 64.05"
          >
            <g>
              <path
                className={styles['connecting-compass-shadow']}
                d="M33.14,16.22a8.94,8.94,0,1,0-13.42,0,24.39,24.39,0,1,0,13.42,0ZM18.42,10.33A8,8,0,1,1,32.13,16a24.19,24.19,0,0,0-11.39,0A8,8,0,0,1,18.42,10.33Z"
              />
              <circle
                className={styles['connecting-compass-circle-1']}
                cx="24.39"
                cy="9.86"
                r="8.47"
              />
              <circle
                className={styles['connecting-compass-circle-2']}
                cx="24.39"
                cy="39.2"
                r="24.39"
              />
              <circle
                className={styles['connecting-compass-circle-3']}
                cx="24.39"
                cy="39.37"
                r="20.1"
              />
              <polygon
                id="connectingArrow1"
                className={styles['connecting-compass-arrow-1']}
                points="24.39 22.62 21.35 39.2 27.43 39.2 24.39 22.62"
              />
              <animateTransform
                xlinkHref="#connectingArrow1"
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 24.39 39.2"
                to="360 24.39 39.2"
                dur="2s"
                additive="sum"
                repeatCount="indefinite"

                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                values="0 24.39 39.2;360 24.39 39.2;0 24.39 39.2"
              />
              <polygon
                id="connectingArrow2"
                className={styles['connecting-compass-arrow-2']}
                points="24.39 55.77 27.43 39.2 21.35 39.2 24.39 55.77"
              />
              <animateTransform
                xlinkHref="#connectingArrow2"
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 24.39 39.2"
                to="360 24.39 39.2"
                dur="2s"
                additive="sum"
                repeatCount="indefinite"

                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                values="0 24.39 39.2;360 24.39 39.2;0 24.39 39.2"
              />
            </g>
          </svg>
        )}
      </div>
    );
  }
}

export default ConnectingAnimation;
