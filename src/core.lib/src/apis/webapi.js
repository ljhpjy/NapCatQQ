const _0x3b5a00=_0x3dcf;(function(_0x52218f,_0xeabdc){const _0x1e8137=_0x3dcf,_0x56a1f8=_0x52218f();while(!![]){try{const _0x2f2270=parseInt(_0x1e8137(0x24c))/0x1*(parseInt(_0x1e8137(0x1ce))/0x2)+parseInt(_0x1e8137(0x244))/0x3+parseInt(_0x1e8137(0x1de))/0x4*(parseInt(_0x1e8137(0x1c8))/0x5)+-parseInt(_0x1e8137(0x23d))/0x6+parseInt(_0x1e8137(0x1c7))/0x7+-parseInt(_0x1e8137(0x256))/0x8*(-parseInt(_0x1e8137(0x1ff))/0x9)+parseInt(_0x1e8137(0x247))/0xa*(-parseInt(_0x1e8137(0x1d7))/0xb);if(_0x2f2270===_0xeabdc)break;else _0x56a1f8['push'](_0x56a1f8['shift']());}catch(_0x2d1c61){_0x56a1f8['push'](_0x56a1f8['shift']());}}}(_0x14c0,0xb006c));function _0x14c0(){const _0x457126=['10LOeaQb','&type=','LqODU','pxMKU','mems','642206iSJgVU','cSWbu','vyuje','talkative','lIwQZ','&end=',';\x20skey=','dysyH','getGroupMembers','get','16zymGvg','获取群聊之火失败','legend_list','aAbuM','CTvSF','zACTI','setGroupNotice','push','vJAbF','ERRAL','&page_limit=20','HnMgA','talkativeList','avatar','getPSkey','6409683ETvvtM','15MDGCnI','DVzcB','POST','errcode','jBLVf','eLJfU','4iwcOpF','name','description','nBOxZ','RLZxf','Yxumf','p_skey=','https://qun.qq.com/interactive/honorlist?gc=','mPjys','31786381HarXoi',';\x20uin=o','获取龙王信息失败','RiFBW','BiQyG','获取群聊炽焰失败','legend','365716nkatoE','NpawM','vaPdm','ynWUj','mMiGI','strong_newbie_list','getSkey','eUtpb','BCfVL','ThoMM','talkative_list','length','获取当前群荣耀失败','VwkoG','getGrouptNotice','EMOTION','actorList','getGroupEssenceMsg','DqDPx','AvnCV','jlwZA','dsMWQ','NPlNE','genBkn','retcode','arSPI','uSOjf','vzoyx','dLnto','gKeHw','current_talkative','nuxzg','GroupTime','3747699JzEIaR','vPTLx','parse','RdbCt','dAivE','&bkn=','yZzXU','rlpJa','emotion','performer','lFZHX','Bxaap','jySzW','hyygs','GroupData','fJmXV','now','&text=','NYGge','nRbRz','SMHJX','getGroupHonorInfo','desc','&page_start=','&ft=23&ni=1&n=1&i=1&log_read=1&platform=1&s=-1&n=20','ziWuK','set','charCodeAt','cAVPf','https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn=','cRCRJ','ATdmc','Xvrsp','count','GET','teYFi','fsvKC','SWfjd','https://qun.qq.com/cgi-bin/group_digest/digest_list?bkn=','pXXGL','mVKNS','TALKACTIVE','&group_code=','qun.qq.com','all','RxFyz','BcReq','XpVyY','uin','mkZsT','KPoJu','HttpGetJson','STORONGE_NEWBI','&sort=1&gc=','dzjyH','YEFnB','1|5|4|0|2|3',';\x20p_uin=o','GCleB','HttpGetText','GSJhn','joiPP','5848686ULKdLI','ALL','FOYnW','fmpmI','PERFROMER','&pinned=0&type=1&settings={\x22is_show_edit_card\x22:1,\x22tip_window_type\x22:1,\x22confirm_required\x22:1}','performer_list','3834798TeucMZ','获取快乐源泉失败','trim'];_0x14c0=function(){return _0x457126;};return _0x14c0();}import{WebGroupData,selfInfo}from'@/core/data';import{logDebug}from'@/common/utils/log';function _0x3dcf(_0x43663d,_0x446a61){const _0x14c089=_0x14c0();return _0x3dcf=function(_0x3dcf87,_0x11d252){_0x3dcf87=_0x3dcf87-0x1b9;let _0x1725bf=_0x14c089[_0x3dcf87];return _0x1725bf;},_0x3dcf(_0x43663d,_0x446a61);}import{NTQQUserApi}from'./user';import{RequestUtil}from'@/common/utils/request';export var WebHonorType;(function(_0x15262c){const _0x2f661b=_0x3dcf,_0x3be93c={'aAbuM':_0x2f661b(0x237),'XhDrn':'LEGEND','vzoyx':_0x2f661b(0x1dd),'gJQjx':_0x2f661b(0x23e),'cSWbu':_0x2f661b(0x22b),'lFZHX':_0x2f661b(0x233),'vyuje':'strong_newbie','dAivE':_0x2f661b(0x1ed),'teYFi':_0x2f661b(0x207),'fsvKC':'PERFROMER','IovJl':_0x2f661b(0x208),'fmpmI':'TALKACTIVE','DVzcB':_0x2f661b(0x24f)},_0x49528d=_0x3be93c[_0x2f661b(0x1bb)]['split']('|');let _0xd7f733=0x0;while(!![]){switch(_0x49528d[_0xd7f733++]){case'0':_0x15262c[_0x3be93c['XhDrn']]=_0x3be93c[_0x2f661b(0x1f9)];continue;case'1':_0x15262c[_0x3be93c['gJQjx']]=_0x3be93c[_0x2f661b(0x24d)];continue;case'2':_0x15262c[_0x3be93c[_0x2f661b(0x209)]]=_0x3be93c[_0x2f661b(0x24e)];continue;case'3':_0x15262c[_0x3be93c[_0x2f661b(0x203)]]=_0x3be93c[_0x2f661b(0x222)];continue;case'4':_0x15262c[_0x3be93c[_0x2f661b(0x223)]]=_0x3be93c['IovJl'];continue;case'5':_0x15262c[_0x3be93c[_0x2f661b(0x240)]]=_0x3be93c[_0x2f661b(0x1c9)];continue;}break;}}(WebHonorType||(WebHonorType={})));export class WebApi{static async[_0x3b5a00(0x1ef)](_0x50f3a0,_0x16a2b9){const _0x2d296b=_0x3b5a00,_0x269b7d={'eLJfU':_0x2d296b(0x22a),'SMHJX':function(_0x46b1f1,_0x2b7a59){return _0x46b1f1+_0x2b7a59;},'IZUGt':'p_skey=','mkZsT':_0x2d296b(0x252),'ynWUj':_0x2d296b(0x238),'byTJh':function(_0x453bcb,_0x3154f2){return _0x453bcb+_0x3154f2;},'dLnto':function(_0x156078,_0x5b2e9c){return _0x156078+_0x5b2e9c;},'JvZmp':function(_0x31cffe,_0x1ce79a){return _0x31cffe+_0x1ce79a;},'MfCiN':function(_0x185e94,_0x5b31fc){return _0x185e94+_0x5b31fc;},'BiQyG':_0x2d296b(0x225),'SWfjd':_0x2d296b(0x216),'bRaza':_0x2d296b(0x221)},_0x477be6=(await NTQQUserApi['getPSkey'](['qun.qq.com']))[_0x269b7d[_0x2d296b(0x1cd)]],_0x32a6cd=await NTQQUserApi[_0x2d296b(0x1e4)](),_0x35a981=_0x269b7d[_0x2d296b(0x213)](_0x269b7d[_0x2d296b(0x213)](_0x269b7d['SMHJX'](_0x269b7d[_0x2d296b(0x213)](_0x269b7d[_0x2d296b(0x213)](_0x269b7d[_0x2d296b(0x213)](_0x269b7d['IZUGt'],_0x477be6),_0x269b7d[_0x2d296b(0x230)]),_0x32a6cd),_0x269b7d[_0x2d296b(0x1e1)]),selfInfo[_0x2d296b(0x22f)])+_0x2d296b(0x1d8),selfInfo[_0x2d296b(0x22f)]);if(!_0x32a6cd||!_0x477be6)return undefined;const _0x5dc5a6=WebApi[_0x2d296b(0x1f5)](_0x32a6cd),_0x25b006=_0x269b7d['byTJh'](_0x269b7d[_0x2d296b(0x1fa)](_0x269b7d['dLnto'](_0x269b7d['JvZmp'](_0x269b7d['MfCiN'](_0x269b7d[_0x2d296b(0x1db)],_0x5dc5a6)+_0x2d296b(0x229),_0x50f3a0),_0x269b7d[_0x2d296b(0x224)]),_0x16a2b9),_0x2d296b(0x1c2));let _0xd77d13;try{_0xd77d13=await RequestUtil[_0x2d296b(0x232)](_0x25b006,_0x269b7d['bRaza'],'',{'Cookie':_0x35a981});}catch{return undefined;}if(_0xd77d13[_0x2d296b(0x1f6)]!==0x0)return undefined;return _0xd77d13;}static async[_0x3b5a00(0x254)](_0x596c42,_0x4ed244=!![]){const _0x47930b=_0x3b5a00,_0x58b8c2={'zACTI':function(_0x5a08e9,_0x181f79){return _0x5a08e9>_0x181f79;},'aWWzw':function(_0x2dbf83,_0x4d3336){return _0x2dbf83-_0x4d3336;},'uSOjf':function(_0x32dfe2,_0x147a3c){return _0x32dfe2*_0x147a3c;},'HnMgA':_0x47930b(0x22a),'RdbCt':function(_0x51cc2d,_0x75e6ec){return _0x51cc2d+_0x75e6ec;},'EuusT':function(_0x26ffde,_0x293b49){return _0x26ffde+_0x293b49;},'ziWuK':function(_0x5bd21c,_0xa61870){return _0x5bd21c+_0xa61870;},'mPjys':_0x47930b(0x1d4),'fJmXV':_0x47930b(0x252),'CTvSF':function(_0x295d35,_0x1c8d28){return _0x295d35||_0x1c8d28;},'nuxzg':'https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=0&end=40&sort=1&gc=','QkjwE':function(_0x1a8ad0,_0x10ac32){return _0x1a8ad0!==_0x10ac32;},'cRCRJ':function(_0x33c939,_0x16b0fc){return _0x33c939/_0x16b0fc;},'GSJhn':function(_0xd18ceb,_0x451e81){return _0xd18ceb<=_0x451e81;},'XpVyY':function(_0x81c7c2,_0x115a36){return _0x81c7c2+_0x115a36;},'DqxmS':function(_0x540e3d,_0x5cf896){return _0x540e3d+_0x5cf896;},'RiFBW':'https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=','BpipL':function(_0x5d5879,_0x45f00c){return _0x5d5879-_0x45f00c;},'gKeHw':_0x47930b(0x251),'LfbEg':function(_0x486c6d,_0x1f1a14){return _0x486c6d*_0x1f1a14;},'hLPoy':_0x47930b(0x234),'Xvrsp':_0x47930b(0x1ca),'YEFnB':function(_0x37ffca,_0x395282){return _0x37ffca<=_0x395282;},'jlwZA':function(_0x46b0ce,_0x3b5d29){return _0x46b0ce!==_0x3b5d29;}};let _0x2db250=new Array();try{let _0x327202=WebGroupData['GroupData'][_0x47930b(0x255)](_0x596c42),_0x2fb7e9=WebGroupData[_0x47930b(0x1fe)][_0x47930b(0x255)](_0x596c42);if(!_0x2fb7e9||_0x58b8c2[_0x47930b(0x1bd)](_0x58b8c2['aWWzw'](Date['now'](),_0x2fb7e9),_0x58b8c2[_0x47930b(0x1f8)](0x708,0x3e8))||!_0x4ed244){const _0x1a3bce=(await NTQQUserApi['getPSkey']([_0x58b8c2['HnMgA']]))[_0x58b8c2[_0x47930b(0x1c3)]],_0x5c508d=await NTQQUserApi['getSkey'](),_0x41709f=_0x58b8c2[_0x47930b(0x202)](_0x58b8c2['EuusT'](_0x58b8c2[_0x47930b(0x218)](_0x58b8c2[_0x47930b(0x1d6)],_0x1a3bce)+_0x58b8c2[_0x47930b(0x20e)],_0x5c508d),_0x47930b(0x238))+selfInfo['uin'];if(_0x58b8c2[_0x47930b(0x1bc)](!_0x5c508d,!_0x1a3bce))return _0x2db250;const _0x484dbd=WebApi[_0x47930b(0x1f5)](_0x5c508d),_0x1ac4f6=[],_0x413ccd=await RequestUtil[_0x47930b(0x232)](_0x58b8c2[_0x47930b(0x202)](_0x58b8c2[_0x47930b(0x1fd)]+_0x596c42,_0x47930b(0x204))+_0x484dbd,_0x47930b(0x1ca),'',{'Cookie':_0x41709f});if(!_0x413ccd?.[_0x47930b(0x220)]||_0x58b8c2['QkjwE'](_0x413ccd?.[_0x47930b(0x1cb)],0x0)||!_0x413ccd?.[_0x47930b(0x24b)])return[];else for(const _0x5ec97c in _0x413ccd['mems']){_0x2db250[_0x47930b(0x1bf)](_0x413ccd['mems'][_0x5ec97c]);}const _0x5c0b77=Math['ceil'](_0x58b8c2[_0x47930b(0x21d)](_0x413ccd[_0x47930b(0x220)],0x28));for(let _0x53d2ac=0x2;_0x58b8c2[_0x47930b(0x23b)](_0x53d2ac,_0x5c0b77);_0x53d2ac++){const _0xc96a4b=RequestUtil[_0x47930b(0x232)](_0x58b8c2[_0x47930b(0x22e)](_0x58b8c2['RdbCt'](_0x58b8c2[_0x47930b(0x202)](_0x58b8c2['DqxmS'](_0x58b8c2['XpVyY'](_0x58b8c2[_0x47930b(0x1da)],_0x58b8c2[_0x47930b(0x1f8)](_0x58b8c2['BpipL'](_0x53d2ac,0x1),0x28))+_0x58b8c2[_0x47930b(0x1fb)],_0x58b8c2['LfbEg'](_0x53d2ac,0x28))+_0x58b8c2['hLPoy'],_0x596c42),_0x47930b(0x204)),_0x484dbd),_0x58b8c2[_0x47930b(0x21f)],'',{'Cookie':_0x41709f});_0x1ac4f6[_0x47930b(0x1bf)](_0xc96a4b);}for(let _0x4f178a=0x1;_0x58b8c2[_0x47930b(0x236)](_0x4f178a,_0x5c0b77);_0x4f178a++){const _0xf59b76=await _0x1ac4f6[_0x4f178a];if(!_0xf59b76?.[_0x47930b(0x220)]||_0x58b8c2[_0x47930b(0x1f2)](_0xf59b76?.[_0x47930b(0x1cb)],0x0)||!_0xf59b76?.[_0x47930b(0x24b)])continue;for(const _0x37b539 in _0xf59b76[_0x47930b(0x24b)]){_0x2db250['push'](_0xf59b76[_0x47930b(0x24b)][_0x37b539]);}}WebGroupData[_0x47930b(0x20d)]['set'](_0x596c42,_0x2db250),WebGroupData[_0x47930b(0x1fe)][_0x47930b(0x219)](_0x596c42,Date[_0x47930b(0x20f)]());}else _0x2db250=_0x327202;}catch{return _0x2db250;}return _0x2db250;}static async[_0x3b5a00(0x1be)](_0x5ff547,_0xc5cc1c=''){const _0x2245c6=_0x3b5a00,_0x51d4b1={'vJAbF':'qun.qq.com','eUtpb':function(_0x48c619,_0x49eacb){return _0x48c619+_0x49eacb;},'LqODU':function(_0x4fdc38,_0x444a){return _0x4fdc38+_0x444a;},'IawTQ':_0x2245c6(0x1d4),'mVKNS':_0x2245c6(0x252),'GCleB':';\x20p_uin=o','LIMtu':function(_0xe796ac,_0x4848f5){return _0xe796ac+_0x4848f5;},'AvnCV':function(_0x2e952d,_0x383cbe){return _0x2e952d+_0x383cbe;},'xUygb':'qid=','rlpJa':_0x2245c6(0x204),'RLZxf':_0x2245c6(0x210),'uCiHY':function(_0x25652a,_0x40f3b9){return _0x25652a+_0x40f3b9;}},_0x2ff123=(await NTQQUserApi['getPSkey']([_0x2245c6(0x22a)]))[_0x51d4b1[_0x2245c6(0x1c0)]],_0x4d99bb=await NTQQUserApi[_0x2245c6(0x1e4)](),_0x71193a=_0x51d4b1[_0x2245c6(0x1e5)](_0x51d4b1[_0x2245c6(0x249)](_0x51d4b1[_0x2245c6(0x1e5)](_0x51d4b1[_0x2245c6(0x249)](_0x51d4b1[_0x2245c6(0x249)](_0x51d4b1['IawTQ'],_0x2ff123),_0x51d4b1[_0x2245c6(0x227)]),_0x4d99bb),_0x51d4b1[_0x2245c6(0x239)]),selfInfo[_0x2245c6(0x22f)]);let _0x50fc89=undefined;if(!_0x4d99bb||!_0x2ff123)return undefined;const _0x3e741e=WebApi[_0x2245c6(0x1f5)](_0x4d99bb),_0x23c77c=_0x51d4b1[_0x2245c6(0x249)](_0x51d4b1[_0x2245c6(0x1e5)](_0x51d4b1[_0x2245c6(0x1e5)](_0x51d4b1['LIMtu'](_0x51d4b1[_0x2245c6(0x1f1)](_0x51d4b1['xUygb'],_0x5ff547),_0x51d4b1[_0x2245c6(0x206)]),_0x3e741e)+_0x51d4b1[_0x2245c6(0x1d2)],_0xc5cc1c),_0x2245c6(0x242)),_0x2f52ee=_0x51d4b1['uCiHY'](_0x2245c6(0x21c),_0x3e741e);try{return _0x50fc89=await RequestUtil['HttpGetJson'](_0x2f52ee,_0x2245c6(0x221),'',{'Cookie':_0x71193a}),_0x50fc89;}catch(_0x4694e9){return undefined;}return undefined;}static async[_0x3b5a00(0x1ec)](_0x453c61){const _0x7f39ae=_0x3b5a00,_0x34ba5d={'pxMKU':function(_0x38476e,_0xe1502d){return _0x38476e+_0xe1502d;},'Yxumf':function(_0x123b81,_0x169c7d){return _0x123b81+_0x169c7d;},'NYGge':function(_0x42e2eb,_0x39ead8){return _0x42e2eb+_0x39ead8;},'vaPdm':_0x7f39ae(0x1d4),'hyygs':_0x7f39ae(0x252),'nBOxZ':function(_0x3e8e8a,_0x209f50){return _0x3e8e8a+_0x209f50;},'NZgMo':'&qid=','Usrug':_0x7f39ae(0x217),'nRbRz':function(_0x42c481,_0x22c396){return _0x42c481!==_0x22c396;}},_0x3dd006=(await NTQQUserApi['getPSkey']([_0x7f39ae(0x22a)]))[_0x7f39ae(0x22a)],_0x1e9727=await NTQQUserApi[_0x7f39ae(0x1e4)](),_0x109fb8=_0x34ba5d[_0x7f39ae(0x24a)](_0x34ba5d[_0x7f39ae(0x1d3)](_0x34ba5d[_0x7f39ae(0x24a)](_0x34ba5d[_0x7f39ae(0x211)](_0x34ba5d[_0x7f39ae(0x1d3)](_0x34ba5d[_0x7f39ae(0x1e0)],_0x3dd006),_0x34ba5d[_0x7f39ae(0x20c)]),_0x1e9727),_0x7f39ae(0x238)),selfInfo[_0x7f39ae(0x22f)]);let _0x4defc9=undefined;if(!_0x1e9727||!_0x3dd006)return undefined;const _0x3e637c=WebApi['genBkn'](_0x1e9727),_0x1f4b16=_0x34ba5d[_0x7f39ae(0x1d3)](_0x34ba5d[_0x7f39ae(0x24a)](_0x34ba5d[_0x7f39ae(0x1d3)](_0x34ba5d[_0x7f39ae(0x1d1)]('https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=',_0x3e637c),_0x34ba5d['NZgMo']),_0x453c61),_0x34ba5d['Usrug']);try{_0x4defc9=await RequestUtil[_0x7f39ae(0x232)](_0x1f4b16,_0x7f39ae(0x221),'',{'Cookie':_0x109fb8});if(_0x34ba5d[_0x7f39ae(0x212)](_0x4defc9?.['ec'],0x0))return undefined;return _0x4defc9;}catch(_0x11479b){return undefined;}return undefined;}static[_0x3b5a00(0x1f5)](_0x3fd1e8){const _0x298f92=_0x3b5a00,_0x34fea5={'joiPP':function(_0x4c044e,_0x182389){return _0x4c044e||_0x182389;},'lIwQZ':function(_0x39eb1a,_0x4d7c36){return _0x39eb1a<_0x4d7c36;},'FOYnW':function(_0x39d6b6,_0x2e36bd){return _0x39d6b6+_0x2e36bd;},'Bxaap':function(_0x3357ae,_0x52f7e4){return _0x3357ae&_0x52f7e4;}};_0x3fd1e8=_0x34fea5[_0x298f92(0x23c)](_0x3fd1e8,'');let _0x11a202=0x1505;for(let _0x1431a7=0x0;_0x34fea5[_0x298f92(0x250)](_0x1431a7,_0x3fd1e8[_0x298f92(0x1e9)]);_0x1431a7++){const _0x108c74=_0x3fd1e8[_0x298f92(0x21a)](_0x1431a7);_0x11a202=_0x34fea5[_0x298f92(0x23f)](_0x11a202+(_0x11a202<<0x5),_0x108c74);}return _0x34fea5[_0x298f92(0x20a)](_0x11a202,0x7fffffff)['toString']();}static async[_0x3b5a00(0x214)](_0x3249a4,_0x481288){const _0x2293ce=_0x3b5a00,_0x10a32c={'DqDPx':function(_0x177d10,_0x2651b1){return _0x177d10+_0x2651b1;},'KPoJu':function(_0x463e2b,_0x57a76a){return _0x463e2b+_0x57a76a;},'NpawM':function(_0x8749c7,_0x55180f){return _0x8749c7+_0x55180f;},'jySzW':_0x2293ce(0x1d5),'cAVPf':_0x2293ce(0x248),'mMiGI':_0x2293ce(0x221),'BcReq':function(_0x4c5feb,_0x10bf5b){return _0x4c5feb===_0x10bf5b;},'dysyH':function(_0x204c1b,_0x3314f5,_0x43e20a,_0x57ef37){return _0x204c1b(_0x3314f5,_0x43e20a,_0x57ef37);},'XEUcu':_0x2293ce(0x1ea),'BCfVL':_0x2293ce(0x22a),'ATdmc':function(_0x1a3b13,_0x1f3d0d){return _0x1a3b13||_0x1f3d0d;},'HHxhf':function(_0x53e94a,_0x3f849b){return _0x53e94a+_0x3f849b;},'dsMWQ':'p_skey=','NPlNE':_0x2293ce(0x252),'LdkrX':_0x2293ce(0x238),'RxFyz':function(_0x3aa698,_0x5eced5){return _0x3aa698===_0x5eced5;},'ERRAL':function(_0x2f6db4,_0x112032,_0x3686ff){return _0x2f6db4(_0x112032,_0x3686ff);},'AxoSf':_0x2293ce(0x1d9),'vPTLx':function(_0xedfd05,_0x40b749){return _0xedfd05(_0x40b749);},'ZZLvZ':function(_0x15a2dc,_0x195421,_0x100416){return _0x15a2dc(_0x195421,_0x100416);},'jBLVf':function(_0x543dd0,_0x108ce8,_0x34964e){return _0x543dd0(_0x108ce8,_0x34964e);},'pXXGL':function(_0xe9beb6,_0x2b19e7,_0x345b88){return _0xe9beb6(_0x2b19e7,_0x345b88);},'arSPI':_0x2293ce(0x1dc),'dzjyH':function(_0x4e1850,_0x28d06f){return _0x4e1850===_0x28d06f;},'ThoMM':function(_0x30dd5d,_0x21d6c6,_0x3f6780){return _0x30dd5d(_0x21d6c6,_0x3f6780);},'VwkoG':_0x2293ce(0x245),'yZzXU':function(_0x4db8d5,_0x13e1d9){return _0x4db8d5===_0x13e1d9;}},_0x307c50=(await NTQQUserApi[_0x2293ce(0x1c6)]([_0x10a32c[_0x2293ce(0x1e6)]]))[_0x10a32c[_0x2293ce(0x1e6)]],_0x3937c2=await NTQQUserApi['getSkey']();if(_0x10a32c[_0x2293ce(0x21e)](!_0x3937c2,!_0x307c50))return undefined;async function _0xa984c(_0x138566,_0x2824bd){const _0x5cff75=_0x2293ce;let _0x1d8052=_0x10a32c[_0x5cff75(0x1f0)](_0x10a32c[_0x5cff75(0x231)](_0x10a32c[_0x5cff75(0x1df)](_0x10a32c[_0x5cff75(0x20b)],_0x138566),_0x10a32c[_0x5cff75(0x21b)]),_0x2824bd['toString']()),_0x4a7eee='',_0x4a929f;try{_0x4a7eee=await RequestUtil[_0x5cff75(0x23a)](_0x1d8052,_0x10a32c[_0x5cff75(0x1e2)],'',{'Cookie':_0x47e5a3});const _0x57d769=_0x4a7eee['match'](/window\.__INITIAL_STATE__=(.*?);/);return _0x57d769&&(_0x4a929f=JSON[_0x5cff75(0x201)](_0x57d769[0x1][_0x5cff75(0x246)]())),_0x10a32c[_0x5cff75(0x22d)](_0x2824bd,0x1)?_0x4a929f?.[_0x5cff75(0x1c4)]:_0x4a929f?.[_0x5cff75(0x1ee)];}catch(_0x23b170){_0x10a32c[_0x5cff75(0x253)](logDebug,_0x10a32c['XEUcu'],_0x1d8052,_0x23b170);}return undefined;}let _0x1fedad={'group_id':_0x3249a4};const _0x47e5a3=_0x10a32c[_0x2293ce(0x1f0)](_0x10a32c[_0x2293ce(0x231)](_0x10a32c['KPoJu'](_0x10a32c['HHxhf'](_0x10a32c[_0x2293ce(0x231)](_0x10a32c[_0x2293ce(0x1df)](_0x10a32c[_0x2293ce(0x1f3)],_0x307c50)+_0x10a32c[_0x2293ce(0x1f4)],_0x3937c2),_0x10a32c['LdkrX']),selfInfo[_0x2293ce(0x22f)]),_0x2293ce(0x1d8)),selfInfo['uin']);if(_0x10a32c['RxFyz'](_0x481288,WebHonorType[_0x2293ce(0x228)])||_0x10a32c[_0x2293ce(0x22c)](_0x481288,WebHonorType[_0x2293ce(0x23e)]))try{let _0x546c7d=await _0x10a32c[_0x2293ce(0x1c1)](_0xa984c,_0x3249a4,0x1);if(!_0x546c7d)throw new Error(_0x10a32c['AxoSf']);_0x1fedad[_0x2293ce(0x1fc)]={'user_id':_0x546c7d[0x0]?.[_0x2293ce(0x22f)],'avatar':_0x546c7d[0x0]?.[_0x2293ce(0x1c5)],'nickname':_0x546c7d[0x0]?.[_0x2293ce(0x1cf)],'day_count':0x0,'description':_0x546c7d[0x0]?.[_0x2293ce(0x215)]},_0x1fedad['talkative_list']=[];for(const _0xe939a4 of _0x546c7d){_0x1fedad[_0x2293ce(0x1e8)][_0x2293ce(0x1bf)]({'user_id':_0xe939a4?.['uin'],'avatar':_0xe939a4?.[_0x2293ce(0x1c5)],'description':_0xe939a4?.[_0x2293ce(0x215)],'day_count':0x0,'nickname':_0xe939a4?.[_0x2293ce(0x1cf)]});}}catch(_0x2de8fd){_0x10a32c[_0x2293ce(0x200)](logDebug,_0x2de8fd);}if(_0x10a32c['BcReq'](_0x481288,WebHonorType[_0x2293ce(0x241)])||_0x10a32c['BcReq'](_0x481288,WebHonorType[_0x2293ce(0x23e)]))try{let _0x47f068=await _0x10a32c['ZZLvZ'](_0xa984c,_0x3249a4,0x2);if(!_0x47f068)throw new Error(_0x2293ce(0x1b9));_0x1fedad[_0x2293ce(0x243)]=[];for(const _0x1d32a3 of _0x47f068){_0x1fedad[_0x2293ce(0x243)][_0x2293ce(0x1bf)]({'user_id':_0x1d32a3?.[_0x2293ce(0x22f)],'nickname':_0x1d32a3?.[_0x2293ce(0x1cf)],'avatar':_0x1d32a3?.[_0x2293ce(0x1c5)],'description':_0x1d32a3?.[_0x2293ce(0x215)]});}}catch(_0x55c981){logDebug(_0x55c981);}if(_0x10a32c['RxFyz'](_0x481288,WebHonorType['PERFROMER'])||_0x10a32c['RxFyz'](_0x481288,WebHonorType[_0x2293ce(0x23e)]))try{let _0x1a9746=await _0x10a32c[_0x2293ce(0x1cc)](_0xa984c,_0x3249a4,0x3);if(!_0x1a9746)throw new Error('获取群聊炽焰失败');_0x1fedad[_0x2293ce(0x1ba)]=[];for(const _0x26f0a0 of _0x1a9746){_0x1fedad[_0x2293ce(0x1ba)][_0x2293ce(0x1bf)]({'user_id':_0x26f0a0?.[_0x2293ce(0x22f)],'nickname':_0x26f0a0?.[_0x2293ce(0x1cf)],'avatar':_0x26f0a0?.[_0x2293ce(0x1c5)],'desc':_0x26f0a0?.['description']});}}catch(_0x4fa622){_0x10a32c[_0x2293ce(0x226)](logDebug,_0x10a32c[_0x2293ce(0x1f7)],_0x4fa622);}if(_0x10a32c[_0x2293ce(0x235)](_0x481288,WebHonorType['EMOTION'])||_0x481288===WebHonorType['ALL'])try{let _0x177ebd=await _0x10a32c[_0x2293ce(0x1e7)](_0xa984c,_0x3249a4,0x6);if(!_0x177ebd)throw new Error('获取快乐源泉失败');_0x1fedad['emotion_list']=[];for(const _0x3be1d1 of _0x177ebd){_0x1fedad['emotion_list']['push']({'user_id':_0x3be1d1?.['uin'],'nickname':_0x3be1d1?.[_0x2293ce(0x1cf)],'avatar':_0x3be1d1?.[_0x2293ce(0x1c5)],'desc':_0x3be1d1?.[_0x2293ce(0x1d0)]});}}catch(_0x304a9d){_0x10a32c[_0x2293ce(0x1e7)](logDebug,_0x10a32c[_0x2293ce(0x1eb)],_0x304a9d);}return(_0x10a32c[_0x2293ce(0x205)](_0x481288,WebHonorType[_0x2293ce(0x1ed)])||_0x10a32c['BcReq'](_0x481288,WebHonorType[_0x2293ce(0x23e)]))&&(_0x1fedad[_0x2293ce(0x1e3)]=[]),_0x1fedad;}}