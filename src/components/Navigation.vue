<template lang="pug">

.navigation
  .container
    .row
      .col-md-12.col-sm-12
        nav.navbar.navbar-expand-lg.navbar-light.pt-0.pb-0
          a.navbar-brand(href='/')
            img(src='../assets/images/header-img/keno-logo.png' alt='Logo png' class='navigation__logo')

          .navigation__mobilesupport
            img(src='../assets/images/icons/online_support_red.svg' alt='Logo png' class='navigation__mobilesupport--img')
            .navigation__mobilesupport--text
              p Pomoć igračima&nbsp;
                strong 7-23h
              p 051 442 855

          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarSupportedContent.collapse.navbar-collapse

            ul.navbar-nav.mr-auto
              li.nav-item(class='navigation__item')
                router-link.nav-link(to='/' class='navigation__item--link') Početna
                  span.sr-only (current)
              li.nav-item(class='navigation__item')
                router-link.nav-link(to='/svirezultati' class='navigation__item--link') Rezultati

              li.nav-item.dropdown(class='navigation__dropdown')
                router-link#navbarDropdown.nav-link.dropdown-toggle(to='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='navigation__dropdown--link')
                  | Kako igrati
                .dropdown-menu(aria-labelledby='navbarDropdown' class='navigation__dropdown--modal howtoplay-dropdown')
                  router-link.dropdown-item(to='/kako-igrati' class='navigation__dropdown--modal--link keno')
                    img(src='../assets/images/header-img/keno-logo-balls.png' alt='Logo png' class='navigation__dropdown--modal--link--img')
                    span.navigation__dropdown--modal--link--text Kako igrati
                      br
                      | keno?
                  router-link.dropdown-item(to='/kako-igrati' class='navigation__dropdown--modal--link super')
                    img(src='../assets/images/header-img/super5-logo.png' alt='Logo png' class='navigation__dropdown--modal--link--img')
                    span.navigation__dropdown--modal--link--text Kako igrati
                      br
                      | loto super pet?

              li.nav-item(class='navigation__item')
                router-link.nav-link(to='/uplata-isplata' class='navigation__item--link') Uplate i isplate
              li.nav-item(class='navigation__item')
                router-link.nav-link(to='/raspored-izvlacenja' class='navigation__item--link') Raspored izvlacenja

            ul.navbar-nav.ml-auto
              li.nav-item.mr-3(class='navigation__item' v-if='!loggedin')
                router-link.nav-link(to='/registracija' class='navigation__item--link registration') Registruj se
                span.sr-only (current)

              li.nav-item.dropdown(class='navigation__dropdown user' v-if='!loggedin')
                router-link#navbarDropdown.nav-link.dropdown-toggle(to='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='navigation__dropdown--link signin')
                  img(src='../assets/images/icons/login-rounded-right.svg' alt='Logo png' class='navigation__dropdown--icon')
                  | Prijavi se
                .dropdown-menu(aria-labelledby='navbarDropdown' class='navigation__dropdown--modal')
                  form.mt-1.text-center(@submit.prevent='handleSubmit' class='navigation__dropdown--modal--form')

                    .form-group.navigation__dropdown--modal--form--group
                      p.navigation__dropdown--modal--form--group--text.text-left Unesi korisničko ime
                      input#email.form-control.text-center(type='text' v-model='user.name' name='username' :class="{ 'is-invalid': submitted && $v.user.name.$error }" placeholder='korisničko ime' class='navigation__dropdown--modal--form--group--input')
                      .invalid-feedback(v-if='submitted && $v.user.name.$error')
                        span(v-if='!$v.user.name.required') Korisničko ime je obavezno
                        span(v-if='!$v.user.name.minLength') Korisničko ime mora biti najmanje od 3 karaktera

                    .form-group.navigation__dropdown--modal--form--group
                      p.navigation__dropdown--modal--form--group--text.text-left Unesi lozinku
                      input#password.form-control.text-center(type='password' v-model='user.password' name='password' :class="{ 'is-invalid': submitted && $v.user.password.$error }" placeholder='********' class='navigation__dropdown--modal--form--group--input')
                      .invalid-feedback(v-if='submitted && $v.user.password.$error')
                        span(v-if='!$v.user.password.required') Lozinka je obavezna
                        span(v-if='!$v.user.password.minLength') Lozinka mora biti najmanje od 6 karaktera

                    .form-group.navigation__dropdown--modal--form--group
                      button.btn.btn-primary(class='navigation__dropdown--modal--form--group--btn') Prijavi se

                li.nav-item.dropdown(class='navigation__dropdown user' v-if='loggedin')
                  router-link#navbarDropdown.nav-link.dropdown-toggle(to='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='navigation__dropdown--link signin')
                    img(src='../assets/images/icons/user.svg' alt='Logo png' class='navigation__dropdown--icon')
                    | Mirkec 358 &nbsp;
                    span.navigation__dropdown--useramount 326.00 KM
                  .dropdown-menu.text-center(aria-labelledby='navbarDropdown' class='navigation__dropdown--modal loggedin')
                    router-link.dropdown-item(to='/profil' class='navigation__dropdown--modal--link user-dropdown') Profil Korisnika
                    .dropdown-divider
                    router-link.dropdown-item(to='#' class='navigation__dropdown--modal--link user-dropdown') Dopuni račun
                    .dropdown-divider
                    router-link.dropdown-item(to='#' class='navigation__dropdown--modal--link user-dropdown') Odjavi se

  .navigation__info
   .container
     .row
       .col-md-6.col-sm-12
         ul.navbar-nav.ml-auto
           li.nav-item.dropdown(class='navigation__info--check')
             span.navigation__info--check--pseudo
             router-link#navbarDropdown.nav-link.dropdown-toggle(to='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='navigation__info--check--link')
               | Provjeri dobitak
             .dropdown-menu(aria-labelledby='navbarDropdown' class='navigation__info--modal')
               form.mt-1.text-center(@submit.prevent='handleCodeSubmit' class='navigation__info--modal--form')
                 .form-group.navigation__info--modal--form--group
                   p.navigation__info--modal--form--group--text.text-left Unesi kod za provjeru
                   input.form-control.text-center(type='text' v-model='code' name='username' :class="{ 'is-invalid': submitted && $v.code.$error }" placeholder='000000000000' class='navigation__dropdown--modal--form--group--input')
                   .invalid-feedback(v-if='submitted && $v.code.$error')
                     span(v-if='!$v.code.required') Kod je obavezan

                 .form-group.navigation__dropdown--modal--form--group
                   button.btn.btn-primary(class='navigation__dropdown--modal--form--group--btn') Provjeri


       .col-md-6.col-sm-12
         .navigation__info--container
           .navigation__info--container--text Pomoć igračima &nbsp;
            span 7-23h
           .navigation__info--container--number 051 442 855
