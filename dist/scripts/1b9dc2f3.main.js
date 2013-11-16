function isotopeFix(){var a=$(".container"),b=$("img");a.hasClass("isotope")?(a.isotope("destroy"),a.imagesLoaded(function(){a.isotope({itemSelector:".full-view"}),b.load(function(){a.isotope("reLayout")})})):a.imagesLoaded(function(){a.isotope({itemSelector:".full-view"}),b.load(function(){a.isotope("reLayout")})})}function destroyIsotope(){var a=$(".container");a.hasClass("isotope")&&a.isotope("destroy")}function validateForm(a){var b=!0;return a.removeClass("warning"),$("#message").removeClass("popup-message").html(""),""===a.val()&&(a.addClass("warning"),$("#message").addClass("popup-message").html("<span>Oops, please fill out the form.</span>"),b=!1),b}function validateCompleteForm(){var a=!0,b=$("input#name"),c=$("textarea#description"),d=$("#location"),e=$("#address-location"),f=$("#photo-upload");return(""===f.val()||""===b.val()||!d.is(":checked")&&""===e.val()||""===c.val)&&(console.log("its false"),a=!1,$(".modal-error").addClass("modal-active-error"),$(".close-button-error").click(function(){$(".modal-error").removeClass("modal-active-error"),console.log("add class")}),b.addClass("red-warning"),c.addClass("red-warning")),a}function clickLocation(){$("#location").click(function(){$("#location");var a=$("#address-location");$("#location").is(":checked")?(console.log("yes, lets geolocate"),a.attr("disabled",!0),a.css("background","rgb(0, 89, 97)"),a.val("")):(a.attr("disabled",!1),a.css("background","white"))})}HomeView=Backbone.View.extend({homeTemplate:_.template($("#home-template").text()),className:"home-view",initialize:function(){$(".full").append(this.el),this.render()},render:function(){this.$el.append(this.homeTemplate())}}),BottomView=Backbone.View.extend({bottomTemplate:_.template($("#bottom-template").text()),className:"bottom-view",events:{"click #activate":"activate"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.bottomTemplate({place:this.model}))},activate:function(){this.$el.find("#activate").attr("href","#/places/"+this.model.id)}}),FullView=Backbone.View.extend({gridTemplate:_.template($("#grid-template").text()),className:"full-view",events:{"click #activate":"activate"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.gridTemplate({place:this.model}))},activate:function(){this.$el.find("#activate").attr("href","#/places/"+this.model.id)}}),SearchView=Backbone.View.extend({searchTemplate:_.template($("#search-template").text()),className:"search-view",events:{"click #search-button":"search"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.searchTemplate())},search:function(){$("#city-name").val(),this.$el.find("#search-button").attr("href","#/places/results")}}),IndividualView=Backbone.View.extend({singleTemplate:_.template($("#single-template").text()),className:"single-view",events:{"click #like-button":"likeIt","click #submit-comment":"addComment"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.singleTemplate({place:this.model}))},likeIt:function(){this.model.increment("likes"),console.log(this.model),this.model.save()},addComment:function(){var a=new Comment,b=$("#new-comment").val();a.set("content",b),a.set("parent",this.model),router.comments.add(a),console.log(a),validateForm($("#new-comment"))&&a.save(null,{success:function(){console.log(a.createdAt),$("#new-comment").val(""),$("#comments-box").append('<div id="individual-comment"><p>'+a.attributes.content+"</p>"+'<img src="images/clock-2.png">'+"<span>"+moment(a.createdAt,"ddd MMM DD YYYY HH:mm:ss").fromNow()+"</span>"+"</div>")},error:function(a,b){console.log(b.description)}})}});var geocoder,geoLatitude,geoLongitude,geoCity,geoAddress;AddView=Backbone.View.extend({addTemplate:_.template($("#add-template").text()),className:"add-view",events:{"click #location":"getLocation","click #save":"save"},initialize:function(){$(".container").append(this.el),this.render(),console.log("new addView"),geocoder=new google.maps.Geocoder},render:function(){this.$el.append(this.addTemplate())},getLocation:function(){function a(a){geoLatitude=parseFloat(a.coords.latitude),geoLongitude=parseFloat(a.coords.longitude),console.log(geoLatitude+" and "+geoLongitude);var b=new google.maps.LatLng(geoLatitude,geoLongitude);geocoder.geocode({latLng:b},function(a,b){if(b==google.maps.GeocoderStatus.OK)if(a[0]){console.log(a[0]);var c=a[0].formatted_address;geoCity=a[0].address_components[2].long_name,geoAddress=c.replace(", USA",""),console.log(geoAddress)}else alert("No results found");else alert("Geocoder failed due to: "+b)})}navigator.geolocation?navigator.geolocation.getCurrentPosition(a):console.log("Geolocation is not supported by this browser.")},save:function(){var a=new PlaceClass,b=$("#photo-upload")[0],c=$("#name").val(),d=$("#description").val(),e=$(".select").val();if(console.log(b.files),b.files.length>0){var f=b.files[0],g="photo.jpg",h=new Parse.File(g,f);console.log(h),validateCompleteForm()&&h.save().then(function(){console.log(h.url()),a.set("placePhoto",h),a.save()})}else console.log("Error occured.");if(""!==$("#address-location").val()){var i=new google.maps.Geocoder,j=$("#address-location").val();a.set("address",j),i.geocode({address:j},function(b,c){if(c==google.maps.GeocoderStatus.OK){console.log(b[0]);var d=b[0].address_components[2].long_name,e=b[0].geometry.location.nb,f=b[0].geometry.location.ob;console.log(e,f),a.set("latitude",e),a.set("longitude",f),a.set("city",d)}else alert("Geocode was not successful for the following reason: "+c)})}$("#location").is(":checked")&&(a.set("latitude",geoLatitude),a.set("longitude",geoLongitude),a.set("address",geoAddress),a.set("city",geoCity)),a.set("products",e),a.set("likes",void 0),a.set("placeName",c),a.set("description",d),collection=router.places,collection.add(a),console.log(collection),validateCompleteForm()?a.save(null,{success:function(){console.log("it saved"),$("#name").val(""),$("#description").val(""),$(".select").val("").trigger("chosen:updated"),$("#location").attr("checked",!1),$(".modal").addClass("modal-active"),$(".close-button").click(function(){$(".modal").removeClass("modal-active"),router.navigate("#",{trigger:!0})})},error:function(a,b){console.log(b.description)}}):console.log("error")}}),Parse.initialize("odceeKZIPEFi25d3RsOWBQqKz6QWTqJ1cckCkTnd","PwniGhD9YaeJgeBJQBdPTgPcTUfHdR5zANaNyfOE");var PlaceClass=Parse.Object.extend("LocalClass"),Comment=Parse.Object.extend("Comment"),PlaceCollection=Parse.Collection.extend({model:PlaceClass}),CommentCollection=Parse.Collection.extend({model:Comment});AppRouter=Backbone.Router.extend({initialize:function(){console.log("new route created"),this.places=new PlaceCollection,this.comments=new CommentCollection},routes:{"":"home",places:"showPlaces",addplace:"addPlace","places/results":"searchCity","places/:id":"showPlace"},home:function(){$(".container").empty(),$(".full").empty(),$(".footer").empty(),console.log("i am home");var a=_.template($("#footer-template").text());destroyIsotope(),new HomeView,$(".container").append('<h2 class="bottom-head"> Recent finds</h2>'),query=new Parse.Query(PlaceClass),query.limit(3),query.find({success:function(b){for(var c=0;c<b.length;c++)new BottomView({model:b[c]});$(".footer").append(a())},error:function(a,b){console.log(b.description)}})},showPlaces:function(){$(".container").empty(),$(".full").empty(),$(".footer").empty();var a=_.template($("#header-template").text());$(".full").append(a());var b=_.template($("#footer-template").text());new SearchView,this.places.fetch({success:function(a){a.each(function(a){new FullView({model:a})}),isotopeFix(),$(".footer").append(b())}})},showPlace:function(a){$(".container").empty(),$(".full").empty(),$(".footer").empty(),destroyIsotope();var b=_.template($("#header-template").text());$(".full").append(b());var c=_.template($("#footer-template").text()),d=this;this.places.fetch({success:function(){placeToShow=d.places.get(a),console.log(placeToShow.id),new IndividualView({model:placeToShow}),console.log("view"),$(".container").append('<div id="map"> </div>');var b=placeToShow.get("latitude"),e=placeToShow.get("longitude"),f=L.mapbox.map("map","alisonelizabeth.map-s8zjw3c1").setView([b,e],15);L.mapbox.markerLayer({type:"Feature",geometry:{type:"Point",coordinates:[e,b]},properties:{title:placeToShow.get("placeName"),description:placeToShow.get("address"),"marker-size":"medium","marker-color":"#1E6A8B"}}).addTo(f);var g=new Parse.Query(Comment);console.log(g),g.equalTo("parent",placeToShow),g.descending("createdAt"),g.find({success:function(a){console.log(a.length),$("#comment-header").append("<h2> Latest Comments </h2>");for(var b=0;b<a.length;b++)$("#comments-box").append('<div id="individual-comment"><p>'+a[b].attributes.content+"</p>"+'<img src="images/clock-2.png">'+"<span>"+moment(a[b].createdAt,"ddd MMM DD YYYY HH:mm:ss").fromNow()+"</span>"+"</div>")},error:function(a,b){console.log(b.description)}}),$(".footer").append(c())}})},addPlace:function(){function a(a){if(a.files&&a.files[0]){var b=new FileReader;b.onload=function(a){$("#image-preview").attr("src",a.target.result)},b.readAsDataURL(a.files[0])}}$(".container").empty(),$(".full").empty(),$(".footer").empty(),destroyIsotope(),new AddView;var b=_.template($("#header-template").text());$(".full").append(b());var c=_.template($("#footer-template").text());$(".footer").append(c()),$(".select").chosen({max_selected_options:9}),clickLocation(),$("#image-placeholder").show(),$("#image-preview").hide(),$("#check").hide(),$("#photo-upload").change(function(){$("#image-placeholder").hide(),$("#check").show(),$("#image-preview").show(),a(this)})},searchCity:function(){var a=$("#city-name").val();console.log(a);var b=new Parse.Query(PlaceClass);b.equalTo("city",a),b.find({success:function(a){if(console.log(a),$(".container").empty(),new SearchView,a.length>0){for(var b=0;b<a.length;b++)new FullView({model:a[b]});isotopeFix()}else console.log("no results"),$(".container").append('<div id="no-results"> <p>Sorry, there are no results for that city.</p> <a href="#/places"> Go back</a> </div> ')},error:function(a,b){console.log(b.description)}})}});var router=new AppRouter;Backbone.history.start();