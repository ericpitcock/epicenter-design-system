import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12H14.6667C14.2339 12 13.8129 11.8596 13.4667 11.6L10.5333 9.4C10.1871 9.14036 9.76607 9 9.33333 9H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 9V15C3 17.2091 5.01471 19 7.49998 19H16.5C18.9853 19 21.0001 17.2091 21 14.9999V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 19V21M6 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 9V4.5C5 3.67157 5.67157 3 6.5 3C7.32843 3 8 3.67157 8 4.5V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bathtub02',
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
