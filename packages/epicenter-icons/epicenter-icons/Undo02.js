import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3V9L9 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9999 21C16.9705 21 20.9999 16.9706 20.9999 12C20.9999 7.02944 16.9705 3 11.9999 3C8.66867 3 5.76012 4.80989 4.20398 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Undo02',
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
