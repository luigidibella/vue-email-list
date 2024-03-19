const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Vue Email List',
      risultato: 'Loading...',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [],
    }
  },

  methods: {

    getApis(){
      for (let i = 0; i < 10; i++) {
        axios.get(this.apiUrl)
        .then(res => {
          this.emails.push(res.data.response)
        })
      }
    },

  },

  mounted() {
    this.getApis();
    
  },
}).mount('#app')