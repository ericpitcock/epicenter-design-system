import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 13H7.5L9 9L10.5 16L12 13H13.5L15 8L16.5 13H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.4998 4.50023L21.498 19.5002C21.4979 20.6047 20.6025 21.5 19.498 21.5H4.50996C3.40585 21.5 2.51061 20.6053 2.50996 19.5012L2.50117 4.50117C2.50053 3.39614 3.39615 2.5 4.50117 2.5H19.4998C20.6044 2.5 21.4999 3.39557 21.4998 4.50023Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'PulseRectangle02',
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
