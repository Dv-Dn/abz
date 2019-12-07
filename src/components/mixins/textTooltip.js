export const textTooltip = {
  mounted() {
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.overflowedTextTooltip;
    }
  },
  computed: {
    // Если в области блока Users цель указателя имеет переполнение текста по высоте или ширине - выводим подсказку.
    // Позиция появления подсказки требует доработки, т.к. иногда выходит за границы экрана.
    overflowedTextTooltip: function() {
      let tooltip = this.$refs.Tooltip.$el,
        target = null;
      this.$el.addEventListener("mouseover", e => {
        let tgt = e.target,
          teg = e.target.nodeName.toLowerCase();
        const contain =
          // teg === "h1" ||
          // teg === "h2" ||
          // teg === "h3" ||
          teg === "h4" ||
          // teg === "h5" ||
          teg === "p";

        let ovfH = tgt.scrollWidth > tgt.clientWidth,
          ovfW = tgt.scrollHeight > tgt.clientHeight;

        if ((ovfW && contain) || (ovfH && contain)) {
          target = tgt;
          tooltip.style.left = tgt.offsetLeft + "px";
          tooltip.style.top = tgt.offsetTop + tgt.clientHeight + "px";
          while (
            this.$el.offsetWidth <
            tooltip.offsetWidth + tooltip.offsetLeft
          ) {
            // tooltip.offsetLeft -= 10;
            tooltip.style.left -= 200 + "px";
          }

          tgt.style.cursor = "pointer";
          setTimeout(() => {
            tooltip.style.display = "block";
            tooltip.innerHTML = tgt.innerHTML;
          }, 333);
        }
        if (tgt != target) {
          tooltip.style.display = "none";
        }
      });
      this.$el.addEventListener("mouseout", e => {
        let teg = e.target.nodeName.toLowerCase();
        const contain =
          // teg === "h1" ||
          // teg === "h2" ||
          // teg === "h3" ||
          teg === "h4" ||
          // teg === "h5" ||
          teg === "p";
        if (!contain) return;
        if (e.relatedTarget.parentNode === e.target) return;
        tooltip.style.display = "none";
        // console.clear();
      });
    }
  }
};
