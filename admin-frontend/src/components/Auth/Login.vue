<template>
<div>
    <v-container class="grey lighten-5">
        <v-col
        md="6"
        offset-md="3"
      >
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Remember me"
      required
    ></v-checkbox>

    <v-btn
      color="success"
      class="mr-4"
      @click="login"
    >
      Login
    </v-btn>


  </v-form>
    <v-row class="mb-6"
      justify="center"
      no-gutters>
    Don't have a acount? go to <router-link to="/register">Register now!</router-link>
    </v-row>
        </v-col>
    </v-container>
  
</div>
</template>

<script>
// import { mapActions } from 'vuex'
  export default {
    metaInfo: { title: 'Login' },
    data: () => ({
      valid: true,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required!',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
          v=>!!v || 'Password is required!'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      login(){
        if(!this.email){
          alert(this.$t('user.message.require.email'))
        } else if(!this.password){
          alert(this.$t('user.message.require.password'))
        } else {
        this.$store.dispatch('login',
         { 
            email: this.email,
            password: this.password
         }
        )
        .then(() => {
          this.$router.push('/home')
        })
       }
      }
    },
  }
</script>