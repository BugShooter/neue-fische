// Design Patterns in TypeScript

const log = console.log;
const err = console.error;

// 1. Global Settings Manager

type Config = { [k: string]: string };

class SettingsManager {
    private static _instance?: SettingsManager;
    private config: Config = {};
    private constructor() { }
    public static getInstance(): SettingsManager {
        if (!SettingsManager._instance) {
            SettingsManager._instance = new SettingsManager();
        }
        return SettingsManager._instance;
    }

    public set(key: string, value: string) {
        this.config[key] = value;
    }
    public get(key: string, defaultValue: string | undefined = undefined) {
        return key in this.config ? this.config[key] : defaultValue;
    }
    public static reset() {
        SettingsManager._instance = undefined;
    }
}

export function main() {
    log("1. Global Settings Manager")
    log('set settings');
    SettingsManager.getInstance().set('theme', 'dark');
    log('Settings:', SettingsManager.getInstance().get('theme'));
    log('reset settings');
    SettingsManager.reset();
    log('Settings:', SettingsManager.getInstance().get('theme'));
    log('Settings with default:', SettingsManager.getInstance().get('theme', 'default'));
}
