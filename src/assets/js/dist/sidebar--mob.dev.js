"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // |Mobile sidebar ------------------------------------------------------
  document.querySelector('.sidebar__btn-wrap--mob').addEventListener('click', function () {
    document.querySelector('.sidebar--mob').classList.toggle('sidebar--mob--active');
    document.querySelector('.sidebar__btn--mob').classList.toggle('sidebar__btn--mob--active');
    document.querySelector('.sidebar__menu--mob').classList.toggle('sidebar__menu--mob--active');
  });
  document.querySelector('.sidebar--mob').addEventListener('click', function () {
    this.classList.remove('sidebar--mob--active');
    document.querySelector('.sidebar__btn--mob').classList.toggle('sidebar__btn--mob--active');
  });
  document.querySelector('.sidebar__menu--mob').addEventListener('click', function (e) {
    e.stopPropagation();
  });
});