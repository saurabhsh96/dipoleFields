//Magnetic field drawing:
        x_min = -200;
        x_max = 200;
        y_min = 0;
        y_max = 80;
        z_min = -200;
        z_max = 200;
        no_of_steps = 50;
        dt = 0.8; //time step
        no_of_lines = 20;


        init_point = north_s.position.add(new BABYLON.Vector3(10*Math.cos(Math.PI/4), 10*Math.cos(Math.PI/4), 10*Math.cos(Math.PI/4))); 
        console.log(init_point);

        var my_pt = [0,1];
        
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
            mag_field = mag_field.multiplyByFloats(100,100,100);
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
        for(i=0; i<ld.length; i++){
            ld[i].dispose();
        }
        ld.length = 0;
        //console.log(l[0].length);
        for(i = 0; i<l[0].length; i++){
            currVect = new BABYLON.Vector3(l[0][i], y_pos, l[1][i]);
            traj_loc = find_path(currVect);
            lines.push(traj_loc);
           // traj_loc.length = 0;
        }
        for(i =0; i<lines.length; i++){
            ld.push(BABYLON.MeshBuilder.CreateLines("lines", {points:lines[i], updatable:true}, scene));
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

    function find_path(currVect){
        var traj = [];
        var step_count = no_of_steps;
        while(1)
            if(step_count == 0 || currVect.x > x_max || currVect.x < x_min || currVect.z > z_max || currVect.z < z_min){
                break;
            }
            else{
                //console.log(currVect);
                next_vec = all_field(currVect);
                currVect = new BABYLON.Vector3((next_vec.x + dt*Math.cos(Math.atan(next_vec.z/next_vec.x))), y_pos, (next_vec.z + dt*Math.sin(Math.atan(next_vec.z/next_vec.x))));
                traj.push(currVect);
                step_count -= 1;
                //console.log(traj);
        }
        //console.log(next_vec, currVect);
        //console.log(traj);
        return traj;
    }