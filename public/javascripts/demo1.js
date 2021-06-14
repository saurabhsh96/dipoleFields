window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function(){
        var scene = new BABYLON.Scene(engine);

        //new BABYLON.ArcRotateCamera()
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(10, 10, 20));
        //camera.attachControl(canvas, false);

        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = (Math.PI / 2) * 0.99;
        camera.lowerRadiusLimit = 150;
    
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        var light = new BABYLON.PointLight('light1', new BABYLON.Vector3(0,50,0), scene);

        var ground = BABYLON.Mesh.CreateGround("ground", 300, 300, 1, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;

        var north_s = BABYLON.Mesh.CreateSphere('north', 32, 10, scene);

        north_s.position.y = 10;
        north_s.position.x = 10;

        var north_mat = new BABYLON.StandardMaterial("ground", scene);
        
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);

        north_s.material = north_mat;

        var canvas = engine.getRenderingCanvas();
        var startPoint;
        var currentMesh;
        
        var getGroundPosition = function (){
            var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function(mesh){return mesh == ground;});
            if(pickInfo.hit){
                console.log("In get ground Pos func!");
                return pickInfo.pickedPoint;
            }
            return null;
        }
         
        var onPointerDown = function(evt){
            if (evt.button !== 0){
                return;
            }

            var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh){return mesh !== ground;});
            if (pickInfo.hit){
                console.log("In pointer down Pos func!");
                currentMesh = pickInfo.pickedMesh;
                startPoint = getGroundPosition(evt);

                if (startPoint){
                    setTimeout(function(){
                        console.log("In start point disabled func!");
                        camera.detachControl(canvas);
                    }, 0);
                }
            }
        }

        var onPointerUp = function(){
            if(startPoint){
                console.log("In UP func!");
                camera.attachControl(canvas, true);
                startPoint = null;
                return;
            }
        }

        var onPointerMove = function (evt){
            if(!startPoint){
                return;
            }

            var current = getGroundPosition(evt);

            if(!current){
                return;
            }

            var diff = current.substract(startPoint);
            currentMesh.position.addInPlace(diff);
            console.log("In pointer move func!");
            startPoint = current;
        }

        canvas.addEventListener("pointerdown", onPointerDown, false);
        canvas.addEventListener("pointerup", onPointerUp, false);
        canvas.addEventListener("pointermove", onPointerMove, false);
        
        scene.onDispose = function () {
            canvas.removeEventListener("pointerdown", onPointerDown);
            canvas.removeEventListener("pointerup", onPointerUp);
            canvas.removeEventListener("pointermove", onPointerMove);
        }

        return scene;
    }

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