import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import firebaseInstance from "../middleware/firebase";
import database from '../middleware/firebase/database'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta:{authNotRequired:true}, // will navigate for everyone
    component: Login
  },
  {
    path: '/groups',
    name: 'Groups',
    meta:{authNotRequired:false},
    component:  () => import( '../views/Groups.vue'),
  },
  {
    path: '/:id/group',
    name: 'Group',
    meta:{authNotRequired:false},/// will navigate only user

    component:  () => import( '../views/Group.vue'),
    beforeEnter:(to, from, next) => {
      database.read({path:`users/${window.user.uid}`}).then((res)=> {
        let groups=res[1];
        for (let group in groups) {
            if(group===to.params.id){
              next();
            }
            else{
              firebaseInstance.firebase.database().ref(`users/${window.user.uid}/groups`).update({[to.params.id]:to.params.id})
                  .then(()=>{
                    firebaseInstance.firebase.database().ref(`groups/${to.params.id}/users`).update({[window.user.uid]:window.user.uid})
                    next();
                  })
            }
        }
      })
    }
  },
  {
    path: '/:randomChapter/chapter',
    name: 'Chapter',
    meta:{authNotRequired:false},
    component:  () => import( '../views/Chapter.vue')
  },

]
const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  const user=firebaseInstance.firebase.auth().currentUser;
  if(user && to.meta.authNotRequired || !user && !to.meta.authNotRequired)
  {
    const path= !user ? '/' : '/groups';
     next(path);
  }
  next()
})

export default router
