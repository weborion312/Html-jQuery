var mtif_cr = window['mti_CR'];
	if(typeof(mtif_cr) == 'undefined')
		mtif_cr = window['CR'];
var mtif_sr = window['mti_SR'];
	if(typeof(mtif_sr) == 'undefined')
		mtif_sr = window['SR'];

 var mtif_r = window['mti_R'];
	if(typeof(mtif_r) == 'undefined')
		mtif_r = window['R'];
function otf_1122863ReplaceGlyphVariant(feat){
	var FO = new Object();
	FO.rkern=1;
	FO.rc2sc=1;
	FO.rcase=1;
	FO.rdnom=1;
	FO.rfrac=1;
	FO.rliga=1;
	FO.rlnum=1;
	FO.rnumr=1;
	FO.ronum=1;
	FO.rordn=1;
	FO.rpnum=1;
	FO.rsalt=1;
	FO.rsmcp=1;
	FO.rsups=1;
	FO.rss01=1;
	FO.rtnum=1;
	FO.rlocl=1;
	if(typeof(FO['r'+feat]) != "undefined")
		return FO['r'+feat];
	else
		return 0;
}
function otf_1122863OTFFeatDisable(){
	return "cpsp halt palt vhal vpal curs dist calt clig cswh dlig dpng ornm pcap sinf subs swsh ss02 ss03 ss04 ss05 ss06 ss07 ss08 ss09 ss10 ss11 ss12 ss13 ss14 ss15 ss16 ss17 ss18 ss19 ss20 titl tosf unic zero fwid expt hwid jp78 pwid vert vrt2 nalt akhn rphf blwf abvs blws psts haln ccmp isol fina medi init zz02 zz05 zz06 zz07 zz08 zz09 zz10 zz11 zz12 zz13 zz14 zz15 zz16 zz17 nukt pstf pref half jalt rlig vatu ovlp rkrf cjct pres jp04 nlck hist hkna hojo jp83 pkna ital qwid ruby twid vkna smpl trad ss00 hlig afrc c2pc falt hngl jp90 rand mgrk ";
}
function otf_1122863OTFFeatLookupIndex(){
	var FO = new Array();
	FO.push("locl");
	FO.push("smcp");
	FO.push("c2sc");
	FO.push("onum");
	FO.push("lnum");
	FO.push("pnum");
	FO.push("tnum");
	FO.push("case");
	FO.push("numr");
	FO.push("dnom");
	FO.push("frac");
	FO.push("liga");
	FO.push("salt");
	FO.push("ss01");
	FO.push("ordn");
	FO.push("sups");
	FO.push("kern");
	FO.push("cpsp");
	FO.push("halt");
	FO.push("palt");
	FO.push("vhal");
	FO.push("vpal");
	FO.push("curs");
	FO.push("dist");
	FO.push("calt");
	FO.push("clig");
	FO.push("cswh");
	FO.push("dlig");
	FO.push("dpng");
	FO.push("ornm");
	FO.push("pcap");
	FO.push("sinf");
	FO.push("subs");
	FO.push("swsh");
	FO.push("ss02");
	FO.push("ss03");
	FO.push("ss04");
	FO.push("ss05");
	FO.push("ss06");
	FO.push("ss07");
	FO.push("ss08");
	FO.push("ss09");
	FO.push("ss10");
	FO.push("ss11");
	FO.push("ss12");
	FO.push("ss13");
	FO.push("ss14");
	FO.push("ss15");
	FO.push("ss16");
	FO.push("ss17");
	FO.push("ss18");
	FO.push("ss19");
	FO.push("ss20");
	FO.push("titl");
	FO.push("tosf");
	FO.push("unic");
	FO.push("zero");
	FO.push("fwid");
	FO.push("expt");
	FO.push("hwid");
	FO.push("jp78");
	FO.push("pwid");
	FO.push("vert");
	FO.push("vrt2");
	FO.push("nalt");
	FO.push("akhn");
	FO.push("rphf");
	FO.push("blwf");
	FO.push("abvs");
	FO.push("blws");
	FO.push("psts");
	FO.push("haln");
	FO.push("ccmp");
	FO.push("isol");
	FO.push("fina");
	FO.push("medi");
	FO.push("init");
	FO.push("zz02");
	FO.push("zz05");
	FO.push("zz06");
	FO.push("zz07");
	FO.push("zz08");
	FO.push("zz09");
	FO.push("zz10");
	FO.push("zz11");
	FO.push("zz12");
	FO.push("zz13");
	FO.push("zz14");
	FO.push("zz15");
	FO.push("zz16");
	FO.push("zz17");
	FO.push("nukt");
	FO.push("pstf");
	FO.push("pref");
	FO.push("half");
	FO.push("jalt");
	FO.push("rlig");
	FO.push("vatu");
	FO.push("ovlp");
	FO.push("rkrf");
	FO.push("cjct");
	FO.push("pres");
	FO.push("jp04");
	FO.push("nlck");
	FO.push("hist");
	FO.push("hkna");
	FO.push("hojo");
	FO.push("jp83");
	FO.push("pkna");
	FO.push("ital");
	FO.push("qwid");
	FO.push("ruby");
	FO.push("twid");
	FO.push("vkna");
	FO.push("smpl");
	FO.push("trad");
	FO.push("ss00");
	FO.push("hlig");
	FO.push("afrc");
	FO.push("c2pc");
	FO.push("falt");
	FO.push("hngl");
	FO.push("jp90");
	FO.push("rand");
	FO.push("mgrk");
	return FO;
}
