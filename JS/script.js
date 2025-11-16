// ---------------- full script.js (final) ----------------

// fullPath array (كل الإحداثيات اللى بعتيها)
const fullPath = [
  [355,80],[355,85],[355,90],[355,95],[355,100],[355,105],[355,110],[355,115],[355,120],
  [360,120],[365,120],[370,120],[375,120],[380,120],[385,120],[390,120],[395,120],
  [395,125],[395,130],[395,135],[395,140],[395,145],[395,150],[395,155],[395,160],
  [390,160],[385,160],[380,160],[375,160],[370,160],[365,160],[360,160],[355,160],
  [350,160],[345,160],[340,160],[335,160],[330,160],[325,160],[320,160],[315,160],
  [310,160],[305,160],[300,160],[295,160],[290,160],[285,160],[280,160],[275,160],
  [275,165],[275,170],[275,175],[275,180],[275,185],[275,190],[275,195],[275,200],
  [270,200],[265,200],[260,200],[255,200],[250,200],[245,200],[240,200],[235,200],
  [230,200],[225,200],[220,200],[215,200],[210,200],[205,200],[200,200],[195,200],
  [190,200],[185,200],[180,200],[175,200],[170,200],[165,200],[160,200],[155,200],
  [150,200],[145,200],[140,200],[135,200],[130,200],[125,200],[120,200],[120,205],
  [120,210],[120,215],[120,220],[120,225],[120,230],[120,235],[120,240],[125,240],
  [130,240],[135,240],[140,240],[145,240],[150,240],[155,240],[160,240],[165,240],
  [170,240],[175,240],[180,240],[185,240],[190,240],[195,240],[200,240],[205,240],
  [210,240],[215,240],[220,240],[225,240],[230,240],[235,240],[240,240],[240,245],
  [240,250],[240,255],[240,260],[240,265],[240,270],[240,275],[240,280],[245,280],
  [250,280],[255,280],[260,280],[265,280],[270,280],[275,280],[280,280],[285,280],
  [290,280],[295,280],[300,280],[305,280],[310,280],[315,280],[320,280],[325,280],
  [330,280],[335,280],[340,280],[345,280],[350,280],[355,280],[355,285],[355,290],[355,295],[355,300],[355,305],[355,310],[355,315],[360,315],[365,315],[370,315],
  [375,315],[380,315],[385,315],[390,315],[395,315],[400,315],[405,315],[410,315],[415,315],[420,315],
  [425,315],[430,315],[435,315],[435,310],[435,305],[435,300],[435,295],[435,290],[435,285],[435,280],
  [435,275],[435,270],[435,265],[435,260],[435,255],[435,250],[435,245],[435,240],[440,240],[445,240],
  [450,240],[455,240],[460,240],[465,240],[470,240],[475,240],[480,240],[485,240],[490,240],[495,240],
  [500,240],[505,240],[510,240],[515,240],[520,240],[525,240],[530,240],[535,240],[540,240],[545,240],
  [550,240],[550,245],[550,250],[550,255],[550,260],[550,265],[550,270],[550,275],[550,280],[550,285],
  [550,290],[550,295],[550,300],[550,305],[550,310],[550,315],[550,320],[550,325],[550,330],[550,335],
  [550,340],[550,345],[550,350],[550,355],[545,355],[540,355],[535,355],[530,355],[525,355],[520,355],
  [515,355],[510,355],[505,355],[500,355],[495,355],[490,355],[485,355],[480,355],[475,355],[475,360],
  [475,365],[475,370],[475,375],[475,380],[475,385],[475,390],[475,395],[475,400],[475,405],[475,410],
  [475,415],[475,420],[475,425],[475,430],[475,435],[470,435],[465,435],[460,435],[455,435],[450,435],
  [445,435],[440,435],[435,435],[430,435],[425,435],[420,435],[415,435],[410,435],[405,435],[400,435],
  [395,435],[390,435],[385,435],[380,435],[375,435],[370,435],[365,435],[360,435],[355,435],[350,435],
  [345,435],[340,435],[335,435],[330,435],[325,435],[320,435],[315,435],[315,440],[315,445],[315,450],
  [315,455],[315,460],[315,465],[315,470],[315,475],[310,475],[305,475],[300,475],[295,475],[290,475],
  [285,475],[280,475],[275,475],[270,475],[265,475],[260,475],[255,475],[250,475],[245,475],[240,475],
  [240,480],[240,485],[240,490],[240,495],[240,500],[240,505],[240,510],[235,510],[230,510],[225,510],
  [220,510],[215,510],[210,510],[205,510],[200,510],[195,510],[190,510],[185,510],[180,510],[175,510],
  [170,510],[165,510],[160,510],[160,515],[160,520],[160,525],[160,530],[160,535],[160,540],[160,545],
  [160,550],[160,555],[165,555],[170,555],[175,555],[180,555],[185,555],[190,555],[195,555],[200,555],
  [205,555],[210,555],[215,555],[220,555],[225,555],[230,555],[235,555],[240,555],[245,555],[250,555],
  [255,555],[260,555],[265,555],[270,555],[275,555],[280,555],[285,555],[290,555],[295,555],[300,555],
  [305,555],[310,555],[315,555],[320,555],[325,555],[330,555],[335,555],[340,555],[345,555],[350,555],
  [355,555],[355,550],[355,545],[355,540],[355,535],[355,530],[355,525],[355,520],[355,515],[360,515],
  [365,515],[370,515],[375,515],[380,515],[385,515],[390,515],[395,515],[400,515],[405,515],[410,515],
  [415,515],[420,515],[425,515],[430,515],[430,520],[430,525],[430,530],[430,535],[430,540],[430,545],
  [430,550],[430,555],[430,560],[430,565],[430,570],[430,575],[430,580],[430,585],[430,590],[430,595],
  [435,595],[440,595],[445,595],[450,595],[455,595],[460,595],[465,595],[470,595],[475,595],[480,595],
  [485,595],[490,595],[495,595],[500,595],[505,595],[510,595],[515,595],[520,595],[525,595],[530,595],
  [535,595],[540,595],[545,595],[550,595],[550,600],[550,605],[550,610],[550,615],[550,620],[550,625],
  [550,630],[545,630],[540,630],[535,630],[530,630],[525,630],[520,630],[515,630],[510,630],[505,630],
  [500,630],[495,630],[490,630],[485,630],[480,630],[475,630],[470,630],[465,630],[460,630],[455,630],
  [450,630],[445,630],[440,630],[435,630],[430,630],[425,630],[420,630],[415,630],[410,630],[405,630],
  [400,630],[395,630],[395,625],[395,620],[395,615],[395,610],[395,605],[395,600],[395,595],[395,590],
  [395,585],[390,585],[385,585],[380,585],[380,590],[375,590],[370,590],[365,590],[360,590],[355,590],
  [355,595],[355,600],[355,605],[355,610],[355,615],[355,620],[355,625],[355,630],[355,635],[355,640],
  [355,645],[355,650]
];

