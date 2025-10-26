import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.1913 20.4999H2.93168C2.35308 20.4999 2.03614 20.0213 2.00291 19.5151C1.97055 19.0221 2.20738 18.503 2.7338 18.3746L17.9482 14.6059C22.205 13.568 23.3638 20.4999 20.1913 20.4999Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 17.5H19.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.5 2.5L20.3564 4.78719C20.1276 5.2449 19.732 5.59747 19.251 5.77235L14.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 15.5L19 6', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 20.5L6 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 20.5V21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Treadmill01',
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
