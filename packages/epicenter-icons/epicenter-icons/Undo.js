import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.66873 3 5.76018 4.80989 4.20404 7.5M3.5 3L3.93552 8L9 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Undo',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
