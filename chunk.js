const width = 2;
const height = 2;
const depth = 2;

class Chunk {
    constructor() {
        this.blocks = [];
        this.mesh = undefined;
    }

    noise(x, y) {
        return Math.floor(perlin.get(x / 10, y / 10) * 10 / 2) * 2;
    }

    generateBlocks() {
        for (let x = 0; x < width; x++) {
            this.blocks[x] = new Array(height);
            for (let y = 0; y < height; y++)
            {
                this.blocks[x][y] = new Array(depth);
                
                for (let z = 0; z < depth; z++)
                {
                    this.blocks[x][y][z] = false;
                }
            }
        }
    
        for (let z = 0; z < depth; z++) {
            for (let x = 0; x < width; x++) {
                /*for (let y = 0; y < (this.noise(x, z) / 2) + 5; y++)
                {
                    this.blocks[x][y][z] = true;
                }*/

                for (let y = 0; y < height; y++)
                {
                    this.blocks[x][y][z] = true;
                }
            }
        }
    }

    generateMesh() {
        var vertices = [];
        for (let z = 0; z < width; z++) {
            for (let x = 0; x < height; x++) {
                for (let y = 0; y < height; y++)
                {
                    if (this.blocks[x][y][z]) {
                        var verts = makeVoxel(x, y, z);
                        vertices.push(verts);
                    }
                }
            }
        }

        vertices = vertices.flat(); 

        const positions = [];
        const normals = [];
        const uvs = [];

        for (const vertex of vertices) {
            positions.push(...vertex.pos);
            normals.push(...vertex.norm);
            uvs.push(...vertex.uv);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

        const loader = new THREE.TextureLoader();
        const texture = loader.load("https://threejsfundamentals.org/threejs/resources/images/star.png");
        const material = new THREE.MeshPhongMaterial({color: 0xffffff, map: texture});
        this.mesh = new THREE.Mesh(geometry, material);
        return this.mesh;
    }
}