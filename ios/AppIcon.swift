@objc(AppIcon)
class AppIcon: NSObject {
    
    @objc(getIconName:withRejecter:)
    func getIconName(resolve: @escaping RCTPromiseResolveBlock,  reject: @escaping RCTPromiseRejectBlock) -> Void {
        DispatchQueue.main.async {
            if UIApplication.shared.supportsAlternateIcons {
                resolve(UIApplication.shared.alternateIconName ?? "default")
            } else {
                reject("supportsAlternateIcons:false", "Alternate icons are not supported on this device. Make sure you followed the README and configured your project correctly.", nil)
            }
        }
    }
    
    @objc(setIconName:withResolver:withRejecter:)
    func setIconName(name: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        DispatchQueue.main.async {
            if UIApplication.shared.supportsAlternateIcons {
                UIApplication.shared.setAlternateIconName(name == "default" ? nil : name) { error in
                    if let error = error {
                        reject("setAlternateIconName:error", "Failed to set alternate icon name with error: \(error.localizedDescription)", error)
                    } else {
                        resolve(name)
                    }
                }
            } else {
                reject("supportsAlternateIcons:false", "Alternate icons are not supported on this device. Make sure you followed the README and configured your project correctly.", nil)
            }
        }
    }
}
