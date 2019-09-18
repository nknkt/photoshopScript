win = new Window("dialog", "�A�Z�b�g�ݒ�");
win.bounds  = [600,400,880,545];
okbtn = win.add("button", { width: 80, height: 25, x: 40, y: 25 }, "OK");
cnbtn = win.add("button", { width: 80, height: 25, x: 160, y: 25 }, "Cancel");
chBox = win.add("Checkbox",[40,80,275,10+20],"�摜��2�{(@2x)");
rBtn1 = win.add("radiobutton",[40,110,80,10+20], "PNG�`��");
rBtn2 = win.add("radiobutton",[160,110,80,30+20], "JPEG�`��");
okbtn.active = true;

okbtn.onClick = function () {
	if ((rBtn1.value == true) && (chBox.value == false)) {
		app.activeDocument.suspendHistory("1�{JPEG���l�[��", "main01()");
	} else if ((rBtn1.value == true) && (chBox.value == true)) {
		app.activeDocument.suspendHistory("2�{JPEG���l�[��", "main02()");
	} else if ((rBtn1.value == false) && (chBox.value == false)) {
		app.activeDocument.suspendHistory("1�{PNG���l�[��", "main03()");
	} else if ((rBtn1.value == false) && (chBox.value == true)) {
		app.activeDocument.suspendHistory("2�{PNG���l�[��", "main04()");
	} else {
		app.activeDocument.suspendHistory("1�{JPEG���l�[��", "main01()");
	}
	win.close();
}
win.show();


//��if���ŕ������蕡�����������������y�������B
	//�Q�Ɠn���A�z��̕����n���́A�����͈́B
function main01() {
	if (app.documents.length) {
		var docRef = app.activeDocument;
		if (docRef.layers.length) {
			var selected = getSelectedLayersIdx();
			for (var i = 0; i < selected.length; i++) {
				var assetName = selectByIndex(selected[i]).name + ".png";
				selectByIndex(selected[i]).name = assetName;
			}
		}
	}
}

function main02() {
	if (app.documents.length) {
		var docRef = app.activeDocument;
		if (docRef.layers.length) {
			var selected = getSelectedLayersIdx();
			for (var i = 0; i < selected.length; i++) {
				var assetName = selectByIndex(selected[i]).name + ".png, " + "200% " + selectByIndex(selected[i]).name+ "@2x.png";
				selectByIndex(selected[i]).name = assetName;
			}
		}
	}
}

function main03() {
	if (app.documents.length) {
		var docRef = app.activeDocument;
		if (docRef.layers.length) {
			var selected = getSelectedLayersIdx();
			for (var i = 0; i < selected.length; i++) {
				var assetName = selectByIndex(selected[i]).name + ".jpg";
				selectByIndex(selected[i]).name = assetName;
			}
		}
	}
}

function main04() {
	if (app.documents.length) {
		var docRef = app.activeDocument;
		if (docRef.layers.length) {
			var selected = getSelectedLayersIdx();
			for (var i = 0; i < selected.length; i++) {
				var assetName = selectByIndex(selected[i]).name + ".jpg, " + "200% " + selectByIndex(selected[i]).name+ "@2x.jpg";
				selectByIndex(selected[i]).name = assetName;
			}
		}
	}
}




//�e�A�A�N�e�B�u���C���[�̃f�[�^�擾
function getSelectedLayersIdx() {
	var selectedLayers = new Array;
	var ref = new ActionReference();
	ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
	var desc = executeActionGet(ref);

	if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
		desc = desc.getList(stringIDToTypeID('targetLayers'));
		var c = desc.count
		var selectedLayers = new Array();
		for (var i = 0; i < c; i++) {
			try {
				activeDocument.backgroundLayer;
				selectedLayers.push(desc.getReference(i).getIndex());
			} catch (e) {
				selectedLayers.push(desc.getReference(i).getIndex() + 1);
			}
		}
	} else {
		var ref = new ActionReference();
		ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("ItmI"));
		ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
		try {
			activeDocument.backgroundLayer;
			selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI")) - 1);
		} catch (e) {
			selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI")));
		}

		var vis = app.activeDocument.activeLayer.visible;
		if (vis == true) app.activeDocument.activeLayer.visible = false;
		var desc9 = new ActionDescriptor();
		var list9 = new ActionList();
		var ref9 = new ActionReference();
		ref9.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
		list9.putReference(ref9);
		desc9.putList(charIDToTypeID('null'), list9);
		executeAction(charIDToTypeID('Shw '), desc9, DialogModes.NO);
		if (app.activeDocument.activeLayer.visible == false) selectedLayers.shift();
		app.activeDocument.activeLayer.visible = vis;
	}
	return selectedLayers;
}

//�擾�f�[�^�̊i�[�A�g�p�^�ɕύX
function selectByIndex(idx) {
	if (idx == 0) return;
	if (idx.length != undefined) {
		idx = idx[0];
	}
	var desc = new ActionDescriptor();
	var ref = new ActionReference();
	ref.putIndex(charIDToTypeID('Lyr '), idx);
	desc.putReference(charIDToTypeID('null'), ref);
	executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
	return app.activeDocument.activeLayer;
}