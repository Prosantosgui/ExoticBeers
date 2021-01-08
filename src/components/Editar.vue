<template>
  <b-container>
    <b-row>
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

        <b-button variant="success" v-on:click="Encomenda">Encomendar unidade</b-button>
        <router-link to="/"> <b-button variant="dark">Página inicial</b-button> </router-link>
    </b-row>
  </b-container>  
</template>

<script>
export default {

}
</script>

<style>
.row{
  margin-top: 100px;
}
</style>