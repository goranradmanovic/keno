<template lang="pug">
  .container
    .row
      .col-md-6.col-sm-12.offset-md-3
        b-card.register(title='Registracija')

          form.mt-5.mb-5(@submit.prevent='handleSubmit')

            .form-group
              label(for='firstName') Ime
              input#firstName.form-control(type='text' v-model='user.firstName' name='firstName' :class="{ 'is-invalid': submitted && $v.user.firstName.$error }")
              .invalid-feedback(v-if='submitted && !$v.user.firstName.required') Ime je obavezno

            .form-group
              label(for='lastName') Prezime
              input#lastName.form-control(type='text' v-model='user.lastName' name='lastName' :class="{ 'is-invalid': submitted && $v.user.lastName.$error }")
              .invalid-feedback(v-if='submitted && !$v.user.lastName.required') Prezime je obavezno

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
              label(for='confirmPassword') Potvrdi Lozinku
              input#confirmPassword.form-control(type='password' v-model='user.confirmPassword' name='confirmPassword' :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }")
              .invalid-feedback(v-if='submitted && $v.user.confirmPassword.$error')
                span(v-if='!$v.user.confirmPassword.required') Potvrdna lozinka je obavezna
                span(v-else-if='!$v.user.confirmPassword.sameAsPassword') Potvrdna lozinka se ne podudara

            .form-group
              button.btn.btn-primary Potvrdi
</template>

<script>
  import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

  export default {
    name: "register",
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            submitted: false
        };
    },

    validations: {
         user: {
             firstName: { required },
             lastName: { required },
             email: { required, email },
             password: { required, minLength: minLength(6) },
             confirmPassword: { required, sameAsPassword: sameAs('password') }
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

            //Send this data to the server and DB (JSON.stringify(this.user))
            console.log("SUCCESS!! \n\n" + JSON.stringify(this.user));

            //Redirect user to home
            this.$router.push({ path: '/' });
        }
     }
  }
</script>
