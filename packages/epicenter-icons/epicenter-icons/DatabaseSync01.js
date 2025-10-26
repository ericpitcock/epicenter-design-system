import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.1632 17C19.6014 15.8175 18.3962 15 17 15C15.2368 15 13.7426 16.3039 13.5 18L12.5 16M13.8368 20C14.3985 21.1825 15.6038 22 17 22C18.7632 22 20.2574 20.6961 20.5 19L21.5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('ellipse', { 'cx': '10.5', 'cy': '5', 'rx': '8', 'ry': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 12C2.5 13.5299 5.55369 14.815 9.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 22C6.5 22 2.5 20.6569 2.5 19V5M18.5 5V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M5.5 11C6.10158 11.1808 6.77434 11.3898 7.5 11.5', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M5.5 18C6.10158 18.1808 6.77434 18.3898 7.5 18.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'DatabaseSync01',
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
