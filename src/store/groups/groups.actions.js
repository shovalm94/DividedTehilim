import database from '../../middleware/firebase/database'
import firebaseDatabase from "../../middleware/firebase/database";
import firebaseInstance from "../../middleware/firebase";
import api from "../../middleware/api";

export default {
    getGroups: ({commit, state}) => {
        let arr = [];
        let promises = [];
        commit('resetGroups', {})
        database.read({path: `users/${window.user.uid}/groups`})
            .then(result => {

                for (let i = 0; i < result.length; i++) {
                    promises.push(database.readById({path: `groups/${result[i]}`})
                        .then(res => {
                            arr.push(res)
                        }))
                }
                Promise.all([...promises]).then(() => {
                    commit('setGroups', arr)
                });
            });

    },


    addGroup: ({commit, state}) => {
        let arr = [];
        let item = {};
        arr = [...state.groups]
        commit('setEditedUserId', window.user.uid)

        Object.assign(item, state.editedGroup);
        database.readTehilim({path: 'tehilim'}).then(res => {
            item.tehilim=res;
            database.create({path: 'groups', item: item})
                .then(result => {
                    item.id=result
                    arr.push(item)
                    database.update({path: `users/${window.user.uid}/groups`, item: {[result]: result}})
                        .then(() => {
                            commit('setGroups', arr)
                            commit('tehilim/setTehilim', item.tehilim, { root: true })
                        });
                })
        })
    },
    addTehilimToDb: ({commit, state}) => {
        let arr = [
            {
                nameOfChapter: 'א',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'י',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'טו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'טז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'יט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'כט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ל',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'לט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'מט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'נח',
                day: '',
                isRead: false,

            }, {
                nameOfChapter: 'נט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ס',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'סט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ע',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'עט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'פט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'צט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'ק',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קי',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קטו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קטז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קיט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קכט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קל',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קלט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמ',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמא',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמב',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמג',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמד',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמה',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמו',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמז',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמח',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קמט',
                day: '',
                isRead: false,
            },
            {
                nameOfChapter: 'קנ',
                day: '',
                isRead: false,
            },
        ];
        for (let key in arr) {
            database.update({path: 'tehilim', item: {[arr[key].nameOfChapter]: arr[key]}}).then(() => {
            })
        }
    },
    removeGroup: ({state, commit}, groupId) => {
        firebaseDatabase.remove({path: `groups/${groupId}`})
            .then(() => {
                firebaseDatabase.remove({path: `users/${window.user.uid}/groups/${groupId}`}).then(() => {
                    commit('deleteGroup', groupId)
                });
            });
    },
    updateGroup: ({state, commit}) => {
        const item = {}
        Object.assign(item, state.editedGroup)

        firebaseDatabase.update({path: `groups/${state.editedGroupId}`, item: item}).then(() => {
            commit('resetEditedGroup')
            item.id = state.editedGroupId
            commit('resetEditedGroupId')
            commit('editGroups', item)
        })
    },
    updateTehilim:({state,commit,rootState},item)=>{
       commit('setChapterRead',rootState.tehilim);
       commit('tehilim/spliceChapterNoRead',rootState.tehilim,{ root: true })
        firebaseDatabase.updateChapter({path:`groups/${state.editedGroupId}/tehilim/${item}`,item:{isRead: true}})
    },

    upload: ({state, commit}, fileData) => {
        const date = new Date();
        const name = date.toLocaleTimeString() + '-' + fileData.name;
        firebaseInstance.firebase.storage().ref().child(name).put(fileData)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
                console.log('url', url)
                // Add this URL to Firebase Realtime Database
                firebaseDatabase.upload({path: `groups/${state.editedGroupId}/images`, imageUrl: url}).then(() => {
                    console.log("URL added in database successfully.")
                }).catch(e => console.log(e));
            })
    },

}