import Vue from "vue";

export default function slider () {
  new Vue ({
    el: '#works',
    data: {
      counter: 0,
      btnLeftClassName: 'works-buttons__left_',
      btnRightClassName: 'works-buttons__right_',
      activeClassImg: 'slider__item-active',
      activeClassDesc: 'works-desc__item-active'
    },
    methods: {
      changeBtnsImg (e) {
        if (this.counter < 3) {
          this.counter += 1;
        } else {
          this.counter = 0;
        }
      }
    }
  });
  






}