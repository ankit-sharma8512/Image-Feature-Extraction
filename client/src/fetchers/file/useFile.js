import useSWR from "swr"
import File from "../../services/file"

function useFile(filename, page) {
  const { data, error, mutate } = useSWR([filename, page], (...args) => File.getFile(...args))

  return {
    file: data,
    isLoading: !error && !data,
    isError: error,
    refresh: mutate
  }
}

export default useFile