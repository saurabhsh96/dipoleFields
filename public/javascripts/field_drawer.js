        var magnetWidth = 2,
            magnetHeight = 0.5,
            magnetDepth = 0.5;
        var magnetBar = BABYLON.MeshBuilder.CreateBox("magnet", {
            width: magnetWidth, // x
            height: magnetHeight, // y
            depth: magnetDepth // z
        }, scene);

        var magnetBoundingBox = magnetBar.getBoundingInfo().boundingBox;
        console.log("Bounding info ", magnetBoundingBox);
        var magnetCenter = magnetBoundingBox.centerWorld;
        console.log("Assertion: magnet_center is (0,0,0) ", magnetCenter);

        var poleMargin = 0.1;
        var poleDistanceFromCenter = magnetWidth / 2 - poleMargin;
        var northPole = magnetCenter.add(new BABYLON.Vector3(-1 * poleDistanceFromCenter, 0, 0));
        var southPole = magnetCenter.add(new BABYLON.Vector3(1 * poleDistanceFromCenter, 0, 0));

        // draws path3d
        function showPath3D(path3d, size) {
            size = size || 0.5;
            var curve = path3d.getCurve();
            var tgts = path3d.getTangents();
            var norms = path3d.getNormals();
            var binorms = path3d.getBinormals();
            var vcTgt, vcNorm, vcBinorm;
            console.log("Drawing field lines...");
            var line = BABYLON.Mesh.CreateLines("curve", curve, scene);
            // for (var i = 0; i < curve.length; i++) {
            //  vcTgt = BABYLON.Mesh.CreateLines("tgt"+i, [curve[i], curve[i].add(tgts[i].scale(size))], scene);
            //	vcNorm = BABYLON.Mesh.CreateLines("norm"+i, [curve[i], curve[i].add(norms[i].scale(size))], scene);
            //	vcBinorm = BABYLON.Mesh.CreateLines("binorm"+i, [curve[i], curve[i].add(binorms[i].scale(size))], scene);
            //	vcTgt.color = BABYLON.Color3.Red();
            //	vcNorm.color = BABYLON.Color3.Green();
            //	vcBinorm.color = BABYLON.Color3.Blue();
            // }
        };

        var scaleBy = 0.2;
        var magnetConfig = {
            "northPolePos": northPole,
            "southPolePos": southPole,
            "magneticStrength": 100,
            "magnetBoundingBox": magnetBoundingBox
        };

        console.log("Magnet config is ", magnetConfig);

        seedPoints = [];

        function plotFieldCurve() {
            // ERROR : INFINITE LINE AT Y=0, since floating point calculations never actually make y 0 below
            for (var z = 2 * magnetDepth; z >= 2 * magnetDepth; z -= 0.1) {
                for (var y = magnetHeight / 2; y >= magnetHeight / 2; y -= 0.05) {
                    let pointX = northPole.subtract(new BABYLON.Vector3(poleMargin, 0, 0)).x;
                    let pointY = y;
                    let pointZ = z;
                    console.log("Drawing at ", pointX, pointY, pointZ);
                    var curvePoints = vectorFieldLine(magnetConfig, new BABYLON.Vector3(pointX,
                        pointY,
                        pointZ), scaleBy, zAxis = false);
                    console.log("Curve points starting from x are ", curvePoints);
                    var curvePath = new BABYLON.Path3D(curvePoints);
                    showPath3D(curvePath);
                }
            }
            console.log("DONE!!!");
        }
        plotFieldCurve();

        return scene;
    };

    var scene = createScene();
    // register a render loop to repeatedly render the scene on the canvas
    engine.runRenderLoop(function() {
        scene.render();
    });

    window.addEventListener('resize', function() {
        engine.resize();
    });
});

/* Utility functions */
function approxEqual(v1, v2, epsilon) {
    if (epsilon == null) {
        epsilon = 0.001;
    }
    return Math.abs(v1 - v2) < epsilon;
};

function poleVector(polePos, poleCharge, point) {
    // if (polePos.equals(point) === true) {
    //     throw "Division by zero: magnetic field is not defined at the pole position itself.";
    // }
    // console.log("In poleVector ", polePos, point);
    var euclidean_dist = Math.hypot(point.x - polePos.x, point.y - polePos.y);
    var density = Math.pow(euclidean_dist, 3);
    // console.log("Density is ", density);
    // console.log("NaN test 1 ", point.x - polePos.x);
    // console.log("NaN test 2 ", poleCharge * (point.x - polePos.x));
    // console.log("NaN test 3 ", 2 * density * Math.PI);
    var vector_x = poleCharge * (point.x - polePos.x) / (2 * density * Math.PI);
    // console.log("Vectors X is ", vector_x);
    var vector_y = poleCharge * (point.y - polePos.y) / (2 * density * Math.PI);
    // console.log("Vectors Y is ", vector_y);
    var vector_z = poleCharge * (point.z - polePos.z) / (2 * density * Math.PI);
    // console.log("Vectors Z is ", vector_z);
    return new BABYLON.Vector3(vector_x, vector_y, vector_z);
}

function fieldVector(magnetConfig, point) {
    // console.log("In fieldVector ", magnetConfig, point)
    var northPolePos = magnetConfig.northPolePos;
    var southPolePos = magnetConfig.southPolePos;
    var magneticStrength = magnetConfig.magneticStrength;
    var northPoleVector = poleVector(northPolePos, magneticStrength, point);
    var southPoleVector = poleVector(southPolePos, -1 * magneticStrength, point);
    // console.log("In fieldVector ", northPoleVector.add(southPoleVector));
    return northPoleVector.add(southPoleVector);
}

function vectorFieldLine(magnetConfig, point, scaleBy, zAxis = false) {
    // console.log("Start of vectorFieldLine");
    // console.log("In vectorFieldLine ", magnetConfig, point, scaleBy);
    var startFrom = point;
    var curvePoints = [point];
    // var magnetOrientationVector = magnetConfig.southPolePos.subtract(magnetConfig.northPolePos).normalize();
    var pointVector, normalizedPointVector, nextPointOrientationVector;
    for (var i = 0; i < 50; i++) {
        pointVector = fieldVector(magnetConfig, point);
        if (zAxis === false) {
            pointVector.z = 0;
        }
        if (Number.isNaN(pointVector.x) || Number.isNaN(pointVector.y) || Number.isNaN(pointVector.z)) {
            console.log("Abandoning with NaN vector...", pointVector);
            break;
        }
        normalizedPointVector = pointVector.normalize();
        scaledPointVector = normalizedPointVector.multiplyByFloats(scaleBy, scaleBy, scaleBy);
        // console.log("Scaled Point Vector is ", scaledPointVector);
        nextPoint = point.add(scaledPointVector);
        console.log("Next point is ", nextPoint);

        // nextPointOrientationVector = nextPoint.subtract(point).normalize();
        //if (approxEqual(BABYLON.Vector3.Dot(magnetOrientationVector, nextPointOrientationVector), 1)) {
        if (!point.equals(startFrom) && (magnetConfig.magnetBoundingBox).intersectsPoint(nextPoint)) {
            console.log("Terminating with interpolation...");
            var extrapolatedPoint = new BABYLON.Vector3(nextPoint.x, startFrom.y, 0);
            curvePoints.push(extrapolatedPoint);
            break;
        }
        curvePoints.push(nextPoint);
        point = nextPoint;
    }
    // console.log("End of vectorFieldLine");
    return curvePoints;