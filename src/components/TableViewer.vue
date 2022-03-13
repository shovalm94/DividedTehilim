<template>
  <div class="q-pa-md">

    <q-table
        :title="tableName"
        :data="rows"
        :columns="columns"
        row-key="name"
        binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.tehilim[0].id }}</q-td>
          <q-td key="nameOfChapter" :props="props">{{ props.row.tehilim[0].nameOfChapter }}</q-td>
          <q-td key="day" :props="props">{{ props.row.tehilim[0].day }}</q-td>
          <q-td key="text" :props="props">{{ props.row.tehilim[0].text }}</q-td>
          <q-td key="isRead"  :props="props">{{ props.row.tehilim[0].isRead }}</q-td>
          <q-td key="actions" :props="props">
            <q-btn label="delete" @click="remove(props.row.id)"/>
          </q-td>
        </q-tr>
      </template>
    </q-table>

  </div>

</template>

<script>

import api from '../middleware/api'

export default {
  name: "TableViewer",
  props: ['tableName', 'isReload','isRemoved'],
  data() {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Id',
          align: 'left',
          field: row => row.tehilim[id],
          sortable: true
        },
        {name: 'nameOfChapter', align: 'center', label: 'NameOfChapter', field: 'nameOfChapter'},
        {name: 'day', align: 'center', label: 'Day', field: 'day'},
        {name: 'text', label: 'Text', field: 'text', sortable: true},
        {name: 'isRead', label: 'IsRead', field: 'isRead', sortable: true},
        {name: 'actions', align: 'center', label: 'Actions'},

      ],
      rows: []
    }
  },
  methods: {
    read() {
      api.get({entity:this.tableName,id:1})
          .then(result=>{
            this.rows=result;
          });
    },
    remove(id) {
      localStorageDriver.remove(this.tableName, id)
      this.$emit('itemRemoved')
      this.read();
    },
    goToItem(id) {
      this.$router.push(`/item/${id}`);
    }
  },
  created() {
    this.read();
  },
  watch: {
    isReload() {
      this.read();
    },


  }
}

</script>

<style scoped>

</style>