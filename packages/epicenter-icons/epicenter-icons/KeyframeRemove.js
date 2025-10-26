import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.9999 11.6696L10.7298 5.67215C9.94224 4.77596 8.55792 4.77595 7.77038 5.67214L2.50008 11.6695C1.83331 12.4283 1.83331 13.5717 2.50008 14.3305L7.77038 20.3279C8.55792 21.2241 9.94224 21.224 10.7298 20.3278L15.9999 14.3304C16.6667 13.5717 16.6667 12.4283 15.9999 11.6696Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 4H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'KeyframeRemove',
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
