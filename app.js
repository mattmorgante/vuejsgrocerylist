// app.js

new Vue({

    // We want to target the div with an id of 'items'
    el: '#items',

    // Here we can register any values or collections that hold data
    // for the application
    data: {

        item: { name: '', description: '', date: '' },
        items: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        // When the application loads, we want to call the method that initializes
        // some data
        this.fetchitems();
    },

    // Methods we want to use in our application are registered here
    methods: {


        // We dedicate a method to retrieving and setting some data
        fetchitems: function() {
            var items = [{
                id: 1,
                name: 'Cucumber',
                description: 'Komkommer',
                date: '2016-09-13'
            }, {
                id: 2,
                name: 'Bread',
                description: 'Half a loaf',
                date: '2016-09-14'
            }, {
                id: 3,
                name: 'Avocado',
                description: 'N/A',
                date: '2016-09-16'
            }];
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
            this.$set('items', items);
        },

        // Adds an item to the existing items array
        additem: function() {
            if (this.item.name) {
                this.items.push(this.item);
                this.item = { name: '', description: '', date: '' };
            }
        },

        delete: function(e) {
			if (confirm("Are you sure you want to delete this item?")) {
				// $remove is a Vue convenience method similar to splice
			this.items.$remove(e);
		}
        }
    }
});