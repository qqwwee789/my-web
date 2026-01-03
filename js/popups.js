
(function() {
    const wishes = [
        "记得好好护肤", "别熬夜", "我想你了", "要相信自己奥", "学会爱自己，才能更好地爱别人",
        "保持好心情", "每天都要元气满满", "别太累啦，偶尔偷懒也好", "金榜题名", "梦想成真",
        "今天过得开心嘛", "多喝水哦~", "顺顺利利", "你超棒的", "珍惜每一刻", "早点休息",
        "愿所有烦恼都消失", "期待下一次见面", "保持微笑呀", "祝你生日快乐！", "要开心哦！",
        "你是最棒的", "万事顺遂", "深情不负", "一生快乐", "一生被爱", "想要的都拥有", "得不到的都释怀"
    ];

    const colors = ['#fff5f5', '#fff0f6', '#f9f0ff', '#f0f5ff', '#e6fffb', '#f6ffed', '#fffbe6', '#fff7e6'];

    function createPopup() {
        const container = document.getElementById('popup-container');
        if (!container) return;

        const popup = document.createElement('div');
        popup.className = 'wish-popup';
        
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        popup.style.backgroundColor = randomColor;
        
        // 随机位置
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        
        popup.innerHTML = `
            <div class="popup-header">
                <span class="heart">❤</span> 提示
            </div>
            <div class="popup-content">
                ${randomWish}
            </div>
        `;
        
        container.appendChild(popup);
    }

    window.startPopups = function() {
        // 创建容器
        const container = document.createElement('div');
        container.id = 'popup-container';
        container.className = 'popup-container';
        document.body.appendChild(container);

        // 改为缓慢、有序地生成
        let count = 0;
        const maxPopups = 400; // 适当减少上限以保持美感
        const interval = setInterval(() => {
            createPopup();
            count++;
            if (count >= maxPopups) {
                clearInterval(interval);
            }
        }, 80); // 缩短至 80 毫秒，速度更快，迅速铺满屏幕
    };
})();
