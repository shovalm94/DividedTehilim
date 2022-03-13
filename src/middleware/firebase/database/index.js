import firebaseInstance from '../'

function getRef(options) {
    return firebaseInstance.firebase.database().ref(`/${options.path}`);
}

function read(options) {
    return firebaseInstance.firebase.database().ref(`/${options.path}`).once('value')
        .then(res => {
            const arr = [];
            const map = res.val();
            for (const key in map) {
                if (typeof map[key] === 'string') {
                    arr.push(key)
                } else {
                    const item = map[key];
                    item.id = key;
                    arr.push(item);
                }
            }
            return arr;
        })
}

function readTehilim(options) {
    return firebaseInstance.firebase.database().ref(`/${options.path}`).once('value')
        .then(res => {
            return res.val();
        })

}

function readById(options) {
    return firebaseInstance.firebase.database().ref(`/${options.path}`).once('value')
        .then(res => {
            let group = {};
            group = res.val();
            group.id = res.key
            return group;
        })
}

function create(options) {
    return firebaseInstance.firebase.database().ref(options.path).push(options.item)
        .then(res => {
            const groupId = res.key;
            return groupId;
        })
}

function createUser(options) {
    return firebaseInstance.firebase.database().ref(options.path).set(options.item)
}

function updateChapter(options) {
    return firebaseInstance.firebase.database().ref(options.path).update(options.item)
}

function update(options) {
    return firebaseInstance.firebase.database().ref(options.path).update(options.item);
}

function remove(options) {
    return firebaseInstance.firebase.database().ref(options.path).remove();
}

function upload(options) {
    return firebaseInstance.firebase.database().ref(options.path).set(options.imageUrl);
}

export default {
    read,
    readById,
    readTehilim,
    create,
    createUser,
    update,
    updateChapter,
    remove,
    upload,
    getRef

}