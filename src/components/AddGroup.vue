<template>
  <div>
    Add Group :

    <q-input style="margin-bottom: 5px" outlined v-model="localGroup.name" label="Name" maxlength="12"/>
    <q-input style="overflow-wrap: break-word" outlined  v-model="localGroup.desc" label="Desc" />
    <q-card-actions>
      <q-btn v-close-popup color="primary" label="Insert" @click="insert()"/>
      <q-btn v-close-popup color="primary" label="Cancel"/>
    </q-card-actions>
  </div>
</template>
<script>

import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: "AddGroup",
  data() {
    return {
      localGroup:
          {
            name: '',
            desc: '',
            tehilim: {},
            users: {},
          },
    }
  },
  computed:{
    ...mapState('groups', ['editedGroup']),
    ...mapState('tehilim',['tehilim'])
  },
  methods: {
    ...mapActions('groups', ['addGroup', "getGroups"]),
    ...mapMutations('groups', ['setEditedGroup','setEditedUserId']),
    ...mapMutations('tehilim', ['setTehilim']),
    localSetEditedGroup() {
      this.setEditedGroup(this.localGroup)
    },
    insert() {
      this.localSetEditedGroup();
      this.addGroup();
    }
  }
}
</script>

<style scoped>

</style>