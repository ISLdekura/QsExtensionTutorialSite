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
			<div class="">
				<ul class="lui-tabset" style="border: 1px solid rgba(0, 0, 0, 0.1);">
					<li ng-repeat="sheet in sheets track by $index" class="lui-tab">
						<div ng-click="gotoSheet(sheet.id);">
							{{sheet.title}}
						</span>
					</li>
				</ul>
			</div>
		`,
		controller: ['$scope', function( $scope ) {
			$scope.sheets = function(){
				const app = qlik.currApp();
				let sheetList = [];
				app.getList("sheet").then(function(result){
					result.layout.qAppObjectList.qItems.forEach(element => {
						let item = {
							title: element.qMeta.title,
							id : element.qInfo.qId
						};
						sheetList.push(item);
					});
				});
				return sheetList;
			}();
			
			$scope.gotoSheet = function(id){
				qlik.navigation.gotoSheet(id);
			}
		}]
	};
});

