import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 16C19.5 16 17 17.5 17 19.5034C17 20.7341 17.9467 22 19.5 22C21.0533 22 22 20.7341 22 19.5034C22 17.5 19.5 16 19.5 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12C17.9745 12 14.5149 14.4682 13 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 8C15.8566 8 10.1672 12.217 8.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.9993 4C13.4329 4 6.31892 9.98405 4.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 10C2.5 10 3.5 10 4.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 6C3.86605 6 5.37202 6.33736 7 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M2 2C5.17533 2 8 3 10.5 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SoilMoistureGlobal',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
