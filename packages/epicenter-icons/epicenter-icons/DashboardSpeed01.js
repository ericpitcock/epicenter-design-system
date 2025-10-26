import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.7692 12.7333L17 9M14.3077 14.8667C14.3077 16.0449 13.3434 17 12.1538 17C10.9643 17 10 16.0449 10 14.8667C10 13.6885 10.9643 12.7333 12.1538 12.7333C13.3434 12.7333 14.3077 13.6885 14.3077 14.8667Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DashboardSpeed01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
