window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');
    var draggableObj = [], holders = [];
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 75, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(75, 20, 5));
        
        camera.lowerBetaLimit = 0.1;sta
        camera.upperBetaLimit = (Math.PI / 2) * 0.99;
        camera.lowerRadiusLimit = 300;
    
        scene.clearColor = new BABYLON.Color3(0.5, 0.3, 0.2);
        
        //camera.attachControl(canavas, false);
        
        // Light
        var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
        var light1 = new BABYLON.PointLight("omni2", new BABYLON.Vector3(250, 0, 250), scene);
        var light2 = new BABYLON.PointLight("omni3", new BABYLON.Vector3(250, 0, -250), scene);
        var light3 = new BABYLON.PointLight("omni4", new BABYLON.Vector3(-250, 0, -250), scene);
        var light4 = new BABYLON.PointLight("omni5", new BABYLON.Vector3(-250, 0, 250), scene);
        //var light5 = new BABYLON.PointLight("omni6", new BABYLON.Vector3(0,2,350), scene);
        // Ground
        light3.intensity = 0.7;
        light4.intensity = 0.7;
        var ground = BABYLON.Mesh.CreateGround("ground", 700, 700, 0, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;
    
        // Meshes on the plane
        var south_s = BABYLON.Mesh.CreateSphere('south', 32, 10, scene); 
        south_s.position.y = 0;
        south_s.position.x = 30;
        south_s.position.z = 0;
        var south_mat = new BABYLON.StandardMaterial("south_s", scene);
        south_mat.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s.material = south_mat;
        
        var north_s = BABYLON.Mesh.CreateSphere('north', 32, 10, scene);
        north_s.position.y = 30;
        north_s.position.x = 0;
        north_s.position.z = 0;
        var north_mat = new BABYLON.StandardMaterial("north_s", scene);
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s.material = north_mat;
        //south_s.parent = north_s;
        //Meshes to be dragged
       /* var south_s1 = BABYLON.Mesh.CreateSphere('south1', 32, 10, scene); 
        south_s1.position.y = 0;
        south_s1.position.x = 30;
        south_s1.position.z = 0;
        var south_mat1 = new BABYLON.StandardMaterial("south_s1", scene);
        south_mat1.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s1.material = south_mat1;
        
        var north_s1 = BABYLON.Mesh.CreateSphere('north1', 32, 10, scene);
        north_s1.position.y = 30;
        north_s1.position.x = 0;
        north_s1.position.z = 0;
        var north_mat1 = new BABYLON.StandardMaterial("north_s1", scene);
        north_mat1.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s1.material = north_mat1;

        south_s1.parent = north_s1;
        
        draggableObj.push(south_s1);
        draggableObj.push(north_s1);

        var n = new BABYLON.TransformNode("root");
        n.position = new BABYLON.Vector3(-90 + 1*60, 20, 320);
        n.setParent(plane);
        north_s1.parent = n;
    
        //draggableObj.push();
        holders.push(n);*/

        // Events
        var canvas = engine.getRenderingCanvas();
        var startingPoint;
        var currentMesh = north_s;
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
        };
        
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

        /*(//Header menu plane
        var plane = BABYLON.MeshBuilder.CreatePlane("head_plane", {width:300, height:60}, scene);
        //plane.rotation.x = Math.PI/2 -1.1;
        plane.position.x = -20;
        plane.renderingGroupId = 2;
        plane.position.y = 100;
        plane.position.z = 320;
        var pl_material = new BABYLON.StandardMaterial('plane', scene);
        pl_material.diffuseColor = new BABYLON.Color3(0, 0, 0);
        plane.material = pl_material;
        //plane.setParent(camera);

        //BABYLON.CreatePlane("")
        var imPlane = BABYLON.Mesh.CreatePlane("head_plane", 400.0, scene);
        //imPlane.rotation.x = Math.PI/2 -1.1;
        imPlane.position.x = -20;
        //imPlane.isVisible = false;
        imPlane.scaling.y = 2;
        imPlane.position.z = 320;
        //imPlane.setParent(camera);
        imPlane.material = new BABYLON.StandardMaterial("SA", scene);
        imPlane.material.alpha = 0.0;
            */
        /*for(var i=0; i<4;i++){
            var obj = BABYLON.Mesh.CreateBox("green", 20, scene);
            var mat = new BABYLON.StandardMaterial("ground", scene);
            mat.emissiveColor = BABYLON.Color3.Random();
            obj.material = mat;
            obj.menu = true;
            obj.renderingGroupId = 3;
            
            var n = new BABYLON.TransformNode("root");
            n.position = new BABYLON.Vector3(-90 + i*60, 20, 320);
            n.setParent(plane);
            obj.parent = n;
            
            draggableObj.push(obj);
            holders.push(n);
        }*/
        
        var my_pt = [0,1];
        //var lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene);

        for(i=-250; i<250; i=i+20){
            for(j=-250; j<250; j=j+20){
                for(k=-10; k<80; k=k+20){
                    my_pt.length = 0; 
                    var point_pos = new BABYLON.Vector3(i, j, k);
                    var mag_field = all_field(point_pos);
                    my_pt.push(point_pos);
                    var new_pt = mag_field.add(point_pos); 
                    my_pt.push(new_pt);
                    //console.log(mag_field);
                    var lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene);
                    //lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, instance:lines});
                   // console.log(my_pt);                
                }
            }
        }
    /*scene.registerBeforeRender(function(){
            for(var i=0; i<holders.length;i++){
                holders[i].rotation.y+=0.01;
            }    
        });*/

        /*for(i=north_s.position.x; i<south_s.position.x; i+=2){
            for(j=-10; j<+80; j+=10){
                for(k=-20; k<100; k+=10){
                    my_pt.length = 0; 
                    var point_pos = new BABYLON.Vector3(i, j, k);
                    var mag_field = all_field(point_pos);
                    my_pt.push(point_pos);
                    var new_pt = mag_field.add(point_pos); 
                    my_pt.push(new_pt);
                    console.log(mag_field);
                    var lines1 = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene);
                }        
            }
        }*/
        
        function showWorldAxis(size) {
            var makeTextPlane = function(text, color, size) {
                var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
                dynamicTexture.hasAlpha = true;
                dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
                var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
                plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
                plane.material.backFaceCulling = false;
                plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
                plane.material.diffuseTexture = dynamicTexture;
            return plane;
             };
            var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
              BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
              new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
              ], scene);
            axisX.color = new BABYLON.Color3(1, 0, 0);
            var xChar = makeTextPlane("X", "red", size / 10);
            xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
            var axisY = BABYLON.Mesh.CreateLines("axisY", [
                BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
                new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
                ], scene);
            axisY.color = new BABYLON.Color3(0, 1, 0);
            var yChar = makeTextPlane("Y", "green", size / 10);
            yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
            var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
                BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
                new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
                ], scene);
            axisZ.color = new BABYLON.Color3(0, 0, 1);
            var zChar = makeTextPlane("Z", "blue", size / 10);
            zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
        }

        function mag_f(m, pole_pos, point_pos){
            dist_cube = Math.pow(BABYLON.Vector3.Distance(pole_pos, point_pos), 3);
            //console.log(point_pos);
            //console.log(pole_pos);
            //console.log(dist_cube);
            var x_comp = m * (point_pos.x - pole_pos.x) / (dist_cube * 2 * Math.PI);
            //console.log(m);
            var y_comp = m * (point_pos.y - pole_pos.y) / (dist_cube * 2 * Math.PI);
            var z_comp = m * (point_pos.z - pole_pos.z) / (dist_cube * 2 * Math.PI);
            var field =  new BABYLON.Vector3(x_comp, y_comp, z_comp);
            //console.log("testingnd ", field);
            return field;
        }
        
        //var m_north = 1;
        //console.log(m_north+"gjgjhgjhg");
        //var m_south = -1;
        //console.log(m_north, m_south);
        function all_field(point_pos){
            var mag_field;
            var m_north = 1;
            //console.log(m_north);//+"gjgjhgjhg");
            var m_south = -1;
            var mag_field_n = mag_f(m_north, north_s.position, point_pos);
            //console.log(m_north);
            var mag_field_s = mag_f(m_south, south_s.position, point_pos);
            //console.log(mag_field_n, mag_field_s);
            mag_field = mag_field_n.add(mag_field_s);
            if(BABYLON.Vector3.Dot(mag_field, mag_field)!==0){
                mag_field = mag_field.normalize();
            }
            mag_field = mag_field.multiplyByFloats(20,20,20);
            return mag_field;
        }

        /*function vectorFieldLine(point, scaleBy) {
            var curvePoints = [point];
            var pointVector;
            for(var i=0; i<10; i++) {
                pointVector = all_field(point);
                scaledPointVector = pointVector.multiplyByFloats(scaleBy, scaleBy, scaleBy);
                nextPoint = point.add(scaledPointVector);
                curvePoints.push(nextPoint);
                point = nextPoint;
            }
            return curvePoints;
        }*/

        showWorldAxis(5);
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