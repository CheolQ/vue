<template>
    <div>vuetify test</div>
    <v-pagination :length="5" start="5" :page="7" @update:modelValue="goPage"></v-pagination>
    <hr>
    <v-data-table :items="items"></v-data-table>
    <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="surface-variant"
      text="Open Dialog"
      variant="flat"
    ></v-btn>
</template>

<template v-slot:default="{ isActive }">
    <v-card title="Dialog">
        <v-card-text>
          <table><tr><td>dddd</td></tr></table>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>
export default {
    data() {
        return {items : [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },]
}
},
methods : {
    goPage(page){
        console.log(page);
    }
}
}


</script>
</v-dialog>