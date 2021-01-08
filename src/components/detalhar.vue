<template>
  <b-container > 
    <b-row class="RowCard">
<b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="bebida.image_url" alt="Cerveja" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="bebida.name" style="color: purple">
          <b-card-text style="color: black; text-align: justify">
            <h2>Description:</h2>
            <br>
           {{bebida.description}}
            <p></p>
            <h3>Food pairing</h3>
            <b-list-group>
                <b-list-group-item>{{bebida.food_pairing[0]}}</b-list-group-item>
                <b-list-group-item>{{bebida.food_pairing[1]}}</b-list-group-item>
                <b-list-group-item>{{bebida.food_pairing[2]}}</b-list-group-item>
            </b-list-group>
            <br>
            <h3>Volume</h3>
            <p>{{bebida.volume.value}} Litres</p>

            <br>
            <h3>First Brewed</h3>
            <p>{{bebida.first_brewed}}</p>
            
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

    </b-row>
        <b-row class="edit">
        <h2>Editions</h2>
        <span>Beer name:</span>
        <b-form-input v-model="bebida.name" placeholder="Enter the beer name!" required type="text"></b-form-input>
        <br>
        <span>Description:</span>
        <b-form-input v-model="bebida.description" placeholder="Enter a description!"></b-form-input>
        <br>
        <span>Food pairing:</span>
        <b-form-input v-model="bebida.food_pairing[0]"></b-form-input>
        <b-form-input v-model="bebida.food_pairing[1]"></b-form-input>
        <b-form-input v-model="bebida.food_pairing[2]"></b-form-input>
        <br>
        <span>Volume:</span>
        <b-form-input v-model="bebida.volume.value" type="number"></b-form-input>
         <br>
        <span>First Brewed</span>
        <b-form-input v-model="bebida.first_brewed" type="date"></b-form-input>

        <router-link to="/"> <b-button variant="dark">Página inicial</b-button> </router-link>
        <b-button v-on:click="showAlert" variant="info" class="m-1">
           Encomendar unidade
        </b-button>
        </b-row>

        <footer>Guilherme dos Santos - Assessment <img src="https://storage.googleapis.com/media.helloumi.com/114209/channels/LP48IQXNWWWI8Z0H7H0RAFDWGUSN0JOF.png" alt="" width="4%"> </footer>  
  </b-container>  
</template>

<script>
export default {
    name: 'detalhar',
    data(){
        return{
            id: this.$route.params.id,
            bebida: this.$route.params.bebida,
            name: '',
        }
   },
    methods: {
      showAlert() {
        alert('Encomenda realizada com sucesso!')
      }
    }
}
</script>

<style>
input.form-control{
  min-width: 500px;
}

.RowCard{
  display: inline-block;
  margin-bottom: 80px;
  
}
.edit{
    display: inline-block;
    margin-left: 30px;
}
footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: dodgerblue;
    color: white;
    text-align: center;
}
</style>