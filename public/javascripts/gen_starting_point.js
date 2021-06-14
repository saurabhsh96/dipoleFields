/*
    1. This algorithm generates the starting points for drawing the vector fields in 2D
    2. Starts with a point on the corner and spirals inwards inwards.
    3. Inefficient but fast ==> StreamPlot replica from Matplotlib
    4. In our function, customization is, instead of grids, x_max/x_min and z_max/z_min is used, the field is drawn in 2D X, Z plane
    5. y_pos is provided to make sure in future the function can give results in 3D using level plots. 
*/

function gen_starting_point(x_max, x_min, z_max, z_min, y_pos, spacing){
    var starting_points = [];
    x_first = x_min;
    z_first = z_min; 
    y = y_pos;
    x_last = x_max - 1;
    z_last = z_max - 1;
    x = []; z =[];
    i = 0;
    direction = "right";
    x_parts = (x_max - x_min)/spacing;
    z_parts = (z_max - z_min)/spacing;
    x_moving = 0;
    z_moving = 0;

    for (i=0; i<x_parts*z_parts; i++){
        x.push(x_moving);
        z.push(z_moving);
        if(direction == "right"){
            x_moving += spacing;
            if (x_moving > x_last){
                x_last -= spacing;
                direction = "up";
            }
        }

        else if(direction == "up"){
            z_moving += spacing;
            if (z_moving > z_last){
                z_last -= spacing;
                direction = "left";
            }
        }

        else if(direction == "left"){
            x_moving -= spacing;
            if (x_moving <= x_first){
                x_first += spacing;
                direction = "down";
            }
        }

        else if(direction == "down"){
            z_moving -= spacing;
            if (z_moving <= z_first){
                z_first += spacing;
                direction = "right";
            }
        }

    }

    return [x, z];
}