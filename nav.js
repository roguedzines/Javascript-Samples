var here = document;
var navOl = here.getElementById('navBar');
if (navOl != null) {

    var liArray = navOl.getElementsByTagName('LI');
    for (var i = 0; i < liArray.length; i++) {
        if (liArray[i] != null) {
            var magAnchor = liArray[i].getElementsByTagName("A");
            if (magAnchor[0] != null && magAnchor[0].href.indexOf('/ngs/category/magazines') > -1) {
                magAnchor[0].innerHTML = "GENO 2.0";
                magAnchor[0].href = "http://shop.nationalgeographic.com/ngs/browse/productDetail.jsp?productId=2001246";
                var hicLiClass = magAnchor[0].parentNode;
                hicLiClass.id = "newgeno";
            }

        }
        if (liArray[i].className != null && liArray[i].className.indexOf('rightSubNav') > -1) {
            var anchorArray = liArray[i].getElementsByTagName('A');
            for (var j = 0; j < anchorArray.length; j++) {
                if (anchorArray[j].href != null && anchorArray[j].href.indexOf('/ngs/category/shop-by/new') > -1) {
                    var liNew = anchorArray[j].parentNode;
                    break;
                }
            }
        }
    }
    if (liNew != null) {
        var mLi = here.createElement("LI");
        mLi.id = "catNavSub";
        var mA = here.createElement("A");
        mA.innerHTML = "Magazines";
        mA.href = "/ngs/category/magazines";
        mLi.appendChild(mA);
        liNew.parentNode.insertBefore(mLi, liNew);

    }
}
