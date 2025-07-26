// iframe链接预览功能
document.addEventListener("DOMContentLoaded", function () {
  // 为所有外部链接添加预览功能
  const externalLinks = document.querySelectorAll('a[href^="http"]');

  externalLinks.forEach((link) => {
    // 添加链接预览类
    if (!link.classList.contains("link-preview")) {
      link.classList.add("link-preview");
    }

    // 为小红书链接添加特殊处理
    if (link.href.includes("xiaohongshu.com")) {
      link.setAttribute("data-platform", "xiaohongshu");
    }

    // 添加点击事件 - 显示iframe预览
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showIframePreview(this.href, this.textContent || this.href);
    });
  });

  // 显示iframe预览
  function showIframePreview(url, title) {
    // 检查是否已经存在预览
    const existingPreview = document.querySelector(".iframe-preview-container");
    if (existingPreview) {
      existingPreview.remove();
    }

    // 创建预览容器
    const previewContainer = document.createElement("div");
    previewContainer.className = "iframe-preview-container";

    // 创建头部
    const header = document.createElement("div");
    header.className = "iframe-preview-header";

    const titleElement = document.createElement("div");
    titleElement.className = "iframe-preview-title";
    titleElement.textContent = title;

    const controls = document.createElement("div");
    controls.className = "iframe-preview-controls";

    const openBtn = document.createElement("button");
    openBtn.className = "iframe-preview-btn open";
    openBtn.textContent = "在新窗口打开";
    openBtn.addEventListener("click", function () {
      window.open(url, "_blank", "noopener,noreferrer");
    });

    const closeBtn = document.createElement("button");
    closeBtn.className = "iframe-preview-btn close";
    closeBtn.textContent = "关闭预览";
    closeBtn.addEventListener("click", function () {
      previewContainer.remove();
    });

    controls.appendChild(openBtn);
    controls.appendChild(closeBtn);
    header.appendChild(titleElement);
    header.appendChild(controls);

    // 创建iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.title = title;

    // 添加加载状态
    const loading = document.createElement("div");
    loading.className = "iframe-loading";
    previewContainer.appendChild(loading);

    // iframe加载事件
    iframe.addEventListener("load", function () {
      loading.remove();
    });

    iframe.addEventListener("error", function () {
      loading.remove();
      const error = document.createElement("div");
      error.className = "iframe-error";
      error.textContent = '无法加载预览，请点击"在新窗口打开"查看';
      previewContainer.appendChild(error);
    });

    // 组装预览容器
    previewContainer.appendChild(header);
    previewContainer.appendChild(iframe);

    // 插入到页面中
    const link = document.querySelector(`a[href="${url}"]`);
    if (link) {
      link.parentNode.insertBefore(previewContainer, link.nextSibling);
    } else {
      // 如果没有找到链接，插入到页面顶部
      const main = document.querySelector("main");
      if (main) {
        main.insertBefore(previewContainer, main.firstChild);
      }
    }

    // 滚动到预览位置
    previewContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 为链接卡片添加点击事件
  const linkCards = document.querySelectorAll(".link-card");
  linkCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const link = this.querySelector("a");
      if (link) {
        e.preventDefault();
        showIframePreview(link.href, link.textContent || link.href);
      }
    });
  });

  // 添加工具提示
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = this.getAttribute("data-tooltip");
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
      `;
      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.bottom + 5 + "px";

      this.addEventListener("mouseleave", function () {
        tooltip.remove();
      });
    });
  });

  // 添加食谱链接快速导航
  function addRecipeNavigation() {
    const recipeLinks = document.querySelectorAll(".recipe-link");
    recipeLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // 页面加载完成后初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addRecipeNavigation);
  } else {
    addRecipeNavigation();
  }

  // 添加键盘快捷键
  document.addEventListener("keydown", function (e) {
    // ESC键关闭预览
    if (e.key === "Escape") {
      const preview = document.querySelector(".iframe-preview-container");
      if (preview) {
        preview.remove();
      }
    }
  });
});

// 添加全局函数供外部调用
window.showIframePreview = function (url, title) {
  const event = new CustomEvent("showIframePreview", {
    detail: { url, title },
  });
  document.dispatchEvent(event);
};
