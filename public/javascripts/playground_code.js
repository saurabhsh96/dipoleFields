// You have to create a function called createScene. This function must return a BABYLON.Scene object
// You can reference the following variables: scene, canvas
// You must at least define a camera
// More info here: https://doc.babylonjs.com/generals/The_Playground_Tutorial

var camera;
var draggableObj = [], holders = [];

var createScene = function() {
	var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(1,1,1,1);
	
    settingCameras(scene);

    //the grid
    var groundMaterial = new BABYLON.GridMaterial("groundMaterial", scene);
	groundMaterial.majorUnitFrequency = 5;
	groundMaterial.minorUnitVisibility = 0.3;
	groundMaterial.gridRatio = 10;
	groundMaterial.backFaceCulling = false;
	groundMaterial.mainColor = BABYLON.Color3.Black();
	groundMaterial.lineColor = BABYLON.Color3.Black();
	groundMaterial.opacity = 0.99;
	
    //the grid
	var ground = BABYLON.Mesh.CreatePlane("plane", 100.0, scene);
    ground.renderingGroupId = 1;
	ground.rotation.x = Math.PI/2;
	ground.material = groundMaterial;

    //header menu plane
    var plane = BABYLON.MeshBuilder.CreatePlane("CamPlane", {width:300,height:60}, scene);
	plane.rotation.x = Math.PI/2 -1.1;
    plane.renderingGroupId = 2;
    plane.position.y = 20;
    plane.position.z = 300;
    plane.setParent(camera);

    //imaginary plane
    var imPlane = BABYLON.Mesh.CreatePlane("CamPlane", 400.0, scene);
	imPlane.rotation.x = Math.PI/2 -1.1;
    //imPlane.isVisible = false;
    imPlane.scaling.y = 2;
    imPlane.position.z = 300;
    imPlane.setParent(camera);
    imPlane.material = new BABYLON.StandardMaterial("SA", scene);
    imPlane.material.alpha = 0.5;

    //draggable objects
    for(let i=0; i<4;i++){
        var obj = BABYLON.Mesh.CreateBox("green", 20, scene);
        var mat = new BABYLON.StandardMaterial("ground", scene);
        mat.emissiveColor = BABYLON.Color3.Random();
        obj.material = mat;
        obj.menu = true;
        obj.renderingGroupId = 3;
        
        var n = new BABYLON.TransformNode("root");
        n.position = new BABYLON.Vector3(-90 + i*60, 20, 300);
        n.setParent(plane);
        obj.parent = n;
        
        draggableObj.push(obj);
        holders.push(n);
    }

    scene.registerBeforeRender(function () {
        
        for(let i=0; i<holders.length;i++){
            holders[i].rotation.y+=0.01;
        }
	}); 


    //drag and drop stuff
    
    // Events
    var canvas = engine.getRenderingCanvas();
    var startingPoint;
    var currentMesh;

    var getGroundPosition = function () {
        
        // Use a predicate to get position on the ground
        if(currentMesh.menu == true){
            var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh ==  imPlane; });       
        }
        else{
            var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
        }

        if (pickinfo.hit) {
            return pickinfo.pickedPoint;
        }

        return null;
    }

    var onPointerDown = function (evt) {
        if (evt.button !== 0) {
            return;
        }

        // check if we are under a mesh
        var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return draggableObj.indexOf(mesh) > -1; });
        if (pickInfo.hit) {
            currentMesh = pickInfo.pickedMesh;
            currentMesh.setParent(null);
            startingPoint = getGroundPosition(evt);

            console.log(startingPoint)

            if (startingPoint) { // we need to disconnect camera from canvas
                
                setTimeout(function () {
                    if(currentMesh.menu){
                         //currentMesh.position.z = 0;
                         currentMesh.rotation = BABYLON.Vector3.Zero();
                    }
                    camera.detachControl(canvas);
                }, 0);
            }
        }
    }

    var onPointerUp = function () {
        if (startingPoint) {
            camera.attachControl(canvas, true);
            if(currentMesh.menu){
                //currentMesh.position = pickWithRay(currentMesh.position);
                currentMesh.position = BABYLON.Vector3.Zero();
                currentMesh.menu = false;
            }
            currentMesh.setParent(ground);
            startingPoint = null;
            return;
        }
    }

    var onPointerMove = function (evt) {
        if (!startingPoint) {
            return;
        }

        var current = getGroundPosition(evt);

        if (!current) {
            return;
        }

        var diff = current.subtract(startingPoint);
        currentMesh.position.addInPlace(diff);

        startingPoint = current;

    }

    canvas.addEventListener("pointerdown", onPointerDown, false);
    canvas.addEventListener("pointerup", onPointerUp, false);
    canvas.addEventListener("pointermove", onPointerMove, false);

    scene.onDispose = function () {
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointerup", onPointerUp);
        canvas.removeEventListener("pointermove", onPointerMove);
    }

    //picking function
    var pickWithRay = function(point){
        var newP = point;
        
        console.log(newP)
        
        var rayPick = new BABYLON.Ray(point, new BABYLON.Vector3(0, -1, 0));
        var meshFound = scene.pickWithRay(rayPick, function (m) {return (m!=currentMesh) && (m!=imPlane);});
        
        console.log(meshFound)
        
        if (meshFound != null && meshFound.pickedPoint != null) {
            console.log(meshFound.pickedPoint)
            newP = meshFound.pickedPoint;
        }
        return newP;
    }

	return scene;
};


function settingCameras(scene)
{
    //main camera
	camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", -Math.PI/2, 1.1, 170, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas,false);
	camera.lowerRadiusLimit = 40;
	camera.upperRadiusLimit = 300;
	camera.upperBetaLimit = null;
	camera.panningSensibility = 0; 	
    scene.activeCamera = camera;

	//main view
	var left = .15;
	var bottom = .05;
	var width = .7;
	var height = .9;
	var viewport = new BABYLON.Viewport(left, bottom, width, height);
	camera.viewport = viewport;

	add_border_design();
}

function add_border_design()
{
	var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    for(var i=0;i<4;i++){
		var stack = new BABYLON.GUI.StackPanel('s1');
		stack.background = "#3a3a3a";
		if(i%2 == 0){
			stack.width = "3px";
			stack.height = "100%";
			stack.horizontalAlignment = i/2;
		}else{
			stack.height = "2px";
			stack.width = "100%";
			stack.verticalAlignment = (i-1)/2;
		}
		advancedTexture.addControl(stack); 
	}
}