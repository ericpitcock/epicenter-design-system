import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 16C13.7839 16.6318 12.9244 17 12 17C11.0756 17 10.2161 16.6318 9.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 11.5C8.57036 11.1841 8.05462 11 7.5 11C6.94538 11 6.42964 11.1841 6 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 11.5C17.5704 11.1841 17.0546 11 16.5 11C15.9454 11 15.4296 11.1841 15 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C12.7684 8 13.4692 7.71115 14 7.23611', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Baby01',
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
