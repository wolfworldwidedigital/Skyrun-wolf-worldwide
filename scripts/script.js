window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function(){
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
    return scene;
    }
    var scene = createScene();
    engine.runRenderLoop(function(){
    scene.render();
    });
    window.addEventListener('resize', function(){
    engine.resize();
    });
    });