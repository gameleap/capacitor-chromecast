import { WebPlugin } from '@capacitor/core';

import type { ChromecastPlugin } from './definitions';

export class ChromecastWeb extends WebPlugin implements ChromecastPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
