// FullView: Shows complete listing of local spots 
FullView = Backbone.View.extend({
	gridTemplate: _.template($('#grid-template').text()),

	className: 'full-view',

	events: {
		'click #activate': 'activate'
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function() {
		this.$el.append(this.gridTemplate({place: this.model}) );
	},

	activate: function(){
		this.$el.find('#activate').attr('href', "#/places/" + this.model.id);
	}
});

// IndividualView: Shows individual local place 
IndividualView = Backbone.View.extend({
	singleTemplate: _.template($('#single-template').text()),

	className: 'single-view',

	initialize: function(){
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.singleTemplate({place: this.model}) );
	}

})

// AddView: Add place to Parse database 
AddView = Backbone.View.extend({
	addTemplate: _.template($('#add-template').text()),

	className: 'add-view',

	events: {
		'click #save'		:'save',
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();
		console.log('new view')
	},

	render: function() {
		this.$el.append(this.addTemplate());
	},

	save: function() {
		var place = new PlaceClass();

		var fileUploadControl = $('#photo-upload')[0];

		var type 		= $('#type').val();
		var placeName 	= $('#name').val();
		var comments	= $('#comments').val();

		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			var name = 'photo.jpg';

			var parseFile = new Parse.File(name, file);

			parseFile.save().then(function(){
				console.log(parseFile.url());
				place.set('placePhoto', parseFile);
				place.save();
			}); 
		}	else {
			console.log ('Error occured.')
		}

		if ($('#location:checked')) {
			if (navigator.geolocation) {
    			navigator.geolocation.getCurrentPosition(showPosition);
    		} else {
    			console.log("Geolocation is not supported by this browser.")
    		}
  		
		function showPosition(position) {
  			var latitude = position.coords.latitude
  			var longitude = position.coords.longitude; 
  			console.log(latitude + ' and ' + longitude)
  			
  			place.set('latitude', latitude)
  			place.set('longitude', longitude)
  			}
		}

		place.set('placeType', type);
		place.set('placeName', placeName);
		place.set('comments', comments);

		collection = router.places
		collection.add(place)
		console.log(collection)

		place.save(null, {
			success: function(results) {
				console.log(results);
				$('input').val('');
				$('textarea').val('');
				$('select').val('');
			},

			error: function(results, error) {
				console.log(error.description);
			}
		});
	},
});


