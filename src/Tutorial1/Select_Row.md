# 行を選択できるようにする

`function createRows ( rows, dimensionInfo ) {`  
`		var html = "";`  
`		rows.forEach( function ( row ) {`  
`			html += '<tr>';`  
`			row.forEach( function ( cell, key ) {`  
`				if ( cell.qIsOtherCell ) {`  
`					cell.qText = dimensionInfo[key].othersLabel;`  
`				}`  
`				html += "<td ";`  
`				if ( !isNaN( cell.qNum ) ) {`  
`					html += "class='numeric'";`  
`				}`  
**`				if (cell.qState === "O" || cell.qState === "S"){`**  
**`					// 列が軸のときのみ属性を追加`**  
**`					// "O" => option(白状態), "S" => selected(緑状態)`**  
**`					html += " qDim ";`**  
**`					html += " qElemNumber='" + cell.qElemNumber + "' ";`**  
**`					html += " qDimNumber='" + key + "' ";`**  
**`				}`**  
`				html += '>' + cell.qText + '</td>';`  
`			} );`  
`			html += '</tr>';`  
`		} );`  
`		return html;`  
`	}`  
