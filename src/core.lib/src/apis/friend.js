const _0x15086c=_0x3280;(function(_0x13f8b0,_0x1e4eb1){const _0x9fc419=_0x3280,_0x701223=_0x13f8b0();while(!![]){try{const _0x403c00=-parseInt(_0x9fc419(0x1b2))/0x1+parseInt(_0x9fc419(0x1c2))/0x2*(parseInt(_0x9fc419(0x1a6))/0x3)+-parseInt(_0x9fc419(0x1a7))/0x4*(-parseInt(_0x9fc419(0x1ac))/0x5)+parseInt(_0x9fc419(0x1bc))/0x6+parseInt(_0x9fc419(0x1aa))/0x7+-parseInt(_0x9fc419(0x1b6))/0x8+-parseInt(_0x9fc419(0x1b7))/0x9;if(_0x403c00===_0x1e4eb1)break;else _0x701223['push'](_0x701223['shift']());}catch(_0x4f4150){_0x701223['push'](_0x701223['shift']());}}}(_0x21eb,0x4499a));import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';function _0x3280(_0x506c37,_0x451e32){const _0x21eb52=_0x21eb();return _0x3280=function(_0x3280f3,_0x12e778){_0x3280f3=_0x3280f3-0x1a4;let _0x3622f6=_0x21eb52[_0x3280f3];return _0x3622f6;},_0x3280(_0x506c37,_0x451e32);}import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';function _0x21eb(){const _0x18d9a0=['uin','delete','buddyList','then','itFYu','6686MmAQVG','onBuddyListChange','fSWUJ','429xlzuCm','4EVAdeB','reqTime','getBuddyService','1749566Gbwmqc','获取好友列表超时','1249730BTUoqo','addListener','handleFriendRequest','mTxTV','开始获取好友列表','nOiDK','249995DBvIbQ','EZvzT','bWtOT','onLoginSuccess','1634048mqZvbm','2649357izTKKh','getFriends','session','getBuddyList','uid','310062YKWlqq'];_0x21eb=function(){return _0x18d9a0;};return _0x21eb();}const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x15086c(0x1a4)]=_0xc3986d=>{const _0x38e31b=_0x15086c,_0x4cf7b0={'itFYu':function(_0x32f6a5,_0x5a61aa){return _0x32f6a5(_0x5a61aa);}};for(const [_0x59e1cd,_0x16ea6e]of buddyChangeTasks){_0x4cf7b0[_0x38e31b(0x1c1)](_0x16ea6e,_0xc3986d),buddyChangeTasks[_0x38e31b(0x1be)](_0x59e1cd);}},setTimeout(()=>{const _0x269728=_0x15086c;napCatCore[_0x269728(0x1b5)](()=>{const _0x22d827=_0x269728;napCatCore[_0x22d827(0x1ad)](buddyListener);});},0x64);export class NTQQFriendApi{static async[_0x15086c(0x1b8)](_0x589ba6=![]){const _0x78aa4=_0x15086c,_0x37804e={'EZvzT':function(_0x244dfa,_0xe8e2dc,_0x360085){return _0x244dfa(_0xe8e2dc,_0x360085);},'SyhEh':_0x78aa4(0x1b0),'fSWUJ':function(_0x1f4ef0,_0x2146c2){return _0x1f4ef0(_0x2146c2);},'bWtOT':_0x78aa4(0x1ab)};return new Promise((_0x38e324,_0xb08b40)=>{const _0x219346=_0x78aa4,_0x24271e={'mTxTV':function(_0x389adc,_0x27d3cf){const _0x4d8b9a=_0x3280;return _0x37804e[_0x4d8b9a(0x1a5)](_0x389adc,_0x27d3cf);},'cqPQK':function(_0x3bbadd,_0x121b08){return _0x3bbadd(_0x121b08);},'nOiDK':_0x37804e[_0x219346(0x1b4)]};let _0x152d1d=![];_0x37804e['EZvzT'](setTimeout,()=>{const _0x194c34=_0x219346;!_0x152d1d&&(_0x24271e[_0x194c34(0x1af)](logDebug,_0x194c34(0x1ab)),_0x24271e['cqPQK'](_0xb08b40,_0x24271e[_0x194c34(0x1b1)]));},0x1388);const _0x396b98=[],_0x2aa912=_0x32b883=>{const _0x517fd3=_0x219346;for(const _0x51a18e of _0x32b883){for(const _0x53758e of _0x51a18e[_0x517fd3(0x1bf)]){_0x396b98['push'](_0x53758e),uid2UinMap[_0x53758e[_0x517fd3(0x1bb)]]=_0x53758e[_0x517fd3(0x1bd)];}}_0x152d1d=!![],_0x24271e[_0x517fd3(0x1af)](_0x38e324,_0x396b98);};buddyChangeTasks['set'](randomUUID(),_0x2aa912),napCatCore[_0x219346(0x1b9)][_0x219346(0x1a9)]()[_0x219346(0x1ba)](_0x589ba6)[_0x219346(0x1c0)](_0x433180=>{const _0x414a6b=_0x219346;_0x37804e[_0x414a6b(0x1b3)](logDebug,_0x37804e['SyhEh'],_0x433180);});});}static async[_0x15086c(0x1ae)](_0x4955fd,_0x3e8561){const _0x4068ed=_0x15086c;napCatCore['session'][_0x4068ed(0x1a9)]()?.['approvalFriendRequest']({'friendUid':_0x4955fd['friendUid'],'reqTime':_0x4955fd[_0x4068ed(0x1a8)],'accept':_0x3e8561});}}