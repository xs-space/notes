import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css";

import imgSrcImage from "../img/01.png";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，Element";

// 设置背景图片
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement("img");
imgEl.src = imgSrcImage;

// 设置字体
const iEl = document.createElement("i");
iEl.className = "iconfont icon-logo-github";

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
