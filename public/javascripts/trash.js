//Calculating magnetic field and plotting it
        var no_of_lines = 50; //ns and n in the code; if needed add n as a separate variable
        var mag_field_glob;
        var ns = no_of_lines;
        var xarrow = new Array(no_of_lines);
        var yarrow = new Array(no_of_lines);
        var zarrow = new Array(no_of_lines);
        var xfield = new Array(no_of_lines);
        var yfield = new Array(no_of_lines);
        var zfield = new Array(no_of_lines);
        var t = 0;
        var t1 = 0;
        var dt = 0.25;
        var dt1 = 0.05;
        var t2 = 0;
        var dt2 = 0.1;
        var x = 0;
        var y = 0;
        var z = 0;
        var vz = 0;
        var dz = 1.0;
        var xp = new Array(no_of_lines); //Hasn't initialized as in the reference code
        var xp1 = new Array(no_of_lines);   
        var yp = new Array(no_of_lines); //Hasn't initialized as in the reference code
        var yp1 = new Array(no_of_lines);   
        var zp = new Array(no_of_lines); //Hasn't initialized as in the reference code
        var zp1 = new Array(no_of_lines);   
        var xps = 0.25/2;
        var yps = 0;
        var zps = 0.5;

        for (i = 0; i<ns; i++){
            xp[i] = 0.25*Math.cos(i*2*pi/ns);
            yp[i] = 0.25*Math.sin(i*2*pi/ns);
            zp[i] = dz/2;
        }

        for (i = 0; i<ns; i++){
            xp1[i] = 0.25/1.5*Math.cos(i*2*pi/ns);
            yp1[i] = 0.25/1.5*Math.sin(i*2*pi/ns);
            zp1[i] = dz/2;
        }

        xps = xp[0];
        yps = yp[0];
        zps = zp[0];


        //Arrow vector field
        function draw_field(){
            //lines.length = 0;

            for(i=0; i<lines.length; i++){
                lines[i].dispose();
            }
            lines.length = 0;
            //m = 0;
            //lines2.dispose();
            points_array.length = 0;
            for(i=-150; i<150; i+=10){
                for(j=0; j<60; j+=10){
                    for(k=-150; k<150; k+=10){
                        my_pt.length = 0; 
                        var point_pos = new BABYLON.Vector3(i, j, k);
                        var mag_field = all_field(point_pos);
                        my_pt.push(point_pos);
                        var new_pt = mag_field.add(point_pos); 
                        my_pt.push(new_pt);
                        points_array.push(point_pos, new_pt);
                        //console.log(mag_field);
                        lines.push(BABYLON.MeshBuilder.CreateLines("lines", {points:my_pt, updatable:true}, scene));
                        //lines[m].dispose();
                        //m = m + 1;
                    }          
                }
            }
            //console.log(points_array);
            //console.log(points_array);
            //BABYLON.MeshBuilder.CreateLineSystem()
            //lines2 = BABYLON.MeshBuilder.CreateLines("lines", {points:points_array, instance:lines1}, scene);
            //console.log(mag_field_glob);
        }