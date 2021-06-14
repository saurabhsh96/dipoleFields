window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');
    var draggableObj = [], holders = [];
    var engine = new BABYLON.Engine(canvas, true);

    cam_alpha = 0;
    cam_beta = 0;
    cam_rad = 75;
    cam_tar = new BABYLON.Vector3(0,0,0);
    cam_pos = new BABYLON.Vector3(75, 20, 5);
    south_pos = new BABYLON.Vector3(0, 30, 80);
    north_pos = new BABYLON.Vector3(0, 30, 30);
    south1_pos = new BABYLON.Vector3(0, 30, -30);
    north1_pos = new BABYLON.Vector3(0, 30, -80);
    var rad = 10;
    var speed = 0.01;
    var shape = "none";
    var axis = new BABYLON.Vector3(1,0,0);
    var isMoved = false;
    var isField = true;

    var createScene = function () {
        
        var scene = new BABYLON.Scene(engine);
        
        var camera = new BABYLON.ArcRotateCamera("Camera", cam_alpha, cam_beta, cam_rad, cam_tar, scene);
        //camera.setPosition(new BABYLON.Vector3(75, 20, 5));
        camera.setPosition(cam_pos);

        camera.lowerBetaLimit = 0.1;
        camera.upperBetaLimit = (Math.PI / 2) * 0.99;
        camera.lowerRadiusLimit = 300;
        
        //camera.attachControl(canvas, false);
        scene.clearColor = new BABYLON.Color3(0.5, 0.3, 0.2);
        
        // Light
        var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
        var light1 = new BABYLON.PointLight("omni2", new BABYLON.Vector3(250, 0, 250), scene);
        var light2 = new BABYLON.PointLight("omni3", new BABYLON.Vector3(250, 0, -250), scene);
        var light3 = new BABYLON.PointLight("omni4", new BABYLON.Vector3(-250, 0, -250), scene);
        var light4 = new BABYLON.PointLight("omni5", new BABYLON.Vector3(-250, 0, 250), scene);
        
        // Ground
        light.intensity = 0.7;
        light3.intensity = 0.7;
        light4.intensity = 0.7;
        var ground = BABYLON.Mesh.CreateGround("ground", 700, 700, 0, scene, false);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.specularColor = BABYLON.Color3.Black();
        ground.material = groundMaterial;
    
        // Meshes on the plane
        var south_s = BABYLON.Mesh.CreateSphere('south', 32, 10, scene); 
        south_s.position = south_pos;
        var south_mat = new BABYLON.StandardMaterial("south_s", scene);
        south_mat.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s.material = south_mat;
        
        var north_s = BABYLON.Mesh.CreateSphere('north', 32, 10, scene);
        north_s.position = north_pos;
        var north_mat = new BABYLON.StandardMaterial("north_s", scene);
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s.material = north_mat;

        //south_s.parent = north_s;
        
        //Meshes to be hidden and later
        var south_s1 = BABYLON.Mesh.CreateSphere('south1', 32, 10, scene); 
        south_s1.position = south1_pos;
        var south_mat1 = new BABYLON.StandardMaterial("south_s1", scene);
        south_mat1.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s1.material = south_mat1;
        south_s1.isVisible = true;

        var north_s1 = BABYLON.Mesh.CreateSphere('north1', 32, 10, scene);
        north_s1.position = north1_pos;
        var north_mat1 = new BABYLON.StandardMaterial("north_s", scene);
        north_mat1.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s1.material = north_mat;
        north_s1.isVisible = true;
        //south_s1.parent = north_s1;

        // Events Controls
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
            if(currentMesh == north_s || currentMesh == south_s || currentMesh == north_s1 || currentMesh == south_s1){
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

        scene.registerBeforeRender(function(){
            //Setting previous locations
            
            //console.log("Position of south_s: ", south_s.position);
            shape_d.rotate(axis, speed.value);

            if(isMoved && isField){
                //console.log("Yes something has been moved!");
                isMoved = false;
                draw_field();
            }
            if(!isField){
                undraw_field();
            }
        });
        

        var shape_d = BABYLON.MeshBuilder.CreatePolygon("shape", {shape: init(rad, "circle"), depth:1, updatable:true}, scene);
        shape_d.position = new BABYLON.Vector3(0, north_s.position.y, 0);
        var mt = new BABYLON.StandardMaterial("line_mat", scene);
        mt.diffuseColor = new BABYLON.Color3(0.5, 0, 0);
        shape_d.material = mt;
        shape_d.isVisible = true;
        shape_d.alphaIndex = 0.6;
        
        var poly_points = [];
        function init(rad, shape){
            poly_points = [];
            if(shape == "circle"){
                for (theta=0; theta<2*Math.PI; theta=theta+0.03){
                    poly_points.push(new BABYLON.Vector3((0 + rad*Math.cos(theta)), north_s.y, (0 + rad*Math.sin(theta))));
                }
            }
            return poly_points;
        }

        shape_d.isVisible =false;

        function draw(rad, shape){
            poly_points = [];
            if(shape == "circle"){
                for (theta=0; theta<2*Math.PI; theta=theta+0.03){
                    poly_points.push(new BABYLON.Vector3((0 + rad*Math.cos(theta)), north_s.y, (0 + rad*Math.sin(theta))));
                }
            }
            else if(shape == "square"){
                poly_points.push(new BABYLON.Vector3(-rad/2, north_s.position.y, rad/2));
                poly_points.push(new BABYLON.Vector3(rad/2, north_s.position.y, rad/2));
                poly_points.push(new BABYLON.Vector3(rad/2, north_s.position.y, -rad/2));
                poly_points.push(new BABYLON.Vector3(-rad/2, north_s.position.y, -rad/2));
                poly_points.push(new BABYLON.Vector3(-rad/2, north_s.position.y, rad/2));
            }
            //shape_d = BABYLON.MeshBuilder.CreatePolygon("shape", {shape: poly_points, instance: shape_d});
            shape_d = BABYLON.MeshBuilder.CreatePolygon("shape", {shape: poly_points, depth:1, updatable:true}, scene);
            shape_d.position = new BABYLON.Vector3(0, north_s.position.y, 0);
            var mt = new BABYLON.StandardMaterial("line_mat", scene);
            mt.diffuseColor = new BABYLON.Color3(0.5, 0, 0);
            shape_d.material = mt;
            shape_d.isVisible = true;
            shape_d.alphaIndex = 0.6;
            //return poly_points;
        }

        //Magnetic field drawing:
        x_min = -200;
        x_max = 200;
        y_min = 0;
        y_max = 80;
        z_min = -200;
        z_max = 200;
        no_of_steps = 800;
        dt = 0.35; //time step

        function mag_f(m, pole_pos, point_pos){
            dist_cube = Math.pow(BABYLON.Vector3.Distance(pole_pos, point_pos), 3);
            var x_comp = m * (point_pos.x - pole_pos.x) / (dist_cube * 2 * Math.PI);
            var y_comp = m * (point_pos.y - pole_pos.y) / (dist_cube * 2 * Math.PI);
            var z_comp = m * (point_pos.z - pole_pos.z) / (dist_cube * 2 * Math.PI);
            var field =  new BABYLON.Vector3(x_comp, y_comp, z_comp);
            return field;
        }
        
        //var mag_field_glob = [];
        function all_field(point_pos){
            var mag_field;
            var m_north = 1;
            var m_south = -1;
            var mag_field_n = mag_f(m_north, north_s.position, point_pos);
            var mag_field_s = mag_f(m_south, south_s.position, point_pos);
            if(north_s1.isVisible == true){
                mag_field_n1 = mag_f(m_north, north_s1.position, point_pos);
                mag_field_s1 = mag_f(m_south, south_s1.position, point_pos);
            }
            else{
                mag_field_n1 = new BABYLON.Vector3(0,0,0);
                mag_field_s1 =  new BABYLON.Vector3(0,0,0);
            }
            mag_field = mag_field_n.add(mag_field_s).add(mag_field_n1).add(mag_field_s1);

            if(BABYLON.Vector3.Dot(mag_field, mag_field)!==0){
                mag_field = mag_field.normalize();
            }
            //mag_field = mag_field.multiplyByFloats(5,5,5);
            //mag_field_glob.push(mag_field);
            return mag_field;
        }

        function undraw_field(){
            for(i=0; i<ld.length; i++){
                ld[i].dispose();
            }
            ld.length = 0;
        }
        
        lines = [];
        y_pos = 30;
        traj = [];
        ld = [];

        function draw_field(){
            var spacing = 25;
            var l = gen_starting_point(x_max, x_min, z_max, z_min, north_s.position.y, spacing);
            var traj_loc = [];
            var currVect;
            lines.length = 0;
            undraw_field();
            //for(y_pos = 0; y_pos < 80; y_pos+=30){
                for(i = 0; i<l[0].length; i++){
                    currVect = new BABYLON.Vector3(l[0][i], y_pos, l[1][i]);
                    //currVect = new BABYLON.Vector3(north_s.position.x + 10*Math.cos(Math.PI/4), y_pos, north_s.position.z + 10*Math.cos(Math.PI/4));
                    //console.log(currVect);
                    //if(y_pos == north_s.position.y){
                        traj_loc = find_path2D(currVect);    
                    //}
                    //else 
                    //traj_loc = find_path3D(currVect);
                    //console.log(traj_loc);
                    lines.push(traj_loc);
                // traj_loc.length = 0;
                //}   
            }
            for(i = 0; i<lines.length; i++){
                ld.push(BABYLON.MeshBuilder.CreateLines("lines", {points:lines[i], updatable:true}, scene));
                ld[i].isPickable = false;
            }   
        }
        //2D function Yo bitch
        function find_path2D(currVect){
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

        //Advanced textures
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

        //Stack Panel
        var panel = new BABYLON.GUI.StackPanel();
        panel.width = "220px";
        panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.right = "10px";  
        panel.top = "10px";
        advancedTexture.addControl(panel);
        //Slider for radius of the coil

    //     var radius = new BABYLON.GUI.Slider();
    //     radius.minimum = 10;
    //     radius.maximum = 40;
    //     radius.value = 10;
    //     radius.height = "20px";
    //     radius.width = "200px";
    //     radius.color = "green";
    //     radius.background = "grey";
        
    //     radius.onValueChangedObservable.add(function(value){
    //         header.text = "Radius: " + value.toFixed(2) + " units";
    //         rad = value.toFixed(2);
    //         if(shape!=="none"){
    //             shape_d.dispose();
    //             draw(rad, shape);
    //             shape_d.isVisible = true;
    //         }
    //     });

    //     panel.addControl(radius);

    //     //Text for radius slider
    //     var header = new BABYLON.GUI.TextBlock();
    //     header.text = "Area of shape";
    //     header.height = "30px";
    //     header.color = "white";
    //     panel.addControl(header); 

    //     //Text Block for the radio buttons
    //     var textblock = new BABYLON.GUI.TextBlock();
    //     textblock.height = "50px";
    //     textblock.color = "white";
    //     textblock.text = "Select shape";
    //     panel.addControl(textblock); 
       
    // //Adding radio buttons
    // var addRadio = function(text, parent, textblock, group) {

    //     var button = new BABYLON.GUI.RadioButton();
    //     button.width = "20px";
    //     button.height = "20px";
    //     button.color = "white";
    //     button.background = "green";  
    //     button.group = group;   

    //     button.onIsCheckedChangedObservable.add(function(state) {
    //         if (state) {
    //             textblock.text = "You selected " + text;
    //         }
    //     });

    //     var header = BABYLON.GUI.Control.AddHeader(button, text, "100px",{ isHorizontal: true, controlFirst: false, });
    //     header.color = "white";
    //     header.height = "30px";

    //     parent.addControl(header);
    //     return button;    
    // };
    
    
    // circle =  addRadio("Circle", panel, textblock, "object");
    // square =  addRadio("Square", panel, textblock, "object");
    // none = addRadio("None", panel, textblock, "object");

    // none.isChecked = true;
    // none.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         shape = "none";
    //         shape_d.isVisible = false;
    //     }
    // });

    // square.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         shape_d.dispose();
    //         shape = "square";
    //         draw(rad, shape);
    //         shape_d.isVisible = true;
    //     }
    // });

    // circle.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         shape_d.dispose();
    //         shape = "circle";
    //         draw(rad, shape);
    //         shape_d.isVisible = true;
    //     }
    // });

    //Panel1
    var panel1 = new BABYLON.GUI.StackPanel();
    panel1.width = "220px";
    panel1.left = "3px";  
    panel1.top = "40px";
    panel.addControl(panel1);
    
    //Speed of rotation control
    // var speed = new BABYLON.GUI.Slider();
    // speed.minimum = 0.01;
    // speed.maximum = 2;
    // speed.value = 0.01;
    // speed.height = "20px";
    // speed.width = "200px";
    // speed.color = "green";
    // speed.background = "grey";

    // speed.onValueChangedObservable.add(function(value){
    //     speeder.text = "Speed: " + value.toFixed(2) + " radians";
    //     speed.value = value.toFixed(2);
    // });
    // panel1.addControl(speed);

    // //Text for speed slider
    // var speeder = new BABYLON.GUI.TextBlock();
    // speeder.text = "Speed of rotation";
    // speeder.height = "30px";
    // speeder.color = "white";
    // panel1.addControl(speeder);

    // //Radio buttons to chose the axis of rotation
    // var textblock1 = new BABYLON.GUI.TextBlock();
    // textblock1.height = "50px";
    // textblock1.color = "white";
    // textblock1.text = "Select axis";
    // panel1.addControl(textblock1); 
       
    // x_axis = addRadio("X", panel1, textblock1, "axis");
    // y_axis = addRadio("Y", panel1, textblock1, "axis");
    // z_axis = addRadio("Z", panel1, textblock1, "axis");
    
    // x_axis.isChecked = true;
    // //var rotation_axis;
    // x_axis.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         axis = new BABYLON.Vector3(1,0,0);
    //     }
    // });

    // y_axis.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         //console.log("Y is selected!");
    //         axis = new BABYLON.Vector3(0,1,0);
    //     }
    // });

    // z_axis.onIsCheckedChangedObservable.add(function(state){
    //     if(state){
    //         //console.log("Z is selected!");
    //         axis = new BABYLON.Vector3(0,0,1);
    //     }
    // });

    var toggle_mag = BABYLON.GUI.Button.CreateSimpleButton("toggle", "Toggle Poles");//, "textures/grass.png");
    toggle_mag.width = 0.5;
    toggle_mag.height = "40px";
    toggle_mag.color = "white";
    toggle_mag.background = "green";
    toggle_mag.top = "20px";
    toggle_mag.cornerRadius = 20;
    toggle_mag.thickness = 2;
    toggle_mag.children[0].fontSize = 12;

    toggle_mag.onPointerClickObservable.add(function(){
        north_s1.isVisible = !north_s1.isVisible;
        south_s1.isVisible = !south_s1.isVisible;
        undraw_field();
        draw_field();
    });
    
    panel1.addControl(toggle_mag);
    
    var reset = BABYLON.GUI.Button.CreateSimpleButton("reset", "Reset");//, "textures/grass.png");
    reset.width = 0.5;
    reset.height = "40px";
    reset.color = "white";
    reset.background = "green";
    reset.top = "40px";
    reset.cornerRadius = 20;
    reset.thickness = 2;
    reset.children[0].fontSize = 12;
    
    reset.onPointerClickObservable.add(function(){
        reset_func();
        //console.log("In reset func:");
    });
    
    panel1.addControl(reset);

    function reset_func(){

        document.location.reload(true);
        // south_pos = new BABYLON.Vector3(0, 30, 80);
        // north_pos = new BABYLON.Vector3(0, 30, 30);
        // south1_pos = new BABYLON.Vector3(0, 30, -30);
        // north1_pos = new BABYLON.Vector3(0, 30, -80);
        
        // south_s.position = south_pos;
        // north_s.position = north_pos;
        // north_s1.position = north1_pos;
        // south_s1.position = south1_pos;
        
        // north_s1.isVisible = true;
        // south_s1.isVisible = true;
        
        // camera.setTarget(cam_tar);
        // camera.setPosition(cam_pos);

        // radius.value = radius.minimum;
        // x_axis.isChecked = true;
        // none.isChecked = true;
        // speed.value = speed.minimum;
        // //console.log(north_pos);   
        // undraw_field();
        // draw_field();
    }

    var field_toggle = BABYLON.GUI.Button.CreateSimpleButton("field_toggle", "Field Toggle");//, "textures/grass.png");
    field_toggle.width = 0.5;
    field_toggle.height = "40px";
    field_toggle.color = "white";
    field_toggle.background = "green";
    field_toggle.top = "40px";
    field_toggle.cornerRadius = 20;
    field_toggle.thickness = 2;
    field_toggle.children[0].fontSize = 12;
    
    field_toggle.onPointerClickObservable.add(function(){
        isField = !isField; 
        if(isField == true){
            draw_field();
        }
        //console.log("In reset func:");
    });
    
    panel1.addControl(field_toggle);

    //Reading current locations
        
       showWorldAxis(5, scene);
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