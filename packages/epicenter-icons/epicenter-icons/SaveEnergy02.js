import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3.5V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3.5C17.5228 3.5 22 7.3635 22 13.5H2C2 7.3635 6.47715 3.5 12 3.5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3.5C14.4853 3.5 16.5 7.3635 16.5 13.5H7.5C7.5 7.3635 9.51472 3.5 12 3.5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13.5V20.6579C12 21.3991 11.3284 22 10.5 22C9.67157 22 9 21.3991 9 20.6579V20.2105', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.5 16L16 19H20L17.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SaveEnergy02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
