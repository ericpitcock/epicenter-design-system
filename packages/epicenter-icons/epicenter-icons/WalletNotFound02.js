import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.6421 20.6421C20.2807 21.1607 19.68 21.5 19 21.5H5C3.89543 21.5 3 20.6046 3 19.5V8.5H8.5M12.5 8.5H19C20.1046 8.5 21 9.39543 21 10.5V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 8.5V3.72355C15 3.0478 14.4522 2.5 13.7765 2.5C13.5944 2.5 13.4147 2.5406 13.2504 2.61886L8.75806 4.75806M3 8.5C3 7.88912 3.35132 7.3327 3.90286 7.07007L6.04839 6.04839', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WalletNotFound02',
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
