import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.67181 13.9095C10 15.9322 14 7.84169 21 11.8869L18 2.78502C13.4239 -0.299918 8.56286 6.85641 3 4.62523L8.00007 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 7.49576C14 3.6794 9 12.2665 4.5 9.40417', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 4.90476L10.8235 13M13.1765 3L16 10.619', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RacingFlag',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
