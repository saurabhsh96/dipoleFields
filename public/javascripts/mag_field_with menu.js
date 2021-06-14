window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');
    var draggableObj = [], holders = [];
    var engine = new BABYLON.Engine(canvas, true);

    cam_alpha = 0;
    cam_beta = 0;
    cam_rad = 75;
    cam_tar = new BABYLON.Vector3(0,0,0);
    cam_pos = new BABYLON.Vector3(75, 20, 5);
    south_pos = new BABYLON.Vector3(0, 0, 50);
    north_pos = new BABYLON.Vector3(0, 30, 30);
    south1_pos = new BABYLON.Vector3(0, 0, 50);
    north1_pos = new BABYLON.Vector3(0, 30, -80);
    
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
        
        //camera.attachControl(canavas, false);
        
        // Light
        var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
        var light1 = new BABYLON.PointLight("omni2", new BABYLON.Vector3(250, 0, 250), scene);
        var light2 = new BABYLON.PointLight("omni3", new BABYLON.Vector3(250, 0, -250), scene);
        var light3 = new BABYLON.PointLight("omni4", new BABYLON.Vector3(-250, 0, -250), scene);
        var light4 = new BABYLON.PointLight("omni5", new BABYLON.Vector3(-250, 0, 250), scene);
        //var light5 = new BABYLON.PointLight("omni6", new BABYLON.Vector3(0,2,350), scene);

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
        //south_s.position.y = 0;
        //south_s.position.x = 0;
        //south_s.position.z = 50;
        var south_mat = new BABYLON.StandardMaterial("south_s", scene);
        south_mat.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s.material = south_mat;
        
        var north_s = BABYLON.Mesh.CreateSphere('north', 32, 10, scene);
        north_s.position = north_pos;
        //north_s.position.y = 30;
        //north_s.position.x = 0;
        //north_s.position.z = 30;
        var north_mat = new BABYLON.StandardMaterial("north_s", scene);
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s.material = north_mat;

        south_s.parent = north_s;
        
        //Meshes to be hidden and later
        var south_s1 = BABYLON.Mesh.CreateSphere('south1', 32, 10, scene); 
        south_s1.position = south1_pos;
        //south_s1.position.y = 0;
        //south_s1.position.x = 0;
        //south_s1.position.z = 50;
        var south_mat1 = new BABYLON.StandardMaterial("south_s1", scene);
        south_mat1.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        south_s1.material = south_mat1;
        south_s1.isVisible = true;

        var north_s1 = BABYLON.Mesh.CreateSphere('north1', 32, 10, scene);
        north_s1.position = north1_pos;
        //north_s1.position.y = 30;
        //north_s1.position.x = 0;
        //north_s1.position.z = -80;
        var north_mat1 = new BABYLON.StandardMaterial("north_s", scene);
        north_mat1.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);
        north_s1.material = north_mat;
        north_s1.isVisible = true;
        south_s1.parent = north_s1;

        //Wireframe mesh
        //var mag2 = BABYLON.M
        //var mag1 = BABYLON.Mesh.CreateBox
        //Polygon Mesh
        //var vect = draw_sqare(50)
        
        //IMPORTANT PART
        //var line2 = BABYLON.MeshBuilder.CreatePolygon("square", {shape: draw_sqare(40), depth:1}, scene);
        vect = draw_sqare(40);
       // console.log(vect);
        var line1 = BABYLON.MeshBuilder.CreatePolygon("square", {shape: draw_sqare(40), depth:1}, scene);
        line1.position = new BABYLON.Vector3(0, north_s.position.y, 0);
        var mt = new BABYLON.StandardMaterial("line_mat", scene);
        mt.diffuseColor = new BABYLON.Color3(0.5, 0, 0);
        line1.material = mt;
        line1.isVisible = true;
        line1.alphaIndex = 0.6;

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

        var my_pt = [0,1];
        var lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene);

        /*for(i=-250; i<250; i=i+20){
            for(j=-250; j<250; j=j+20){
                for(k=-10; k<250; k=k+20){
                    my_pt.length = 0; 
                    var point_pos = new BABYLON.Vector3(i, j, k);
                    var mag_field = all_field(point_pos);
                    my_pt.push(point_pos);
                    var new_pt = mag_field.add(point_pos); 
                    my_pt.push(new_pt);
                    console.log(mag_field);
                    var lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene);
                    //lines = BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, instance:lines});
                   // console.log(my_pt);                
                }
            }
        }*/
        scene.registerBeforeRender(function(){
            //for(theta=0; theta<2*Math.PI; theta=theta+0.01){
            line1.rotation.x+=0.005;
        });

       /* for(i=north_s.position.x; i<south_s.position.x; i+=2){
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

        function draw(rad, shape){
            points = [];
            if(shape == "circle"){
                for (theta=0; theta<2*Math.PI; theta=theta+0.03){
                 points.push(new BABYLON.Vector3((0 + rad*Math.cos(theta)), north_s.y, (0 + rad*Math.sin(theta))));
                }
            }
            return points;
        }

        //var rad = 50.0;
        function draw_sqare(rad){
            var vect = [];
                vect.push(new BABYLON.Vector3(-rad/2, north_s.position.y, rad/2));
                vect.push(new BABYLON.Vector3(rad/2, north_s.position.y, rad/2));
                vect.push(new BABYLON.Vector3(rad/2, north_s.position.y, -rad/2));
                vect.push(new BABYLON.Vector3(-rad/2, north_s.position.y, -rad/2));
                vect.push(new BABYLON.Vector3(-rad/2, north_s.position.y, rad/2));
            //console.log(vect);
            return vect;    
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
            mag_field = mag_field.multiplyByFloats(2,10,10);
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

        var radius = new BABYLON.GUI.Slider();
        radius.minimum = 10;
        radius.maximum = 40;
        radius.value = 10;
        radius.height = "20px";
        radius.width = "200px";
        radius.color = "green";
        radius.background = "grey";
        //radius.right = "10px";  
        //radius.top = "10px"; 
        //radius.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        //radius.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        //radius.onValueChangedObservable.add(function (value) {
        //    sphere.scaling = unitVec.scale(value);
        //});
        panel.addControl(radius);

        //Text for radius slider
        var header = new BABYLON.GUI.TextBlock();
        header.text = "Area of shape";
        header.height = "30px";
        header.color = "white";
        panel.addControl(header); 
        //advancedTexture.addControl(rad_text);    
       // advancedTexture.add(rad_text);

       //Text Block for the radio buttons
        var textblock = new BABYLON.GUI.TextBlock();
        textblock.height = "50px";
        textblock.color = "white";
        textblock.text = "Select shape";
        panel.addControl(textblock); 
       //Adding radio buttons

    var addRadio = function(text, parent, textblock, group) {

        var button = new BABYLON.GUI.RadioButton();
        button.width = "20px";
        button.height = "20px";
        button.color = "white";
        button.background = "green";  
        button.group = group;   

        button.onIsCheckedChangedObservable.add(function(state) {
            if (state) {
                textblock.text = "You selected " + text;
            }
        }); 

        var header = BABYLON.GUI.Control.AddHeader(button, text, "100px",{ isHorizontal: true, controlFirst: false, });
        header.color = "white";
        header.height = "30px";

        parent.addControl(header);    
    };
    
    {
     addRadio("Circle", panel, textblock, "object");
     addRadio("Square", panel, textblock, "object");
     addRadio("None", panel, textblock, "object");
    }

    var panel1 = new BABYLON.GUI.StackPanel();
    panel1.width = "220px";
    //panel1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    //panel1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    panel1.left = "3px";  
    panel1.top = "40px";
    panel.addControl(panel1);
    //panel.addControl(panel1);

        //Speed of rotation control
        var speed = new BABYLON.GUI.Slider();
        speed.minimum = 10;
        speed.maximum = 40;
        speed.value = 10;
        speed.height = "20px";
        speed.width = "200px";
        speed.color = "green";
        speed.background = "grey";
        //speed.right = "10px";  
        //speed.top = "10px"; 
        //speed.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        //speed.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        //speed.onValueChangedObservable.add(function (value) {
        //    sphere.scaling = unitVec.scale(value);
        //});
        panel1.addControl(speed);
    
        //Text for speed slider
        var speeder = new BABYLON.GUI.TextBlock();
        speeder.text = "Speed of rotation";
        speeder.height = "30px";
        speeder.color = "white";
        panel1.addControl(speeder);

    //Radio buttons to chose the axis of rotation
    var textblock1 = new BABYLON.GUI.TextBlock();
    textblock1.height = "50px";
    textblock1.color = "white";
    textblock1.text = "Select axis";
    panel1.addControl(textblock1); 
    
    {
     addRadio("X", panel1, textblock1, "axis");
     addRadio("Y", panel1, textblock1, "axis");
     addRadio("Z", panel1, textblock1, "axis");
    }

    var toggle_mag = BABYLON.GUI.Button.CreateSimpleButton("toggle", "Toggle Magnet");//, "textures/grass.png");
    toggle_mag.width = 0.5;
    toggle_mag.height = "40px";
    toggle_mag.color = "white";
    toggle_mag.background = "green";
    toggle_mag.top = "20px";
    toggle_mag.cornerRadius = 20;
    toggle_mag.thickness = 2;
    toggle_mag.children[0].fontSize = 12;

    toggle_mag.onPointerClickObservable.add(function(){
        if(north_s1.isVisible == true && south_s1.isVisible == true){
            north_s1.isVisible = false;
            south_s1.isVisible = false;
        }
        else{
            north_s1.isVisible = true;
            south_s1.isVisible = true;
        }
    });
    
    panel1.addControl(toggle_mag);
    //toggle_mag.onIs
    //advancedTexture.addControl(button);
    
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

        south_pos = new BABYLON.Vector3(0, 0, 50);
        north_pos = new BABYLON.Vector3(0, 30, 30);
        south1_pos = new BABYLON.Vector3(0, 0, 50);
        north1_pos = new BABYLON.Vector3(0, 30, -80);
    
        south_s.position = south_pos;
        north_s.position = north_pos;
        north_s1.position = north1_pos;
        south_s1.position = south1_pos;
        
        north_s1.isVisible = true;
        south_s1.isVisible = true;
        
        camera.setTarget(cam_tar);
        camera.setPosition(cam_pos);
        //console.log(north_pos);   
    }

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