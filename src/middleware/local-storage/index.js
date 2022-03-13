export default {
    insert: function (table, item) {
        item.id = new Date().getTime();
        var arr = this.select(table);
        arr.push(item);
        localStorage.setItem(table, JSON.stringify(arr));
    },
    select: function (table) {

        var result = localStorage.getItem(table);
        if (result == null) {
            result = '[]';
        }

        return JSON.parse(result);
    },
    update: function (table, id, item) {
        var arr = this.select(table);
        var index = this._searchIndexById(table, id);
        if (!(index > -1)) {
            return;
        }

        for (var key in item) {
            if (item[key]) {
                arr[index][key] = item[key];
            }
        }
        localStorage.setItem(table, JSON.stringify(arr));
    },
    remove: function (table, id) {
        var arr = this.select(table);
        var index = this._searchIndexById(table, id);
        if (!(index > -1)) {
            return;
        }
        arr.splice(index, 1);
        localStorage.setItem(table, JSON.stringify(arr));
    },
    getItemById: function (table, id) {
        var arr = this.select(table);
        return arr.find(function (item) {
            return item.id == id
        })
    },
    _searchIndexById: function (table, id) {
        var arr = this.select(table);
        var index = undefined;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    },
};

function removeField(table, id, item) {
    var arr = localStorageDriver.select(table);
    var index = localStorageDriver._searchIndexById(table, id);
    if (!(index > -1)) {
        return;
    }
    for (var key in item) {
        if (item[key]) {
            arr[index][key] = '';
            localStorage.setItem(table, JSON.stringify(arr));
        }
    }
}
