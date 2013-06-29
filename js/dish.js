function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
            var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

$(document).bind('pageshow', function() {
    var em = $("#list");
    em.empty();

    $.each(loadMenu(), function(key, value) {
        if (parseURL(location.href).params['cat'] == value.category)
        {
            var html = '<div class="menu-item"><h3>' + value.name + '</h3><div class="dish-text"><div class="dish-image"><img src="' + value.photo + '" alt="image" style="position: absolute; width: 100px; height: 100px;" /></div><div class="dish-actions"><div class="price">' + value.price + '&#8372;</div><a data-role="button" data-inline="false" data-theme="b" href="#page1" data-icon="plus" data-iconpos="right">в корзину</a></div><p>' + value.description + '</p></div></div>';
            em.append(html);
        }

    });

});