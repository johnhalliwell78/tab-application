
import TabRepo from './tabsRepository'
const repositories: any = {
  tabs: TabRepo
}

export const RepositoryFactory = {
  get: (name: string) => repositories[name]
}

export const TabsRepository = RepositoryFactory.get('tabs')