</template>

<script>
  import { required, minLength } from "vuelidate/lib/validators";

  export default {
    name: 'Navigation',
    data() {

      return {
        user: {
            name: null,
            password: null,
        },
        code: null,
        submitted: false,
        feedback: null,
        loggedin: false
      }
    },

    validations: {
         user: {
             name: { required, minLength: minLength(3) },
             password: { required, minLength: minLength(6) },
         },
        code: { required, minLength: minLength(3) },
     },

    methods: {
      getMainMenu() {
        let url = new URL("http://api.kenolive.tv/api/v1/menus/1"),
            headers = {
              "Accept": "application/json",
              "Content-Type": "application/json",
            }

        fetch(url, {
          mode: 'cors',
          method: "GET",
          headers: headers,
        }).then(response => response.json())
        .then(json => console.log(json));
      },

      handleCodeSubmit() {
           this.submitted = true;

           // stop here if form is invalid
          this.$v.$touch();

           if (this.$v.$invalid) {
               return;
           }

           //Check user credential with the user data from DB if they match redirect user to protected area of the app
           console.log("SUCCESS!! \n" + JSON.stringify(this.user));
       },

      handleSubmit() {
           this.submitted = true;

           // stop here if form is invalid
          this.$v.$touch();

           if (this.$v.$invalid) {
               return;
           }

           //Check user credential with the user data from DB if they match redirect user to protected area of the app
           console.log("SUCCESS!! \n" + JSON.stringify(this.user));

           this.enterToDashborad();
       },

       enterToDashborad() {
         if (this.user.name && this.user.password) {
           //Redirect user to protected area of the app. CHANGE THIS PATH VALUE '/'
           this.$router.push({ name: 'dashboard', params: { name: this.user.name, password: this.user.password }});
         } else {
           this.feedback = 'You must enter the username and password to join.';
         }
       }
    },

    mounted() {
      //this.getMainMenu();
    }
  }
</script>
