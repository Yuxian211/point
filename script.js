gsap.registerPlugin(ScrollTrigger);






gsap.registerPlugin(ScrollTrigger);

// 動態設定動畫範圍
function adjustAnimations() {
    // 判斷螢幕寬度
    const isLargeScreen = window.innerWidth > 780; // 是否為大螢幕
    const showX = isLargeScreen ? 700 : 325; // SHOW 動畫範圍
    const caseX = isLargeScreen ? -700 : -325; // CASE 動畫範圍
    const imageScale = isLargeScreen ? 2.2 : 0.8; // 圖片縮放比例

    // 清除舊的動畫（避免重複疊加）
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 更新 SHOW 動畫
    gsap.set(".SHOW", { x: 0 });
    gsap.to(".SHOW", {
        x: showX,
        duration: 5,
        scrollTrigger: {
            trigger: ".hot-furniture",
            start: "top 40%",
            end: "top 15%",
            scrub: 8,
            toggleActions: "restart none none none",
            /*markers: true,*/
        }
    });

    // 更新 CASE 動畫
    gsap.set(".CASE", { x: 0 });
    gsap.to(".CASE", {
        x: caseX,
        duration: 5,
        scrollTrigger: {
            trigger: ".hot-furniture",
            start: "top 40%",
            end: "top 15%",
            scrub: 8,
            toggleActions: "restart none none none",
            /*markers: true,*/
        }
    });

    // 更新圖片放大動畫
    gsap.set(".hot-furniture img", { scale: 1 });
    gsap.to(".hot-furniture img", {
        scale: imageScale,
        duration: 5,
        scrollTrigger: {
            trigger: ".hot-furniture",
            start: "top 90%",
            end: "top 50%",
            scrub: 8,
            toggleActions: "restart none none none",
            /*markers: true,*/
        }
    });
}

// 初次執行動畫調整
adjustAnimations();

// 當視窗調整大小時重新執行
window.addEventListener("resize", adjustAnimations);



gsap.set(".hot-furniture img", {
    scale: 1 // 初始值設定為正常大小
});

gsap.to(".hot-furniture img", {
    scale: 2.2, // 將圖片放大到原本大小的 1.5 倍
    duration: 5,
    scrollTrigger: {
        trigger: ".hot-furniture",
        start: "top 90%",
        end: "top 50%",
        scrub: 8,
        toggleActions: "restart none none none",
        pinSpacing: false,
        
        /*markers: true,*/
    }
});



// 設定 GSAP 初始縮放為1
gsap.set(".circle img", {
    scale: 1
});

// 根據螢幕大小進行不同的動畫設置
const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
const mediaQuery768 = window.matchMedia("(max-width: 768px)");

// 定義一個函數來更新縮放值
function updateScale() {
    let scaleValue;

    // 根據不同的螢幕寬度調整 scale 值
    if (mediaQuery768.matches) {
        scaleValue = 50; // 螢幕小於 768px 時，放大 50 倍
    } else if (mediaQuery1024.matches) {
        scaleValue = 20; // 螢幕小於 1024px 時，放大 20 倍
    } else {
        scaleValue = 60; // 其他情況，放大 60 倍
    }

    // 使用 GSAP 動畫來縮放圖片
    gsap.to(".circle img", {
        scale: scaleValue,
        duration: 10,
        scrollTrigger: {
            trigger: ".circle img",
            start: "top 90%",
            end: "top 50%",
            scrub: 100,
            toggleActions: "restart none none none",
            pinSpacing: false,
            /*markers: true,*/
        }
    });
}

// 初始運行函數
updateScale();

// 當螢幕尺寸變化時，更新縮放動畫
window.addEventListener('resize', updateScale);





// 初始設置動畫
gsap.set('.sdp', {
    opacity: 0,
    y: 50 // 初始位置設置為稍微向下偏移
});

// 動畫設定
gsap.utils.toArray('.sdp').forEach((container, index) => {
    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: "top center",  // 當元素到達視窗中央時開始動畫
            end: "bottom center", // 當元素底部到達視窗中央時結束動畫
            toggleActions: "restart none none reverse",
        },
        opacity: 1,
        y: 0,  // 元素滑動到其原始位置
        duration: 1,
        ease: "power2.out",
        delay: index * 0.5 // 讓每個 .sdp 延遲一段時間顯示，實現依次顯示效果
    });
});




gsap.set('.introcduction', {
    opacity: 0,
    y: 50 // 初始位置設置為稍微向下偏移
});

// 動畫設定
gsap.utils.toArray('.introcduction').forEach((container, index) => {
    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: "top center",  // 當元素到達視窗中央時開始動畫
            end: "bottom center", // 當元素底部到達視窗中央時結束動畫
            toggleActions: "play none none reverse",
            // 可選：添加 markers: true 來除錯
        },
        opacity: 1,
        y: 0,  // 元素滑動到其原始位置
        duration: 1,
        ease: "power2.out",
        delay: index * 0.5 // 讓每個 .sdp 延遲一段時間顯示，實現依次顯示效果
    });
});


const dot = document.getElementById('cursor-dot');
  const circle = document.getElementById('cursor-circle');

  document.addEventListener('mousemove', (e) => {
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;

 circle.style.left = `${e.clientX}px`;
 circle.style.top = `${e.clientY}px`;
 });

 


 // 字母依序動畫
 window.addEventListener('load', () => {
    const letters = document.querySelectorAll('.letter');
    
    gsap.to(letters, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2, // 每個字母間隔 0.2 秒
      ease: "power4.out"
    });

    gsap.to('.button-wrapper', {
      opacity: 1,
      duration: 1,
      delay: 1.2, // 等所有字母出現後再顯示副標題
      ease: "power2.out"
    });
  });


  // 字母依序動畫
 window.addEventListener('load', () => {
    const letters = document.querySelectorAll('.letter');
    
    gsap.to(letters, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2, // 每個字母間隔 0.2 秒
      ease: "power4.out"
    });

    gsap.to('.button-wrapper2', {
      opacity: 1,
      duration: 1,
      delay: 1.2, // 等所有字母出現後再顯示副標題
      ease: "power2.out"
    });
  });








/*const pics = gsap.utils.toArray(".PROJECT-PIC .PIC");

// 使用 gsap.to() 來創建平移動畫
gsap.to(pics, {
    xPercent: -100 * (pics.length - 1), // 計算每個圖片移動的百分比
    scrollTrigger: {
        trigger: ".PROJECT-PIC",  // 設置觸發滾動動畫的區域
        pin: true,                // 固定容器
        scrub: 1,                 // 滾動條與動畫同步
        start: "top top",         // 開始位置：滾動到 .PROJECT-PIC 的頂端時觸發
        end: () => `+=${pics[0].offsetWidth * pics.length}`, // 結束位置：確保動畫完成後，圖片完全移動
    },
});

*/


