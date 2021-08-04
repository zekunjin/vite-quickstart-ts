import { IResponseError } from '../..'
import { Enum } from '@/constants'

export const invalidateToken = ({ status, data }: IResponseError) => {
  if (status === Enum.HTTPStatusCode.UNAUTHORIZED) {
  }
}
