import { ModifyProfileParams, User } from '@/core/entities';
import { GeneralCallResult } from '@/core';
export declare class NTQQUserApi {
    static setSelfOnlineStatus(status: number, extStatus: number, batteryStatus: number): Promise<GeneralCallResult>;
    static like(uid: string, count?: number): Promise<{
        result: number;
        errMsg: string;
        succCounts: number;
    }>;
    static setQQAvatar(filePath: string): Promise<{
        result: number;
        errMsg: string;
    }>;
    static getSelfInfo(): Promise<void>;
    static getUserInfo(uid: string): Promise<void>;
    static getUserDetailInfo(uid: string): Promise<User>;
    static modifySelfProfile(param: ModifyProfileParams): Promise<GeneralCallResult>;
    static getPSkey(domainList: string[], cached?: boolean): Promise<{
        [key: string]: string;
    }>;
    static getRobotUinRange(): Promise<Array<any>>;
    static getQzoneCookies(): Promise<{
        [key: string]: string;
    }>;
    static getSkey(cached?: boolean): Promise<string | undefined>;
}
