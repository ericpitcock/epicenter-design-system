import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 13H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 22V18', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 22V10.5L12 7L17 10.5V22', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 13L21 14.5V22', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 13L3 14.5V22', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 22H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M12 7V5M12 5V2L16 3.5V5H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'School',
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
