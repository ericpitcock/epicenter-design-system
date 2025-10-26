import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.50004 15V6.5H15M6.92858 6.9286L17.5 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowUpLeft01',
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
