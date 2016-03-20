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
.controller('calculatorController', function($scope, $location, $anchorScroll) {

	console.log('calculator Controller');

	$scope.formulas = [
	{
		title: 'Bike anufacturers',
		url: null,
		id: 'industry',
		result: '',
		description: 'Liquorice marzipan carrot cake liquorice soufflé jelly lollipop jelly beans. Candy sweet dessert. Bear claw jujubes powder chocolate cake cotton candy. Cake dessert oat cake. Jujubes carrot cake dragée bonbon chocolate cake lollipop oat cake. Danish bonbon chupa chups jelly gingerbread carrot cake liquorice sugar plum. Liquorice sweet macaroon cupcake chocolate cake carrot cake. Lemon drops fruitcake danish powder chupa chups biscuit lollipop gingerbread. Lemon drops dragée sweet cupcake gingerbread jelly topping chocolate. Chocolate cake muffin pie candy canes marshmallow donut tootsie roll. Jelly dragée sugar plum cake fruitcake marzipan marzipan gummies lemon drops. Chupa chups bonbon gingerbread.'
	},
	{
		title: 'Bike Dynamics',
		url: 'http://bikedynamics.co.uk/FitGuidecranks.htm',
		id: 'dynamics',
		result: '',
		description: 'Liquorice marzipan carrot cake liquorice soufflé jelly lollipop jelly beans. Candy sweet dessert. Bear claw jujubes powder chocolate cake cotton candy. Cake dessert oat cake. Jujubes carrot cake dragée bonbon chocolate cake lollipop oat cake. Danish bonbon chupa chups jelly gingerbread carrot cake liquorice sugar plum. Liquorice sweet macaroon cupcake chocolate cake carrot cake. Lemon drops fruitcake danish powder chupa chups biscuit lollipop gingerbread. Lemon drops dragée sweet cupcake gingerbread jelly topping chocolate. Chocolate cake muffin pie candy canes marshmallow donut tootsie roll. Jelly dragée sugar plum cake fruitcake marzipan marzipan gummies lemon drops. Chupa chups bonbon gingerbread.'
	},
	{
		title: 'Machinehead',
		url: '',
		id: 'machinehead',
		result: '',
		description: 'Liquorice marzipan carrot cake liquorice soufflé jelly lollipop jelly beans. Candy sweet dessert. Bear claw jujubes powder chocolate cake cotton candy. Cake dessert oat cake. Jujubes carrot cake dragée bonbon chocolate cake lollipop oat cake. Danish bonbon chupa chups jelly gingerbread carrot cake liquorice sugar plum. Liquorice sweet macaroon cupcake chocolate cake carrot cake. Lemon drops fruitcake danish powder chupa chups biscuit lollipop gingerbread. Lemon drops dragée sweet cupcake gingerbread jelly topping chocolate. Chocolate cake muffin pie candy canes marshmallow donut tootsie roll. Jelly dragée sugar plum cake fruitcake marzipan marzipan gummies lemon drops. Chupa chups bonbon gingerbread.'
	},
	{
		title: 'Graham Obree',
		url: null,
		id: 'obree',
		result: '',
		description: 'Cake carrot cake jelly-o powder tart chocolate bar sweet roll soufflé cotton candy. Jelly-o biscuit muffin cake pudding. Marzipan jelly-o fruitcake biscuit sugar plum soufflé. Marzipan pastry soufflé pastry soufflé. Jujubes fruitcake chupa chups marshmallow apple pie soufflé croissant jelly-o gummies. Wafer bear claw sesame snaps. Cheesecake sweet jelly pudding pie donut tart lollipop jelly. Halvah pastry pastry. Bonbon dragée jujubes sweet roll. Candy canes candy icing toffee. Pie bear claw pie brownie dragée jelly cake tart cookie. Gummi bears pastry jelly candy canes pie.'
	},
	{
		title: 'Specialites TA',
		url: 'http://specialites-ta.com',
		id: 'specialites',
		result: '',
		description: 'Cake carrot cake jelly-o powder tart chocolate bar sweet roll soufflé cotton candy. Jelly-o biscuit muffin cake pudding. Marzipan jelly-o fruitcake biscuit sugar plum soufflé. Marzipan pastry soufflé pastry soufflé. Jujubes fruitcake chupa chups marshmallow apple pie soufflé croissant jelly-o gummies. Wafer bear claw sesame snaps. Cheesecake sweet jelly pudding pie donut tart lollipop jelly. Halvah pastry pastry. Bonbon dragée jujubes sweet roll. Candy canes candy icing toffee. Pie bear claw pie brownie dragée jelly cake tart cookie. Gummi bears pastry jelly candy canes pie.'
	},
	{
		title: 'Kirby Palm',
		url: 'http://www.nettally.com/palmk/crankset.html',
		id: 'palm',
		result: '',
		description: 'Fruitcake jelly beans cotton candy donut lemon drops. Soufflé apple pie jelly cookie. Croissant gingerbread gummies gummi bears chocolate cake lemon drops pastry. Icing oat cake tiramisu. Sesame snaps lemon drops apple pie cake sweet dessert. Muffin chocolate bar macaroon marshmallow croissant marzipan apple pie pudding. Powder topping chocolate bar marzipan marshmallow lollipop. Jujubes jujubes toffee. Sweet cookie lemon drops gummi bears sweet topping. Cookie halvah wafer powder toffee sweet sweet roll croissant. Pudding macaroon jelly beans sugar plum ice cream sweet roll pie pastry cake. Soufflé bear claw tiramisu gummi bears bear claw cookie lollipop. Marshmallow muffin chupa chups gummies gummies chupa chups. Cheesecake pastry biscuit.'
	}]


	// Related link info
	$scope.links = [
	{
		title: 'Bike Dynamics',
		link: 'http://bikedynamics.co.uk/',
		description: 'Tons of advice on bike fitting.'
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
		title: 'Specialites TA chart',
		link: 'http://www.myra-simon.com/bike/cranks.html',
		description: 'Specialites TA removed their chart but it was reposted by Myra Simon.'
	},
	{
		title: 'Kirby Palm',
		link: 'http://www.nettally.com/palmk/crankset.html',
		description: 'Macaroon croissant jujubes dessert cake I love.'
	}]



	// Init
	$scope.title = "Crank Arm Calculator";

	// Anchor scroll
	$scope.scrollTo = function(id) {
		var old = $location.hash();
		$location.hash(id);
		$anchorScroll();
		console.log($location.hash());
		$location.hash(old);
	};

	// Formula info
	$scope.system = 'metric';
	$scope.height = 0;
	$scope.inseam = 0;
	formulas = $scope.formulas;

	$scope.$watch('height', function(val, old) {

		// Industry
		// Set sizes based on total height
		formulas[0].result = parseInt(val);

		if(formulas[0].result >= 137 && formulas[0].result < 160) {
			formulas[0].result = 165;
		} else if(formulas[0].result >= 160 && formulas[0].result < 165) {
			formulas[0].result = 170;
		} else if(formulas[0].result >= 165 && formulas[0].result < 185) {
			formulas[0].result = 172.5;
		} else if(formulas[0].result >= 185 && formulas[0].result <= 213) {
			formulas[0].result = 175;
		} else {
			formulas[0].result = "---";
		}

		// Obree
		// Total height * .095
		formulas[3].result = parseInt(.95 * val);

		if(formulas[3].result < 130) {
			formulas[3].result = "---";
		} else if(formulas[3].result >= 130 && formulas[3].result <= 135) {
			formulas[3].result = 130;
		} else if(formulas[3].result >= 135 && formulas[3].result <= 140) {
			formulas[3].result = 135;
		} else if(formulas[3].result >= 140 && formulas[3].result <= 145) {
			formulas[3].result = 140;
		} else if(formulas[3].result >= 145 && formulas[3].result <= 150) {
			formulas[3].result = 145;
		} else if(formulas[3].result >= 150 && formulas[3].result <= 155) {
			formulas[3].result = 150;
		} else if(formulas[3].result >= 155 && formulas[3].result <= 160) {
			formulas[3].result = 155;
		} else if(formulas[3].result >= 160 && formulas[3].result <= 162.5) {
			formulas[3].result = 160;
		} else if(formulas[3].result >= 162.5 && formulas[3].result <= 165) {
			formulas[3].result = 162.5;
		} else if(formulas[3].result >= 165 && formulas[3].result <= 167.5) {
			formulas[3].result = 165;
		} else if(formulas[3].result >= 167.5 && formulas[3].result <= 170) {
			formulas[3].result = 167.5;
		} else if(formulas[3].result >= 170 && formulas[3].result <= 172.5) {
			formulas[3].result = 170;
		} else if(formulas[3].result >= 172.5 && formulas[3].result <= 175) {
			formulas[3].result = 172.5;
		} else if(formulas[3].result >= 175 && formulas[3].result <= 177.5) {
			formulas[3].result = 175;
		} else if(formulas[3].result >= 177.5 && formulas[3].result <= 180) {
			formulas[3].result = 177.5;
		} else if(formulas[3].result >= 180 && formulas[3].result <= 182.5) {
			formulas[3].result = 180;
		} else if(formulas[3].result >= 182.5 && formulas[3].result <= 185) {
			formulas[3].result = 182.5;
		} else if(formulas[3].result >= 185 && formulas[3].result <= 187.5) {
			formulas[3].result = 185;
		} else if(formulas[3].result >= 187.5 && formulas[3].result <= 190) {
			formulas[3].result = 187.5;
		} else if(formulas[3].result >= 190) {
			formulas[3].result = 190;
		} else {
			formulas[3].result = "---";
		}

	});

	$scope.$watch('inseam', function(val, old) {

		// Bike Dynamics
		// http://bikedynamics.co.uk/FitGuidecranks.htm
		var gt = val + 10;
		var gti = gt + val;
		formulas[1].result = parseInt(gti * 4.8121 - 293.8 - Math.pow(gti, 2) * .0123);

		// Machinehead
		// inseam (cm) * 1.25 + 65
		formulas[2].result = parseInt(65 + 1.25 * val);

		// Specialites TA
		// http://www.myra-simon.com/bike/cranks.html
		formulas[4].result = parseInt(val * 2.091342345 - val * 0.0585106383);

		console.log(formulas[4].result);

		// Kirby Palm
		// inseam (cm) * 2.16
		formulas[5].result = parseInt(2.16 * val);


		if(formulas[1].result < 130) {
			formulas[1].result = "---";
		} else if(formulas[1].result >= 130 && formulas[1].result <= 135) {
			formulas[1].result = 130;
		} else if(formulas[1].result >= 135 && formulas[1].result <= 140) {
			formulas[1].result = 135;
		} else if(formulas[1].result >= 140 && formulas[1].result <= 145) {
			formulas[1].result = 140;
		} else if(formulas[1].result >= 145 && formulas[1].result <= 150) {
			formulas[1].result = 145;
		} else if(formulas[1].result >= 150 && formulas[1].result <= 155) {
			formulas[1].result = 150;
		} else if(formulas[1].result >= 155 && formulas[1].result <= 160) {
			formulas[1].result = 155;
		} else if(formulas[1].result >= 160 && formulas[1].result <= 162.5) {
			formulas[1].result = 160;
		} else if(formulas[1].result >= 162.5 && formulas[1].result <= 165) {
			formulas[1].result = 162.5;
		} else if(formulas[1].result >= 165 && formulas[1].result <= 167.5) {
			formulas[1].result = 165;
		} else if(formulas[1].result >= 167.5 && formulas[1].result <= 170) {
			formulas[1].result = 167.5;
		} else if(formulas[1].result >= 170 && formulas[1].result <= 172.5) {
			formulas[1].result = 170;
		} else if(formulas[1].result >= 172.5 && formulas[1].result <= 175) {
			formulas[1].result = 172.5;
		} else if(formulas[1].result >= 175 && formulas[1].result <= 177.5) {
			formulas[1].result = 175;
		} else if(formulas[1].result >= 177.5 && formulas[1].result <= 180) {
			formulas[1].result = 177.5;
		} else if(formulas[1].result >= 180 && formulas[1].result <= 182.5) {
			formulas[1].result = 180;
		} else if(formulas[1].result >= 182.5 && formulas[1].result <= 185) {
			formulas[1].result = 182.5;
		} else if(formulas[1].result >= 185 && formulas[1].result <= 187.5) {
			formulas[1].result = 185;
		} else if(formulas[1].result >= 187.5 && formulas[1].result <= 190) {
			formulas[1].result = 187.5;
		} else if(formulas[1].result >= 190) {
			formulas[1].result = 190;
		} else {
			formulas[1].result = "---";
		}


		if(formulas[2].result < 130) {
			formulas[2].result = "---";
		} else if(formulas[2].result >= 130 && formulas[2].result <= 135) {
			formulas[2].result = 130;
		} else if(formulas[2].result >= 135 && formulas[2].result <= 140) {
			formulas[2].result = 135;
		} else if(formulas[2].result >= 140 && formulas[2].result <= 145) {
			formulas[2].result = 140;
		} else if(formulas[2].result >= 145 && formulas[2].result <= 150) {
			formulas[2].result = 145;
		} else if(formulas[2].result >= 150 && formulas[2].result <= 155) {
			formulas[2].result = 150;
		} else if(formulas[2].result >= 155 && formulas[2].result <= 160) {
			formulas[2].result = 155;
		} else if(formulas[2].result >= 160 && formulas[2].result <= 162.5) {
			formulas[2].result = 160;
		} else if(formulas[2].result >= 162.5 && formulas[2].result <= 165) {
			formulas[2].result = 162.5;
		} else if(formulas[2].result >= 165 && formulas[2].result <= 167.5) {
			formulas[2].result = 165;
		} else if(formulas[2].result >= 167.5 && formulas[2].result <= 170) {
			formulas[2].result = 167.5;
		} else if(formulas[2].result >= 170 && formulas[2].result <= 172.5) {
			formulas[2].result = 170;
		} else if(formulas[2].result >= 172.5 && formulas[2].result <= 175) {
			formulas[2].result = 172.5;
		} else if(formulas[2].result >= 175 && formulas[2].result <= 177.5) {
			formulas[2].result = 175;
		} else if(formulas[2].result >= 177.5 && formulas[2].result <= 180) {
			formulas[2].result = 177.5;
		} else if(formulas[2].result >= 180 && formulas[2].result <= 182.5) {
			formulas[2].result = 180;
		} else if(formulas[2].result >= 182.5 && formulas[2].result <= 185) {
			formulas[2].result = 182.5;
		} else if(formulas[2].result >= 185 && formulas[2].result <= 187.5) {
			formulas[2].result = 185;
		} else if(formulas[2].result >= 187.5 && formulas[2].result <= 190) {
			formulas[2].result = 187.5;
		} else if(formulas[2].result >= 190) {
			formulas[2].result = 190;
		} else {
			formulas[2].result = "---";
		}


		if(formulas[4].result < 130) {
			formulas[4].result = "---";
		} else if(formulas[4].result >= 130 && formulas[4].result <= 135) {
			formulas[4].result = 130;
		} else if(formulas[4].result >= 135 && formulas[4].result <= 140) {
			formulas[4].result = 135;
		} else if(formulas[4].result >= 140 && formulas[4].result <= 145) {
			formulas[4].result = 140;
		} else if(formulas[4].result >= 145 && formulas[4].result <= 150) {
			formulas[4].result = 145;
		} else if(formulas[4].result >= 150 && formulas[4].result <= 155) {
			formulas[4].result = 150;
		} else if(formulas[4].result >= 155 && formulas[4].result <= 160) {
			formulas[4].result = 155;
		} else if(formulas[4].result >= 160 && formulas[4].result <= 162.5) {
			formulas[4].result = 160;
		} else if(formulas[4].result >= 162.5 && formulas[4].result <= 165) {
			formulas[4].result = 162.5;
		} else if(formulas[4].result >= 165 && formulas[4].result <= 167.5) {
			formulas[4].result = 165;
		} else if(formulas[4].result >= 167.5 && formulas[4].result <= 170) {
			formulas[4].result = 167.5;
		} else if(formulas[4].result >= 170 && formulas[4].result <= 172.5) {
			formulas[4].result = 170;
		} else if(formulas[4].result >= 172.5 && formulas[4].result <= 175) {
			formulas[4].result = 172.5;
		} else if(formulas[4].result >= 175 && formulas[4].result <= 177.5) {
			formulas[4].result = 175;
		} else if(formulas[4].result >= 177.5 && formulas[4].result <= 180) {
			formulas[4].result = 177.5;
		} else if(formulas[4].result >= 180 && formulas[4].result <= 182.5) {
			formulas[4].result = 180;
		} else if(formulas[4].result >= 182.5 && formulas[4].result <= 185) {
			formulas[4].result = 182.5;
		} else if(formulas[4].result >= 185 && formulas[4].result <= 187.5) {
			formulas[4].result = 185;
		} else if(formulas[4].result >= 187.5 && formulas[4].result <= 190) {
			formulas[4].result = 187.5;
		} else if(formulas[4].result >= 190) {
			formulas[4].result = 190;
		} else {
			formulas[4].result = "---";
		}


		if(formulas[5].result < 130) {
			formulas[5].result = "---";
		} else if(formulas[5].result >= 130 && formulas[5].result <= 135) {
			formulas[5].result = 130;
		} else if(formulas[5].result >= 135 && formulas[5].result <= 140) {
			formulas[5].result = 135;
		} else if(formulas[5].result >= 140 && formulas[5].result <= 145) {
			formulas[5].result = 140;
		} else if(formulas[5].result >= 145 && formulas[5].result <= 150) {
			formulas[5].result = 145;
		} else if(formulas[5].result >= 150 && formulas[5].result <= 155) {
			formulas[5].result = 150;
		} else if(formulas[5].result >= 155 && formulas[5].result <= 160) {
			formulas[5].result = 155;
		} else if(formulas[5].result >= 160 && formulas[5].result <= 162.5) {
			formulas[5].result = 160;
		} else if(formulas[5].result >= 162.5 && formulas[5].result <= 165) {
			formulas[5].result = 162.5;
		} else if(formulas[5].result >= 165 && formulas[5].result <= 167.5) {
			formulas[5].result = 165;
		} else if(formulas[5].result >= 167.5 && formulas[5].result <= 170) {
			formulas[5].result = 167.5;
		} else if(formulas[5].result >= 170 && formulas[5].result <= 172.5) {
			formulas[5].result = 170;
		} else if(formulas[5].result >= 172.5 && formulas[5].result <= 175) {
			formulas[5].result = 172.5;
		} else if(formulas[5].result >= 175 && formulas[5].result <= 177.5) {
			formulas[5].result = 175;
		} else if(formulas[5].result >= 177.5 && formulas[5].result <= 180) {
			formulas[5].result = 177.5;
		} else if(formulas[5].result >= 180 && formulas[5].result <= 182.5) {
			formulas[5].result = 180;
		} else if(formulas[5].result >= 182.5 && formulas[5].result <= 185) {
			formulas[5].result = 182.5;
		} else if(formulas[5].result >= 185 && formulas[5].result <= 187.5) {
			formulas[5].result = 185;
		} else if(formulas[5].result >= 187.5 && formulas[5].result <= 190) {
			formulas[5].result = 187.5;
		} else if(formulas[5].result >= 190) {
			formulas[5].result = 190;
		} else {
			formulas[5].result = "---";
		}

	});




});