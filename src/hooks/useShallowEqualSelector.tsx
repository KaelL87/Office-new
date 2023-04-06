/* eslint-disable @typescript-eslint/no-empty-interface */
import { shallowEqual, useSelector } from 'react-redux';
interface DefaultRootState {}
export function useShallowEqualSelector<
  TState = DefaultRootState,
  TSelected = unknown,
  // eslint-disable-next-line no-unused-vars
>(selector: (state: TState) => TSelected): TSelected {
  return useSelector(selector, shallowEqual);
}
