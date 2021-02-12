var string = args[0];

String.prototype.capitalize = function() {
    return this.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function generate_string() {
    return string.replaceAll('_', ' ').toLowerCase().capitalize();
}

generate_string();