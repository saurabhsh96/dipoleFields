var createScene = function() {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera(
    "camera",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.8;

  var north_pole = BABYLON.MeshBuilder.CreateSphere(
    "North Pole",
    { segments: 32, diameter: 0.5 },
    scene
  );
  north_pole.position.x = -1;

  var redTexture = new BABYLON.StandardMaterial("Red", scene);
  redTexture.diffuseColor = new BABYLON.Color3(1, 0, 0); //Red
  north_pole.material = redTexture;

  var south_pole = BABYLON.MeshBuilder.CreateSphere(
    "South Pole",
    { segments: 32, diameter: 0.5 },
    scene
  );
  south_pole.position.x = 1;

  var blueTexture = new BABYLON.StandardMaterial("Blue", scene);
  blueTexture.diffuseColor = new BABYLON.Color3(0, 0, 1);
  south_pole.material = blueTexture;

  var magnet_center = new BABYLON.Vector3();
  magnet_center.x = (north_pole.position.x + south_pole.position.x) / 2;
  magnet_center.y = (north_pole.position.y + south_pole.position.y) / 2;
  magnet_center.z = (north_pole.position.z + south_pole.position.z) / 2;
  //console.log("Assertion: magnet_center is (0,0,0) ", magnet_center);

  // Adding grid to the scene
  var x_start = -5;
  var x_end = 5;
  var x_space = 0.25;
  var y_start = -4;
  var y_end = 4;
  var y_space = 0.25;

  var x_line = linspace(x_start, x_end, x_space);
  var y_line = linspace(y_start, y_end, y_space);
  console.log("Number of columns and rows ", x_line.length, y_line.length);

  function drawGrid(x_line, y_line) {
    for (var j = 0; j < y_line.length; j++) {
      var y = y_line[j];
      var x_points = [];
      for (var i = 0; i < x_line.length; i++) {
        x_points.push(new BABYLON.Vector3(x_line[i], y, 0));
      }
      BABYLON.MeshBuilder.CreateLines(
        "Joining Xs",
        { points: x_points },
        scene
      );
    }

    for (var i = 0; i < x_line.length; i++) {
      var x = x_line[i];
      var y_points = [];
      for (var j = 0; j < y_line.length; j++) {
        y_points.push(new BABYLON.Vector3(x, y_line[j], 0));
      }
      BABYLON.MeshBuilder.CreateLines(
        "Joining Ys",
        { points: y_points },
        scene
      );
    }
  }

  console.log("Drawing grid...");
  drawGrid(x_line, y_line);

  // test transposeArray function
  //console.log("Testing transposeArray function ", transposeArray([[1,2],[3,4]]));

  var grid = meshgrid(x_line, y_line);
  var grid_X = grid[0];
  var grid_Y = grid[1];
  console.log(
    "Assertion test: check if grid_X and grid_Y have same number of rows ",
    grid_X.length,
    grid_Y.length
  );
  console.log(
    "Assertion test: check if grid_X and grid_Y have same number of columns ",
    grid_X[0].length,
    grid_Y[0].length
  );

  var charge = 1;
  var charge_pos = magnet_center;
  var vectorField = dipoleField(charge, charge_pos, grid_X, grid_Y);
  vectorField_X = vectorField[0];
  vectorField_Y = vectorField[1];
  console.log(
    "Assertion: check if vectorField_X and vectorField_Y have same number of rows ",
    vectorField_X.length,
    vectorField_Y.length
  );
  console.log(
    "Assertion: check if vectorField_X and vectorField_Y have same number of columns ",
    vectorField_X[0].length,
    vectorField_Y[0].length
  );

  console.log(
    "Assertion: check if vector field magnitude is not NaN or zero ",
    vectorField_X[0][0],
    vectorField_Y[0][0]
  );
  // draw vector field lines as simple dashes
  for (var i = 0; i < vectorField_X.length; i++) {
    for (var j = 0; j < vectorField_Y.length; j++) {
      var vector_start = new BABYLON.Vector3(grid_X[i][j], grid_Y[i][j], 0);
      var vector_mag = Math.hypot(vectorField_X[i][j], vectorField_Y[i][j]);
      var vector_end = new BABYLON.Vector3(
        grid_X[i][j] + vectorField_X[i][j] / vector_mag,
        grid_Y[i][j] + vectorField_Y[i][j] / vector_mag,
        0
      );
      var vector_line = [vector_start, vector_end];
      console.log("Vector line", vector_start, vector_end);
      field_lines = BABYLON.MeshBuilder.CreateLines(
        "dashed field lines",
        { points: vector_line, updatable: true },
        scene
      );
      field_lines.color = new BABYLON.Color3(0, 0, 0);
    }
  }

  var testCurveAt = new magnet_center.add(5, 5, 0);
  var curvePoints = vectorFieldLine(testCurveAt, 0.25);
  console.log("Curve points starting from magnet_center + (5, 5, 0) are ", curvePoints);

  return scene;
};

/* Utility functions */

// repeat a value: returns array
function repeatValue(value, n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(value);
  }
  return array;
}

