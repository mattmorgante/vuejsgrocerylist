// app.js

new Vue({

	// find the items div
	el: '#items',

	// register data
    data: {

        item: { name: '', description: '', date: '' },
        items: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
			// add some seeds here if you want to pre-populate the db
        this.fetchitems();
    },

    methods: {
        // Adds an item to the items array
        additem: function() {
            if (this.item.name) {
                this.items.push(this.item);
                this.item = { name: '', description: '', date: '' };
            }
        },

        delete: function(e) {
			if (confirm("Are you sure you want to delete this item?")) {
			this.items.$remove(e);
		}
        }
    }
});