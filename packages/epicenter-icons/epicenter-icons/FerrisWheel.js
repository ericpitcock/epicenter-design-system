import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 22L12 12L16 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 10C17.8954 10 17 9.10457 17 8C17 6.89543 17.8954 6 19 6C20.1046 6 21 6.89543 21 8C21 9.10457 20.1046 10 19 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 16C7 17.1046 6.10457 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C6.10457 14 7 14.8954 7 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M7 8C7 9.10457 6.10457 10 5 10C3.89543 10 3 9.10457 3 8C3 6.89543 3.89543 6 5 6C6.10457 6 7 6.89543 7 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M21 16C21 17.1046 20.1046 18 19 18C17.8954 18 17 17.1046 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FerrisWheel',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
