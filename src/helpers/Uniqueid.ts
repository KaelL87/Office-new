/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-return-assign */
let lastId = 0;

export default function uniqueId(prefix = 'id') {
  return `${prefix}${(lastId += 1)}`;
}
