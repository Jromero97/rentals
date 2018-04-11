<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let sticky = false;
    const descriptionDiv = $('#description');
    function stickNavigation() {
      descriptionDiv.addClass('fixed').removeClass('absolute');
      descriptionDiv.removeClass('text-center');
      $('#navigation').slideUp('fast');
      $('#sticky-navigation').slideDown('fast');
    }
    function unStickNavigation() {
      descriptionDiv.removeClass('fixed').addClass('absolute');
      descriptionDiv.addClass('text-center');
      $('#navigation').slideDown('fast');
      $('#sticky-navigation').slideUp('fast');
    }
    function isInBottom() {
      const descriptionHeight = descriptionDiv.height();
      return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2);
    }
    $(window).scroll(() => {
      const inBottom = isInBottom();
      if (inBottom && !sticky) {
        sticky = true;
        stickNavigation();
      }
      if (!inBottom && sticky) {
        sticky = false;
        unStickNavigation();
      }
    });
  },
};
</script>

<style>

</style>
