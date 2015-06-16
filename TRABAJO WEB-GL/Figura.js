var escena;
var camara;
var render;

function iniciarEscena(){
    //Render
    render = new THREE.WebGLRenderer();
    render.setClearColorHex(0xFFFFFF, 1);
    var canvasWidth = 400;
    var canvasHeight = 400;
    render.setSize(canvasWidth, canvasHeight);
  document.getElementById("canvas").appendChild(render.domElement);
     //Escena
    escena = new THREE.Scene();
    //Camara
    camara = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 100);
    camara.position.set(0, 0, 0);
    camara.lookAt(escena.position);
    escena.add(camara);
    //Material
    var material = new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide});
//Triángulo
    var trianguloGeometria = new THREE.Geometry();
    trianguloGeometria.vertices.push(new THREE.Vector3( 0.0,  1.5, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3(-1.5, -1.5, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3( 1.5, -1.5, 0.0));
    trianguloGeometria.faces.push(new THREE.Face3(0, 1, 2));

    var triangulo = new THREE.Mesh(trianguloGeometria, material);
    triangulo.position.set(1.0, 1.0, -7.0);
    escena.add(triangulo);
	/*
	   //Cuadrado
    var cuadradoGeometria = new THREE.Geometry();
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    cuadradoGeometria.faces.push(new THREE.Face4(0, 1, 2, 3));

    var cuadrado = new THREE.Mesh(cuadradoGeometria, material);
    cuadrado.position.set(1.5, 0.0, -7.0);
    escena.add(cuadrado);   
    //rectangulo
    var rectanguloGeometria = new THREE.Geometry();
    rectanguloGeometria.vertices.push(new THREE.Vector3(-1.0,  0.5, 0.0));
    rectanguloGeometria.vertices.push(new THREE.Vector3( 1.0,  0.5, 0.0));
    rectanguloGeometria.vertices.push(new THREE.Vector3( 1.0, -0.5, 0.0));
    rectanguloGeometria.vertices.push(new THREE.Vector3(-1.0, -0.5, 0.0));
    rectanguloGeometria.faces.push(new THREE.Face4(0, 1, 2, 3));

    var rectangulo = new THREE.Mesh(rectanguloGeometria, material);
    rectangulo.position.set(-1.5, -2.0, -7.0);
    escena.add(rectangulo); 
	*/
	//cuadrado y  rectangulo 
	var canvas = document.getElementById("figuras");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgb(255,0,0)";
	ctx.fillRect(20,20,180,180);
	 
	ctx.fillStyle = "rgb(0,255,0)";
	ctx.fillRect(220,20,180,80);
	
	ctx.fillStyle = "rgb(0,0,255)";
	ctx.beginPath();
	ctx.arc(500,100,80,0,Math.PI*2,true);
	ctx.fill();
		}
function renderEscena(){
    render.render(escena, camara);
}

function webGLStart() {
    iniciarEscena();
    renderEscena();
}

