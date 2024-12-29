export default function useDebounce(func, delay) {
  let timeoutId = null

  const debounceFunc = (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }

  return debounceFunc
}
