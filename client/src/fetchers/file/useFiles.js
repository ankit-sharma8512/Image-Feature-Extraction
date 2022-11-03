import useSWR from "swr"
import File from "../../services/file"

function useFiles() {
  const { data, error, mutate } = useSWR(["files"], File.getAllFiles)

  return {
    files: data,
    isLoading: !error && !data,
    isError: error,
    refresh: mutate
  }
}

export default useFiles