import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 9V17C11 17.5523 10.5523 18 10 18H4C3.44772 18 3 17.5523 3 17V10C3 8.89543 3.89543 8 5 8H10C10.5523 8 11 8.44772 11 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.001 9H21.0001L20.1421 20.1534C20.062 21.1954 19.1931 22 18.148 22H9.76603C8.75722 22 7.90633 21.2487 7.78142 20.2476L7.50098 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 9C19 5.13401 16.75 2 13.9746 2C11.4428 2 9.34836 4.60771 9 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 14H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 13H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CleaningBucket',
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
