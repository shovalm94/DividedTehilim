<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar style=" background: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);">
        <q-btn
            flat
            densef
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />

        <q-toolbar-title style="font-family: Century Gothic;text-align: center;">
          Divided Tehilim
        </q-toolbar-title>

        <span style="font-family:Segoe UI; font-size: 15px;">בס"ד</span>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen">
      <q-list>
        <q-item clickable @click.native="goToHome">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="this.$route.path===`/${editedGroupId}/group`" @click="shareLink(editedGroupId)">
          <q-item-section avatar>
            <q-icon name="share"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Share</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="logout">
          <q-item-section avatar>
            <q-icon name="logout"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-dialog v-model="openPopUp">
        <q-card class="my-card" style="width: 40%">
          <q-card-section class="q-pa-md">
            <h5>Invite your friend to join !🙂</h5>
            <q-input
                :value="url"/>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>

</template>

<script>
import Groups from "./views/Groups"
import firebaseInstance from "./middleware/firebase";
import {mapState} from "vuex";
export default {
  name: 'LayoutDefault',

  components: {
    Groups
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      openPopUp: false,
      url: ''
    }
  },
  computed: {
    ...mapState('groups', ['groups', 'editedGroupId']),
  },
  methods: {
    logout() {
      firebaseInstance.firebase.auth().signOut().then(() => {
        // Sign-out successful.
        this.$router.push('/')
      }).catch((error) => {
        // An error happened.
      });
    },
    goToHome() {
      this.$router.push('/groups')
    },

     shareLink(editedGroupId) {
      if (this.$route.path === `/${editedGroupId}/group`) {
        this.openPopUp = true;
        this.url=`${window.location.host}/#/${editedGroupId}/group`
      }
    }
  }
}
</script>

<style>


</style>
