export class PromiseArray {
  public callback = (...args: any) => Promise.resolve()
  public params = {}
  public array = []
  public page = 1
  public limit = 10
  public total = 0
  public loading = false

  constructor(
    callback: (...args: any) => Promise<any>,
    params: { [key: string]: any } = {},
    options: { limit: number } = { limit: 10 }
  ) {
    this.callback = callback
    this.params = params
    this.limit = options.limit
    this.request()
  }

  next() {
    if (this.array.length < this.total) {
      this.page++
      this.request()
    }
  }

  previous() {
    if (this.page > 1) {
      this.page--
      this.request()
    }
  }

  request(): Promise<void> {
    const pagination = {
      page: this.page,
      limit: this.limit
    }
    this.loading = true
    return new Promise((resolve, reject) => {
      this.callback({ ...this.params, pagination })
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
        .finally(() => {
          this.loading = false
        })
    })
  }
}
