var time = parseInt(args[0].split(':')[0]);

function get_symbol() {
    if(time <= 5 || time >= 19) {
        return '&f☽';
    }
    return '&e☀';
}

get_symbol();