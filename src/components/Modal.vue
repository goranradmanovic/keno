<template lang="pug">
  #exampleModalCenter.modal.fade.show.winmodal(tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-modal='true' style='display: block; padding-right: 17px;' v-if='isWinningTicket')
    .modal-dialog.modal-dialog-centered(role='document')
      .modal-content
        .modal-header.winmodal__header
          h5#exampleModalCenterTitle.modal-title.text-center.winmodal__header--title
            | Čestitamo!
            br
            | Kombinacija je dobitna.
          button.close.winmodal__header--closebtn(type='button' @click='closeModal') &times;

        .modal-body
          p.text-center
            | Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        .modal-footer.winmodal__footer
          router-link.btn.btn-lg.winmodal__footer--profilebtn(to='/profil') Idi na profil
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        isWinningTicket: false
      }
    },

    methods: {
      closeModal() {
        this.isWinningTicket = false;
      }
    }

  }
</script>
