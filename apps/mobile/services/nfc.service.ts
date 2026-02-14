import NfcManager, { NfcTech } from 'react-native-nfc-manager';

export class NFCService {
  static async init() {
    try {
      await NfcManager.start();
      return true;
    } catch (error) {
      console.error('NFC initialization failed:', error);
      return false;
    }
  }

  static async readTag(): Promise<string | null> {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      return tag?.id || null;
    } catch (error) {
      console.error('NFC read failed:', error);
      return null;
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  static async isSupported(): Promise<boolean> {
    return await NfcManager.isSupported();
  }
}
