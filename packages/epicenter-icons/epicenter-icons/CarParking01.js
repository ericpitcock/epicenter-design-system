import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 7H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 21V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 19V21M8 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 14L8.12127 11.5149C8.34385 10.6246 9.14382 10 10.0616 10H13.9384C14.8562 10 15.6561 10.6246 15.8787 11.5149L16.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 14H8C6.89543 14 6 14.8954 6 16V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V16C18 14.8954 17.1046 14 16 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9 16.5V16.51M15 16.5V16.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CarParking01',
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
