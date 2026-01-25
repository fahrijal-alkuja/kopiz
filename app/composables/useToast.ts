interface ToastItem {
  id: number
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export const useToast = () => {
  const toasts = useState<ToastItem[]>('toasts', () => [])
  let id = 0

  const addToast = (message: string, type: ToastItem['type'], duration = 3000) => {
    const toast: ToastItem = {
      id: id++,
      message,
      type,
      duration
    }
    toasts.value.push(toast)
    return toast.id
  }

  const removeToast = (id: number) => {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  const success = (message: string, duration?: number) => {
    return addToast(message, 'success', duration)
  }

  const error = (message: string, duration?: number) => {
    return addToast(message, 'error', duration)
  }

  const warning = (message: string, duration?: number) => {
    return addToast(message, 'warning', duration)
  }

  const info = (message: string, duration?: number) => {
    return addToast(message, 'info', duration)
  }

  return {
    toasts,
    success,
    error,
    warning,
    info,
    removeToast
  }
}
