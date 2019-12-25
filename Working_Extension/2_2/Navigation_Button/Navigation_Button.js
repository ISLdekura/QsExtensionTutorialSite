'use strict';
define( [ "qlik"
],
function (qlik) {
	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		template: `
		<div class="lui-buttongroup">
			<button class="lui-button" ng-click="back()">
				<span class="lui-icon lui-icon--selections-back"></span>
				戻る
			</button>
			<button class="lui-button" ng-click="clear()">
				<span class="lui-icon lui-icon--clear-selections"></span>
				クリア
			</button>
			<button class="lui-button" ng-click="forward()">
				進む
				<span class="lui-icon lui-icon--selections-forward"></span>
			</button>
		</div>
		`,
		controller: ['$scope', function( $scope ) {
			$scope.back = function(){
				const app = qlik.currApp();
				app.back();
			}

			$scope.forward = function(){
				const app = qlik.currApp();
				app.forward();
			}

			$scope.clear = function(){
				const app = qlik.currApp();
				app.clearAll();
			}
		}]
	};
});

