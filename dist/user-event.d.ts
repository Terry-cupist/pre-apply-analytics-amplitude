import { IUserEventModule } from "@cupist/analytics-core";
export interface IAmplitudeModuleProps {
    apiKey: string;
}
type instanceReturnType = IUserEventModule & {
    init: () => Promise<void>;
};
export declare const getAmplitudeInstance: ({ apiKey, }: IAmplitudeModuleProps & Partial<instanceReturnType>) => instanceReturnType;
export {};
//# sourceMappingURL=user-event.d.ts.map