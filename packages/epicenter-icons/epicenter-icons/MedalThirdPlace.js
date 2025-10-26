import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 14C10.8265 13.347 11.2786 13 12 13C12.7296 13 13.5 13.4558 13.5 14.25C13.5 14.9404 12.9404 15.5 12.25 15.5C12.9404 15.5 13.5 16.0596 13.5 16.75C13.5 17.5442 12.7296 18 12 18C11.2786 18 10.8265 17.653 10.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '15.5', 'r': '6.5' })
const _hoisted3 = h('path', { 'd': 'M9 9.5L5.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 9.5L18.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 2L14 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12.5 9L9.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MedalThirdPlace',
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
