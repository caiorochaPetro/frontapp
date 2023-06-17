import * as React from 'react';
import Fingerprint2  from 'fingerprintjs2';

export function Receiver(){
    React.useEffect(() => {
        const getFingerprint = async () => {
          const options = {
            excludes: {
              userAgent: false,
              language: true,
              colorDepth: true,
              deviceMemory: true,
              pixelRatio: true,
              hardwareConcurrency: true,
              screenResolution: true,
              availableScreenResolution: true,
              timezoneOffset: true,
              sessionStorage: true,
              localStorage: true,
              indexedDb: true,
              addBehavior: true,
              openDatabase: true,
              cpuClass: true,
              platform: true,
              doNotTrack: true,
              plugins: true,
              canvas: true,
              webgl: true,
              webglVendorAndRenderer: true,
              adBlock: true,
              hasLiedLanguages: true,
              hasLiedResolution: true,
              hasLiedOs: true,
              hasLiedBrowser: true,
              touchSupport: true,
            },
          };
    
          const components = await new Promise((resolve) =>
            Fingerprint2.get(options, (components) => resolve(components))
          );
    
          const values = components.map((component) => component.value);
          const fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
    
          console.log('Fingerprint:', fingerprint);
        };
    
        getFingerprint();
      }, []);
    
      return <div>Getting the fingerprint...</div>;
}