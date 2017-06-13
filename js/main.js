const LINKS = [
		{path: "about", label: "About"},
		{path: "portafolio", label: "Portafolio"},
		{path: "contact", label: "Contact"},
		{path: "certifications", label: "Certifications"}
	];

var main_location = 0;

var menu = new Vue({
	el: '#menu',
	data: {
		toggleIsActive: false,
		routes: LINKS,
		location: {path: "", label: ""}
	},
	methods:{
		toggleButton: function(){
			this.toggleIsActive = !this.toggleIsActive;
		},
		setRoute: function(route){
			this.location = route;
		}
	},
	mounted: function(){
		this.location = this.routes[main_location];
	}
});