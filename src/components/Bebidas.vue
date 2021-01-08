<template>
  <b-container >
      <h1>Lista de cervejas exóticas </h1>
      <!-- Listagem de cada objeto da API -->
      <b-row class="list">
       <b-card
    v-for="bebida in bebidas || AllBeers"   
    :key="bebida.id"
    :title="bebida.name"
    :img-src="bebida.image_url"
    img-alt="Image"
    img-top
    img-width = "80%"
    tag="article"
    style="max-width: 12rem;"
    class="mb-2"
    align = "center"
  >
    <b-card-text>
      {{bebida.tagline}}
    </b-card-text>
    <b-card-text>
        {{bebida.first_brewed}}
    </b-card-text>    
    <!-- Passagem de parametros para cada objeto -->
    <router-link :to="{name:'detalhar',
    params: {id:bebida.id, bebida:bebida}}"> <b-button variant="primary">Detalhar</b-button> </router-link>
    <p></p>
    <!-- -->
    <b-button variant="danger" @click="Delete(bebida.id)">Deletar</b-button>
  </b-card>
    <Adicionar />
      </b-row>
   <footer>Guilherme dos Santos - Assessment <img src="https://storage.googleapis.com/media.helloumi.com/114209/channels/LP48IQXNWWWI8Z0H7H0RAFDWGUSN0JOF.png" alt="" width="4%"> </footer>   
  </b-container>  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Adicionar from "./Adicionar"
export default{
  components: { Adicionar },
    name: "ListarBebida",
    data(){
        return{

        }
        
    },
    computed: mapGetters(["AllBeers"]),
    methods:{
        ...mapActions(["getBeer", "Delete"])
    },
    created(){
        this.getBeer();
    }
}
</script>

<style scoped>
table{
    width: 50%;
    
}
thead{
    border: 1px solid black;
}
thead{
    text-align: left;
}
.list{
    font-size: 15px;
    text-align: justify;
}
.mb-2{
    width: 60%;
    padding: 10px;
    margin: 10px;
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
</style>>
