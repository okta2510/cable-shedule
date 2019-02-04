<template>
  <div class="pt-5">
    <h1 class="text-center font-weight-bold mb-3 text-uppercase">Cable Schedule</h1>

    <div class="container-fluid">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="schedules"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
        :loading="true"
      >
        <template slot="headers" slot-scope="props">
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.stop="toggleAll"
              ></v-checkbox>
            </th>
            <th
              v-for="header in props.headers"
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>
              <v-checkbox
                :input-value="props.selected"
                primary
                hide-details
              ></v-checkbox>
            </td>
            <td>{{ props.item.status }}</td>
            <td class="">{{ props.item.board}}</td>
            <td class="">{{ props.item.circuit }}</td>
            <td class="">{{ props.item.consumer }}</td>
            <td class="">{{ props.item.consumer_label }}</td>
            <td class="">{{ props.item.utype }}</td>
            <td class="">{{ props.item.unit_rating}}</td>
            <td class="">{{ props.item.consumer_desc }}</td>
            <td class="">{{ props.item.consumer_desc }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pagination: {
        sortBy: 'circuit',
        rowsPerPage:8
      },
      selected: [],
      headers: [
        {
          text: 'Status',
          align: 'left',
          value: 'status'
        },
        { text: 'Board', value: 'board' },
        { text: 'Circuit', value: 'circuit' },
        { text: 'consumer', value: 'consumer' },
        { text: 'Consumer Label', value: 'consumer_label' },
        { text: 'U Type', value: 'utype' },
        { text: 'Unit Rating', value: 'unit_rating' },
        { text: 'Consumer Description', value: 'consumer_desc' },
        { text: 'Consumer Description Label', value: 'consumer_desc_label' },
      ],
      schedules: []
    }
  },
  beforeCreate(){
    this.$http.get('schedule').then(response => {
      // console.log(response);
      this.schedules = response.body;
      
    }, err => {
      console.log(err);
    });
  },
   methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.schedules.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color:#3389C9;
}
</style>
