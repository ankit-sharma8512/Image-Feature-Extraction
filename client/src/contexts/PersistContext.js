const PERSIST_KEY = "persist:ife"

export function saveState(state) {
  localStorage.setItem(PERSIST_KEY, JSON.stringify(state))
}

export function getState() {
  const state = localStorage.getItem(PERSIST_KEY)
  if (!state)
    return {}
  return JSON.parse(state)
}