Vue.use(VueRouter);

const ROUTES = [
	{path: "/about", label: "About", component : {template : "<about></about>"}},
	{path: "/portafolio", label: "Portafolio", component : {template : "<about></about>"}},
	{path: "/contact", label: "Contact", component : {template : "<about></about>"}},
	{path: "/certifications", label: "Certifications", component : {template : "<about></about>"}}
];

const router = new VueRouter({
	routes : ROUTES
});

var main_location = 0;

Vue.component('about', function (resolve, reject) {
	Vue.http.get('components/about.component').then(
		response => {
			resolve({
				template: response.body
			});
		},
		response => {
			resolve({
				template: "<h1>This page is not available.</h1>"
			});
		}
	);
});


var menu = new Vue({
	router,
	el: '#menu',
	data: {
		toggleIsActive: false,
		routes: ROUTES,
		location: ROUTES[main_location]
	},
	methods:{
		toggleButton: function(){
			this.toggleIsActive = !this.toggleIsActive;
		},
		setRoute: function(route){
			this.location = route;
		}
	}
});
