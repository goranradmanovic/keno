<template lang="pug">
.register
  .container
    .row
      .col-md-10.col-sm-12.offset-md-1
        b-card.register__card(title='Registracija korisnika')

          p.register__card--info Polja označena sa&nbsp;
            span.register__card--info--img
            | &nbsp;su obavezna i moraju se popuniti kako bi registracija bila uspiješna

          form.mt-3.mb-3(@submit.prevent='handleSubmit')
            .row
              .col-md-12.col-sm-12
                p.register__card--title Lični podaci
                span.register__card--divider

            .row
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label.required(for='fullName') Ime i prezime
                  input#fullName.form-control.register__card--input(type='text' v-model='user.fullName' name='fullName' :class="{ 'is-invalid': submitted && $v.user.fullName.$error }" placeholder='Upiši puno ime i prezime')
                  .invalid-feedback(v-if='submitted && !$v.user.fullName.required') Puno ime je obavezno

              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label.required(for='birthDate') Datum rođenja
                  input#birthDate.form-control.register__card--input.dropdown(type='date' v-model='user.birthDate' name='birthDate' :class="{ 'is-invalid': submitted && $v.user.birthDate.$error }")
                  .invalid-feedback(v-if='submitted && !$v.user.birthDate.required') Datum rođenja je obavezno

              .col-md-2.col-sm-12
                .form-group
                  label.register__card--label.required(for='gender') Pol
                  select#gender.form-control.register__card--input.dropdown(v-model='user.gender' name='gender' :class="{ 'is-invalid': submitted && $v.user.gender.$error }")
                    option(value='') Izaberi
                    option(value='1') Muški
                    option(value='2') Zenski
                  //-.invalid-feedback(v-if='submitted && $v.user.gender.$error')
                    span(v-if='!$v.user.gender.required') Pol je obavezna

            .row.mt-2
              .col-md-6.col-sm-12
                .form-group
                  label.register__card--label.required(for='address') Adresa
                  input#address.form-control.register__card--input(type='text' v-model='user.address' name='address' :class="{ 'is-invalid': submitted && $v.user.address.$error }" placeholder='Upiši adresu')
                  .invalid-feedback(v-if='submitted && !$v.user.address.required') Adresa je obavezna

              .col-md-3.col-sm-12
                .form-group
                  label.register__card--label.required(for='city') Grad
                  input#cityaddress.form-control.register__card--input(type='text' v-model='user.city' name='city' :class="{ 'is-invalid': submitted && $v.user.city.$error }" placeholder='Banja Luka')
                  .invalid-feedback(v-if='submitted && !$v.user.city.required') Grad je obavezna

              .col-md-3.col-sm-12
                .form-group
                  label.register__card--label(for='zipcode') Poštanski broj
                  input#zipcode.form-control.register__card--input(type='text' v-model='user.zipcode' name='zipcode' :class="{ 'is-invalid': submitted && $v.user.zipcode.$error }" placeholder='78000')
                  //-.invalid-feedback(v-if='submitted && !$v.user.zipcode.required') Poštanski broj je obavezna

            .row.mt-2
              .col-md-3.col-sm-12
                .form-group
                  label.register__card--label(for='phonenumber') Broj telefona
                  input#phonenumber.form-control.register__card--input(type='text' v-model='user.phonenumber' name='phonenumber' :class="{ 'is-invalid': submitted && $v.user.phonenumber.$error }" placeholder='XXX/XX-XXX-XXX')
                  //-.invalid-feedback(v-if='submitted && !$v.user.city.required') Broj telefona je obavezna

              .col-md-3.col-sm-12
                .form-group
                  label.register__card--label(for='accountnumber') Broj bankovnog računa
                  input#accountnumber.form-control.register__card--input(type='text' v-model='user.accountnumber' name='accountnumber' :class="{ 'is-invalid': submitted && $v.user.accountnumber.$error }" placeholder='XXXXXXXXXXXXXXXX')
                  //-.invalid-feedback(v-if='submitted && !$v.user.zipcode.required') Broj bankovnog računa je obavezna

            .row.mt-3.mb-3
              .col-md-12.col-sm-12
                p.register__card--title Podaci o nalogu
                span.register__card--divider

            .row
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label.required(for='username') Korišničko ime
                  input#username.form-control.register__card--input(type='text' v-model='user.username' name='username' :class="{ 'is-invalid': submitted && $v.user.username.$error }" placeholder='Uneseiti željeno korisničko ime')
                  .invalid-feedback(v-if='submitted && !$v.user.username.required') Puno ime je obavezno

              .col-md-5.col-sm-12
                label.register__card--label.required(for='email') Email
                input#email.form-control.form-control.register__card--input(type='email' v-model='user.email' name='email' :class="{ 'is-invalid': submitted && $v.user.email.$error }" placeholder='Upišite vašu email adresu')
                .invalid-feedback(v-if='submitted && $v.user.email.$error')
                  span(v-if='!$v.user.email.required') Email je obavezna
                  span(v-if='!$v.user.email.email') Email nije validan

            .row
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label.required(for='password') Lozinka
                  input#password.form-control.register__card--input(type='password' v-model='user.password' name='password' :class="{ 'is-invalid': submitted && $v.user.password.$error }" placeholder='Upišite lozinku')
                  .invalid-feedback(v-if='submitted && $v.user.password.$error')
                    span(v-if='!$v.user.password.required') Lozinka je obavezna
                    span(v-if='!$v.user.password.minLength') Lozinka mora biti najmanje od 6 karaktera

              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label.required(for='confirmPassword') Potvrdi Lozinku
                  input#confirmPassword.form-control.register__card--input(type='password' v-model='user.confirmPassword' name='confirmPassword' :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" placeholder='Upišite lozinku ponovo')
                  .invalid-feedback(v-if='submitted && $v.user.confirmPassword.$error')
                    span(v-if='!$v.user.confirmPassword.required') Potvrdna lozinka je obavezna
                    span(v-else-if='!$v.user.confirmPassword.sameAsPassword') Potvrdna lozinka se ne podudara

            .row
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label(for='securtiyquestion') Sigurnosno pitanje
                  select#securtiyquestion.form-control.register__card--input.dropdown(v-model='user.securtiyquestion' name='securtiyquestion' :class="{ 'is-invalid': submitted && $v.user.securtiyquestion.$error }")
                    option(value='') Izaberite pitanje
                    option(value='1') 1
                    option(value='2') 2
                    option(value='3') 3
                  //-.invalid-feedback(v-if='submitted && $v.user.securtiyquestion.$error')
                    span(v-if='!$v.user.gender.required') Sigurnosno pitanje je obavezna

            .row
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label(for='securtiyanswer') Sigurnosni odgovor
                  textarea#securtiyanswer.form-control.register__card--input(rows='4' v-model='user.securtiyanswer' name='securtiyanswer' :class="{ 'is-invalid': submitted && $v.user.securtiyanswer.$error }" placeholder='Upišite odgovor')
                  //-.invalid-feedback(v-if='submitted && $v.user.securtiyanswer.$error')
                    span(v-if='!$v.user.securtiyanswer.required') Sigurnosni odgovor je obavezna

            .row
              .col-md-5.col-sm-12
                .form-check.form-check-inline
                  input#currency-1.form-check-input.register__card--input--radio(type='radio' v-model='user.currency' name='currency' :class="{ 'is-invalid': submitted && $v.user.currency.$error }" value='BAM' checked)
                  label.form-check-label.register__card--label--radio(for='currency-1') BAM

                .form-check.form-check-inline
                  input#currency-2.form-check-input.register__card--input--radio(type='radio' v-model='user.currency' name='currency' :class="{ 'is-invalid': submitted && $v.user.currency.$error }" value='EUR')
                  label.form-check-label.register__card--label--radio(for='currency-2') EUR
                  //-.invalid-feedback(v-if='submitted && !$v.user.currency.required') Valuta je obavezna

            .row.mb-3
              .col-md-5.col-sm-12
                .form-group
                  label.register__card--label(for='howdidyoufindas') Kako ste saznali za nas?
                  select#howdidyoufindas.form-control.register__card--input.dropdown(v-model='user.howdidyoufindas' name='howdidyoufindas' :class="{ 'is-invalid': submitted && $v.user.howdidyoufindas.$error }")
                    option(value='') Izaberite pitanje
                    option(value='1') 1
                    option(value='2') 2
                    option(value='3') 3
                  //-.invalid-feedback(v-if='submitted && $v.user.securtiyquestion.$error')
                    span(v-if='!$v.user.gender.required') Pitanje je obavezno

            .row
              .col-md-8.col-sm-12
                .form-check
                  input#rulesofuse.form-check-input.register__card--input--checkbox(type='checkbox' v-model='user.rulesofuse' name='rulesofuse' :class="{ 'is-invalid': submitted && $v.user.rulesofuse.$error }" value='1' checked)
                  label.form-check-label(for='rulesofuse')
                    | &nbsp;&nbsp;Prihvatam&nbsp;
                    a.register__card--input--checkbox--link(href='#' target='_blank') pravila i uslove korištenja&nbsp;
                    | Lutrije Republike Srpske

            .row.mt-3
              .col-md-5.col-sm-12
                .form-group
                  button.btn.register__card--btn Registruj se
</template>

<script>
  import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

  export default {
    name: "register",
    data() {
        return {
            user: {
                fullName: "",
                birthDate: "",
                gender: "",
                address: "",
                city: "",
                zipcode:"",
                phonenumber: "",
                accountnumber: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                securtiyquestion: "",
                securtiyanswer: "",
                currency: "",
                howdidyoufindas: "",
                rulesofuse: ""
            },
            submitted: false
        };
    },

    validations: {
         user: {
             fullName: { required },
             birthDate: { required },
             gender: { required },
             address: { required },
             city: { required },
             zipcode: { },
             phonenumber: { },
             accountnumber: { },
             username: { required },
             email: { required, email },
             password: { required, minLength: minLength(6) },
             confirmPassword: { required, sameAsPassword: sameAs('password') },
             securtiyquestion: { },
             securtiyanswer: { },
             currency: { },
             howdidyoufindas: { },
             rulesofuse: { }
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