// مسارات الصور
const MAZE_SRC = "IMG/maze_original.png";
const BOY_SRC = "IMG/boy.png";

const mazeCanvas = document.getElementById("mazeCanvas");
const overlayCanvas = document.getElementById("overlayCanvas");

const mazeCtx = mazeCanvas.getContext("2d", { willReadFrequently: true });
const overlayCtx = overlayCanvas.getContext("2d");

let player = { x: 330, y: 50, speed: 0.4 };
const SCALE = 0.7;
const SPRITE_SIZE = 50;
const SPRITE_HALF = SPRITE_SIZE / 2;

let mazeImg = new Image();
let boyImg = new Image();

let maskData = null;

// الصوت
const pathAudio = new Audio('SOUNDS/path.mp3');
pathAudio.loop = true;
let audioPlaying = false;

// ---- متغيرات للحركة المستمرة و touch ----
const keysDown = {};
let touchActive = false;
let touchDir = null;
const touchThreshold = 15;
const touchSpeedMultiplier = 1.0;

// -------- GAMEPAD variables (added) --------
let gamepadIndex = null;
const GAMEPAD_AXIS_THRESHOLD = 0.35; // threshold for analog stick

// -------- helper لتحميل الصور --------
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load: ${src}`);
    img.src = src;
  });
}

// -------- init --------
async function init() {
  try {
    [mazeImg, boyImg] = await Promise.all([loadImage(MAZE_SRC), loadImage(BOY_SRC)]);

    const scaledWidth = Math.round(mazeImg.width * SCALE);
    const scaledHeight = Math.round(mazeImg.height * SCALE);

    mazeCanvas.width = scaledWidth;
    mazeCanvas.height = scaledHeight;
    overlayCanvas.width = scaledWidth;
    overlayCanvas.height = scaledHeight;

    drawScene();
    setupControls();

    // start animation loop that handles long-press/touch and gamepad
    requestAnimationFrame(animate);
  } catch (err) {
    console.error(err);
  }
}

// -------- رسم الولد و المشهد --------
function drawBoy() {
  // لا تمسح الـ overlay كله هنا لو في تأثيرات إضافية، لكن نحن بنمسحه ونعيد الرسم
  overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  overlayCtx.drawImage(boyImg, player.x, player.y, SPRITE_SIZE, SPRITE_SIZE);
}

function drawScene() {
  mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
  mazeCtx.drawImage(mazeImg, 0, 0, mazeCanvas.width, mazeCanvas.height);

  // overlay: نرسم اللاعب ثم التأثير الأخضر لو على الطريق
  overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  drawBoy();

  const cx = player.x + SPRITE_HALF;
  const cy = player.y + SPRITE_HALF;
  if (isOnPath(cx, cy)) {
    overlayCtx.save();
    overlayCtx.strokeStyle = "rgba(0,255,0,0.5)";
    overlayCtx.lineWidth = 15;
    overlayCtx.shadowColor = "rgba(0,255,0,0.7)";
    overlayCtx.shadowBlur = 20;
    overlayCtx.strokeRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    overlayCtx.restore();
  }
}

// -------- فحص الاصطدام مع الجدران --------
function canMoveTo(x, y) {
  // تأكد أننا داخل حدود الكانفاس
  const rx = Math.round(x);
  const ry = Math.round(y);
  if (rx < 0 || ry < 0 || rx >= mazeCanvas.width || ry >= mazeCanvas.height) return false;

  const imgData = mazeCtx.getImageData(rx, ry, 1, 1).data;
  const [r, g, b] = imgData;
  return r > 100 && g > 100 && b > 100;
}

function canMoveWithBuffer(newX, newY) {
  const buffer = 10;
  const centerX = newX + SPRITE_HALF;
  const centerY = newY + SPRITE_HALF;

  const pointsToCheck = [
    [centerX, centerY],
    [centerX + buffer, centerY],
    [centerX - buffer, centerY],
    [centerX, centerY + buffer],
    [centerX, centerY - buffer],
  ];

  for (const [px, py] of pointsToCheck) {
    if (!canMoveTo(px, py)) return false;
  }
  return true;
}

// -------- التحقق من وجود اللاعب قرب نقطة من المسار --------
function isOnPath(cx, cy) {
  const buffer = 10;
  for (const [px, py] of fullPath) {
    const dx = px - cx;
    const dy = py - cy;
    if (Math.sqrt(dx*dx + dy*dy) <= buffer) return true;
  }
  return false;
}

// يشيك لو قرب آخر نقطة (النهاية)
function isAtEnd(cx, cy) {
  if (!fullPath.length) return false;
  const [lx, ly] = fullPath[fullPath.length - 1];
  const dx = lx - cx;
  const dy = ly - cy;
  const dist = Math.sqrt(dx*dx + dy*dy);
  return dist <= 12;
}

// -------- GAMEPAD handling (added) --------
window.addEventListener("gamepadconnected", (e) => {
  console.log("Gamepad connected:", e.gamepad);
  gamepadIndex = e.gamepad.index;
});

window.addEventListener("gamepaddisconnected", (e) => {
  console.log("Gamepad disconnected");
  // if same index disconnected, clear
  if (gamepadIndex === e.gamepad.index) gamepadIndex = null;
});

function pollGamepadToKeys() {
  if (gamepadIndex === null) return;

  const gp = navigator.getGamepads ? navigator.getGamepads()[gamepadIndex] : null;
  if (!gp) return;

  // Buttons: standard mapping - D-Pad usually buttons 12..15
  const up = gp.buttons[12] && gp.buttons[12].pressed;
  const down = gp.buttons[13] && gp.buttons[13].pressed;
  const left = gp.buttons[14] && gp.buttons[14].pressed;
  const right = gp.buttons[15] && gp.buttons[15].pressed;

  // Axes: left stick 0 (x), 1 (y)
  const ax = gp.axes && gp.axes.length > 0 ? gp.axes[0] : 0;
  const ay = gp.axes && gp.axes.length > 1 ? gp.axes[1] : 0;

  // map to keysDown (set true/false)
  if (up || ay < -GAMEPAD_AXIS_THRESHOLD)   keysDown["ArrowUp"] = true;  else keysDown["ArrowUp"] = false;
  if (down || ay > GAMEPAD_AXIS_THRESHOLD)  keysDown["ArrowDown"] = true; else keysDown["ArrowDown"] = false;
  if (left || ax < -GAMEPAD_AXIS_THRESHOLD) keysDown["ArrowLeft"] = true; else keysDown["ArrowLeft"] = false;
  if (right || ax > GAMEPAD_AXIS_THRESHOLD)keysDown["ArrowRight"] = true; else keysDown["ArrowRight"] = false;
}

// -------- حلقة أنيميشن للحركة المستمرة --------
function animate() {
  // poll gamepad each frame (keeps keysDown in sync)
  pollGamepadToKeys();

  let moved = false;

  // keyboard continuous
  if (keysDown["ArrowUp"])    { if (canMoveWithBuffer(player.x, player.y - player.speed)) { player.y -= player.speed; moved = true; } }
  if (keysDown["ArrowDown"])  { if (canMoveWithBuffer(player.x, player.y + player.speed)) { player.y += player.speed; moved = true; } }
  if (keysDown["ArrowLeft"])  { if (canMoveWithBuffer(player.x - player.speed, player.y)) { player.x -= player.speed; moved = true; } }
  if (keysDown["ArrowRight"]) { if (canMoveWithBuffer(player.x + player.speed, player.y)) { player.x += player.speed; moved = true; } }

  // touch continuous movement (if set)
  if (touchActive && touchDir) {
    const s = Math.max(1, Math.round(player.speed * touchSpeedMultiplier));
    switch (touchDir) {
      case "up":    if (canMoveWithBuffer(player.x, player.y - s)) { player.y -= s; moved = true; } break;
      case "down":  if (canMoveWithBuffer(player.x, player.y + s)) { player.y += s; moved = true; } break;
      case "left":  if (canMoveWithBuffer(player.x - s, player.y)) { player.x -= s; moved = true; } break;
      case "right": if (canMoveWithBuffer(player.x + s, player.y)) { player.x += s; moved = true; } break;
    }
  }

  if (moved) {
    const cx = player.x + SPRITE_HALF;
    const cy = player.y + SPRITE_HALF;
    const onPath = isOnPath(cx, cy);
    const atEnd = isAtEnd(cx, cy);

    if (onPath) {
      if (!audioPlaying) {
        pathAudio.play().then(() => { audioPlaying = true; }).catch(()=>{ /* autoplay blocked until user interacts */ });
      }
      if (atEnd) {
        try {
          pathAudio.currentTime = 0;
          pathAudio.play().catch(()=>{});
        } catch (err) {}
      }
    } else {
      if (audioPlaying) {
        pathAudio.pause();
        audioPlaying = false;
      }
    }

    drawScene();
  }

  requestAnimationFrame(animate);
}

// -------- إعداد التحكم (كيبورد، أزرار على الشاشة، لمس/سوايب) --------
function setupControls() {
  // --- Keyboard: دعم مستمر بالضغط والافراج ---
  window.addEventListener("keydown", e => {
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
      keysDown[e.key] = true;
      e.preventDefault(); // يمنع السكрол الافتراضي
    }
  });
  window.addEventListener("keyup", e => {
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
      keysDown[e.key] = false;
      e.preventDefault();
    }
  });

  // --- Buttons on-screen: mousedown / mouseup for continuous ---
  const btns = [
    { id: "upBtn", key: "ArrowUp" },
    { id: "downBtn", key: "ArrowDown" },
    { id: "leftBtn", key: "ArrowLeft" },
    { id: "rightBtn", key: "ArrowRight" }
  ];

  btns.forEach(b => {
    const el = document.getElementById(b.id);
    if (!el) return;
    el.addEventListener("mousedown", () => keysDown[b.key] = true);
    el.addEventListener("mouseup",   () => keysDown[b.key] = false);
    el.addEventListener("mouseleave",() => keysDown[b.key] = false);
    // touch equivalents for buttons
    el.addEventListener("touchstart", (ev) => { keysDown[b.key] = true; ev.preventDefault(); }, {passive:false});
    el.addEventListener("touchend",   (ev) => { keysDown[b.key] = false; ev.preventDefault(); }, {passive:false});
  });

  // --- Touch: swipe detection but make it responsive + continuous ---
  let startX = 0, startY = 0, lastTouchTime = 0;
  overlayCanvas.addEventListener("touchstart", (e) => {
    if (!e.touches || e.touches.length === 0) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    touchActive = true;
    touchDir = null;
    // منع double-tap zoom (best-effort)
    const now = Date.now();
    if (now - lastTouchTime < 300) e.preventDefault();
    lastTouchTime = now;
  }, {passive:false});

  overlayCanvas.addEventListener("touchmove", (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const moveX = e.touches[0].clientX;
    const moveY = e.touches[0].clientY;
    const dx = moveX - startX;
    const dy = moveY - startY;

    if (Math.abs(dx) < touchThreshold && Math.abs(dy) < touchThreshold) {
      touchDir = null;
      return;
    }

    if (Math.abs(dx) > Math.abs(dy)) {
      touchDir = dx > 0 ? "right" : "left";
    } else {
      touchDir = dy > 0 ? "down" : "up";
    }

    e.preventDefault();
  }, {passive:false});

  overlayCanvas.addEventListener("touchend", (e) => {
    touchActive = false;
    touchDir = null;
    e.preventDefault();
  }, {passive:false});

  // لمنع التكبير بالضغط مرتين سريع (double-tap) على بعض المتصفحات (محاولة)
  overlayCanvas.addEventListener("gesturestart", (e) => { e.preventDefault(); }, {passive:false});

  // Also prevent double click zoom via dblclick on the overlay
  overlayCanvas.addEventListener("dblclick", (e) => { e.preventDefault(); }, {passive:false});
}

// -------- ابدأ --------
init();





// // ---------------- full script.js (final) ----------------

// // fullPath array (كل الإحداثيات اللى بعتيها)
// const fullPath = [
//   [355,80],[355,85],[355,90],[355,95],[355,100],[355,105],[355,110],[355,115],[355,120],
//   [360,120],[365,120],[370,120],[375,120],[380,120],[385,120],[390,120],[395,120],
//   [395,125],[395,130],[395,135],[395,140],[395,145],[395,150],[395,155],[395,160],
//   [390,160],[385,160],[380,160],[375,160],[370,160],[365,160],[360,160],[355,160],
//   [350,160],[345,160],[340,160],[335,160],[330,160],[325,160],[320,160],[315,160],
//   [310,160],[305,160],[300,160],[295,160],[290,160],[285,160],[280,160],[275,160],
//   [275,165],[275,170],[275,175],[275,180],[275,185],[275,190],[275,195],[275,200],
//   [270,200],[265,200],[260,200],[255,200],[250,200],[245,200],[240,200],[235,200],
//   [230,200],[225,200],[220,200],[215,200],[210,200],[205,200],[200,200],[195,200],
//   [190,200],[185,200],[180,200],[175,200],[170,200],[165,200],[160,200],[155,200],
//   [150,200],[145,200],[140,200],[135,200],[130,200],[125,200],[120,200],[120,205],
//   [120,210],[120,215],[120,220],[120,225],[120,230],[120,235],[120,240],[125,240],
//   [130,240],[135,240],[140,240],[145,240],[150,240],[155,240],[160,240],[165,240],
//   [170,240],[175,240],[180,240],[185,240],[190,240],[195,240],[200,240],[205,240],
//   [210,240],[215,240],[220,240],[225,240],[230,240],[235,240],[240,240],[240,245],
//   [240,250],[240,255],[240,260],[240,265],[240,270],[240,275],[240,280],[245,280],
//   [250,280],[255,280],[260,280],[265,280],[270,280],[275,280],[280,280],[285,280],
//   [290,280],[295,280],[300,280],[305,280],[310,280],[315,280],[320,280],[325,280],
//   [330,280],[335,280],[340,280],[345,280],[350,280],[355,280],[355,285],[355,290],[355,295],[355,300],[355,305],[355,310],[355,315],[360,315],[365,315],[370,315],
//   [375,315],[380,315],[385,315],[390,315],[395,315],[400,315],[405,315],[410,315],[415,315],[420,315],
//   [425,315],[430,315],[435,315],[435,310],[435,305],[435,300],[435,295],[435,290],[435,285],[435,280],
//   [435,275],[435,270],[435,265],[435,260],[435,255],[435,250],[435,245],[435,240],[440,240],[445,240],
//   [450,240],[455,240],[460,240],[465,240],[470,240],[475,240],[480,240],[485,240],[490,240],[495,240],
//   [500,240],[505,240],[510,240],[515,240],[520,240],[525,240],[530,240],[535,240],[540,240],[545,240],
//   [550,240],[550,245],[550,250],[550,255],[550,260],[550,265],[550,270],[550,275],[550,280],[550,285],
//   [550,290],[550,295],[550,300],[550,305],[550,310],[550,315],[550,320],[550,325],[550,330],[550,335],
//   [550,340],[550,345],[550,350],[550,355],[545,355],[540,355],[535,355],[530,355],[525,355],[520,355],
//   [515,355],[510,355],[505,355],[500,355],[495,355],[490,355],[485,355],[480,355],[475,355],[475,360],
//   [475,365],[475,370],[475,375],[475,380],[475,385],[475,390],[475,395],[475,400],[475,405],[475,410],
//   [475,415],[475,420],[475,425],[475,430],[475,435],[470,435],[465,435],[460,435],[455,435],[450,435],
//   [445,435],[440,435],[435,435],[430,435],[425,435],[420,435],[415,435],[410,435],[405,435],[400,435],
//   [395,435],[390,435],[385,435],[380,435],[375,435],[370,435],[365,435],[360,435],[355,435],[350,435],
//   [345,435],[340,435],[335,435],[330,435],[325,435],[320,435],[315,435],[315,440],[315,445],[315,450],
//   [315,455],[315,460],[315,465],[315,470],[315,475],[310,475],[305,475],[300,475],[295,475],[290,475],
//   [285,475],[280,475],[275,475],[270,475],[265,475],[260,475],[255,475],[250,475],[245,475],[240,475],
//   [240,480],[240,485],[240,490],[240,495],[240,500],[240,505],[240,510],[235,510],[230,510],[225,510],
//   [220,510],[215,510],[210,510],[205,510],[200,510],[195,510],[190,510],[185,510],[180,510],[175,510],
//   [170,510],[165,510],[160,510],[160,515],[160,520],[160,525],[160,530],[160,535],[160,540],[160,545],
//   [160,550],[160,555],[165,555],[170,555],[175,555],[180,555],[185,555],[190,555],[195,555],[200,555],
//   [205,555],[210,555],[215,555],[220,555],[225,555],[230,555],[235,555],[240,555],[245,555],[250,555],
//   [255,555],[260,555],[265,555],[270,555],[275,555],[280,555],[285,555],[290,555],[295,555],[300,555],
//   [305,555],[310,555],[315,555],[320,555],[325,555],[330,555],[335,555],[340,555],[345,555],[350,555],
//   [355,555],[355,550],[355,545],[355,540],[355,535],[355,530],[355,525],[355,520],[355,515],[360,515],
//   [365,515],[370,515],[375,515],[380,515],[385,515],[390,515],[395,515],[400,515],[405,515],[410,515],
//   [415,515],[420,515],[425,515],[430,515],[430,520],[430,525],[430,530],[430,535],[430,540],[430,545],
//   [430,550],[430,555],[430,560],[430,565],[430,570],[430,575],[430,580],[430,585],[430,590],[430,595],
//   [435,595],[440,595],[445,595],[450,595],[455,595],[460,595],[465,595],[470,595],[475,595],[480,595],
//   [485,595],[490,595],[495,595],[500,595],[505,595],[510,595],[515,595],[520,595],[525,595],[530,595],
//   [535,595],[540,595],[545,595],[550,595],[550,600],[550,605],[550,610],[550,615],[550,620],[550,625],
//   [550,630],[545,630],[540,630],[535,630],[530,630],[525,630],[520,630],[515,630],[510,630],[505,630],
//   [500,630],[495,630],[490,630],[485,630],[480,630],[475,630],[470,630],[465,630],[460,630],[455,630],
//   [450,630],[445,630],[440,630],[435,630],[430,630],[425,630],[420,630],[415,630],[410,630],[405,630],
//   [400,630],[395,630],[395,625],[395,620],[395,615],[395,610],[395,605],[395,600],[395,595],[395,590],
//   [395,585],[390,585],[385,585],[380,585],[380,590],[375,590],[370,590],[365,590],[360,590],[355,590],
//   [355,595],[355,600],[355,605],[355,610],[355,615],[355,620],[355,625],[355,630],[355,635],[355,640],
//   [355,645],[355,650]
// ];

// // مسارات الصور
// const MAZE_SRC = "IMG/maze_original.png";
// const BOY_SRC = "IMG/boy.png";

// const mazeCanvas = document.getElementById("mazeCanvas");
// const overlayCanvas = document.getElementById("overlayCanvas");

// const mazeCtx = mazeCanvas.getContext("2d", { willReadFrequently: true });
// const overlayCtx = overlayCanvas.getContext("2d");

// let player = { x: 330, y: 50, speed: 0.4 };
// const SCALE = 0.7;
// const SPRITE_SIZE = 50;
// const SPRITE_HALF = SPRITE_SIZE / 2;

// let mazeImg = new Image();
// let boyImg = new Image();

// let maskData = null;

// // الصوت
// const pathAudio = new Audio('SOUNDS/path.mp3');
// pathAudio.loop = true;
// let audioPlaying = false;

// // ---- متغيرات للحركة المستمرة و touch ----
// const keysDown = {};
// let touchActive = false;
// let touchDir = null;
// const touchThreshold = 15;
// const touchSpeedMultiplier = 1.0;

// // -------- helper لتحميل الصور --------
// function loadImage(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.onerror = () => reject(`Failed to load: ${src}`);
//     img.src = src;
//   });
// }

// // -------- init --------
// async function init() {
//   try {
//     [mazeImg, boyImg] = await Promise.all([loadImage(MAZE_SRC), loadImage(BOY_SRC)]);

//     const scaledWidth = Math.round(mazeImg.width * SCALE);
//     const scaledHeight = Math.round(mazeImg.height * SCALE);

//     mazeCanvas.width = scaledWidth;
//     mazeCanvas.height = scaledHeight;
//     overlayCanvas.width = scaledWidth;
//     overlayCanvas.height = scaledHeight;

//     drawScene();
//     setupControls();

//     // ابدأ حلقة الأنيميشن اللي تتعامل مع الضغط الطويل/اللمس
//     requestAnimationFrame(animate);
//   } catch (err) {
//     console.error(err);
//   }
// }

// // -------- رسم الولد و المشهد --------
// function drawBoy() {
//   // لا تمسح الـ overlay كله هنا لو في تأثيرات إضافية، لكن نحن بنمسحه ونعيد الرسم
//   overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
//   overlayCtx.drawImage(boyImg, player.x, player.y, SPRITE_SIZE, SPRITE_SIZE);
// }

// function drawScene() {
//   mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
//   mazeCtx.drawImage(mazeImg, 0, 0, mazeCanvas.width, mazeCanvas.height);

//   // overlay: نرسم اللاعب ثم التأثير الأخضر لو على الطريق
//   overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
//   drawBoy();

//   const cx = player.x + SPRITE_HALF;
//   const cy = player.y + SPRITE_HALF;
//   if (isOnPath(cx, cy)) {
//     overlayCtx.save();
//     overlayCtx.strokeStyle = "rgba(0,255,0,0.5)";
//     overlayCtx.lineWidth = 15;
//     overlayCtx.shadowColor = "rgba(0,255,0,0.7)";
//     overlayCtx.shadowBlur = 20;
//     overlayCtx.strokeRect(0, 0, overlayCanvas.width, overlayCanvas.height);
//     overlayCtx.restore();
//   }
// }

// // -------- فحص الاصطدام مع الجدران --------
// function canMoveTo(x, y) {
//   // تأكد أننا داخل حدود الكانفاس
//   const rx = Math.round(x);
//   const ry = Math.round(y);
//   if (rx < 0 || ry < 0 || rx >= mazeCanvas.width || ry >= mazeCanvas.height) return false;

//   const imgData = mazeCtx.getImageData(rx, ry, 1, 1).data;
//   const [r, g, b] = imgData;
//   return r > 100 && g > 100 && b > 100;
// }

// function canMoveWithBuffer(newX, newY) {
//   const buffer = 10;
//   const centerX = newX + SPRITE_HALF;
//   const centerY = newY + SPRITE_HALF;

//   const pointsToCheck = [
//     [centerX, centerY],
//     [centerX + buffer, centerY],
//     [centerX - buffer, centerY],
//     [centerX, centerY + buffer],
//     [centerX, centerY - buffer],
//   ];

//   for (const [px, py] of pointsToCheck) {
//     if (!canMoveTo(px, py)) return false;
//   }
//   return true;
// }

// // -------- التحقق من وجود اللاعب قرب نقطة من المسار --------
// function isOnPath(cx, cy) {
//   const buffer = 10;
//   for (const [px, py] of fullPath) {
//     const dx = px - cx;
//     const dy = py - cy;
//     if (Math.sqrt(dx*dx + dy*dy) <= buffer) return true;
//   }
//   return false;
// }

// // يشيك لو قرب آخر نقطة (النهاية)
// function isAtEnd(cx, cy) {
//   if (!fullPath.length) return false;
//   const [lx, ly] = fullPath[fullPath.length - 1];
//   const dx = lx - cx;
//   const dy = ly - cy;
//   const dist = Math.sqrt(dx*dx + dy*dy);
//   return dist <= 12;
// }

// // -------- حلقة أنيميشن للحركة المستمرة --------
// function animate() {
//   let moved = false;

//   // keyboard continuous
//   if (keysDown["ArrowUp"])    { if (canMoveWithBuffer(player.x, player.y - player.speed)) { player.y -= player.speed; moved = true; } }
//   if (keysDown["ArrowDown"])  { if (canMoveWithBuffer(player.x, player.y + player.speed)) { player.y += player.speed; moved = true; } }
//   if (keysDown["ArrowLeft"])  { if (canMoveWithBuffer(player.x - player.speed, player.y)) { player.x -= player.speed; moved = true; } }
//   if (keysDown["ArrowRight"]) { if (canMoveWithBuffer(player.x + player.speed, player.y)) { player.x += player.speed; moved = true; } }

//   // touch continuous movement (if set)
//   if (touchActive && touchDir) {
//     const s = Math.max(1, Math.round(player.speed * touchSpeedMultiplier));
//     switch (touchDir) {
//       case "up":    if (canMoveWithBuffer(player.x, player.y - s)) { player.y -= s; moved = true; } break;
//       case "down":  if (canMoveWithBuffer(player.x, player.y + s)) { player.y += s; moved = true; } break;
//       case "left":  if (canMoveWithBuffer(player.x - s, player.y)) { player.x -= s; moved = true; } break;
//       case "right": if (canMoveWithBuffer(player.x + s, player.y)) { player.x += s; moved = true; } break;
//     }
//   }

//   if (moved) {
//     const cx = player.x + SPRITE_HALF;
//     const cy = player.y + SPRITE_HALF;
//     const onPath = isOnPath(cx, cy);
//     const atEnd = isAtEnd(cx, cy);

//     if (onPath) {
//       if (!audioPlaying) {
//         pathAudio.play().then(() => { audioPlaying = true; }).catch(()=>{ /* autoplay blocked until user interacts */ });
//       }
//       if (atEnd) {
//         try {
//           pathAudio.currentTime = 0;
//           pathAudio.play().catch(()=>{});
//         } catch (err) {}
//       }
//     } else {
//       if (audioPlaying) {
//         pathAudio.pause();
//         audioPlaying = false;
//       }
//     }

//     drawScene();
//   }

//   requestAnimationFrame(animate);
// }

// // -------- إعداد التحكم (كيبورد، أزرار على الشاشة، لمس/سوايب) --------
// function setupControls() {
//   // --- Keyboard: دعم مستمر بالضغط والافراج ---
//   window.addEventListener("keydown", e => {
//     if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
//       keysDown[e.key] = true;
//       e.preventDefault(); // يمنع السك롤 الافتراضي
//     }
//   });
//   window.addEventListener("keyup", e => {
//     if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
//       keysDown[e.key] = false;
//       e.preventDefault();
//     }
//   });

//   // --- Buttons on-screen: mousedown / mouseup for continuous ---
//   const btns = [
//     { id: "upBtn", key: "ArrowUp" },
//     { id: "downBtn", key: "ArrowDown" },
//     { id: "leftBtn", key: "ArrowLeft" },
//     { id: "rightBtn", key: "ArrowRight" }
//   ];

//   btns.forEach(b => {
//     const el = document.getElementById(b.id);
//     if (!el) return;
//     el.addEventListener("mousedown", () => keysDown[b.key] = true);
//     el.addEventListener("mouseup",   () => keysDown[b.key] = false);
//     el.addEventListener("mouseleave",() => keysDown[b.key] = false);
//     // touch equivalents for buttons
//     el.addEventListener("touchstart", (ev) => { keysDown[b.key] = true; ev.preventDefault(); }, {passive:false});
//     el.addEventListener("touchend",   (ev) => { keysDown[b.key] = false; ev.preventDefault(); }, {passive:false});
//   });

//   // --- Touch: swipe detection but make it responsive + continuous ---
//   let startX = 0, startY = 0, lastTouchTime = 0;
//   overlayCanvas.addEventListener("touchstart", (e) => {
//     if (!e.touches || e.touches.length === 0) return;
//     startX = e.touches[0].clientX;
//     startY = e.touches[0].clientY;
//     touchActive = true;
//     touchDir = null;
//     // منع double-tap zoom (best-effort)
//     const now = Date.now();
//     if (now - lastTouchTime < 300) e.preventDefault();
//     lastTouchTime = now;
//   }, {passive:false});

//   overlayCanvas.addEventListener("touchmove", (e) => {
//     if (!e.touches || e.touches.length === 0) return;
//     const moveX = e.touches[0].clientX;
//     const moveY = e.touches[0].clientY;
//     const dx = moveX - startX;
//     const dy = moveY - startY;

//     if (Math.abs(dx) < touchThreshold && Math.abs(dy) < touchThreshold) {
//       touchDir = null;
//       return;
//     }

//     if (Math.abs(dx) > Math.abs(dy)) {
//       touchDir = dx > 0 ? "right" : "left";
//     } else {
//       touchDir = dy > 0 ? "down" : "up";
//     }

//     e.preventDefault();
//   }, {passive:false});

//   overlayCanvas.addEventListener("touchend", (e) => {
//     touchActive = false;
//     touchDir = null;
//     e.preventDefault();
//   }, {passive:false});

//   // لمنع التكبير بالضغط مرتين سريع (double-tap) على بعض المتصفحات (محاولة)
//   overlayCanvas.addEventListener("gesturestart", (e) => { e.preventDefault(); }, {passive:false});

//   // Also prevent double click zoom via dblclick on the overlay
//   overlayCanvas.addEventListener("dblclick", (e) => { e.preventDefault(); }, {passive:false});
// }

// // -------- ابدأ --------
// init();