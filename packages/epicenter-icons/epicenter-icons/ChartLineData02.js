import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '9.5', 'cy': '10.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '15.5', 'cy': '15.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '19.5', 'cy': '7.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.4341 14.2963L19 9M10.5825 11.5684L14.2038 14.2963M3.5 20.5L8.58957 11.8792', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartLineData02',
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
