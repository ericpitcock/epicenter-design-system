import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '13', 'rx': '10', 'ry': '5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 12C17.5539 13.1652 15.0009 14 12 14C8.9991 14 6.44615 13.1652 5.5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.063 13.5C10.0219 13.3402 10 13.1726 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13C14 13.1726 13.9781 13.3402 13.937 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 4L9 13.5M7 20L9 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17 6L15 13.5M17 20L15 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 2V11M12 22V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BlackHole01',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
