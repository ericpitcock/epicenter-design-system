import { ref } from 'vue'

export function useNotifications(initialNotifications = []) {
  const notifications = ref([...initialNotifications])

  const addNotification = (notification) => {
    notifications.value.push(notification)
  }

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter(notification => notification.id !== id)
  }

  const clearNotifications = () => {
    notifications.value.forEach((notification, index) => {
      setTimeout(() => {
        removeNotification(notification.id)
      }, index * 100)
    })
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications
  }
}