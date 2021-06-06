"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener('DOMContentLoaded', function () {
  // Tabs for Halls Gallery -------------------------------------------------------
  var tabs = function () {
    var tabsControl = document.querySelectorAll('.halls-menu__item'),
        tabsContent = document.querySelectorAll('.halls-tabs'),
        activeTab = tabsControl[0],
        activeIndex = 0,
        carret = document.querySelector('.halls-menu__point'),
        init = function init() {
      activeTab.classList.add('halls-menu__item--active');
      tabsContent[activeIndex].classList.add('halls-tabs--show');
      setTimeout(function () {
        setCarret();
        carret.classList.add('halls-menu__point--ready');
      }, 200);
      tabsControl.forEach(function (item, index) {
        item.addEventListener('click', function () {
          showTab(index);
        });
      });
    },
        setCarret = function setCarret() {
      carret.style.width = activeTab.offsetWidth + 'px';
      var offset = 0;

      _toConsumableArray(tabsControl).slice(0, activeIndex).forEach(function (i) {
        offset += i.offsetWidth + +window.getComputedStyle(i).marginRight.match(/\d/g).join('');
      });

      carret.style.transform = "translate(".concat(offset, "px)");
    },
        showTab = function showTab(i) {
      activeIndex = i;
      activeTab = tabsControl[activeIndex];
      setCarret();
      [].concat(_toConsumableArray(tabsControl), _toConsumableArray(tabsContent)).forEach(function (i) {
        i.classList.remove('halls-menu__item--active', 'halls-tabs--show');
      });
      activeTab.classList.add('halls-menu__item--active');
      tabsContent[activeIndex].classList.add('halls-tabs--show');
    };

    return {
      init: init
    };
  }();

  tabs.init();
});