var dimension = args[0];

function get_dimension() {
    switch(dimension) {
        case 'world':
            return '&e♦ Overworld';
        case 'world_nether':
            return '&4☠ Nether';
        case 'world_the_end':
            return '&d۞ Dimensão do Fim';
    }
    return '&c☠ Unknown'
}

get_dimension();