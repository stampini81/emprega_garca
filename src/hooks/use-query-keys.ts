import { useQueryClient } from '@tanstack/react-query'

export function useQueryKeys() {
  const queryClient = useQueryClient()

  const invalidateQueryKeys = (keys: string[]): void => {
    keys.forEach((key) => {
      queryClient.invalidateQueries({ queryKey: [key] })
    })
  }

  const removeQueryKeys = (keys: string[]): void => {
    keys.forEach((key) => {
      queryClient.removeQueries({ queryKey: [key] })
    })
  }

  const resetAllQueries = (): void => {
    queryClient.resetQueries()
  }

  const removeAllQueries = (): void => {
    queryClient.removeQueries()
  }

  return {
    invalidateQueryKeys,
    removeQueryKeys,
    resetAllQueries,
    removeAllQueries,
  }
}
