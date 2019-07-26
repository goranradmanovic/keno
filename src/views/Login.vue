<template lang="pug">
  .container
    .row
      .col-md-6.col-sm-12.offset-md-3
        b-card.login(title='Prijava')

          form.mt-5(@submit.prevent='handleSubmit')

            .form-group
              label(for='email') Email
              input#email.form-control(type='email' v-model='user.email' name='email' :class="{ 'is-invalid': submitted && $v.user.email.$error }")
              .invalid-feedback(v-if='submitted && $v.user.email.$error')
                span(v-if='!$v.user.email.required') Email je obavezna
                span(v-if='!$v.user.email.email') Email nije validan

            .form-group
              label(for='password') Lozinka
              input#password.form-control(type='password' v-model='user.password' name='password' :class="{ 'is-invalid': submitted && $v.user.password.$error }")
              .invalid-feedback(v-if='submitted && $v.user.password.$error')
                span(v-if='!$v.user.password.required') Lozinka je obavezna
                span(v-if='!$v.user.password.minLength') Lozinka mora biti najmanje od 6 karaktera

            .form-group
              button.btn.btn-primary Potvrdi
</template>

<script>
  import { required, email, minLength } from "vuelidate/lib/validators";

  export default {
    name: "login",
    data() {
        return {
            user: {
                email: null,
                password: null,
            },
            submitted: false,
            feedback: null
        };
    },

    validations: {
         user: {
             email: { required, email },
             password: { required, minLength: minLength(6) },
         }
     },

     methods: {
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
          if (this.user.email && this.user.password) {
            //Redirect user to protected area of the app. CHANGE THIS PATH VALUE '/'
            this.$router.push({ name: 'dashboard', params: { email: this.user.email, password: this.user.password }});
          } else {
            this.feedback = 'You must enter the email and password to join.';
          }
        }
     }
  }
</script>
