document.addEventListener('DOMContentLoaded', function () {

  // Tabs for Halls Gallery -------------------------------------------------------

  let tabs = (function () {
    let tabsControl = document.querySelectorAll('.halls-menu__item'),
      tabsContent = document.querySelectorAll('.halls-tabs'),
      activeTab = tabsControl[0],
      activeIndex = 0,
      carret = document.querySelector('.halls-menu__point'),



      init = () => {
        activeTab.classList.add('halls-menu__item--active');
        tabsContent[activeIndex].classList.add('halls-tabs--show');

        setTimeout(() => {
          setCarret();
          carret.classList.add('halls-menu__point--ready')
        }, 200)

        tabsControl.forEach((item, index) => {
          item.addEventListener('click', () => {
            showTab(index);
          })
        });
      },



      setCarret = () => {
        carret.style.width = activeTab.offsetWidth + 'px';

        let offset = 0;

        [...tabsControl].slice(0, activeIndex).forEach(i => {
          offset += i.offsetWidth + +window.getComputedStyle(i).marginRight.match(/\d/g).join('')
        })

        carret.style.transform = `translate(${offset}px)`
      },



      showTab = (i) => {
        activeIndex = i;
        activeTab = tabsControl[activeIndex];

        setCarret();

        [...tabsControl, ...tabsContent].forEach(i => {
          i.classList.remove('halls-menu__item--active', 'halls-tabs--show');
        });

        activeTab.classList.add('halls-menu__item--active');
        tabsContent[activeIndex].classList.add('halls-tabs--show');
      };



    return {
      init
    }
  })();

  tabs.init();

});