const _0x4d5b81=_0x539f;(function(_0x5117f0,_0x59fb1e){const _0x49ead6=_0x539f,_0x46aff5=_0x5117f0();while(!![]){try{const _0x3f45ed=-parseInt(_0x49ead6(0x1d6))/0x1*(parseInt(_0x49ead6(0x213))/0x2)+-parseInt(_0x49ead6(0x20a))/0x3+-parseInt(_0x49ead6(0x240))/0x4+parseInt(_0x49ead6(0x1a2))/0x5*(-parseInt(_0x49ead6(0x216))/0x6)+-parseInt(_0x49ead6(0x1b1))/0x7*(-parseInt(_0x49ead6(0x19c))/0x8)+parseInt(_0x49ead6(0x1d3))/0x9*(-parseInt(_0x49ead6(0x1bd))/0xa)+-parseInt(_0x49ead6(0x239))/0xb*(-parseInt(_0x49ead6(0x209))/0xc);if(_0x3f45ed===_0x59fb1e)break;else _0x46aff5['push'](_0x46aff5['shift']());}catch(_0x417fba){_0x46aff5['push'](_0x46aff5['shift']());}}}(_0x5002,0xb551e));import _0x530a76 from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';function _0x539f(_0x2daeb7,_0x110210){const _0x5002fc=_0x5002();return _0x539f=function(_0x539fb0,_0x47afdb){_0x539fb0=_0x539fb0-0x189;let _0x360b3c=_0x5002fc[_0x539fb0];return _0x360b3c;},_0x539f(_0x2daeb7,_0x110210);}import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x56f79f from'node:path';import _0x849989 from'node:os';import _0x3ec8f3 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';function _0x5002(){const _0x341581=['Iuimk','[KickedOffLine]\x20[','iVFxp','jBfdp','PgTNk','engine','GmXTm','onMemberListChange','getQRCodePicture','getQuickLoginList','启动失败:\x20','uid','find','onGroupListUpdate','data:image/png;base64,','9WZAoEA','constructor','NodeIKernelGroupListener','1oeaRee','addKernelGroupListener','当前账号(','addKernelLoginListener','createMemberListScene','onQRCodeSessionFailed','rJVQd','proxyHandler','kfjPe','assign','NodeIQQNTWrapperEngine','onQRCodeGetPicture','read','digest','getLoginList','wWhNO','fileLog','util','loginErrorInfo','hex','addListener','fileLogLevel','forEach','consoleLog','last_message_time','devUid','qoiyW','fERae','快速登录失败\x20','NodeIKernelLoginService','NodeIDependsAdapter','dtoTY','floor','NodeIKernelMsgListener','now','getBuddyService','rwqlC','yYwIO','HAsWF','Fimrw','HmsqH','passwordLogin','session','LocalLoginInfoList','NodeIDispatcherAdapter','登录失败','undefined','YmQof','startNT','onUserLoggedIn','ProfileListener','1415124SSbzLj','177780hYGqWy','WNASy','onSelfStatusChanged','then','hOzBD','onKickedOffLine','VcXVk','YxDZW','onLoginSuccessFuncList','1458542KlxRNp','dataPath','stringify','6vWOJtm','NodeIKernelProfileListener','rpuOG','init','tipsDesc','MOuwu','push','init\x20failed\x20','recallTime','getProfileService','OEpEY','xcpzV','packet_received','getMsgByLongId','initDataListener','delete','message_received','get','账号设备(','from','iKJIm','Fktoe','MsgListener','NodeQQNTWrapperUtil','addKernelBuddyListener','errMsg','\x20has\x20no\x20method\x20','DIvLL','memberCount','msgId','mkdirSync','QGDpG','resolve','message_sent','_GW_B','187UBfGtX','NodeIGlobalAdapter','oZYEt','IAtsj','TRFcU','tSXqL','createHash','2796124pnhugz','qwIEw','V1_WIN_NQ_','getBuddyList','tipsTitle','xyAoJ','./nt_qq/global','loginService','curVersion','uin','YPCBf','CNErp','onProfileDetailInfoChanged','infos','NodeIKernelSessionListener','dataPathGlobal','Azaua','sKrZZ','NQhtc','quickLogin','base64','vXIxH','quickLoginWithUin','fxfPl',')\x20在线状态变更','initWithDeskTopConfig','qrLogin','packet_sent','huuuR','getNextMemberList','OuwTt','name','8UstOFL','update','onMsgInfoListUpdate','onRecvSysMsg','快速登录不可用','tCRBH','218905ukXyTe','initSession\x20failed','initConfig','catch','map','isQuickLogin','onBuddyListChange','qrcodeUrl','NodeIKernelLoginListener','addMsg','140022008','qvkEU','PolJY','split','groupCode','4903248ITeopP','set','onAddSendMsg','-v2.db','BuddyListener','onQRCodeLoginSucceed','length','result',')已登录,无法重复登录','VXoCl','clientType','NodeIQQNTWrapperSession','4311940kKKZFy','sbWSw','Windows\x2010\x20Pro','onRecvMsg','getMsgService','loginListener','initSession'];_0x5002=function(){return _0x341581;};return _0x5002();}import _0x52fd38 from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat,uid2UinMap}from'@/core/data';import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x4d5b81(0x200)];[_0x4d5b81(0x1e7)];[_0x4d5b81(0x1c9)];[_0x4d5b81(0x1c2)];[_0x4d5b81(0x247)];[_0x4d5b81(0x212)]=[];[_0x4d5b81(0x1dd)]={'get'(target,prop,receiver){const _0xbf5c63=_0x4d5b81,NOOAQQ={'qoiyW':function(x,y){return x===y;},'rJVQd':_0xbf5c63(0x204)};if(NOOAQQ[_0xbf5c63(0x1f0)](typeof target[prop],NOOAQQ[_0xbf5c63(0x1dc)]))return(...args)=>{const _0x9f042c=_0xbf5c63;logDebug(target[_0x9f042c(0x1d4)][_0x9f042c(0x19b)]+_0x9f042c(0x230)+prop);};return Reflect[_0xbf5c63(0x227)](target,prop,receiver);}};constructor(){const _0x4cb538=_0x4d5b81,_0x5edccf={'xcpzV':function(_0x345b4e,_0x4cfc27){return _0x345b4e(_0x4cfc27);},'pZbBN':function(_0x30b015,_0x1d1aba){return _0x30b015+_0x1d1aba;},'UdkgZ':_0x4cb538(0x1d8),'Azaua':_0x4cb538(0x1b9),'qwIEw':function(_0x33f0ba,_0x422032,_0xb0ce1d){return _0x33f0ba(_0x422032,_0xb0ce1d);},'miCoa':'数据库初始化失败','shSVz':function(_0x38ed7f,_0x48f4ac,_0x3866f9){return _0x38ed7f(_0x48f4ac,_0x3866f9);},'tSXqL':function(_0x2da7cb,_0x19f066){return _0x2da7cb(_0x19f066);},'pCTti':'./NapCat/data','MOuwu':function(_0x12ff01,_0x32c6c9,_0x2f107e){return _0x12ff01(_0x32c6c9,_0x2f107e);},'sKrZZ':_0x4cb538(0x203),'OEpEY':function(_0x386692,_0x3662a2){return _0x386692==_0x3662a2;},'yYwIO':function(_0x1a4e5f,_0x3e5796){return _0x1a4e5f==_0x3e5796;}};this[_0x4cb538(0x1c9)]=new _0x530a76[(_0x4cb538(0x1e0))](),this[_0x4cb538(0x1e7)]=new _0x530a76[(_0x4cb538(0x22d))](),this['loginService']=new _0x530a76[(_0x4cb538(0x1f3))](),this[_0x4cb538(0x200)]=new _0x530a76[(_0x4cb538(0x1bc))](),this[_0x4cb538(0x1c2)]=new LoginListener(),this['loginListener'][_0x4cb538(0x207)]=_0x5f2857=>{const _0x2ef5be=_0x4cb538;_0x5edccf[_0x2ef5be(0x221)](logError,_0x5edccf['pZbBN'](_0x5edccf['UdkgZ']+_0x5f2857,_0x5edccf[_0x2ef5be(0x18c)]));},this[_0x4cb538(0x1c2)][_0x4cb538(0x1b6)]=_0x1ccf38=>{const _0xffd9f9=_0x4cb538,_0x33cf7a={'Fimrw':function(_0x3f74ba,_0x3b332d,_0x5b7226){const _0x4fcf35=_0x539f;return _0x5edccf[_0x4fcf35(0x241)](_0x3f74ba,_0x3b332d,_0x5b7226);},'sbWSw':_0x5edccf['miCoa'],'xyAoJ':function(_0x587bc0,_0x5aff0d,_0x2e9e86){return _0x5edccf['shSVz'](_0x587bc0,_0x5aff0d,_0x2e9e86);},'wWhNO':function(_0x4d2871,_0x3fd515){return _0x4d2871(_0x3fd515);},'IAtsj':function(_0x230fe0,_0x14dcb8){const _0x1e5f44=_0x539f;return _0x5edccf[_0x1e5f44(0x23e)](_0x230fe0,_0x14dcb8);},'YxDZW':_0x5edccf['pCTti'],'mtBWe':_0xffd9f9(0x1a3)};this[_0xffd9f9(0x1c3)](_0x1ccf38[_0xffd9f9(0x249)],_0x1ccf38['uid'])[_0xffd9f9(0x20d)](_0x5490c5=>{const _0x12dccc=_0xffd9f9;selfInfo[_0x12dccc(0x249)]=_0x1ccf38['uin'],selfInfo[_0x12dccc(0x1cf)]=_0x1ccf38['uid'],napCatConfig[_0x12dccc(0x1e2)](),_0x33cf7a[_0x12dccc(0x245)](setLogLevel,napCatConfig[_0x12dccc(0x1eb)],napCatConfig['consoleLogLevel']),enableFileLog(napCatConfig[_0x12dccc(0x1e6)]),_0x33cf7a[_0x12dccc(0x1e5)](enableConsoleLog,napCatConfig[_0x12dccc(0x1ed)]),_0x33cf7a[_0x12dccc(0x23c)](setLogSelfInfo,selfInfo);const _0x5c1b37=_0x56f79f['resolve'](this[_0x12dccc(0x214)],_0x33cf7a[_0x12dccc(0x211)]);_0x3ec8f3['mkdirSync'](_0x5c1b37,{'recursive':!![]}),logDebug('本账号数据/缓存目录：',_0x5c1b37),dbUtil['init'](_0x56f79f['resolve'](_0x5c1b37,'./'+_0x1ccf38[_0x12dccc(0x249)]+_0x12dccc(0x1b4)))['then'](()=>{const _0x9ea09d=_0x12dccc;this[_0x9ea09d(0x224)](),this[_0x9ea09d(0x212)][_0x9ea09d(0x1a6)](_0x20a191=>{const _0x4b5843=_0x9ea09d,_0x3f9d30={'tCRBH':function(_0x182951,_0x3c5206,_0xe1f764){return _0x182951(_0x3c5206,_0xe1f764);}};new Promise((_0x8da022,_0x237bb0)=>{const _0x524812=_0x539f,_0x5d39e4=_0x3f9d30[_0x524812(0x1a1)](_0x20a191,_0x1ccf38[_0x524812(0x249)],_0x1ccf38[_0x524812(0x1cf)]);_0x5d39e4 instanceof Promise&&_0x5d39e4[_0x524812(0x20d)](_0x8da022)[_0x524812(0x1a5)](_0x237bb0);})[_0x4b5843(0x20d)]();});})[_0x12dccc(0x1a5)](_0x40cec1=>{const _0x25ee8d=_0x12dccc;_0x33cf7a[_0x25ee8d(0x1fd)](logError,_0x33cf7a[_0x25ee8d(0x1be)],_0x40cec1);});})[_0xffd9f9(0x1a5)](_0x3f164f=>{const _0x4c60ce=_0xffd9f9;logError(_0x33cf7a['mtBWe'],_0x3f164f);throw new Error(_0x4c60ce(0x1ce)+JSON[_0x4c60ce(0x215)](_0x3f164f));});},this[_0x4cb538(0x1c2)][_0x4cb538(0x1db)]=(_0xae8d15,_0x2fb3e1,_0xa0a808)=>{const _0x257056=_0x4cb538;_0x5edccf[_0x257056(0x21b)](logError,_0x5edccf[_0x257056(0x18d)],_0xa0a808),_0x5edccf[_0x257056(0x220)](_0xae8d15,0x1)&&_0x5edccf[_0x257056(0x1fb)](_0x2fb3e1,0x3)&&this[_0x257056(0x247)][_0x257056(0x1cc)]();},this[_0x4cb538(0x1c2)]['onLoginFailed']=_0x136283=>{const _0x588e38=_0x4cb538;logError(_0x5edccf[_0x588e38(0x18d)],_0x136283);},this[_0x4cb538(0x1c2)]=new Proxy(this[_0x4cb538(0x1c2)],this[_0x4cb538(0x1dd)]),this[_0x4cb538(0x247)][_0x4cb538(0x1d9)](new _0x530a76[(_0x4cb538(0x1aa))](this[_0x4cb538(0x1c2)])),this[_0x4cb538(0x1a4)]();}get[_0x4d5b81(0x214)](){const _0x7bf907=_0x4d5b81,_0x33d287={'iVFxp':'./.config/QQ'};let _0x1fcbfa=this[_0x7bf907(0x1e7)]['getNTUserDataInfoConfig']();return!_0x1fcbfa&&(_0x1fcbfa=_0x56f79f[_0x7bf907(0x236)](_0x849989['homedir'](),_0x33d287[_0x7bf907(0x1c6)]),_0x3ec8f3[_0x7bf907(0x234)](_0x1fcbfa,{'recursive':!![]})),_0x1fcbfa;}get[_0x4d5b81(0x18b)](){const _0x27b878=_0x4d5b81;return _0x56f79f[_0x27b878(0x236)](this[_0x27b878(0x214)],_0x27b878(0x246));}[_0x4d5b81(0x1a4)](){const _0x263b16=_0x4d5b81,_0x1a131c={'HAsWF':_0x263b16(0x1bf)};this[_0x263b16(0x1c9)][_0x263b16(0x195)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x263b16(0x248)],'os_version':_0x1a131c[_0x263b16(0x1fc)],'use_xlog':!![],'qua':_0x263b16(0x242)+qqVersionConfigInfo['curVersion']['replace']('-','_')+_0x263b16(0x238),'global_path_config':{'desktopGlobalPath':this[_0x263b16(0x18b)]},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x530a76[(_0x263b16(0x23a))](new GlobalAdapter())),this[_0x263b16(0x247)][_0x263b16(0x1a4)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x263b16(0x18b)],'clientVer':qqVersionConfigInfo[_0x263b16(0x248)],'hostName':hostname});}[_0x4d5b81(0x1c3)](_0x19fb13,_0x3f6034){const _0x26451a=_0x4d5b81,_0x5b52e2={'OuwTt':function(_0x1b9e0e,_0x4e9c21){return _0x1b9e0e===_0x4e9c21;},'fERae':function(_0x5bdae4,_0x3a333d){return _0x5bdae4(_0x3a333d);},'oZYEt':function(_0xd76fd8,_0x299445){return _0xd76fd8+_0x299445;},'kfjPe':_0x26451a(0x21d)};return new Promise(async(_0x402431,_0x1a5969)=>{const _0x5bfa6a=_0x26451a,_0xd84844=await genSessionConfig(_0x19fb13,_0x3f6034,this[_0x5bfa6a(0x214)]),_0x42f714=new SessionListener();_0x42f714['onSessionInitComplete']=_0xb335de=>{const _0x4933eb=_0x5bfa6a;if(_0x5b52e2[_0x4933eb(0x19a)](_0xb335de,0x0))return _0x5b52e2[_0x4933eb(0x1f1)](_0x402431,0x0);_0x5b52e2['fERae'](_0x1a5969,_0xb335de);},this[_0x5bfa6a(0x200)][_0x5bfa6a(0x219)](_0xd84844,new _0x530a76[(_0x5bfa6a(0x1f4))](new DependsAdapter()),new _0x530a76[(_0x5bfa6a(0x202))](new DispatcherAdapter()),new _0x530a76[(_0x5bfa6a(0x18a))](_0x42f714));try{this['session'][_0x5bfa6a(0x206)](0x0);}catch(_0x5c6ae4){try{this['session'][_0x5bfa6a(0x206)]();}catch(_0x1d7dfa){_0x5b52e2['fERae'](_0x1a5969,_0x5b52e2[_0x5bfa6a(0x23b)](_0x5b52e2[_0x5bfa6a(0x1de)],_0x1d7dfa));}}});}[_0x4d5b81(0x224)](){const _0x3c3960=_0x4d5b81,_0x492c06={'vXIxH':function(_0x5d60d4,_0x430050){return _0x5d60d4(_0x430050);},'WNASy':function(_0x14974d,_0x1dc913){return _0x14974d+_0x1dc913;},'waxez':function(_0x357345,_0x268b5b){return _0x357345+_0x268b5b;},'hOzBD':_0x3c3960(0x194),'fvDNV':function(_0x37fbb5,_0x1ac785){return _0x37fbb5(_0x1ac785);},'QGDpG':function(_0x2effb6,_0x2f3b8b){return _0x2effb6+_0x2f3b8b;},'DIvLL':_0x3c3960(0x1c5),'YPCBf':function(_0x279be9,_0x120fcb){return _0x279be9===_0x120fcb;},'dtoTY':function(_0x4291a9,_0x2cfb6a){return _0x4291a9/_0x2cfb6a;},'Fktoe':function(_0x319209,_0xbf5f4f){return _0x319209/_0xbf5f4f;},'rpuOG':function(_0x21fdd5,_0x4c03a8){return _0x21fdd5===_0x4c03a8;},'huuuR':'groupMemberList_MainWindow','NQhtc':function(_0x3f40a2,_0x1fc718,_0x495cb0){return _0x3f40a2(_0x1fc718,_0x495cb0);}},_0x126b57=new MsgListener();_0x126b57['onLineDev']=_0x14eb95=>{const _0x742d7e=_0x3c3960;_0x14eb95[_0x742d7e(0x1a6)](_0x2c442d=>{const _0x744f5c=_0x742d7e;_0x2c442d[_0x744f5c(0x1bb)]===0x2&&_0x492c06[_0x744f5c(0x191)](log,_0x492c06[_0x744f5c(0x20b)](_0x492c06['waxez'](_0x744f5c(0x228),_0x2c442d[_0x744f5c(0x1ef)]),_0x492c06[_0x744f5c(0x20e)]));});},_0x126b57[_0x3c3960(0x20f)]=_0x5d9ec3=>{const _0x489bfb=_0x3c3960;_0x492c06['fvDNV'](log,_0x492c06[_0x489bfb(0x235)](_0x492c06[_0x489bfb(0x20b)](_0x492c06[_0x489bfb(0x231)]+_0x5d9ec3[_0x489bfb(0x244)],']\x20'),_0x5d9ec3[_0x489bfb(0x21a)]));},_0x126b57[_0x3c3960(0x19e)]=_0x5cd523=>{const _0x1dab3c=_0x3c3960,_0x1e3f95={'HmsqH':function(_0x33a70c,_0x3eafc0){const _0x580ad2=_0x539f;return _0x492c06[_0x580ad2(0x24a)](_0x33a70c,_0x3eafc0);}};stat[_0x1dab3c(0x222)]+=0x1,_0x5cd523['map'](_0x44020e=>{const _0x41382b=_0x1dab3c;_0x1e3f95[_0x41382b(0x1fe)](_0x44020e['recallTime'],'0')?dbUtil[_0x41382b(0x1ab)](_0x44020e)[_0x41382b(0x20d)]()['catch']():dbUtil[_0x41382b(0x223)](_0x44020e[_0x41382b(0x233)])[_0x41382b(0x20d)](_0x5500e7=>{const _0x19847c=_0x41382b;_0x5500e7&&(_0x5500e7[_0x19847c(0x21e)]=_0x44020e[_0x19847c(0x21e)],dbUtil['updateMsg'](_0x5500e7)['then']());});});},_0x126b57[_0x3c3960(0x1b3)]=_0x5f3bdb=>{const _0x3e77b6=_0x3c3960;stat[_0x3e77b6(0x197)]+=0x1,stat[_0x3e77b6(0x237)]+=0x1,stat['last_message_time']=Math[_0x3e77b6(0x1f6)](_0x492c06[_0x3e77b6(0x1f5)](Date[_0x3e77b6(0x1f8)](),0x3e8));},_0x126b57[_0x3c3960(0x1c0)]=_0xbe95db=>{const _0xa5fb73=_0x3c3960;stat[_0xa5fb73(0x222)]+=0x1,stat[_0xa5fb73(0x226)]+=_0xbe95db['length'],stat[_0xa5fb73(0x1ee)]=Math[_0xa5fb73(0x1f6)](_0x492c06[_0xa5fb73(0x22b)](Date[_0xa5fb73(0x1f8)](),0x3e8));},_0x126b57[_0x3c3960(0x19f)]=(..._0x52e133)=>{stat['packet_received']+=0x1;},this[_0x3c3960(0x1ea)](_0x126b57);const _0xadc896=new BuddyListener();_0xadc896[_0x3c3960(0x1a8)]=_0x4f776a=>{const _0x1b0853=_0x3c3960;rawFriends[_0x1b0853(0x1b7)]=0x0,rawFriends[_0x1b0853(0x21c)](..._0x4f776a);for(const _0xc38c63 of _0x4f776a){for(const _0x4a7e50 of _0xc38c63['buddyList']){const _0x5156a1=friends[_0x1b0853(0x227)](_0x4a7e50[_0x1b0853(0x1cf)]);uid2UinMap[_0x4a7e50[_0x1b0853(0x1cf)]]=_0x4a7e50[_0x1b0853(0x249)],_0x5156a1?Object['assign'](_0x5156a1,_0x4a7e50):friends[_0x1b0853(0x1b2)](_0x4a7e50[_0x1b0853(0x1cf)],_0x4a7e50);}}},this[_0x3c3960(0x1ea)](_0xadc896),this[_0x3c3960(0x200)][_0x3c3960(0x1f9)]()[_0x3c3960(0x243)](!![])[_0x3c3960(0x20d)](_0x4381ba=>{});const _0x8df30=new ProfileListener();_0x8df30[_0x3c3960(0x24c)]=_0x14a593=>{const _0x378f0f=_0x3c3960;_0x492c06[_0x378f0f(0x218)](_0x14a593['uid'],selfInfo[_0x378f0f(0x1cf)])&&Object['assign'](selfInfo,_0x14a593);},_0x8df30[_0x3c3960(0x20c)]=_0x937f4=>{},this[_0x3c3960(0x1ea)](_0x8df30);const _0x589f47=new GroupListener();_0x589f47[_0x3c3960(0x1d1)]=(_0x3a4cba,_0xb7ccf2)=>{const _0x5ba694=_0x3c3960;_0xb7ccf2[_0x5ba694(0x1a6)](_0x352ea3=>{const _0x100f72=_0x5ba694,_0x4b347b=groups[_0x100f72(0x227)](_0x352ea3['groupCode']);_0x4b347b&&_0x352ea3[_0x100f72(0x232)]===_0x4b347b[_0x100f72(0x232)]?Object['assign'](_0x4b347b,_0x352ea3):groups[_0x100f72(0x1b2)](_0x352ea3[_0x100f72(0x1b0)],_0x352ea3);const _0x3274ea=this[_0x100f72(0x200)]['getGroupService']()[_0x100f72(0x1da)](_0x352ea3[_0x100f72(0x1b0)],_0x492c06[_0x100f72(0x198)]);this[_0x100f72(0x200)]['getGroupService']()[_0x100f72(0x199)](_0x3274ea,undefined,0xbb8)[_0x100f72(0x20d)](_0x3de5b5=>{});});},_0x589f47[_0x3c3960(0x1cb)]=_0x6a42d8=>{const _0x53fd4e=_0x3c3960,_0x27fdd4=_0x6a42d8['sceneId'][_0x53fd4e(0x1af)]('_')[0x0];if(groupMembers['has'](_0x27fdd4)){const _0x586187=groupMembers[_0x53fd4e(0x227)](_0x27fdd4);_0x6a42d8[_0x53fd4e(0x189)][_0x53fd4e(0x1ec)]((_0x3d263d,_0x2cdf30)=>{const _0x387585=_0x53fd4e,_0x1634fb=_0x586187[_0x387585(0x227)](_0x2cdf30);_0x1634fb?Object[_0x387585(0x1df)](_0x1634fb,_0x3d263d):_0x586187[_0x387585(0x1b2)](_0x2cdf30,_0x3d263d);});}else groupMembers[_0x53fd4e(0x1b2)](_0x27fdd4,_0x6a42d8['infos']);},_0x589f47['onMemberInfoChange']=(_0x15b7d6,_0x2ab851,_0x38748b)=>{const _0x103a8a=_0x3c3960;_0x2ab851===0x0&&_0x38748b[_0x103a8a(0x227)](selfInfo[_0x103a8a(0x1cf)])&&_0x38748b[_0x103a8a(0x227)](selfInfo[_0x103a8a(0x1cf)])?.['isDelete']&&_0x492c06[_0x103a8a(0x18e)](setTimeout,()=>{const _0xf68df3=_0x103a8a;groups[_0xf68df3(0x225)](_0x15b7d6);},0x1388);_0x38748b['forEach']((_0x2acfc4,_0x22ea65)=>{const _0x19d713=_0x103a8a;uid2UinMap[_0x22ea65]=_0x2acfc4[_0x19d713(0x249)];});const _0x18b59b=groupMembers['get'](_0x15b7d6);_0x18b59b?_0x38748b[_0x103a8a(0x1ec)]((_0x34a978,_0x472877)=>{const _0x784447=_0x103a8a,_0xa9d079=_0x18b59b[_0x784447(0x227)](_0x472877);_0xa9d079?Object[_0x784447(0x1df)](_0xa9d079,_0x34a978):_0x18b59b[_0x784447(0x1b2)](_0x472877,_0x34a978);}):groupMembers['set'](_0x15b7d6,_0x38748b);},this['addListener'](_0x589f47);}[_0x4d5b81(0x1ea)](_0x49b65d){const _0x2d4d61=_0x4d5b81,_0x54c609={'GmXTm':_0x2d4d61(0x1b5),'VcXVk':'GroupListener','TRFcU':_0x2d4d61(0x22c),'fxfPl':_0x2d4d61(0x208)};_0x49b65d=new Proxy(_0x49b65d,this[_0x2d4d61(0x1dd)]);switch(_0x49b65d['constructor'][_0x2d4d61(0x19b)]){case _0x54c609[_0x2d4d61(0x1ca)]:{return this['session']['getBuddyService']()[_0x2d4d61(0x22e)](new _0x530a76['NodeIKernelBuddyListener'](_0x49b65d));}case _0x54c609[_0x2d4d61(0x210)]:{return this['session']['getGroupService']()[_0x2d4d61(0x1d7)](new _0x530a76[(_0x2d4d61(0x1d5))](_0x49b65d));}case _0x54c609[_0x2d4d61(0x23d)]:{return this[_0x2d4d61(0x200)][_0x2d4d61(0x1c1)]()['addKernelMsgListener'](new _0x530a76[(_0x2d4d61(0x1f7))](_0x49b65d));}case _0x54c609[_0x2d4d61(0x193)]:{return this['session'][_0x2d4d61(0x21f)]()['addKernelProfileListener'](new _0x530a76[(_0x2d4d61(0x217))](_0x49b65d));}default:return-0x1;}}['onLoginSuccess'](_0x54cc77){const _0x12b4df=_0x4d5b81;NTEventDispatch[_0x12b4df(0x219)]({'ListenerMap':_0x530a76,'WrapperSession':this['session']}),this[_0x12b4df(0x212)][_0x12b4df(0x21c)](_0x54cc77);}async[_0x4d5b81(0x18f)](_0x4546fa){const _0x1bfd14=_0x4d5b81,_0x1825a3={'VXoCl':function(_0xf0db58,_0x3ba6b2){return _0xf0db58!==_0x3ba6b2;},'PolJY':_0x1bfd14(0x1f2)},_0x52f44e=await this[_0x1bfd14(0x247)][_0x1bfd14(0x1e4)]();if(_0x1825a3[_0x1bfd14(0x1ba)](_0x52f44e[_0x1bfd14(0x1b8)],0x0))throw new Error('没有可快速登录的QQ号');const _0x3f4710=_0x52f44e[_0x1bfd14(0x201)][_0x1bfd14(0x1d0)](_0x224e34=>_0x224e34['uin']===_0x4546fa);if(!_0x3f4710||!_0x3f4710?.[_0x1bfd14(0x1a7)])throw new Error(_0x4546fa+_0x1bfd14(0x1a0));await sleep(0x3e8);const _0x2a04b3=await this['loginService'][_0x1bfd14(0x192)](_0x4546fa);if(!_0x2a04b3[_0x1bfd14(0x1b8)])throw new Error(_0x1825a3[_0x1bfd14(0x1ae)]+_0x2a04b3[_0x1bfd14(0x1e8)][_0x1bfd14(0x22f)]);return _0x2a04b3;}async[_0x4d5b81(0x196)](_0x34b0fc){const _0x2433cf=_0x4d5b81,_0x11bbd9={'YmQof':_0x2433cf(0x1d2)};return new Promise((_0x56443f,_0x4e1d9e)=>{const _0xeb932c=_0x2433cf,_0x2da0dc={'IHlcL':_0x11bbd9[_0xeb932c(0x205)],'CNErp':_0xeb932c(0x190),'Iuimk':function(_0x522ff6,_0x190072,_0x2abaae,_0x30a29b){return _0x522ff6(_0x190072,_0x2abaae,_0x30a29b);}};this[_0xeb932c(0x1c2)][_0xeb932c(0x1e1)]=_0x4ebd22=>{const _0xc41ecf=_0xeb932c,_0x5d95e2=_0x4ebd22['pngBase64QrcodeData'][_0xc41ecf(0x1af)](_0x2da0dc['IHlcL'])[0x1],_0x54d611=Buffer[_0xc41ecf(0x229)](_0x5d95e2,_0x2da0dc[_0xc41ecf(0x24b)]);_0x2da0dc[_0xc41ecf(0x1c4)](_0x34b0fc,_0x4ebd22[_0xc41ecf(0x1a9)],_0x4ebd22['pngBase64QrcodeData'],_0x54d611);},this['loginService']['getQRCodePicture']();});}async['passwordLogin'](_0x452741,_0x474dab,_0x2f17ef,_0x17e0c7,_0x26ed2e){const _0x383328=_0x4d5b81,_0x2e5d11={'jBfdp':'md5','HevnZ':_0x383328(0x1e9),'qvkEU':function(_0x4df669,_0x33ab99){return _0x4df669&&_0x33ab99;},'xuQrv':function(_0x105a71,_0x4351d7){return _0x105a71||_0x4351d7;},'PgTNk':function(_0x1a5599,_0x28f3ff){return _0x1a5599||_0x28f3ff;},'rwqlC':function(_0x552163,_0x206966){return _0x552163(_0x206966);},'iKJIm':_0x383328(0x1ac),'ICxIh':'140022013'},_0x1d55e0=_0x52fd38[_0x383328(0x23f)](_0x2e5d11[_0x383328(0x1c7)])[_0x383328(0x19d)](_0x474dab)[_0x383328(0x1e3)](_0x2e5d11['HevnZ']),_0x294997={'uin':_0x452741,'passwordMd5':_0x1d55e0,'step':_0x2e5d11[_0x383328(0x1ad)](_0x2f17ef,_0x17e0c7)&&_0x26ed2e?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x2e5d11['xuQrv'](_0x2f17ef,''),'proofWaterRand':_0x17e0c7||'','proofWaterSid':_0x2e5d11[_0x383328(0x1c8)](_0x26ed2e,'')};await this['loginService']['getLoginList'](),await _0x2e5d11[_0x383328(0x1fa)](sleep,0x3e8);const _0x1ef480=await this[_0x383328(0x247)][_0x383328(0x1ff)](_0x294997);switch(_0x1ef480['result']){case'0':{break;}case _0x2e5d11[_0x383328(0x22a)]:{break;}case'4':case _0x2e5d11['ICxIh']:default:}}async[_0x4d5b81(0x1cd)](){const _0x4c096f=_0x4d5b81,_0xf5249b=await this[_0x4c096f(0x247)][_0x4c096f(0x1e4)]();return _0xf5249b;}}export const napCatCore=new NapCatCore();