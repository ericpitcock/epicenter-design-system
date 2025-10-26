import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 5.5H4C2.89543 5.5 2 6.39543 2 7.5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V7.5C22 6.39543 21.1046 5.5 20 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 9L10 13H14L11.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 5V3H15V5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 5V3H5.5V5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AutomotiveBattery02',
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
            _hoisted4
        ])
    }
})
