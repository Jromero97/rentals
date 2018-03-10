export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Vue tutorial!',
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  mounted() {
    let sticky = false; // Declare this variable when is not down.
    // let currentPosition = 0; // Current position slider
    // let imageCounter = $('[data-name="image-counter"]').attr('content'); // Quantity of images to slide
    const email = 'j.romeroc97@gmail.com';
    const descriptionDiv = $('#description');

    function stickNavigation(){
      descriptionDiv.addClass('fixed').removeClass('absolute'); // Fixing div description
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

    function sendForm(){
      $.ajax({
        url: $form.attr('action'),
        method: 'POST',
        data: $form.formObject(),
        dataType: 'json',
        success:  () => {
          alert('Everything Ok!');
        }
      });
    }

    function isInBottom() {
      const description = $('#description');
      const descriptionHeight = description.height();
      return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
    }

    $('#form-contact').on('submit', (ev) => {
      ev.preventDefault();
      sendForm($(this));
      return false
    });

    /* Define time interval */
    // setInterval(()=>{
    //   // If current position is less than image counter, increment current position.
    //   if(currentPosition < imageCounter){
    //     currentPosition++;
    //   } else {
    //     currentPosition = 0; // Restart current position.
    //   }
    //   // Set current position to next image in slide.
    //   $('#gallery .inner').css({
    //     left: '-'+currentPosition*100+'%',
    //   });
    // }, 2000);

    $(window).scroll(()=>{
      const inBottom = isInBottom();
      // If in bottom and sticky is false
      if(inBottom && !sticky){
        // Change sticky to true
        sticky = true;
        stickNavigation();
      }
      if(!inBottom && sticky){
        sticky = false;
        unStickNavigation();
      }
    });


  }
};
