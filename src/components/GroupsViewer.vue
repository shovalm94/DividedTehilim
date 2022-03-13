<template>
  <div class="q-pa-md row items-start q-gutter-md" >
    <q-card class="my-card" style="max-width: 200px;background-color: transparent;border: linen 1px solid; border-radius: 25px " flat bordered v-for="group in groups" >
      <q-card-section horizontal @click="goToGroup(group)">
        <q-card-section class="q-pt-xs" >
          <span class="text-h5 q-mt-sm q-mb-xs text-white " >{{ group.name }}</span><br/>
          <p class="text-caption text-grey-5" style="inline-size: 150px;overflow-wrap: break-word">{{ group.desc }} </p>
        </q-card-section>
        <q-card-section class="col-6 flex flex-center">
          <q-img :src="group.images"/>
        </q-card-section>
      </q-card-section>
      <q-btn-group rounded spread  >
        <q-btn text-color="yellow-2" rounded glossy icon="delete" @click="remove(group.id)"></q-btn>
        <q-btn text-color="yellow-2"  rounded glossy icon="edit" @click="setValues(group.id)"></q-btn>
      </q-btn-group>
    </q-card>
    <q-dialog v-model="isEdited">
      <q-card class="my-card">
        <q-card-section>
          <q-input outlined v-model="localGroup.name" label="Name "/>
          <q-input outlined v-model="localGroup.desc" label="Desc"/>
          <br/>
          <q-btn class="glossy" round color="secondary" icon="add_a_photo" size="sm" @click="isUpload=!isUpload"/>
          <br/>
          <q-input v-if="isUpload" type="file" ref="fileInput" accept="image/*" @change="getFileData"/>
          <q-btn v-if="isUpload" flat color="primary" label="Upload" @click="uploadImage()"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Edit" @click="update()"/>
          <q-btn v-close-popup flat color="primary" label="Cancel"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>

import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: "GroupsViewer",
  data() {
    return {
      localGroup:
          {
            name: '',
            desc: '',
            tehilim: {},
            users: {},
          },
      fileData: '',
      isEdited: false,
      isUpload: false,
      selectedGroup: {}
    }
  },
  computed: {
    ...mapState('groups', ['groups', 'editedGroup']),
    ...mapState('tehilim', ['tehilim', 'chapterNoRead']),
  },
  methods: {
    ...mapActions('groups', ['getGroups', 'removeGroup', 'updateGroup', 'upload', 'addTehilimToDb']),
    ...mapActions('tehilim', ['mapTehilim']),
    ...mapMutations('groups', ['setEditedGroup', 'setEditedGroupId','setTehilimInGroup']),
    ...mapMutations('tehilim', ['setChapterNoRead','setTehilim']),
    remove(id) {
      this.removeGroup(id)
    },
    localSetEditedGroup() {
      this.setEditedGroup({...this.localGroup})
    },
    goToGroup(group) {
      this.setEditedGroupId(group.id)
      this.setEditedGroup(group)
      this.setTehilim(group.tehilim)
      this.mapTehilim()
      this.$router.push(`/${group.id}/group`);
    },
    update() {
      this.localSetEditedGroup();
      this.updateGroup()
    },
    getFileData(e) {
      this.fileData = e.target.files[0];
    },
    uploadImage() {
      this.upload(this.fileData);
    },
    setValues(id) {
      this.localGroup = {};
      this.isEdited = true;
      this.setEditedGroupId(id)
    },
  },
  created() {
    this.getGroups()
    this.addTehilimToDb();



  },
}
</script>

<style scoped>

</style>