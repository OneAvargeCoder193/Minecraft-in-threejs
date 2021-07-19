const voxelverts = [
    // front
    { pos: [-1, -1, 1], norm: [ 0,    0,    1], uv: [0, 0], },
    { pos: [ 1, -1, 1], norm: [ 0,    0,    1], uv: [1, 0], },
    { pos: [-1, 1, 1], norm: [ 0,    0,    1], uv: [0, 1], },

    { pos: [-1,    1,    1], norm: [ 0,    0,    1], uv: [0, 1], },
    { pos: [ 1, -1,    1], norm: [ 0,    0,    1], uv: [1, 0], },
    { pos: [ 1,    1,    1], norm: [ 0,    0,    1], uv: [1, 1], },
    // right
    { pos: [ 1, -1,    1], norm: [ 1,    0,    0], uv: [0, 0], },
    { pos: [ 1, -1, -1], norm: [ 1,    0,    0], uv: [1, 0], },
    { pos: [ 1,    1,    1], norm: [ 1,    0,    0], uv: [0, 1], },

    { pos: [ 1,    1,    1], norm: [ 1,    0,    0], uv: [0, 1], },
    { pos: [ 1, -1, -1], norm: [ 1,    0,    0], uv: [1, 0], },
    { pos: [ 1,    1, -1], norm: [ 1,    0,    0], uv: [1, 1], },
    // back
    { pos: [ 1, -1, -1], norm: [ 0,    0, -1], uv: [0, 0], },
    { pos: [-1, -1, -1], norm: [ 0,    0, -1], uv: [1, 0], },
    { pos: [ 1,    1, -1], norm: [ 0,    0, -1], uv: [0, 1], },

    { pos: [ 1,    1, -1], norm: [ 0,    0, -1], uv: [0, 1], },
    { pos: [-1, -1, -1], norm: [ 0,    0, -1], uv: [1, 0], },
    { pos: [-1,    1, -1], norm: [ 0,    0, -1], uv: [1, 1], },
    // left
    { pos: [-1, -1, -1], norm: [-1,    0,    0], uv: [0, 0], },
    { pos: [-1, -1,    1], norm: [-1,    0,    0], uv: [1, 0], },
    { pos: [-1,    1, -1], norm: [-1,    0,    0], uv: [0, 1], },

    { pos: [-1,    1, -1], norm: [-1,    0,    0], uv: [0, 1], },
    { pos: [-1, -1,    1], norm: [-1,    0,    0], uv: [1, 0], },
    { pos: [-1,    1,    1], norm: [-1,    0,    0], uv: [1, 1], },
    // top
    { pos: [ 1,    1, -1], norm: [ 0,    1,    0], uv: [0, 0], },
    { pos: [-1,    1, -1], norm: [ 0,    1,    0], uv: [1, 0], },
    { pos: [ 1,    1,    1], norm: [ 0,    1,    0], uv: [0, 1], },

    { pos: [ 1,    1,    1], norm: [ 0,    1,    0], uv: [0, 1], },
    { pos: [-1,    1, -1], norm: [ 0,    1,    0], uv: [1, 0], },
    { pos: [-1,    1,    1], norm: [ 0,    1,    0], uv: [1, 1], },
    // bottom
    { pos: [ 1, -1,    1], norm: [ 0, -1,    0], uv: [0, 0], },
    { pos: [-1, -1,    1], norm: [ 0, -1,    0], uv: [1, 0], },
    { pos: [ 1, -1, -1], norm: [ 0, -1,    0], uv: [0, 1], },

    { pos: [ 1, -1, -1], norm: [ 0, -1,    0], uv: [0, 1], },
    { pos: [-1, -1,    1], norm: [ 0, -1,    0], uv: [1, 0], },
    { pos: [-1, -1, -1], norm: [ 0, -1,    0], uv: [1, 1], },
];

function makeVoxel(x, y, z) {
    verts = voxelverts;
    
    verts.forEach((vert, ndx) => {
        verts[ndx].pos = [vert.pos[0] / 2 + x, vert.pos[1] / 2 + y, vert.pos[2] / 2 + z];
    });

    return verts;
}