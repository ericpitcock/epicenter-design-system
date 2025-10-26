import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.9928 15L14 15M10 15L10.0072 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CirclePassword',
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
