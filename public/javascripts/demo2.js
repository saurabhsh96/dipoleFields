window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(10, 10, 20));
    
        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = (Math.PI / 2) * 0.99;
        camera.lowerRadiusLimit = 150;
    
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
    
        // Light
        var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
    
        // Ground
        var ground = BABYLON.Mesh.CreateGround("ground", 500, 500, 0, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;
    
        // Meshes
        var north_s = BABYLON.Mesh.CreateSphere('north', 32, 10, scene);

        north_s.position.y = 10;
        north_s.position.x = 10;

        var north_mat = new BABYLON.StandardMaterial("north_s", scene);
        
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);

        north_s.material = north_mat;

    
        // Events
        var canvas = engine.getRenderingCanvas();
        var startingPoint;
        var currentMesh;
        var movingUp = false;
        var moveDown = false;
        var moveleft = false;
        var moveright = false;
        var movefront = false;
        var moveback = false;

        var getGroundPosition = function () {
            // Use a predicate to get position on the ground
            var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
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
            var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh !== ground; });
            if (pickInfo.hit) {
                currentMesh = pickInfo.pickedMesh;
                startingPoint = getGroundPosition(evt);
    
                if (startingPoint) { // we need to disconnect camera from canvas
                    setTimeout(function () {
                        camera.detachControl(canvas);
                    }, 0);
                }
            }
        }
    
        var onPointerUp = function () {
            if (startingPoint) {
                camera.attachControl(canvas, true);
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
        
        var onKeyDown = function(evt){
            if (evt.keyCode == 87) {
                movingUp = true;
                moveDown = false;
            } else if (evt.keyCode == 83) {
                movingUp = false;
                moveDown = true;
            }
            if (evt.keyCode == 65){
                moveleft = true;
                moveright = false;
            }
            else if(evt.keyCode == 68){
                moveleft = false;
                moveright = true;
            }
            if (evt.keyCode ==69) {
                movefront = true;
                moveback = false;
            }
            else if(evt.keyCode == 88){
                movefront = false;
                moveback = true;
            }
        }

        var onKeyUp = function(evt) {
            movingUp = false;
            moveDown = false;
            movefront = false;
            moveback = false;
            moveleft = false;
            moveright = false;
        }
        
        var onKeyMove = function(evt){
            //if(movingUp == false || moveDown == false){
            //    return;
           // }
           // else{
                if(movingUp == true){
                    currentMesh.position.y += 1;
                }
                if(moveDown == true){
                    currentMesh.position.y += -1;
                }
                if(moveleft == true){
                    currentMesh.position.x += -1;
                }
                if(moveright == true){
                    currentMesh.position.x += 1;
                }
                if(movefront == true){
                    currentMesh.position.z += -1;
                }
                if(moveback == true){
                    currentMesh.position.z += 1;
                }
            //}
        }

        
        canvas.addEventListener("pointerdown", onPointerDown, false);
        canvas.addEventListener("pointerup", onPointerUp, false);
        canvas.addEventListener("pointermove", onPointerMove, false);
    
        canvas.addEventListener("keydown", onKeyDown, false);
        canvas.addEventListener("keyup", onKeyUp, false);
        canvas.addEventListener("keypress", onKeyMove, false);
    
        scene.onDispose = function () {
            canvas.removeEventListener("pointerdown", onPointerDown);
            canvas.removeEventListener("pointerup", onPointerUp);
            canvas.removeEventListener("pointermove", onPointerMove);
            canvas.addEventListener("keydown", onKeyDown, false);
            canvas.addEventListener("keyup", onKeyUp, false);
            canvas.addEventListener("keymove", onKeyMove, false);
        }
    
        return scene;
    };

    // call the createScene function
    var scene = createScene();

    engine.runRenderLoop(function(){
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });
});