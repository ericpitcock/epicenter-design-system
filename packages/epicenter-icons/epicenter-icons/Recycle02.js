import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 17L11 19.5M11 19.5L13.5 22M11 19.5H19.9973C21.5755 19.5 22.5319 17.7577 21.6846 16.4262L20 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 11.5L7.00724 8.5M7.00724 8.5L3.5 9.5M7.00724 8.5L2.34281 16.5819C1.43687 17.8242 2.43144 19.4658 4.09741 19.4779H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 10L18.4353 11M18.4353 11L19.5 7.5M18.4353 11L13.6 3.01799C12.9546 1.6294 10.9665 1.66947 10.0925 3.08867L8.5 5.67482', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Recycle02',
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
