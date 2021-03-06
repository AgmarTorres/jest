/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {readConfig} from '../index';

jest.mock('../importEsm', () => (s: string) => import(s));

test('readConfig() throws when an object is passed without a file path', async () => {
  await expect(
    readConfig(
      // @ts-ignore
      null /* argv */,
      {} /* packageRootOrConfig */,
      false /* skipArgvConfigOption */,
      null /* parentConfigPath */,
    ),
  ).rejects.toThrowError(
    'Jest: Cannot use configuration as an object without a file path',
  );
});
