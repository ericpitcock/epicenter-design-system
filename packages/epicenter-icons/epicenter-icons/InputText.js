import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 15L6.49694 9.38649C6.55771 9.15858 6.76412 9 7 9C7.23588 9 7.44229 9.15858 7.50307 9.38649L9 15M6 13H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 9H12V12H13.5C14.3284 12 15 11.3284 15 10.5C15 9.67157 14.3284 9 13.5 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 12H12V15H13.5C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InputText',
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