// repeat an array n times: returns a 2D array
function repeatArray(array, n) {
  if (n <= 0) return [];
  // Create an array of size "n" with undefined values
  var arrays = Array.apply(null, new Array(n));
  // Replace each "undefined" with our array, resulting in an array of n copies of our array
  arrays = arrays.map(function() {
    return array;
  });
  // Flatten our array of arrays
  //return [].concat.apply([], arrays);
  return arrays;
}

// in-place transpose of an array
function transposeArray(array) {
  if (!array) return [];
  var rows = array.length;
  if (rows == 0) return array;
  var cols = array[0].length;

  for (var i = 0; i < rows; i++) {
    for (var j = i + 1; j < cols; j++) {
      var temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }
  return array;
}

/* Grid helper functions */
function linspace(start, end, space) {
  var array = [];
  for (var i = start; i <= end; i += space) {
    array.push(i);
  }
  return array;
}

function meshgrid(x_line, y_line) {
  var grid_X = repeatArray(x_line, y_line.length);
  /* WRONG
    var grid_Y = transposeArray(repeatArray(y_line, x_line.length));
    */
  var grid_Y = [];
  for (var j = 0; j < y_line.length; j++) {
    var value = y_line[j];
    var repeatY = repeatValue(value, x_line.length);
    grid_Y.push(repeatY);
  }
  return [grid_X, grid_Y];
}

/* Vector field helper functions */
function dipoleField(q, r, X, Y) {
  var field_X = [];
  var field_Y = [];
  for (var i = 0; i < X.length; i++) {
    var vectors_X = [];
    var vectors_Y = [];
    for (var j = 0; j < X[0].length; j++) {
      var euclidean_dist = Math.hypot(X[i][j] - r.x, Y[i][j] - r.y);
      var density = Math.pow(euclidean_dist, 3);
      console.log("Density is ", density);
      console.log("NaN test 1 ", X[i][j] - r.x);
      console.log("NaN test 2 ", q * (X[i][j] - r.x));
      console.log("NaN test 3 ", 2 * density * Math.PI);
      var vector_x = q * (X[i][j] - r.x) / (2 * density * Math.PI);
      console.log("Vectors X is ", vector_x);
      vectors_X.push(vector_x);
      var vector_y = q * (Y[i][j] - r.y) / (2 * density * Math.PI);
      console.log("Vectors Y is ", vector_y);
      vectors_Y.push(vector_y);
    }
    
    field_X.push(vectors_X);
    field_Y.push(vectors_Y);
  }
  return [field_X, field_Y];
};

function vectorFieldLine(point, scaleBy) {
  var curvePoints = [point];
  var pointVector;
  for(var i=0; i<20; i++) {
      pointVector = all_field(point);
      scaledPointVector = pointVector.multiplyByFloats(scaleBy, scaleBy, scaleBy);
      nextPoint = point.add(scaledPointVector);
      curvePoints.push(nextPoint);
      point = nextPoint;
  }
  return curvePoints;
}