import { RootState } from '@/store'

export default {
  username: (state: RootState) => state.user.username
}
