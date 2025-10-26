import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '8', 'r': '6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 7.99776C7 6.5439 9 5.66871 10.2857 6.11842C11.7609 6.63438 12.0271 8.35853 13.5 8.88051C15 9.4121 16 7.99776 18 7.99776', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Lollipop',
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
