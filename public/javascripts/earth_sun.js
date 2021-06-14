window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 75, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(75, 20, 5));
        //camera.attachControl(canavas, false);
        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = (Math.PI / 2) * 0.99;
        camera.lowerRadiusLimit = 300;
    
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        
        // Light
        var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
        var light1 = new BABYLON.PointLight("omni2", new BABYLON.Vector3(250, 0, 250), scene);
        var light2 = new BABYLON.PointLight("omni3", new BABYLON.Vector3(250, 0, -250), scene);
        var light3 = new BABYLON.PointLight("omni4", new BABYLON.Vector3(-250, 0, -250), scene);
        var light4 = new BABYLON.PointLight("omni5", new BABYLON.Vector3(-250, 0, 250), scene);
        //var light = new BABYLON.PointLight("omni5", new BABYLON.Vector3(-250, 0, 250), scene);
        //var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Ground
        var ground = BABYLON.Mesh.CreateGround("ground", 700, 700, 0, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;
    
        var cos = Math.cos(23.0/180.0*Math.PI);
        var sin = Math.sin(23.0/180.0*Math.PI);
        // Meshes
        var earth_s = BABYLON.Mesh.CreateSphere('earth', 32, 10, scene);
        var orientation = BABYLON.Vector3.RotationFromAxis(new BABYLON.Vector3(cos,0,sin), new BABYLON.Vector3(sin,cos,0), new BABYLON.Vector3(0,sin,cos));
        
        earth_s.position.y = 30;
        earth_s.position.x = 150;

        var earth_mat = new BABYLON.StandardMaterial("earth_s", scene);
        
        earth_mat.diffuseTexture = new BABYLON.Texture("/static/images/earth.png", scene);

        earth_s.material = earth_mat;
        earth_s.rotation = orientation;
        //earth_s.rotate(BABYLON.Axis.Y, Math.PI/64, BABYLON.Space.WORLD);

        var sun_s = BABYLON.Mesh.CreateSphere('sun', 32, 30, scene);

        sun_s.position.y = 30;
        sun_s.position.x = 0;

        var sun_mat = new BABYLON.StandardMaterial("sun_s", scene);
        
        sun_mat.diffuseTexture = new BABYLON.Texture("/static/images/sun.png", scene);

        sun_s.material = sun_mat;

        //var pivotAt = sun_s.position;
        //var axis = orientation;
        //var pilotStart = earth_s.position;
        
        //earth_s.parent = sun_s;
        //earth_s.setPivotMatrix(BABYLON.Matrix.Translation(pilotStart.x, pilotStart.y, pilotStart.z));

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
        };
    
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
        };
    
        var onPointerUp = function () {
            if (startingPoint) {
                camera.attachControl(canvas, true);
                startingPoint = null;
                return;
            }
        };
    
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
    
        };
        
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
        };

        var onKeyUp = function(evt) {
            movingUp = false;
            moveDown = false;
            movefront = false;
            moveback = false;
            moveleft = false;
            moveright = false;
        };
        
        var onKeyMove = function(evt){
            //if(movingUp == false || moveDown == false){
            //    return;
           // }
           // else{
                if(movingUp == true){
                    currentMesh.position.y += 5;
                }
                if(moveDown == true){
                    currentMesh.position.y += -5;
                }
                if(moveleft == true){
                    currentMesh.position.x += -5;
                }
                if(moveright == true){
                    currentMesh.position.x += 5;
                }
                if(movefront == true){
                    currentMesh.position.z += -5;
                }
                if(moveback == true){
                    currentMesh.position.z += 5;
                }
            //}
        };
        var index = 0;
        var points = [];
        for (theta=0; theta<2*Math.PI; theta=theta+0.03){
                points.push(new BABYLON.Vector3((sun_s.position.x + 150*Math.cos(theta)), sun_s.position.y, (sun_s.position.z + 150*Math.sin(theta))));
        }
        var line = BABYLON.MeshBuilder.CreateLines('line', { points: points, updatable:true}, scene);
        //var axis = sun_s.position;
        scene.registerBeforeRender(function(){
            points.length = 0;
            for (theta=0; theta<2*Math.PI; theta=theta+0.03){
                points.push(new BABYLON.Vector3((sun_s.position.x + 150*Math.cos(theta)), sun_s.position.y, (sun_s.position.z + 150*Math.sin(theta))));
            }      
            
            line = BABYLON.MeshBuilder.CreateLines("line", { points:points, instance: line });
            
            earth_s.rotate(BABYLON.Axis.Y, Math.PI/64, BABYLON.Space.LOCAL);
            //earth_s.rotate(BABYLON.Axis.Y, Math.PI/8, BABYLON.Space.WORLD);
            sun_s.rotate(BABYLON.Axis.Y, Math.PI/8, BABYLON.Space.LOCAL);

            earth_s.position = points[index];
            index = (index == points.length-1)?0:index+1;
            //earth_s.setPivotPoint(new BABYLON.Vector3(sun_s.position.x, sun_s.position.y, sun_s.position.z));
            //earth_s.rotate(BABYLON.Axis.Y, Math.PI/64, BABYLON.Space.WORLD);
        });

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
            canvas.addEventListener("keypress", onKeyMove, false);
        };
    
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