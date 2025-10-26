import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 14L11.0305 13.4285C11.653 12.799 12.6825 12.873 13.2107 13.5852C13.6233 14.1417 13.5915 14.915 13.1346 15.4349L10.5 18H13.4315', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '15.5', 'r': '6.5' })
const _hoisted3 = h('path', { 'd': 'M9 9.5L5.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 9.5L18.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 2L14 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12.5 9L9.5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MedalSecondPlace',
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
