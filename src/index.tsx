import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@candlefinance/app-icon' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const AppIcon = NativeModules.AppIcon
  ? NativeModules.AppIcon
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * @returns A promise that resolves with the name of the current icon.
 * @example
 * ```ts
 * import { getIconName } from '@candlefinance/app-icon';
 *
 * getIconName().then(console.log).catch(console.error);
 * ```
 */
export function getIconName(): Promise<string> {
  return AppIcon.getIconName();
}

/**
 * @param name The name of the icon to set. If you pass 'default' it will reset to the default icon. Defaults to 'default'.
 * @returns A promise that resolves with the name of the icon that was set.
 * @example
 * ```ts
 * import { setIconName } from '@candlefinance/app-icon';
 *
 * setIconName('default').then((name) => {
 *  console.log(`Icon name set to ${name}`);
 * }).catch(console.error);
 * ```
 */
export function setIconName(name: string = 'default'): Promise<string> {
  return AppIcon.setIconName(name);
}
