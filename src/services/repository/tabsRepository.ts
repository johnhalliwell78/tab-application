import Repository from './Repository'

const tabsRepository = {
  getTabs: () => {
    return Repository.get(`/tabs`)
  },
  getFonts: ({ endpoint }: { endpoint: string }) => {
    return Repository.get(`/${endpoint}`)
  }
}

export default tabsRepository
