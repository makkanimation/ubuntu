window.asus = window.asus || {};
asus = asus || {};
/* Asus Website script function start */
(function() {
    asus.script = {
        get_local: function() {
         
            var arr = ["bg","gr","cl","co","aeen", "lk", "pk", "in", "tr", "tw", "bd", "cn", "hk", "vn", "kr", "jp", "ru", "th", "sg", "nz", "ph", "id", "au", "my", "br", "ar", "de", "mm",
                "pl","pe", "no", "se", "dk", "gb", "sk", "cz", "chfr", "chit", "chde", "ro", "it", "rs", "ua", "hu", "fi", "pt", "es", "fr", "benl", "befr", "nl", "za",
                "cafr", "caen", "us", "aear", "mv", "mx", "ir", "il", "ea", "ea-sw", "affa", "afpa", "saen", "newglobal", "newtw", "newsg", "newau", "newgb", "newpt", "newes", "newfr",
                "newnl", "newcafr", "newcaen", "newus", "newpk", "newin", "newbd", "newnz", "newph", "newmy", "newde", "newpl", "newit", "newmv", "newlk", "newcn", "newru", "newid", "newua",
                "newza", "newmx", "newaa", "newtr", "newvn", "newkr", "newth", "newbr", "newar", "newdk", "newchfr", "newchit", "newchde", "newae", "newhk", "newjp", "newno", "newse", "newsk",
                "newcz", "newro", "newrs", "newhu", "newfi", "newbenl", "newbefr", "newaear", "newil", "newafpa", "newafda", "newsaen", "newsaar", "newaeen", "ch-fr", "ch-it", "ch-de",
                "ae-en", "ae-ar", "be-nl", "be-fr", "ca-fr", "ca-en", "sa-en", "sa-ar", "newaf-pa", "newch-fr", "newch-it", "newch-de", "newbe-nl", "newbe-fr", "newca-en", "newca-fr",
                "newsa-en", "newsa-ar", "newaf-fa", "newae-ar", "newae-en", "neweg", "newiq", "eg", "iq", "newua-ua", "newua-ru", "ua-ua", "ua-ru", "nafr-fr", "nafr-ar", "newnafr-fr",
                "newnafr-ar", "newuk", "uk", "ie", "af-pa", "af-fa", "newnp", "np", "tn-fr", "newtn-fr", "tn-ar", "newtn-ar", "ma-fr", "newma-fr", "ma-ar", "newma-ar",
                "dz-fr", "newdz-fr", "dz-ar", "newdz-ar", "newke", "ke", "newng", "ng", "newtn-fr", "tn-fr", "newtn-ar", "tn-ar", "newma-fr", "ma-fr", "newma-ar", "ma-ar", "newdz-fr", "dz-fr",
                "newdz-ar", "dz-ar", "newke", "ke", "ng", "newng", "middleeast-fa", "newmiddleeast-fa", "latin", "newlatin", "lt", "newlt", "lv", "newlv", "ee", "newee", "kz", "newkz", "eg-en", "neweg-en",
                "bg","th","co","cl","ar","pe","sk","mx","latin","za","ea","ea-sw","wa","me-en","hk","hk-en","ua","ua-ua","eg-en","ch-de","ch-en","ch-fr","au","nz","bt","tr","uk","ru","kz","ie","bd","lk",
                "gr-el","id","ph","sg","rs","africa-fr","tw","br","us","ca-en","ca-fr","ro","me-ar","il","nafr-ar","eg","np","jp","my","vn","mm","bn","kr","no","gr","in","cn","global","de","fr","it","es",
                "pl","hu","pt","se","nl","cz","middleeast-fa","dk","be-fr","be-nl","fi"
            ];


            var rtnVal = window.location.pathname.split("/")[1].toLowerCase();
            var defaultVal = 'global';
            for (var val in arr) {
                if (arr[val] == rtnVal) {
                    defaultVal = arr[val];
                    break;
                }
            }
            if (window.location.host == "www.asus.com.cn") defaultVal = "cn";
            if (window.location.host == "w3.asus.com.cn") defaultVal = "cn";


            asus.script.get_local = function() {
                return defaultVal;
            };
            return defaultVal;
        }
    };

    /* cookie */
    asus.cookie = {
        val: Object,
        set: function(name, value, expiresec) {
            var exdate = new Date();
            exdate.setSeconds(exdate.getSeconds() + expiresec);
            document.cookie = name + "=" + escape(value) + ((expiresec == null) ? "" : ";expires=" + exdate.toGMTString()) + ";domain=" + window.location.host.replace(/.+?\.asus/, '.asus') + "; path =/";
            asus.cookie.val[name] = escape(value);
        },
        get: function(name) {
            try {
                if (Object.keys(asus.cookie.val).length == 0) {
                    asus.cookie.init();
                };
            } catch (e) {
                asus.cookie.init();
            }
            asus.cookie.get = function(name) {
                return asus.cookie.val[name];
            };
            return asus.cookie.val[name];
        },
        del: function(name) {
            var exdate = new Date();
            exdate.setTime(exdate.getTime() - 1);
            var cval = asus.cookie.get(name);
            document.cookie = name + "=" + cval + "; expires=" + exdate.toGMTString() + ";domain=" + window.location.host.replace(/.+?\.asus/, '.asus') + "; path =/";
            delete asus.cookie.val[name];
        },
        init: function() {
            if (!document.cookie) {
                return false;
            }
            var list = document.cookie.split(';');
            for (var i = 0; i < list.length; i++) {
                var data = list[i].split('=');
                if (!data[1]) {
                    continue;
                }
                data[0] = data[0].replace(/^\s+/, '');
                asus.cookie.val[data[0]] = unescape(data[1]);
            }
        }
    };
 })();