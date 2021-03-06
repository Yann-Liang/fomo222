exports.getUrlParms = name => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

exports.getCurrentUrl = () => {
    return location.protocol + '//' + location.host + location.pathname
}

exports.getBaseUrl = () => {
    return location.protocol + '//' + location.host
}