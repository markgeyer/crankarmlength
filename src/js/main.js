angular.module('app', ['ngRoute', 'ngAnimate'])

// Router
.config(function ($routeProvider) {
	$routeProvider

		// Index
		.when('/', {
			templateUrl: 'calculator.html',
			controller: 'calculatorController'
		})

		// 404
		.when('/404', {
			templateUrl: '404.html'
		})

		.otherwise({ redirectTo: '/404' });
})

// Controller
.controller('calculatorController', function($scope) {

	console.log('calculator Controller');
	$scope.yay = "Crank Arm Calculator";


	// Formula info
	$scope.formulas = [
	{
		title: 'Inseam',
		description: 'Liquorice marzipan carrot cake liquorice soufflé jelly lollipop jelly beans. Candy sweet dessert. Bear claw jujubes powder chocolate cake cotton candy. Cake dessert oat cake. Jujubes carrot cake dragée bonbon chocolate cake lollipop oat cake. Danish bonbon chupa chups jelly gingerbread carrot cake liquorice sugar plum. Liquorice sweet macaroon cupcake chocolate cake carrot cake. Lemon drops fruitcake danish powder chupa chups biscuit lollipop gingerbread. Lemon drops dragée sweet cupcake gingerbread jelly topping chocolate. Chocolate cake muffin pie candy canes marshmallow donut tootsie roll. Jelly dragée sugar plum cake fruitcake marzipan marzipan gummies lemon drops. Chupa chups bonbon gingerbread.'
	},
	{
		title: 'Obree',
		description: 'Cake carrot cake jelly-o powder tart chocolate bar sweet roll soufflé cotton candy. Jelly-o biscuit muffin cake pudding. Marzipan jelly-o fruitcake biscuit sugar plum soufflé. Marzipan pastry soufflé pastry soufflé. Jujubes fruitcake chupa chups marshmallow apple pie soufflé croissant jelly-o gummies. Wafer bear claw sesame snaps. Cheesecake sweet jelly pudding pie donut tart lollipop jelly. Halvah pastry pastry. Bonbon dragée jujubes sweet roll. Candy canes candy icing toffee. Pie bear claw pie brownie dragée jelly cake tart cookie. Gummi bears pastry jelly candy canes pie.'
	},
	{
		title: 'Some other way',
		description: 'Fruitcake jelly beans cotton candy donut lemon drops. Soufflé apple pie jelly cookie. Croissant gingerbread gummies gummi bears chocolate cake lemon drops pastry. Icing oat cake tiramisu. Sesame snaps lemon drops apple pie cake sweet dessert. Muffin chocolate bar macaroon marshmallow croissant marzipan apple pie pudding. Powder topping chocolate bar marzipan marshmallow lollipop. Jujubes jujubes toffee. Sweet cookie lemon drops gummi bears sweet topping. Cookie halvah wafer powder toffee sweet sweet roll croissant. Pudding macaroon jelly beans sugar plum ice cream sweet roll pie pastry cake. Soufflé bear claw tiramisu gummi bears bear claw cookie lollipop. Marshmallow muffin chupa chups gummies gummies chupa chups. Cheesecake pastry biscuit.'
	}]


	// Related link info
	$scope.links = [
	{
		title: 'Carrot cake',
		link: 'http://google.com',
		description: 'Caramels gummi bears I love chocolate wafer. Sweet roll candy canes wafer chupa chups muffin lemon drops.'
	},
	{
		title: 'Oat cake sugar',
		link: 'http://google.com',
		description: 'Soufflé brownie tart. Bear claw donut chocolate cupcake icing jelly-o I love toffee.'
	},
	{
		title: 'Caramels gummi bears',
		link: 'http://google.com',
		description: 'Cupcake tiramisu danish I love macaroon I love toffee tiramisu.'
	},
	{
		title: 'Carrot cake lollipop',
		link: 'http://google.com',
		description: 'I love cake tootsie roll muffin cupcake biscuit topping oat cake.'
	},
	{
		title: 'Tootsie roll bonbon',
		link: 'http://google.com',
		description: 'Caramels gummi bears I love chocolate wafer. Sweet roll candy canes wafer chupa chups muffin lemon drops.'
	},
	{
		title: 'Cake I love',
		link: 'http://google.com',
		description: 'Carrot cake lollipop halvah cupcake soufflé jelly-o.'
	},
	{
		title: 'Cupcake tiramisu',
		link: 'http://google.com',
		description: 'Soufflé brownie tart. Bear claw donut chocolate cupcake icing jelly-o I love toffee.'
	},
	{
		title: 'Muffin topping powder',
		link: 'http://google.com',
		description: 'Macaroon croissant jujubes dessert cake I love.'
	}]

});