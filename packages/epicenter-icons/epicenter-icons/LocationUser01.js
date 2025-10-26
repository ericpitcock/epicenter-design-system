import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 15.8V14C18 10.6863 15.3137 8 12 8C8.68629 8 6 10.6863 6 14V15.8C6 15.9105 6.08954 16 6.2 16H8.34384C8.43562 16 8.51561 16.0625 8.53787 16.1515L9.96213 21.8485C9.98439 21.9375 10.0644 22 10.1562 22H13.8438C13.9356 22 14.0156 21.9375 14.0379 21.8485L15.4621 16.1515C15.4844 16.0625 15.5644 16 15.6562 16H17.8C17.9105 16 18 15.9105 18 15.8Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '5', 'r': '3' })

export default defineComponent({
    name: 'LocationUser01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
