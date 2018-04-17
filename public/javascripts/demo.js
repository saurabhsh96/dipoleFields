//import * as BABYLON from 'babylonjs';
//import { Engine, Scene } from 'babylonjs';
//var BABYLON = require('babylonjs');
window.addEventListener('DOMContentLoaded', function(){
    // get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');

    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);

    // createScene function that creates and return the scene
    var createScene = function(){
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
        //var camera1 = new BABYLON.ArcRotateCamera('camera2', Math.PI, Math.PI/2, 0, BABYLON.Vector3.Zero(), scene);
        // target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        //camera1.setTarget(BABYLON.Vector3.Zero());
        // attach the camera to the canvas
        camera.attachControl(canvas, false);
        //camera1.attachControl(canvas, true);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

        // create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 
        var north_s = BABYLON.Mesh.CreateSphere('north', 16, 2, scene);

        // move the sphere upward 1/2 of its height
        north_s.position.x = -2;

        var south_s = BABYLON.Mesh.CreateSphere('south', 16, 2, scene);

        south_s.position.x = 2;
        // create a built-in "ground" shape;
        //var ground = BABYLON.Mesh.CreateGround('ground1', 6, 1, 2, scene);
        // return the created scene"
        var south_mat = new BABYLON.StandardMaterial("south_mat", scene);
        var north_mat = new BABYLON.StandardMaterial("north_mat", scene);
        
        south_mat.diffuseTexture = new BABYLON.Texture("/static/images/south_pole.png", scene);
        north_mat.diffuseTexture = new BABYLON.Texture("/static/images/north_pole.png", scene);

        south_s.material = south_mat;
        north_s.material = north_mat;

        //Test rotation:
        //var axis = new BABYLON.Vector3(1, 1, 1);
        //var angle = Math.PI / 8;
        //var quaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
        //south_s.rotationQuaternion = quaternion;
        return scene;
    }

    // call the createScene function
    var scene = createScene();

    //Field by one pole 
    
    //var field_pole = function(charge, pole_pos, pt_pos_vec){
    //    var dist_cube = Math.pow(BABYLON.Distance(pt_pos_vec, pole_pos), 3);
    //    var x_comp = charge * (pt_pos_vec.x - pole_pos.x) / (dist_cube * 2 * Math.PI);
    //    var y_comp = charge * (pt_pos_vec.y - pole_pos.y) / (dist_cube * 2 * Math.PI);
    //    var z_comp = charge * (pt_pos_vec.z - pole_pos.z) / (dist_cube * 2 * Math.PI);
    //    var field_p = BABYLON.Vector3(x_comp, y_comp, z_comp);
    //    return field_p       
    //}"""

    var all_field = function(pt_pos_vec){
        var mag_field = BABYLON.Vector3();
        var north_pos = scene.getElementByName("north").position;
        var south_pos = scene.getElementByName("south").position;
        console.log(north_pos, south_pos);
        return 0;
    }
    // run the render loop
    engine.runRenderLoop(function(){
        console.log("In loop");
        var all = all_field(BABYLON.Vector3(0,0,0));
        scene.render();
        //
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });
});