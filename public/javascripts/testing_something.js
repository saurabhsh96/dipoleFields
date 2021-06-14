window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');
    var draggableObj = [], holders = [];
    var engine = new BABYLON.Engine(canvas, true);

    var isMoved = false;
    
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 75, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(75, 20, 5));
        
        camera.lowerBetaLimit = 0.1;
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
        south_s.position.y = 30;
        south_s.position.x = 0;
        south_s.position.z = 60;
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
            ifMoved();
        };
        
        function ifMoved(){
            if(currentMesh == north_s || currentMesh == south_s){ //|| currentMesh == north_s1 || currentMesh == south_s1){
                isMoved = true;
            }
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
                ifMoved();
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

        //Magnetic field drawing:
        x_min = -200;
        x_max = 200;
        y_min = 0;
        y_max = 80;
        z_min = -200;
        z_max = 200;
        no_of_steps = 800;
        dt = 0.25; //time step

        //init_point = north_s.position.add(new BABYLON.Vector3(10*Math.cos(Math.PI/4), 10*Math.cos(Math.PI/4), 10*Math.cos(Math.PI/4))); 
        //console.log(init_point);

        //var my_pt = [0,1];
        
        function mag_f(m, pole_pos, point_pos){
            dist_cube = Math.pow(BABYLON.Vector3.Distance(pole_pos, point_pos), 3);
            var x_comp = m * (point_pos.x - pole_pos.x) / (dist_cube * 2 * Math.PI);
            var y_comp = m * (point_pos.y - pole_pos.y) / (dist_cube * 2 * Math.PI);
            var z_comp = m * (point_pos.z - pole_pos.z) / (dist_cube * 2 * Math.PI);
            var field =  new BABYLON.Vector3(x_comp, y_comp, z_comp);
            return field;
        }
        
        function all_field(point_pos){
            var mag_field;
            var m_north = 1;
            var m_south = -1;
            var mag_field_n = mag_f(m_north, north_s.position, point_pos);
            var mag_field_s = mag_f(m_south, south_s.position, point_pos);
            mag_field = mag_field_n.add(mag_field_s);
            if(BABYLON.Vector3.Dot(mag_field, mag_field)!==0){
                mag_field = mag_field.normalize();
            }
            //mag_field = mag_field.multiplyByFloats(100,100,100);
            return mag_field;
        }

    scene.registerBeforeRender(function(){
        if(isMoved){
            //console.log("Yes something has been moved!");
            isMoved = false;
            draw_field();
        }
    });
    

    lines = [];
    y_pos = 30;
    traj = [];
    ld = [];
    function draw_field(){
        var spacing = 40;
        var l = gen_starting_point(x_max, x_min, z_max, z_min, north_s.position.y, spacing);
        var traj_loc = [];
        var currVect;
        lines.length = 0;
        //ld.push(BABYLON.MeshBuilder.CreateLines("lines", {points:l, updatable:true}, scene));
        for(i=0; i<ld.length; i++){
            ld[i].dispose();
        }
        ld.length = 0;
        //console.log(l[0].length);
    for(y_pos = north_s.position.y - 10; y_pos < 80; y_pos+=20){
        for(i = 0; i<l[0].length; i++){
            currVect = new BABYLON.Vector3(l[0][i], y_pos, l[1][i]);
            //currVect = new BABYLON.Vector3(north_s.position.x + 10*Math.cos(Math.PI/4), y_pos, north_s.position.z + 10*Math.cos(Math.PI/4));
            //console.log(currVect);
            //if(y_pos == north_s.position.y){
            //    traj_loc = find_path(currVect);    
            //}
            //else 
            traj_loc = find_path3D(currVect);
            //console.log(traj_loc);
            lines.push(traj_loc);
           // traj_loc.length = 0;
        }   
    }
    for(i =0; i<lines.length; i++){
        ld.push(BABYLON.MeshBuilder.CreateLines("lines", {points:lines[i], updatable:true}, scene));
        ld[i].isPickable = false;
    }   
    }

    /*function find_path(dt, currVect){
        step_count -= 1;
        traj.push(currVect);
        //console.log(traj);
        if(step_count == 0 || currVect.x > x_max || currVect.x < x_min || currVect.z > z_max || currVect.z < z_min){
            console.log(traj);
            return traj;
        } else{
            next_vec = all_field(currVect);
            //console.log(next_vec.x + dt*Math.cos(Math.atan(next_vec.z/next_vec.x)));
            currVect = new BABYLON.Vector3((next_vec.x + dt*Math.cos(Math.atan(next_vec.z/next_vec.x))), y_pos, (next_vec.z + dt*Math.sin(Math.atan(next_vec.z/next_vec.x))));
            find_path(dt, currVect);
        }
    }*/

    /*function find_path(currVect){
        var traj = [];
        var step_count = no_of_steps;
        while(1)
            if(step_count == 0 || currVect.x > x_max || currVect.x < x_min || currVect.z > z_max || currVect.z < z_min){
                break;
            }
            else{
                //console.log(currVect);
                traj.push(currVect);
                next_vec = all_field(currVect);
                currVect = new BABYLON.Vector3((currVect.x + dt*Math.cos(Math.atan(next_vec.z/next_vec.x))), y_pos, (currVect.z + dt*Math.sin(Math.atan(next_vec.z/next_vec.x))));
                step_count -= 1;
                //console.log(traj);
        }
        //console.log(next_vec, currVect);
        //console.log(traj);
        return traj;
    }*/

    //2D function Yo bitch
    function find_path(currVect){
        var traj = [];
        var step_count = no_of_steps;
        while(!(step_count == 0 || currVect.x > x_max || currVect.x < x_min || currVect.z > z_max || currVect.z < z_min)){
            traj.push(currVect);
            next_vec = all_field(currVect);
            currVect = new BABYLON.Vector3((currVect.x + dt*Math.cos(Math.atan(next_vec.z/next_vec.x))), y_pos, (currVect.z + dt*Math.sin(Math.atan(next_vec.z/next_vec.x))));
            step_count -= 1;    
        }
        return traj;
    }

    //3D function Yo bitch
    function find_path3D(currVect, planes, pos){
        var traj = [];
        var step_count = no_of_steps;
        while(!(step_count == 0 || currVect.x > x_max || currVect.x < x_min || currVect.z > z_max || currVect.z < z_min || currVect.y > y_max || currVect.y < y_min)){
            traj.push(currVect);
            next_vec = all_field(currVect);
            currVect = new BABYLON.Vector3((currVect.x + dt*Math.cos(Math.acos(next_vec.x))), (currVect.y + dt*Math.cos(Math.acos(next_vec.y))), (currVect.z + dt*Math.cos(Math.acos(next_vec.z))));
            step_count -= 1;    
        }
        return traj;
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