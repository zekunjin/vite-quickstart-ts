import { useProvide } from '@/utils/metadata'

const Paramtypes =
  (...args: any[]): ClassDecorator =>
  (target) => {
    useProvide(target, 'paramtypes', ...args)
    return target
  }

const Metadata = { Paramtypes }

export default Metadata
