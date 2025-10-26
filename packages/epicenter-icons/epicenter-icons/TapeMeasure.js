import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 8.5C16 10.433 12.866 12 9 12C5.13401 12 2 10.433 2 8.5C2 6.567 5.13401 5 9 5C12.866 5 16 6.567 16 8.5Z' })
const _hoisted2 = h('path', { 'd': 'M5 10C5 11.1046 6.79086 12 9 12V8C6.79086 8 5 8.89543 5 10Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 9V15.6667C2 17.5076 5.13401 19 9 19H22V12H9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 19V16.5M14 19V16.5M10 19V16.5M6 18.5V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TapeMeasure',
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
