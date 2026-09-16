/* Death Chest Section */
.death-chest-section {
    background: radial-gradient(circle at center, #2a0a0a 0%, #0a0a0a 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.death-subtitle {
    color: #ff4444;
    font-size: 18px;
    margin-bottom: 60px;
    text-shadow: 0 0 10px #ff0000;
    animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

.death-chest-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    min-height: 400px;
    justify-content: center;
}

/* Сундук */
.chest-wrapper {
    position: relative;
    width: 200px;
    height: 180px;
    cursor: pointer;
    transition: transform 0.3s;
}

.chest-wrapper:hover {
    transform: scale(1.05);
}

.chest {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.5));
    animation: chest-shake 3s infinite;
}

@keyframes chest-shake {
    0%, 90%, 100% { transform: translateX(0); }
    92% { transform: translateX(-3px) rotate(-2deg); }
    94% { transform: translateX(3px) rotate(2deg); }
    96% { transform: translateX(-3px) rotate(-2deg); }
    98% { transform: translateX(3px) rotate(2deg); }
}

/* Крышка */
.chest-lid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transform-origin: bottom center;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    z-index: 3;
}

.chest.open .chest-lid {
    transform: rotateX(-120deg);
}

.lid-front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #8b5a2b;
    border: 4px solid #3d2817;
    border-bottom: none;
    box-sizing: border-box;
}

.lid-top {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background: #a06a35;
    border: 4px solid #3d2817;
    border-bottom: none;
    transform: skewX(-45deg);
    transform-origin: bottom left;
}

/* Тело сундука */
.chest-body {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background: #6b4423;
    border: 4px solid #3d2817;
    border-top: 6px solid #3d2817;
    position: relative;
    overflow: hidden;
    z-index: 2;
}

.chest-body::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 6px;
    background: #3d2817;
    transform: translateY(-50%);
}

.lock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    z-index: 4;
    filter: drop-shadow(0 0 5px #ffcc00);
}

.chest-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(255, 50, 0, 0.8), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
}

.chest.open .chest-glow {
    opacity: 1;
    animation: glow-pulse 0.8s infinite;
}

@keyframes glow-pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

/* Черепа */
.skull {
    position: absolute;
    top: 30px;
    left: 50%;
    font-size: 40px;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    filter: drop-shadow(0 0 10px #ff0000);
}

.chest.open ~ .skull {
    animation: skull-fly 2s forwards;
}

#skull1 { --tx: -100px; --ty: -150px; --rot: -360deg; }
#skull2 { --tx: 0px;    --ty: -180px; --rot: 360deg; }
#skull3 { --tx: 100px;  --ty: -150px; --rot: -360deg; }

@keyframes skull-fly {
    0% {
        opacity: 0;
        transform: translate(-50%, 0) scale(0.5) rotate(0deg);
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(calc(-50% + var(--tx)), var(--ty)) scale(1.5) rotate(var(--rot));
    }
}

/* Дым */
.smoke {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(120, 120, 120, 0.8), transparent 70%);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    filter: blur(8px);
    z-index: 5;
}

.chest.open ~ .smoke {
    animation: smoke-rise 2.5s infinite;
}

#smoke1 { animation-delay: 0s; }
#smoke2 { animation-delay: 0.5s; }
#smoke3 { animation-delay: 1s; }

@keyframes smoke-rise {
    0% {
        opacity: 0.8;
        transform: translate(-50%, 0) scale(0.5);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -200px) scale(3);
    }
}

/* Искры */
.spark {
    position: absolute;
    top: 40px;
    left: 50%;
    font-size: 25px;
    opacity: 0;
    pointer-events: none;
    z-index: 6;
}

.chest.open ~ .spark {
    animation: spark-fly 1.5s infinite;
}

#spark1 { --sx: -80px; --sy: -100px; }
#spark2 { --sx: 80px;  --sy: -120px; animation-delay: 0.5s; }

@keyframes spark-fly {
    0% {
        opacity: 0;
        transform: translate(-50%, 0) scale(0.5);
    }
    30% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(calc(-50% + var(--sx)), var(--sy)) scale(1.2);
    }
}

/* Кнопка */
#openChestBtn {
    padding: 18px 50px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    background: #8b0000;
    color: #fff;
    border: 4px solid #000;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 6px 6px 0 #000;
    transition: all 0.1s;
    text-shadow: 2px 2px 0 #000;
}

#openChestBtn:hover {
    background: #b00000;
    box-shadow: 6px 6px 0 #000, 0 0 30px #ff0000;
}

#openChestBtn:active {
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 #000;
}

#openChestBtn:disabled {
    background: #444;
    cursor: not-allowed;
    box-shadow: 6px 6px 0 #000;
}

/* Тряска экрана */
@keyframes screen-shake {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5px, -5px); }
    20% { transform: translate(5px, 5px); }
    30% { transform: translate(-5px, 5px); }
    40% { transform: translate(5px, -5px); }
    50% { transform: translate(-5px, -5px); }
    60% { transform: translate(5px, 5px); }
    70% { transform: translate(-5px, 5px); }
    80% { transform: translate(5px, -5px); }
    90% { transform: translate(-5px, -5px); }
}

.death-chest-section.shaking {
    animation: screen-shake 0.5s;
}

/* Красный оверлей */
.death-chest-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 0, 0, 0);
    pointer-events: none;
    transition: background 0.3s;
}

.death-chest-section.flash::after {
    background: rgba(255, 0, 0, 0.4);
}
