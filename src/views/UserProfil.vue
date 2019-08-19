<template lang="pug">
  .userprofil
    .container
      .row.mt-4.mb-4
        .col-md-12.col-sm-12
          .userprofil__wrapper
            img.userprofil__wrapper--image(src='../assets/images/icons/user-filled.svg' alt='User profil image')

            .userprofil__wrapper--content
              .userprofil__wrapper--content--username
                p markec358

              .userprofil__wrapper--content--accountstatus
                  span Stanje osnovnog računa
                  span 100,00KM

              .userprofil__wrapper--content--bonusstatus
                .userprofil__wrapper--content--bonusstatus--info
                  span Stanje BONUS računa
                  span 100,00KM

              .userprofil__wrapper--content--playbtn
                button.btn Igraj
      .row.mt-4.mb-4
        .col-md-12.col-sm-12
          p.userprofil__title Podatci o korisniku
          span.userprofil__divider

      .row
        .col-md-3.col-sm-12
          p.userprofil__label Ime i prezime
          p.userprofil__text Marko Marković
        .col-md-3.col-sm-12
          p.userprofil__label Adresa
          p.userprofil__text Vuka Karađića 2
        .col-md-3.col-sm-12
          p.userprofil__label Email
          p.userprofil__text markec358@gmail.com
        .col-md-3.col-sm-12
          a.userprofil__btn(href='#')
            img.userprofil__btn--img(src='../assets/images/icons/edit-property.svg' alt='icon svg')
            | Uredi profil
      .row
        .col-md-3.col-sm-12
          p.userprofil__label Datum rođenja
          p.userprofil__text 18.02.1986.
        .col-md-3.col-sm-12
          p.userprofil__label Grad
          p.userprofil__text Banja Luka
        .col-md-3.col-sm-12
          p.userprofil__label Broj telefona
          p.userprofil__text +387 65 187 176
        .col-md-3.col-sm-12
          a.userprofil__btn(href='#')
            img.userprofil__btn--img(src='../assets/images/icons/request-money-white.svg' alt='icon svg')
            | Dopuni račun

      .row.mb-4
        .col-md-3.col-sm-12
          p.userprofil__label Pol
          p.userprofil__text Muško
        .col-md-3.col-sm-12
          p.userprofil__label Poštanski broja
          p.userprofil__text 78000
        .col-md-3.col-sm-12
          p.userprofil__label Broj bankovnog računa
          p.userprofil__text 1586 6841 1557 6635
        .col-md-3.col-sm-12
          a.userprofil__btn(href='#')
            img.userprofil__btn--img(src='../assets/images/icons/money-transfer.svg' alt='icon svg')
            | Isplata

      .row.mt-5.mb-4
        .col-md-12.col-sm-12
          p.userprofil__title Istorija igara
          span.userprofil__divider

      .row
        .col-md-12.col-sm-12
          table.table.table-hover.userprofil__table
            thead.userprofil__table--thead
              tr.userprofil__table--thead--tr
                th.userprofil__table--thead--tr--th(v-for='(item, index) in gamesHistory.tableHeader' :key='index') {{ item }}

            tbody.userprofil__table--tbody
              tr.userprofil__table--tbody--tr(v-for='(item, index) in gamesHistory.tableData' :key='index')
                td {{ item.id }}
                td.userprofil__table--tbody--tr--td
                  img.userprofil__table--tbody--tr--td--img(:src='"../assets/images/pullout-img/" + item.game + ".png"' alt='Game image')
                td
                  span(v-for='item in gamesHistory.tableData[index].combination') {{ item }},&nbsp;
                td {{ item.round }}
                td {{ item.pullout }}
                td {{ item.date }}
                td {{ item.time }}
                td.userprofil__table--tbody--tr--td
                  img.userprofil__table--tbody--tr--td--img(:src='"../assets/images/icons/" + item.status + ".svg"' alt='Icons image')
                td.userprofil__table--tbody--tr--td
                  img.userprofil__table--tbody--tr--td--img(:src='"../assets/images/icons/" + item.report + ".svg"' alt='Icons image')

      .row.mt-5.mb-4
        .col-md-12.col-sm-12
          p.userprofil__title Istorija Transakcija
          span.userprofil__divider

      .row
        .col-md-12.col-sm-12
          table.table.table-hover.userprofil__table
            thead.userprofil__table--thead
              tr.userprofil__table--thead--tr
                th.userprofil__table--thead--tr--th(v-for='(item, index) in gamesHistoryTransaction.tableHeader' :key='index') {{ item }}

            tbody.userprofil__table--tbody
              tr.userprofil__table--tbody--tr(v-for='(item, index) in gamesHistoryTransaction.tableData' :key='index')
                td {{ item.id }}
                td.userprofil__table--tbody--tr--td
                  img.userprofil__table--tbody--tr--td--img(:src='"../assets/images/icons/" + item.imgtype + ".svg"' alt='Game image')
                  | {{ item.type }}

                td {{ item.amount }} KM
                td
                  strong {{ item.mode }}

                td {{ item.date }}
                td {{ item.time }}
</template>

<script>
  export default {
    name: 'userprofil',
    data() {
      return {
        gamesHistory: {
            tableHeader: ['id', 'igra', 'kombinacija', 'kolo', 'izvlačenje', 'datum', 'vrijeme', 'status', 'izvještaj'],
            tableData: [
              {
                id: '0001',
                game: 'keno',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '9.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'ok',
                report: 'document'
              },
              {
                id: '0002',
                game: 'super5',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '10.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'cancel',
                report: 'document'
              },
              {
                id: '0003',
                game: 'keno',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '11.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'ok',
                report: 'document'
              },
              {
                id: '0004',
                game: 'super5',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '11.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'cancel',
                report: 'document'
              },
              {
                id: '0005',
                game: 'keno',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '12.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'ok',
                report: 'document'
              },
              {
                id: '0006',
                game: 'super5',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '13.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'ok',
                report: 'document'
              },
              {
                id: '0007',
                game: 'keno',
                combination: [10, 12, 18, 24, 28, 32, 35, 42, 46, 52],
                round: '3.',
                pullout: '9.',
                date: '12.08.2019.',
                time: '14:30',
                status: 'cancel',
                report: 'document'
              },
            ]
        },

        gamesHistoryTransaction: {
            tableHeader: ['id', 'vrsta', 'iznos', 'način', 'datum', 'vrijeme'],
            tableData: [
              {
                id: '0001',
                type: 'dobitak',
                imgtype: 'win',
                amount: '120,00',
                mode: 'xbon',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0002',
                type: 'isplata',
                imgtype: 'money-transfer-green',
                amount: '60.000,00',
                mode: 'banka',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0003',
                type: 'dobitak',
                imgtype: 'win',
                amount: '120,00',
                mode: 'xbon',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0004',
                type: 'isplata',
                imgtype: 'money-transfer-green',
                amount: '60.000,00',
                mode: 'banka',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0005',
                type: 'bonus',
                imgtype: 'coins',
                amount: '120,00',
                mode: 'xbon',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0006',
                type: 'dobitak',
                imgtype: 'win',
                amount: '120,00',
                mode: 'xbon',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0007',
                type: 'isplata',
                imgtype: 'money-transfer-green',
                amount: '60.000,00',
                mode: 'banka',
                date: '12.08.2019.',
                time: '14:30',
              },
              {
                id: '0008',
                type: 'bonus',
                imgtype: 'coins',
                amount: '120,00',
                mode: 'xbon',
                date: '12.08.2019.',
                time: '14:30',
              },
            ]
        }
      }
    }
  }
</script>
