import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 6H2V6.5C2 8.15685 3.34315 9.5 5 9.5H19C20.6569 9.5 22 8.15685 22 6.5V6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 13.5H18' })
const _hoisted3 = h('path', { 'd': 'M4 9.5L5.23058 11.1683C6.06944 12.3056 6.23451 13.7844 5.66599 15.069L5.03266 16.5M20 9.5L18.7694 11.1683C17.9306 12.3056 17.7655 13.7844 18.334 15.069L18.9673 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 18.5C7 19.6046 6.10457 20.5 5 20.5C3.89543 20.5 3 19.6046 3 18.5C3 17.3954 3.89543 16.5 5 16.5C6.10457 16.5 7 17.3954 7 18.5Z' })
const _hoisted5 = h('path', { 'd': 'M21 18.5C21 19.6046 20.1046 20.5 19 20.5C17.8954 20.5 17 19.6046 17 18.5C17 17.3954 17.8954 16.5 19 16.5C20.1046 16.5 21 17.3954 21 18.5Z' })
const _hoisted6 = h('path', { 'd': 'M4 6V4C4 3.72386 4.22386 3.5 4.5 3.5H7.5C7.77614 3.5 8 3.72386 8 4V6', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HospitalBed01',
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
