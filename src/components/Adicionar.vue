<template>
<b-container class="add">
    <h1>Crie uma cerveja você também!</h1>
    <b-row>
        <span>Name:</span>
        <br>
        <b-form-input v-model="name" placeholder="Enter the beer name!" required type="text"></b-form-input>
        <br>
        <span>Tagline:</span>
        <b-form-input v-model="tagline" placeholder="Enter a tagline!"></b-form-input>
        <br>
        <span>Volume:</span>
        <b-form-input v-model="volume" placeholder="Enter the volume!" type="number"></b-form-input>
         <br>
        <span>First Brewed</span>
            <b-form-input v-model="FirstBrewed" type="date"></b-form-input>
            <b-button variant="primary" @click="createBeer()">Criar</b-button>
    </b-row>
    
</b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "AdicionarBebida",
    data(){
        return{name:"", tagline:"", volume:"", FirstBrewed:"", id:"", image_url:"https://images.punkapi.com/v2/keg.png"}
    },
    methods:{
        ...mapActions(["addBeer"]),
        createBeer(){
            let beer = {
                "id" : this.id,
                "name": this.name,
                "first_brewed":this.FirstBrewed,
                "tagline": this.tagline,
                "image_url": this.image_url,
                "volume":{
                    "value": this.volume
                }
            }
            this.addBeer(beer)
            alert('Cerveja criada com sucesso!')
        },
    }
}
</script>

<style>

.add{
    margin-bottom: 100px;
}
</style>