const _0x182c01=_0x37ec;(function(_0x4c0563,_0xd39373){const _0xe6162a=_0x37ec,_0x5680ac=_0x4c0563();while(!![]){try{const _0x39d066=parseInt(_0xe6162a(0x1fe))/0x1+parseInt(_0xe6162a(0x1d7))/0x2*(-parseInt(_0xe6162a(0x1c1))/0x3)+parseInt(_0xe6162a(0x1cd))/0x4+-parseInt(_0xe6162a(0x1c4))/0x5*(parseInt(_0xe6162a(0x1da))/0x6)+parseInt(_0xe6162a(0x1ed))/0x7*(-parseInt(_0xe6162a(0x200))/0x8)+-parseInt(_0xe6162a(0x1ca))/0x9*(-parseInt(_0xe6162a(0x1f5))/0xa)+-parseInt(_0xe6162a(0x1dd))/0xb;if(_0x39d066===_0xd39373)break;else _0x5680ac['push'](_0x5680ac['shift']());}catch(_0x316414){_0x5680ac['push'](_0x5680ac['shift']());}}}(_0x4fb7,0x2eeb3));import{ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x20595c from'path';function _0x37ec(_0x2ecf25,_0x41abab){const _0x4fb794=_0x4fb7();return _0x37ec=function(_0x37ec05,_0x4a989d){_0x37ec05=_0x37ec05-0x1bf;let _0x5049d5=_0x4fb794[_0x37ec05];return _0x5049d5;},_0x37ec(_0x2ecf25,_0x41abab);}import _0x34e7f3 from'fs';import _0x33be1a from'fs/promises';function _0x4fb7(){const _0x1ec9c8=['275065gXUALw','uploadFile','18552zCBVpX','图片url获取失败','GLYTh','private_rkey','addCacheScanedPaths','downloadRichMedia','copyFile','128259SBNjxV','existsSync','lFVrw','85MvmbWB','hotUpdate','fileUuid','getHotUpdateCachePath','getStorageCleanService','getChatCacheList','2909799VJrvJJ','tmp','clearCache','1425204tOGjWi','set','/download','setCacheSilentScan','includes','getChatCacheInfo','getImageSize','join','CJsxS','fUqkB','2soUIoA','downloadMedia','group_rkey','83208gMVvVX','gFOUf','onRichMediaDownloadComplete','3971902KykvHa','PIC','addListener','unlink','session','getFileType','toUpperCase','XCYXp','getRichMediaFilePathForGuild','DjmzC','util','/gchatpic_new/0/0-0-','kvdYl','originImageUrl','scanCache','&rkey=','371xjzazs','getMsgService','getCacheSessionPathList','RDPvY','EwykS','clearChatCache','basename','getFileSize','10pNIvJH','clearChatCacheInfo','onLoginSuccess','clearCacheDataByKeys','startsWith','delete','addCacheScannedPaths','md5HexStr','TUkNZ'];_0x4fb7=function(){return _0x1ec9c8;};return _0x4fb7();}import{logDebug}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x3db8e8 from'file-type';import{MsgListener}from'@/core/listeners';import _0x2dbc23 from'image-size';import{sessionConfig}from'@/core/sessionConfig';import{randomUUID}from'crypto';import{rkeyManager}from'../utils/rkey';import{AsyncQueue}from'@/common/utils/AsyncQueue';const getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x182c01(0x1dc)]=_0x2dca1d=>{const _0x2e9e2f=_0x182c01;for(const [_0x228a7a,_0x1fcb2b]of downloadMediaTasks){_0x1fcb2b(_0x2dca1d),downloadMediaTasks[_0x2e9e2f(0x1fa)](_0x228a7a);}},setTimeout(()=>{const _0x3b3f73=_0x182c01;napCatCore[_0x3b3f73(0x1f7)](()=>{const _0x2aa762=_0x3b3f73;napCatCore[_0x2aa762(0x1df)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async[_0x182c01(0x1e2)](_0x524df7){return _0x3db8e8['fileTypeFromFile'](_0x524df7);}static async['copyFile'](_0x475278,_0x37f0db){const _0x52b40f=_0x182c01;await napCatCore[_0x52b40f(0x1e7)][_0x52b40f(0x1c0)](_0x475278,_0x37f0db);}static async[_0x182c01(0x1f4)](_0x45d7a8){const _0x41daea=_0x182c01;return await napCatCore[_0x41daea(0x1e7)][_0x41daea(0x1f4)](_0x45d7a8);}static async[_0x182c01(0x1ff)](_0x2716d5,_0x5cf8ef=ElementType[_0x182c01(0x1de)],_0x5a3836=0x0){const _0x5824ad=_0x182c01,_0x25d1fe={'TUkNZ':function(_0xa7e13d,_0x14c13b){return _0xa7e13d===_0x14c13b;}},_0x1e5575=await calculateFileMD5(_0x2716d5);let _0x29f85f=(await NTQQFileApi[_0x5824ad(0x1e2)](_0x2716d5))?.['ext']||'';_0x29f85f&&(_0x29f85f='.'+_0x29f85f);let _0xf7fc35=''+_0x20595c[_0x5824ad(0x1f3)](_0x2716d5);_0x25d1fe[_0x5824ad(0x1fd)](_0xf7fc35['indexOf']('.'),-0x1)&&(_0xf7fc35+=_0x29f85f);const _0x12780e=napCatCore[_0x5824ad(0x1e1)][_0x5824ad(0x1ee)]()[_0x5824ad(0x1e5)]({'md5HexStr':_0x1e5575,'fileName':_0xf7fc35,'elementType':_0x5cf8ef,'elementSubType':_0x5a3836,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x5824ad(0x1c0)](_0x2716d5,_0x12780e);const _0x563c6c=await NTQQFileApi[_0x5824ad(0x1f4)](_0x2716d5);return{'md5':_0x1e5575,'fileName':_0xf7fc35,'path':_0x12780e,'fileSize':_0x563c6c,'ext':_0x29f85f};}static async[_0x182c01(0x1d8)](_0x420bce,_0xd13b68,_0x517979,_0x1b8260,_0x11d420,_0x24a0de,_0x282998=0x3e8*0x3c*0x2,_0x31d01c=![]){const _0x3cfd1e=_0x182c01,_0x1cbffd={'Xqfpp':function(_0x44c901,_0x5c524a){return _0x44c901(_0x5c524a);},'EBYCb':'下载超时','yrXSm':function(_0x481c00){return _0x481c00();},'lFVrw':function(_0x1d6ec4,_0x59d7b8,_0x4cd9ce){return _0x1d6ec4(_0x59d7b8,_0x4cd9ce);}};if(_0x24a0de&&_0x34e7f3[_0x3cfd1e(0x1c2)](_0x24a0de)){if(_0x31d01c)try{await _0x33be1a[_0x3cfd1e(0x1e0)](_0x24a0de);}catch(_0x5cdbf0){}else return _0x24a0de;}return new Promise((_0x2a77a0,_0x4b4278)=>{const _0xf45fe=_0x3cfd1e,_0x2c62f1={'gFOUf':function(_0x53397e,_0x2c670c){return _0x1cbffd['Xqfpp'](_0x53397e,_0x2c670c);},'RDPvY':_0x1cbffd['EBYCb']};let _0x4d37fc=![];const _0x251e08=_0x55744b=>{const _0x25444f=_0x37ec;if(_0x55744b['msgId']===_0x420bce){_0x4d37fc=!![];let _0xdb2d0e=_0x55744b['filePath'];if(_0xdb2d0e[_0x25444f(0x1f9)]('\x5c')){const _0xbfe8a7=sessionConfig['defaultFileDownloadPath'];_0xdb2d0e=_0x20595c[_0x25444f(0x1d4)](_0xbfe8a7,_0xdb2d0e);}_0x2a77a0(_0xdb2d0e);}};downloadMediaTasks[_0xf45fe(0x1ce)](_0x1cbffd['yrXSm'](randomUUID),_0x251e08),_0x1cbffd[_0xf45fe(0x1c3)](setTimeout,()=>{const _0x557859=_0xf45fe;!_0x4d37fc&&_0x2c62f1[_0x557859(0x1db)](_0x4b4278,_0x2c62f1[_0x557859(0x1f0)]);},_0x282998),napCatCore[_0xf45fe(0x1e1)][_0xf45fe(0x1ee)]()[_0xf45fe(0x1bf)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x420bce,'chatType':_0xd13b68,'peerUid':_0x517979,'elementId':_0x1b8260,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x11d420});});}static async[_0x182c01(0x1d3)](_0x2e76c4){const _0x2fef2d={'XCYXp':function(_0x821c0a,_0x5c4847){return _0x821c0a(_0x5c4847);},'kvdYl':function(_0x23e7f0,_0x2fc052,_0xb073b6){return _0x23e7f0(_0x2fc052,_0xb073b6);}};return new Promise((_0x7327b,_0x5c00c8)=>{const _0x1ab02a=_0x37ec,_0x20841c={'fUqkB':function(_0x28f733,_0x46f742){const _0x81d978=_0x37ec;return _0x2fef2d[_0x81d978(0x1e4)](_0x28f733,_0x46f742);},'DjmzC':function(_0x21257e,_0x563c99){const _0x591d23=_0x37ec;return _0x2fef2d[_0x591d23(0x1e4)](_0x21257e,_0x563c99);}};_0x2fef2d[_0x1ab02a(0x1e9)](_0x2dbc23,_0x2e76c4,(_0x1160e6,_0x3da680)=>{const _0x3a4102=_0x1ab02a;_0x1160e6?_0x20841c[_0x3a4102(0x1d6)](_0x5c00c8,_0x1160e6):_0x20841c[_0x3a4102(0x1e6)](_0x7327b,_0x3da680);});});}static async['getImageUrl'](_0x74087a,_0x3dee05){const _0x862bed=_0x182c01,_0x1f40a2={'ucANr':_0x862bed(0x1cf),'EwykS':_0x862bed(0x1ec),'CJsxS':function(_0x3a6588,_0x28ca9e){return _0x3a6588+_0x28ca9e;},'VMppc':function(_0x3be852,_0x3516ca){return _0x3be852||_0x3516ca;},'GLYTh':function(_0x31f2ed,_0x22b4f5,_0x2cad68){return _0x31f2ed(_0x22b4f5,_0x2cad68);},'fSGPB':_0x862bed(0x201)};if(!_0x74087a)return'';const _0x5436d7=_0x74087a[_0x862bed(0x1ea)],_0x5c3b32=_0x74087a[_0x862bed(0x1fc)],_0x2d103f=_0x74087a[_0x862bed(0x1fc)],_0x559f92=_0x74087a[_0x862bed(0x1c6)];if(_0x5436d7){if(_0x5436d7['startsWith'](_0x1f40a2['ucANr'])){if(_0x5436d7[_0x862bed(0x1d1)](_0x1f40a2[_0x862bed(0x1f1)]))return _0x1f40a2[_0x862bed(0x1d5)](IMAGE_HTTP_HOST_NT,_0x5436d7);const _0x3be4fd=await rkeyManager['getRkey'](),_0x323683=_0x3dee05?_0x3be4fd[_0x862bed(0x203)]:_0x3be4fd[_0x862bed(0x1d9)];return IMAGE_HTTP_HOST_NT+_0x5436d7+(''+_0x323683);}else return IMAGE_HTTP_HOST+_0x5436d7;}else{if(_0x1f40a2['VMppc'](_0x2d103f,_0x5c3b32))return IMAGE_HTTP_HOST+_0x862bed(0x1e8)+(_0x2d103f||_0x5c3b32)[_0x862bed(0x1e3)]()+'/0';}return _0x1f40a2[_0x862bed(0x202)](logDebug,_0x1f40a2['fSGPB'],_0x74087a),'';}}export class NTQQFileCacheApi{static async[_0x182c01(0x1d0)](_0x51cc03=!![]){return'';}static[_0x182c01(0x1ef)](){return'';}static[_0x182c01(0x1cc)](_0x18d40c=[_0x182c01(0x1cb),_0x182c01(0x1c5)]){const _0x5c33cc=_0x182c01;return napCatCore[_0x5c33cc(0x1e1)][_0x5c33cc(0x1c8)]()[_0x5c33cc(0x1f8)](_0x18d40c);}static[_0x182c01(0x1fb)](_0x14023d={}){const _0x223aac=_0x182c01;return napCatCore['session'][_0x223aac(0x1c8)]()[_0x223aac(0x204)](_0x14023d);}static[_0x182c01(0x1eb)](){const _0x2bae87=_0x182c01;return napCatCore[_0x2bae87(0x1e1)]['getStorageCleanService']()[_0x2bae87(0x1eb)]();}static[_0x182c01(0x1c7)](){return'';}static['getDesktopTmpPath'](){return'';}static[_0x182c01(0x1c9)](_0x417f84,_0x106795=0x3e8,_0x47d341=0x0){const _0x45bfa7=_0x182c01;return napCatCore[_0x45bfa7(0x1e1)]['getStorageCleanService']()[_0x45bfa7(0x1d2)](_0x417f84,_0x106795,0x1,_0x47d341);}static['getFileCacheInfo'](_0x80ccc3,_0x191cfc=0x3e8,_0x51d69d){const _0x578710=_0x51d69d?_0x51d69d:{'fileType':_0x80ccc3};}static async[_0x182c01(0x1f2)](_0x390989=[],_0x272a21=[]){const _0x1525d0=_0x182c01;return napCatCore['session'][_0x1525d0(0x1c8)]()[_0x1525d0(0x1f6)](_0x390989,_0x272a21);}}